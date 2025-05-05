import api from "@/constant/axios";

// GET: Lấy tất cả đăng ký
export async function getAllRegistrations() {
  const response = await api.get("/event-registrations");
  return response.data?.data || [];
}

// GET: Lấy thông tin đăng ký theo ID
export async function getRegistrationById(id: string) {
  const response = await api.get(`/event-registrations/${id}`);
  return response.data?.data || null;
}

// DELETE: Xóa đăng ký
export async function deleteRegistration(id: string) {
  const response = await api.delete(`/event-registrations/${id}`);
  return response.data;
}

// GET: Lấy danh sách đăng ký theo userId
export async function getRegistrationsByUser(userId: string) {
  const response = await api.get(`/event-registrations/user/${userId}`);
  return response.data?.data || [];
}

// GET: Lấy danh sách đăng ký theo eventId
export async function getRegistrationsByEvent(eventId: string) {
  const response = await api.get(`/event-registrations/event/${eventId}`);
  return response.data?.data || [];
}

// POST: Đăng ký tham gia sự kiện
export async function registerForEvent(payload: {
  eventId: string;
  userId: string;
  notes?: string;
}) {
  const response = await api.post("/event-registrations/register", {
    data: payload,
  });
  return response.data;
}

// PUT: Cập nhật trạng thái đăng ký
export async function updateRegistrationStatus(id: string, status: string) {
  const response = await api.put(`/event-registrations/${id}/status`, {
    data: { status },
  });
  return response.data;
}

// PUT: Hủy đăng ký sự kiện
export async function cancelRegistration(id: string) {
  const response = await api.put(`/event-registrations/${id}/cancel`, {
    data: {},
  });
  return response.data;
}

// GET: Lấy danh sách đăng ký của người dùng hiện tại
export async function getMyRegistrations() {
  const response = await api.get("/event-registrations/my-registrations");
  return response.data?.data || [];
}
