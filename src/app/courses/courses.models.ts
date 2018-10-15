export interface CoursesState {
  courses: CourseItem[];
  count: number;
}

export interface CoursesInfo {
  courses: CourseItem[];
  count: number;
}

export interface CourseItem {
  id: number;
  name: string;
  description: string;
  isTopRated?: boolean;
  date: string;
  author?: {
    id: number,
    firstName: string,
    lastName: string
  }[];
  length?: number;
  duration?: number;
}

export interface CourseRaiting {
  id: number;
  topRated: boolean;
}

export interface CoursesCount {
  count: number;
}
