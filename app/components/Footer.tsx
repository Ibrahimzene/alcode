import Image from "next/image"
export default function Footer() {
  return (
    <footer className="bg-gray-600">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-300 ">
          <span className="text-[24px] mt-0">
            AlCode
            <span className="font-bold text-primary">Blog</span>
          </span>
          <br />I am a junior software engineer skilled in JavaScript,
          TypeScript and React Next.Js. I love tackling complex problems and
          working on innovative projects with a focus on efficiency and user
          experience.{" "}
          <span className="font-bold text-primary uppercase">#opentowork</span>
        </p>

        <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          <li>
            <a
              className="text-gray-400 transition hover:text-gray-700/75"
              href="#"
            >
              {" "}
              About{" "}
            </a>
          </li>

          <li>
            <a
              className="text-gray-400 transition hover:text-gray-700/75"
              href="#"
            >
              {" "}
              Careers{" "}
            </a>
          </li>

          <li>
            <a
              className="text-gray-400 transition hover:text-gray-700/75"
              href="#"
            >
              {" "}
              History{" "}
            </a>
          </li>

          <li>
            <a
              className="text-gray-400 transition hover:text-gray-700/75"
              href="#"
            >
              {" "}
              Services{" "}
            </a>
          </li>

          <li>
            <a
              className="text-gray-400 transition hover:text-gray-700/75"
              href="#"
            >
              {" "}
              Projects{" "}
            </a>
          </li>

          <li>
            <a
              className="text-primary transition hover:text-gray-700/75"
              href="#"
            >
              {" "}
              Blog{" "}
            </a>
          </li>
        </ul>

        <ul className="mt-12 flex justify-center gap-6 md:gap-8">
          <li>
            <a
              href="https://www.linkedin.com/in/ibrahim-mahamat-zene/"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">LinkedIn</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M2 3a1 1 0 011-1h18a1 1 0 011 1v18a1 1 0 01-1 1H3a1 1 0 01-1-1V3zm5.5 17H6V9h1.5v11zm-.75-12A1.25 1.25 0 118.25 9 1.25 1.25 0 018.25 8zm1.25 11H9V13h-.5v6zm-1-7.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm10.5 7.5h-1.5v-6h1.5v6zm-.75-7.5a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zm1.25 7.5h-1.5v-4.5h1.5V18zm-3-7.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="https://github.com/Ibrahimzene"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">GitHub</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="https://albadrawi.me/"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">Dribbble</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
