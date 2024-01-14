import { StudentProfile } from "../students/types";

export interface Group {
  name: string;
  students: StudentProfile[];
}