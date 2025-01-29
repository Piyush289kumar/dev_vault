import { HoverBorderGradient } from "../ui/hover-border-gradient";

const homeDashbaordImg = "/assets/app_assets/homeDashbaordImg.webp";

export function HoverBorderGradientDemo() {
    return (
        <>
            <div className="mx-40 flex justify-center text-center">
                <HoverBorderGradient
                    containerClassName="rounded-2xl"
                    as="button"
                    className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2  border-3">

                    <div className="relative">
                        <img
                            src={`${import.meta.env.VITE_APP_URL}${homeDashbaordImg}`}
                            alt="Home Dashboard"
                            className="rounded-2xl w-full h-full object-cover"
                        />

                    </div>
                    {/* Dark Gradient Overlay at the bottom */}
                    <div className="absolute -bottom-3 -left-3 -right-1 h-1/4 bg-gradient-to-t from-black via-black to-transparent rounded-b-2xl" />
                </HoverBorderGradient>
            </div>
        </>
    );
}
