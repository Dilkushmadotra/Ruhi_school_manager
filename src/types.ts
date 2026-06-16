export type ActivePage = "home" | "features" | "about" | "contact" | "demo";

export interface ContactInquiry {
  name: string;
  schoolName: string;
  phone: string;
  email: string;
  message: string;
}

export interface DemoRequest {
  fullName: string;
  schoolName: string;
  phone: string;
  email: string;
  studentCount: number;
  city: string;
  preferredDate: string;
  message?: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  detailedDescription?: string;
  icon: string;
}
