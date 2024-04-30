import Link from "next/link";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <p className="text-2xl font-bold">
            Quantum
            <span className=" text-2xl font-bold text-blue-500"> Fetch</span>
          </p>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:bg-gray-100 px-2 rounded-lg py-1"
            href="/features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:bg-gray-100 px-2 rounded-lg py-1"
            href="/docs"
          >
            Docs
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Fetch Network Queries with Type Safety
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Simplify your data fetching with a powerful, type-safe API.
                    Enjoy features like caching, error handling, and more.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Get Started
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="sm:w-full h-[400px] w-[800px]">
                <Image
                  alt="Code block"
                  className="mx-auto w-full h-full  overflow-hidden rounded-xl  sm:w-full lg:order-last "
                  height={750}
                  src="/carbon.png"
                  width={700}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-700">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Powerful Features for Type-Safe Fetching
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Fetch Network Queries with confidence using our suite of
                  type-safe features.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Type-Safe Queries</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Define your data models and generate type-safe queries
                        automatically.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Caching</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Leverage built-in caching to improve performance and
                        reduce network requests.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Error Handling</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Easily handle errors and display meaningful feedback to
                        your users.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <img
                alt="Features"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="310"
                src="/placeholder.svg"
                width="550"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-700">
                  Example Code
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  See it in Action
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Check out some sample code to get a feel for how Fetch works.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Fetch a User</CardTitle>
                    <CardDescription>
                      Fetch a user by ID with type-safe data.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <pre className="whitespace-pre-wrap bg-gray-100 p-4 text-sm dark:bg-gray-800">
                      {`
                  const { data, error } = await fetch('/api/users/123')
                  
                  if (error) {
                    console.error(error)
                    return <div>Error fetching user</div>
                  }
                  
                    <div>
                      <h2>{data.name}</h2>
                      <p>{data.email}</p>
                    </div>
                                      `}
                    </pre>
                  </CardContent>
                </Card>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Fetch a List of Posts</CardTitle>
                    <CardDescription>
                      Fetch a list of posts with pagination.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <pre className="whitespace-pre-wrap bg-gray-100 p-4 text-sm dark:bg-gray-800">
                      {`
                  const { data, error, hasNextPage, fetchNextPage } = await fetch('/api/posts', {
                    pagination: { limit: 10, offset: 0 }
                  })
                  
                  if (error) {
                    console.error(error)
                    return <div>Error fetching posts</div>
                  }
                  
                    <div>
                      {data.map((post) => (
                        <div key={post.id}>
                          <h3>{post.title}</h3>
                          <p>{post.content}</p>
                        </div>
                      ))}
                      {hasNextPage && (
                        <button onClick={fetchNextPage}>Load More</button>
                      )}
                    </div>
                                      `}
                    </pre>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Fetch. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function CodeIcon({ ...props }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
