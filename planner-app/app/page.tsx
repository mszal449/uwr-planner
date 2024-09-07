'use client';
import { useEffect, useState } from 'react';
import {getAllCourses} from "@/app/api"
import Head from 'next/head';

interface Course {
  _id: string;
  name: string;
  semester: string;
  type: string;
  ects: number;
  tags: {
    type: [string],
    default: null
  },
  effects: {
    type: [string],
    default: null
  }
}

const Home: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const data = await getAllCourses()
      console.log(data)
      setCourses(data.result);
    };

    fetchCourses();
  }, []);

  return (
    <div>
      <Head>
        <title>Course List</title>
      </Head>
      <h1>Course List</h1>
      <ul>
        {courses.map((course) => (
          <li key={course._id}>
            {course.name} - {course.semester}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;