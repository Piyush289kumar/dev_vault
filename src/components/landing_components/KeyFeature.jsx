import { WobbleCard } from "../ui/wobble-card";

export function KeyFeature() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto w-full md:mt-5 mt-12 px-5">
      <WobbleCard containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[350px] md:min-h-[300px] lg:min-h-[300px] z-10 relative">
        <div className="max-w-xs md:max-w-sm lg:max-w-md">
          <h2 className="text-left text-base sm:text-lg md:text-2xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Gippity AI powers the entire universe
          </h2>
          <p className="mt-4 text-left text-sm sm:text-base md:text-lg text-neutral-200">
            With over 100,000 monthly active bot users, Gippity AI is the most
            popular AI platform for developers.
          </p>
        </div>
        <img
          src="/assets/app_assets/linear1.webp"
          width={550}
          height={500}
          alt="linear demo image"
          className="absolute right-0 md:-right-10 lg:-right-[30%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>

      <WobbleCard containerClassName="col-span-1 min-h-[200px] md:min-h-[300px] z-10">
        <h2 className="max-w-80 text-left text-base sm:text-lg md:text-2xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          No shirt, no shoes, no weapons.
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-sm sm:text-base md:text-lg text-neutral-200">
          If someone yells “stop!”, goes limp, or taps out, the fight is over.
        </p>
      </WobbleCard>

      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[300px] md:min-h-[400px] md:min-h-[500px] lg:min-h-[300px] relative">
        <div className="max-w-xs md:max-w-sm lg:max-w-md">
          <h2 className="text-left text-base sm:text-lg md:text-2xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Signup for blazing-fast, cutting-edge, state-of-the-art Gippity AI
            wrapper today!
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-sm sm:text-base md:text-lg text-neutral-200">
            With over 100,000 monthly active bot users, Gippity AI is the most
            popular AI platform for developers.
          </p>
        </div>
        <img
          src="/assets/app_assets/linear2.webp"
          width={600}
          height={500}
          alt="linear demo image"
          className="absolute right-0 md:-right-[30%] lg:-right-[10%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}

export default KeyFeature;
