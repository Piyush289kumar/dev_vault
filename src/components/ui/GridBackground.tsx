import { AuroraText } from "./aurora-text";
import { SparklesText } from "./sparkles-text";
// import { TextAnimate } from "./text-animate";
import { MoveRight } from "lucide-react";

export function GridBackground() {
  return (
    <div className="h-[30rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="flex flex-col gap-y-10">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl text-center">
          Go Live with <AuroraText>Dev Vault</AuroraText>
          <SparklesText text="Products" />
        </h1>

        {/* <TextAnimate
          animation="blurInUp"
          by="character"
          className="text-center px-12"
        >
          Learn Git with me is a free and open-source platform to learn Git and
          GitHub. It is designed to be simple and easy to understand for
          beginners.
        </TextAnimate> */}
        <p className="text-center px-12">
          Learn Git with me is a free and open-source platform to learn Git and
          GitHub. It is designed to be simple and easy to understand for
          beginners.
        </p>

        <div className="text-center">
          <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
              <span>{`Get started for free 🍦`}</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M10.75 8.75L14.25 12L10.75 15.25"
                ></path>
              </svg>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
          </button>
          <button className="px-6 py-2 bg-transparent text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
            <span className="flex gap-x-2">
              Contact <MoveRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
