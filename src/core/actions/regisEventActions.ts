"use server";

import { getServerSession, Session } from "next-auth";
import {
  registerForEvent,
  deleteRegistration,
  getMyRegistrations,
  getRegistrationsByUser
} from "../services/eventRegistrationServices";
import { initApiClient } from "../utils/initApiClient";
import { authOptions } from "@/app/api/auth/[...nextauth]";

export const registerEvent = async (data: {
  eventId: string;
  status: string;
}) => {
  try {
    await initApiClient();
    const response = await registerForEvent({
      eventId: data.eventId,
      status: "pending",
    });
    return response;
  } catch (error) {
    console.error("Error registering for event:", error);
    throw error;
  }
};

export const cancelRegistration = async (registrationId: string) => {
  try {
    await initApiClient();
    const response = await deleteRegistration(registrationId);
    return response;
  } catch (error) {
    console.error("Error deleting event registration:", error);
    throw error;
  }
};

// export const getMyEventRegistrations = async () => {
//   try {
//     await initApiClient();
//     const response = await getMyRegistrations();
//     return response;
//   } catch (error) {
//     console.error("Error fetching my event registrations:", error);
//     throw error;
//   }
// };

export const getMyEventRegistrations = async () => {
    try {
      const session = await getServerSession(authOptions);
      const userId = session?.user?.id;
      console.log("session", session);
      await initApiClient();
      if (!userId) throw new Error("User not authenticated");
  
      const response = await getRegistrationsByUser(userId);
      return response;
    } catch (error) {
      console.error("Error fetching user registrations:", error);
      return [];
    }
  };
