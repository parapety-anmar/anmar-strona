import { useEffect, useState } from "react";
import Lightbox from "react-image-lightbox";
import GalleryItem from "./GalleryItem";

export default function Gallery({ data }) {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [width, setWidth] = useState(0);

  const openGallery = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {width < 1024
          ? data
              .slice(0, showMore ? data.length : 4)
              .map((conglomerate, index) => (
                <GalleryItem
                  key={index}
                  alt={conglomerate.alt}
                  src={conglomerate.src}
                  index={index}
                  openGallery={openGallery}
                />
              ))
          : data
              .slice(0, showMore ? data.length : 8)
              .map((conglomerate, index) => (
                <GalleryItem
                  key={index}
                  alt={conglomerate.alt}
                  src={conglomerate.src}
                  index={index}
                  openGallery={openGallery}
                />
              ))}
      </div>
      <div className="container max-w-xs md:max-w-2xl lg:max-w-6xl mx-auto flex justify-center items-center">
        <button
          className="duration-150 px-4 py-2 bg-red-600 hover:bg-red-700 disabled:bg-red-900 mt-10 text-white rounded-md shadow-md"
          onClick={() => setShowMore(!showMore)}
          disabled={width < 1024 ? data.length === 4 : data.length === 8}
        >
          {showMore ? "Pokaż mniej" : "Pokaż więcej"}
        </button>
      </div>

      {isOpen ? (
        <Lightbox
          mainSrc={data[photoIndex].src}
          nextSrc={data[(photoIndex + 1) % data.length].src}
          prevSrc={data[(photoIndex + data.length - 1) % data.length].src}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + data.length - 1) % data.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % data.length)
          }
          imageCaption={<p>{data[photoIndex].alt}</p>}
        />
      ) : null}
    </>
  );
}
