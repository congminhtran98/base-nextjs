export enum Role {
  ADMIN = "ADMIN",
  MEMBER = "MEMBER",
  GUEST = "GUEST",
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role; // Sử dụng enum thay vì string union
}

export interface AuthResponse {
  user?: User;
  token?: string;
  error?: string;
}
