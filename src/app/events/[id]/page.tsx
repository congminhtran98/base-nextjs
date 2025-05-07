"use client";

import { useEffect, useState } from "react";
import { getEventDetail } from "@/core/actions/eventActions";
import {
  registerEvent,
  cancelRegistration,
  getMyEventRegistrations,
} from "@/core/actions/regisEventActions";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import Image from "next/image";

export default function EventDetailPage() {
  const { id } = useParams() as { id: string };
  const { data: session, status } = useSession();
  const [event, setEvent] = useState<any>(null);
  const [registeredId, setRegisteredId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id || !session?.user) return;

    (async () => {
      try {
        const data = await getEventDetail(id);
        setEvent(data);

        const registrations = await getMyEventRegistrations();
        console.log(registrations)
        const match = registrations.find((r: any) => r.eventId === id);
        if (match) setRegisteredId(match.id);
      } catch (error) {
        console.error("Error loading event or registration:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, [id, session]);

  const eventDate = event ? new Date(event.eventDate) : null;
  const isPast = eventDate && eventDate.getTime() < Date.now();

  const handleRegister = async () => {
    try {
      await registerEvent({ eventId: id, status: "pending" });
      const registrations = await getMyEventRegistrations();
      console.log(registrations)
      const match = registrations.find((r: any) => r.eventId === id);
      if (match) setRegisteredId(match.id);
    } catch (error) {
      console.error("Failed to register", error);
    }
  };

  const handleCancel = async () => {
    if (!registeredId) return;
    try {
      await cancelRegistration(registeredId);
      setRegisteredId(null);
    } catch (error) {
      console.error("Failed to cancel", error);
    }
  };

  if (loading || !event) {
    return <div className="text-center py-20">Loading...</div>;
  }

  const dateStr = `${eventDate?.getDate()}/${(eventDate?.getMonth() ?? 0) + 1}/${eventDate?.getFullYear()}`;

  return (
    <div className="mt-[84px]">
      <div
        className="h-[400px] bg-cover bg-center relative"
        style={{ backgroundImage: `url(/images/p1.jpg)` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
            {event.title}
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-[#aa0000] mb-4">{event.title}</h2>
          <p className="text-[#666] mb-6">{event.description}</p>
          <div className="space-y-3 text-sm text-[#444]">
            <div><strong>Date:</strong> {dateStr}</div>
            <div><strong>Location:</strong> {event.location}</div>
            <div><strong>Capacity:</strong> {event.capacity} participants</div>
          </div>

          <div className="mt-6">
            {status === "unauthenticated" ? (
              <div className="text-sm text-red-600 font-semibold">
                Vui lòng đăng nhập để đăng ký sự kiện
              </div>
            ) : isPast ? (
              <div className="text-red-500 font-semibold">Sự kiện đã kết thúc</div>
            ) : registeredId ? (
              <button
                onClick={handleCancel}
                className="bg-gray-400 text-white px-6 py-2 rounded hover:bg-gray-500"
              >
                Huỷ đăng ký
              </button>
            ) : (
              <button
                onClick={handleRegister}
                className="bg-[#aa0000] text-white px-6 py-2 rounded hover:bg-[#c80000]"
              >
                Đăng ký tham gia
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
