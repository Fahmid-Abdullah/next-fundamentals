"use client"

// Welcome to lesson 16. In this lesson, we will cover Next.js’s <Image /> component.
// The <Image /> component optimizes images by serving modern formats (WebP/AVIF),
// lazy-loading by default, compressing automatically, supporting responsive sizing,
// and improving Lighthouse and Core Web Vitals scores.

// Below are three common usage patterns:

// 1. Basic usage:
// - Provide a required src, alt, width, and height.
// - You can either statically import the image or use a direct path string.

// 2. Blur placeholder:
// - Use the placeholder="blur" prop to show a low-quality placeholder while loading.
// - To let Next.js auto-generate the blur placeholder, you must statically import the image.
// - If using a string src path, you must provide your own blurDataURL as a base64-encoded image.
// - Example: placeholder="blur" with a static import, or placeholder="blur" + blurDataURL="...".

// 3. Responsiveness:
// - Instead of width and height props, use the fill layout with className="object-cover" (or object-fit variants).
// - Wrap the <Image> in a parent <div> with className="relative" so the image fills its container.
// - Control the parent container’s size using Tailwind’s responsive width/height classes (e.g., w-full, md:w-1/2).
// - This approach leverages CSS for responsive sizing instead of the sizes prop, which can be less intuitive.

// This approach combines Next.js’s image optimization with Tailwind’s responsive design utilities for clean, scalable layouts.

// Challenge: 
// - Import an image of your liking.
// - Make a new page and create a div with an image on the left text paragraph on the right.
// - For any md or larger, they should be beside each other.
// - For anything smaller, the image should be above and paragraph should move below.
// Hint: Look into flex-col and flex-row. 

import Image from 'next/image';
import { useRouter } from "next/navigation"
import spongebob from "@/public/spongebob.jpg";

const Lesson16 = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col space-y-2 p-4">
      <h2 className="text-xl font-bold">Lesson 16: Next/Image</h2>
      <p className="text-red-300">Note: Majority of the lesson instructions will be in the page.tsx for the corresponding lesson.</p>
      <div className='grid grid-cols-3 w-full'>
      <div>
      <h3>Basic Usage</h3>
      {/* This automatically handles lazy-loading, responsive resizing, and compression. */}
      <Image 
        src={spongebob}
        alt="Spongebob"
        width={400}
        height={200}
      />
      </div>
      <div>
      <h3>Blur Placeholder</h3>
      <Image 
        src={spongebob}
        alt="Spongebob"
        width={400}
        height={200}
        placeholder="blur"
        // blurDataURL="/spongebob.jpg"
      />
      </div>
      <div>
      <h3>Responsive Usage</h3>
        <div className="relative w-full md:w-1/2 lg:w-1/3 h-64">
          <Image
            src={spongebob}
            alt="Pickleball court"
            fill
            className="object-cover"
          />
        </div>
      </div>
      </div>

      <button className="mt-8 px-4 py-2 w-lg text-xl font-bold bg-red-700 hover:bg-red-800 hover:scale-105 rounded-lg"
      onClick={() => router.push('/lessons/17')}>Next Lesson</button>
    </div>
  )
}

export default Lesson16
