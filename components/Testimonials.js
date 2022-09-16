import Image from "next/image";
import dynamic from "next/dynamic";

const Slider = dynamic(() => import("../components/Slider"), { ssr: false });

export default function Testimonials() {
  return (
    <div className="h-[250px] bg-[url('/bg-opinie.webp')]" id="testimonials">
      <div className="relative container max-w-xs md:max-w-2xl lg:max-w-6xl mx-auto flex items-center justify-between h-full">
        <div className="absolute -top-8 left-0 bg-white p-4 text-red-600 shadow-lg rounded-lg flex items-center">
          <Image
            src="/icons/opinie.png"
            alt="Opinions Icon"
            width={32}
            height={32}
          />
          <span className="ml-2 text-2xl text-red-600">Opinie</span>
        </div>
        <Slider />
      </div>
    </div>
  );
}
