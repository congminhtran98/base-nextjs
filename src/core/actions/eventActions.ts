"use server";

import { getUpcomingEvents, getEventById } from "../services/eventService";

export async function fetchUpcomingEventData() {
  try {
    const events = await getUpcomingEvents();
    return events;
  } catch (error) {
    console.error("Fetch upcoming events failed:", error);
    return [];
  }
}

export async function getEventDetail(id: string) {
  try {
    const event = await getEventById(id);
    if (!event) {
      throw new Error("Event not found");
    }

    return event;
  } catch (error) {
    console.error("Fetch event details failed:", error);
    return null;
  }
}
