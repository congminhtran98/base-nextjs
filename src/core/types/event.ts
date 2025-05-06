export interface EventData {
  eventDate: string;
  location: string;
  capacity: number;
  title: string;
  description: string;
  id: string;
}

export interface EventDataAll {
  title: string;
  excerpt: string;
  date: { day: string; month: string; year: string };
  time: string;
  location: string;
  category: string;
  status: "open" | "limited" | "full";
  image: string;
  link: string;
}
