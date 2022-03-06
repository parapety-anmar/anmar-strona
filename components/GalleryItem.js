import { useState } from "react";
import Image from "next/image";

export default function GalleryItem({ alt, src, index, openGallery }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative bg-white rounded-lg p-2 shadow-lg h-[200px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => openGallery(index)}
    >
      <div className="relative overflow-hidden w-full h-full transition-transform ease-in-out delay-150">
        <Image
          src={src}
          alt={alt}
          layout="fill"
          className={`w-full h-full transition-transform ease-in-out delay-75 ${
            isHovered ? "scale-125" : "scale-100"
          }`}
        />
      </div>
      {isHovered && (
        <span className="hidden sm:block absolute -bottom-4 left-[50%] translate-x-[-50%] p-2 bg-gray-700 text-white uppercase whitespace-nowrap rounded-md">
          {alt}
        </span>
      )}
    </div>
  );
}
