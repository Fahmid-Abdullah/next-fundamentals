"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"


// Welcome to the second lesson. In the last lesson, we went over NextJS makes creating routes child's play. In this lesson,
// we will dive deeper on what it can really do.

// So last time, you created a new route of your own. This time you will create nested routes.
// To create nested routes, you just simply create another folder with the route name you want inside that route and add another page.tsx

// For example if I wanted to do /lesson/2/nestedroute1/nestedroute2/nestedroute3 I could not only do that but also have a page at each
// nested level. I've done just that. Check it out.

// Challenge: Create a nested route in the route you made earlier.

// The next thing we will cover is dynamic routes.
// Let's say you have have an ecommerce website with 10 defined categories and you want a page for eage category.
// One way to do this is creating 10 different routes. But a more efficient way to do this is to use dynamic routing.
// By creating a route with folder name [paramNameHere] and making a page.tsx inside it, you can extract that param you
// passed in the URL. Try it out. Click on the different category buttons.

// Challenge: Create a dynamic route for blog and display what blog you are on at that route.
// Note: I've already created the links for you, just remove the hidden tag and make the dynamic route and page.tsx

// Final part of dynamic routing we will cover is search params. Let's say the user is searching for an item, since
// the user can type anything, you can't create a seperate route for each nor can you create a predefined dynamic routes.
// Instead, you want to just pass the text the user typed directly. This is where searchparams comes in.
// searchParams is used for things like filters or searches. Try it out! Type something in the search box and press submit

// The difference in the route URL here is that you do ?searchTerm= where searchTerm is the name of your param.

// You can combine dynamic routes and searchParams to really get control of the routes.

// Challenge: On top of the category dynamic route, we want a category page passed through by using searchParams.
// Note: To start, go to /lessons/2/category/page.tsx and remove the hidden tag
// Hint: The URL will look like /lessons/2/category/Category1/page?=page2

const Lesson2 = () => {
    const categories = ['Category1', 'Category2', 'Category3', 'Category4', 'Category5']
    const blogs = ['RedBlog', 'GreenBlog', 'BlueBlog']
    const [searchTerm, setSearchTerm] = useState<string>('');
    const router = useRouter();

  return (
    <div className="flex flex-col space-y-2 p-4">
      <h2 className="text-xl font-bold">Lesson 2: Routing & Dynamic Routing</h2>
      <p className="text-red-300">Note: Majority of the lesson instructions will be in the page.tsx for the corresponding lesson.</p>

    <div className="flex flex-col">
        {categories.map((category) => (
            <a key={category} className="text-blue-500 hover:underline cursor-pointer" href={`/lessons/2/category/${category}`}>
                {category}
            </a>
        ))}
    </div>

    <div className="flex flex-col">
        {blogs.map((blog) => (
            <a key={blog} className="hidden text-blue-500 hover:underline cursor-pointer" href={`/lessons/2/blog/${blog}`}>
                {blog}
            </a>
        ))}
    </div>

    <div className="space-x-2">
        <h2 className="text-xl font-bold">Search</h2>
        <input name="search" type="string" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-xl py-2 px-1 border border-white rounded-lg" />
        <button className="px-4 py-2 text-xl font-bold bg-blue-700 hover:bg-blue-800 hover:scale-105 cursor-pointer rounded-lg"
        onClick={() => router.push(`/lessons/2/search?searchTerm=${searchTerm}`)}>Submit</button>
    </div>

      <button className="mt-8 px-4 py-2 w-lg text-xl font-bold bg-red-700 hover:bg-red-800 hover:scale-105 rounded-lg"
      onClick={() => router.push('/lessons/3')}>Next Lesson</button>
    </div>
  )
}

export default Lesson2
