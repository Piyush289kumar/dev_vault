import { cn } from "@/lib/utils";
// import { Marquee } from "@/components/magicui/marquee";
import { Marquee } from "@/components/ui/marquee";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it. I've never seen anything like this before. It's amazing. I love it. I've never seen anything like this before. It's amazing. I love it. I've never seen anything like this before. It's amazing. I love it. I've never seen anything like this before. It's amazing. I love it. I've never seen anything like this before. It's amazing. I love it. I've never seen anything like this before. It's amazing. I love it. I've never seen anything like this before. It's amazing. I love it. I've never seen anything like this before. It's amazing. I love it. I've never seen anything like this before. It's amazing. I love it. I've never seen anything like this before. It's amazing. I love it. I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing. I've never seen anything like this before. It's amazing. I love it. I've never seen anything like this before. It's amazing. I love it. I've never seen anything like this before. It's amazing. I love it. I've never seen anything like this before. It's amazing. I love it. I've never seen anything like this before. It's amazing. I love it. I've never seen anything like this before. It's amazing. I love it. I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it. I've never seen anything like this before. It's amazing. I love it. I've never seen anything like this before. It's amazing. I love it. I've never seen anything like this before. It's amazing. I love it. I've never seen anything like this before. It's amazing. I love it. I've never seen anything like this before. It's amazing. I love it. I've never seen anything like this before. It's amazing. I love it. I've never seen anything like this before. It's amazing. I love it. I've never seen anything like this before. It's amazing. I love it. I've never seen anything like this before. It's amazing. I love it. I've never seen anything like this before. It's amazing. I love it. I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing. I've never seen anything like this before. It's amazing. I love it. I've never seen anything like this before. It's amazing. I love it. I've never seen anything like this before. It's amazing. I love it. I've never seen anything like this before. It's amazing. I love it. I've never seen anything like this before. It's amazing. I love it. I've never seen anything like this before. It's amazing. I love it. I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it. I've never seen anything like this before. It's amazing. I love it. I've never seen anything like this before. It's amazing. I love it. I've never seen anything like this before. It's amazing. I love it. I've never seen anything like this before. It's amazing. I love it. I've never seen anything like this before. It's amazing. I love it. I've never seen anything like this before. It's amazing. I love it. I've never seen anything like this before. It's amazing. I love it. I've never seen anything like this before. It's amazing. I love it. I've never seen anything like this before. It's amazing. I love it. I've never seen anything like this before. It's amazing. I love it. I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing. I've never seen anything like this before. It's amazing. I love it. I've never seen anything like this before. It's amazing. I love it. I've never seen anything like this before. It's amazing. I love it. I've never seen anything like this before. It's amazing. I love it. I've never seen anything like this before. It's amazing. I love it. I've never seen anything like this before. It's amazing. I love it. I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
// const secondRow = reviews.slice(reviews.length / 2);

const words = [
  {
    text: "Loved by",
  },
  {
    text: "Indie",
  },
  {
    text: "Hackers",
  },
  {
    text: "and",
  },
  {
    text: "VC Backed SaaS",
    className: "text-blue-500 dark:text-blue-500",
  },
];

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-auto w-50 cursor-pointer overflow-hidden rounded-2xl border p-4 ",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export default function MarqueeVertical() {
  return (
    <div className="mt-44">
      <TypewriterEffectSmooth
        words={words}
        className="flex justify-center"
        cursorClassName="cursor-class"
      />
      <p className="text-center text-zinc-500 pb-12 font-semibold">
        Creem is used by companies of every size. <br /> Here's what some of
        them have to say.
      </p>
      <div className="relative flex h-[700px] w-[80%] mx-auto flex-row items-center justify-center overflow-hidden rounded-lg bg-black md:shadow-xl gap-x-3 mt-5">
        <Marquee pauseOnHover vertical className="[--duration:15s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee pauseOnHover vertical className="[--duration:25s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee pauseOnHover vertical className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-background"></div>
      </div>
    </div>
  );
}
