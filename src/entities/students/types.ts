export interface StudentProfile {
  name?: string;
  hometown: string;
  phoneNumber?: string;
  email?: string;
  skills?: string[];
  selfEvaluation?: string;
  practicalExperience?: string[];
  personalAwards?: string[];
  studentNumber?: string;
  projects?: StudentProject[];
}


export interface StudentProject {
  name?: string;
  images?: string[];
  video?: string;
  qr?: string;
}