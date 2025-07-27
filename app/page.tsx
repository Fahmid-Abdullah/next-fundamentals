"use client"
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center mx-auto max-w-lg text-white text-center space-y-4">
      <h1 className="font-bold text-2xl underline">Welcome to my NextJS Overview</h1>
      <p>These lessons will teach you the fundamentals of NextJS and provide you with the necessary skills to create production-ready web apps.</p>
      <p className="text-red-300">Note: Majority of the lesson instructions will be in the page.tsx for the corresponding lesson.</p>
      <button className="px-4 py-2 text-xl font-bold bg-red-700 hover:bg-red-800 hover:scale-105 cursor-pointer rounded-lg"
      onClick={() => router.push('/lessons/1')}>Start Lesson 1</button>
    </div>
  );
}
