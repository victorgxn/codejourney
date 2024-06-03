import { getCourseList } from '@/app/_microservices';

export const getCourses = async () => {
  const res: any = await getCourseList();
  const courses = res.courseLists.map((course: any) => ({
    ...course,
    chapter: course.chapter.map((ch: any) => ch.name),
    course_url: `${process.env.URL}/course-preview/${course.id}`,
  }));
  return courses;
};