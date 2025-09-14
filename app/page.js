import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex flex-col justify-between p-8 sm:p-20">
      {/* Main Content */}
      <main className="flex flex-col items-center sm:items-start text-center sm:text-left gap-10 sm:gap-16">
        {/* Logo */}
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={38}
          priority
        />

        {/* Intro */}
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Welcome to Social Engagement Group
        </h1>
        <p className="text-gray-700 dark:text-gray-300 max-w-xl sm:text-lg">
          Start building your amazing app with Next.js and Tailwind CSS. Everything
          is ready for you to develop and deploy quickly.
        </p>

        {/* Steps */}
        <ol className="list-decimal list-inside font-mono text-sm text-gray-600 dark:text-gray-400 space-y-2">
          <li>
            Edit{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.js
            </code>{" "}
            to get started.
          </li>
          <li>Save your changes and see them instantly in the browser.</li>
        </ol>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <a
            href="https://vercel.com/new?utm_source=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-black text-white font-medium text-sm sm:text-base hover:bg-gray-800 transition"
          >
            <Image src="/vercel.svg" alt="Vercel Logo" width={20} height={20} />
            Deploy Now
          </a>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition text-sm sm:text-base"
          >
            Read Docs
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex flex-wrap justify-center gap-6 mt-16 sm:mt-20 text-gray-600 dark:text-gray-400">
        <a
          href="https://nextjs.org/learn"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline"
        >
          <Image src="/file.svg" alt="File" width={16} height={16} />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline"
        >
          <Image src="/window.svg" alt="Window" width={16} height={16} />
          Examples
        </a>
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline"
        >
          <Image src="/globe.svg" alt="Globe" width={16} height={16} />
          Next.js Official
        </a>
      </footer>
    </div>
  );
}
