import api from "@/constant/axios";

// GET: Tìm kiếm sự kiện
export async function searchEvents(params: {
  name?: string;
  startDate?: string;
  endDate?: string;
  location?: string;
}) {
  const response = await api.get("/events/search", { params });
  return response.data?.data || [];
}

// GET: Tất cả sự kiện (nếu public)
export async function getAllEvents() {
  const response = await api.get("/events");
  return response.data?.data || [];
}

export async function getUpcomingEvents() {
  const response = await api.get("/events/upcoming");
  console.log(response);
  return response.data.data || [];
}

export async function getEventById(id: string) {
  const response = await api.get(`/events/${id}`);
  return response.data?.data || null;
}

// GET: Kiểm tra còn chỗ
export async function hasAvailableSpace(id: string) {
  const response = await api.get(`/events/${id}/has-available-space`);
  return response.data?.data || false;
}
