// app/events/[id]/page.tsx
import { getEventDetail } from "@/core/actions/eventActions";
import Image from "next/image";

interface Params {
  params: {
    id: string;
  };
}

export default async function EventDetailPage({ params }: Params) {
  const event = await getEventDetail(params.id);

  if (!event) return <div className="text-center py-20">Event not found.</div>;

  const eventDate = new Date(event.eventDate);
  const date = {
    day: String(eventDate.getDate()).padStart(2, "0"),
    month: eventDate.toLocaleString("en-US", { month: "short" }),
    year: String(eventDate.getFullYear()),
  };

  return (
    <div className="mt-[84px]">
      {/* Banner Section */}
      <div
        className="h-[400px] bg-cover bg-center relative"
        style={{ backgroundImage: `url(/images/p1.jpg)` }} // bạn có thể sửa dynamic sau
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
            {event.title}
          </h1>
        </div>
      </div>

      {/* Detail Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left content */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-[#aa0000] mb-4">
              {event.title}
            </h2>
            <p className="text-[#666] mb-6">{event.description}</p>
            <div className="space-y-3 text-sm text-[#444]">
              <div><strong>Date:</strong> {`${date.day} ${date.month} ${date.year}`}</div>
              <div><strong>Location:</strong> {event.location}</div>
              <div><strong>Capacity:</strong> {event.capacity} participants</div>
            </div>
            <button className="mt-6 bg-[#aa0000] text-white px-6 py-2 rounded hover:bg-[#c80000] transition">
              Register Now
            </button>
          </div>

          {/* Right image/poster */}
          <div className="w-full lg:w-[400px]">
            <Image
              src="/images/sample-hackathon-poster.jpg" // thay = dynamic path nếu có
              alt="Event Poster"
              width={400}
              height={550}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
