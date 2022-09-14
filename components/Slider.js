import Carousel, {
  slidesToShowPlugin,
  arrowsPlugin,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import ArrowLeftIcon from "../utils/ArrowLeftIcon";
import ArrowRightIcon from "../utils/ArrowRightIcon";

export default function Slider() {
  return (
    <Carousel
      plugins={[
        "infinite",
        {
          resolve: slidesToShowPlugin,
          options: {
            numberOfSlides: window.innerWidth > 640 ? 2 : 1,
          },
        },
        {
          resolve: arrowsPlugin,
          options: {
            arrowLeft: (
              <button
                className="bg-white p-1 flex items-center justify-center rounded-full hover:bg-gray-100"
                aria-label="Poprzednia opinia"
              >
                <ArrowLeftIcon />
              </button>
            ),
            arrowRight: (
              <button
                className="bg-white p-1 flex items-center justify-center rounded-full hover:bg-gray-100"
                aria-label="Następna opinia"
              >
                <ArrowRightIcon />
              </button>
            ),
            addArrowClickHandler: true,
          },
        },
      ]}
    >
      <div className="w-5/6 h-[125px] bg-white rounded-lg p-2">
        <h3 className="text-lg sm:text-xl text-gray-600 font-semibold mb-1">
          Ewa Paszczyńska
        </h3>
        <p className="text-sm text-gray-600">
          Polecam, współpracujemy i jesteśmy bardzo zadowoleni
        </p>
      </div>
      <div className="w-5/6 h-[125px] bg-white rounded-lg p-2">
        <h3 className="text-xl text-gray-600 font-semibold mb-1">
          Marcin Kohler
        </h3>
        <p className="text-sm text-gray-600">
          Pełen profesjonalizm i super jakość. Polecam
        </p>
      </div>
      <div className="w-5/6 h-[125px] bg-white rounded-lg p-2">
        <h3 className="text-xl text-gray-600 font-semibold mb-1">
          Arkadiusz Kowalczyk
        </h3>
        <p className="text-sm text-gray-600">
          Polecam serdecznie, szeroki wybór parapetów bardzo miła obsługa i
          szybki czas realizacji
        </p>
      </div>
      <div className="w-5/6 h-[125px] bg-white rounded-lg p-2">
        <h3 className="text-xl text-gray-600 font-semibold mb-1">
          Piotr Woźniak
        </h3>
        <p className="text-sm text-gray-600">
          Parapety z firmy AN-MAR mam już od kilku lat w środku i na zewnątrz,
          ciągle wyglądają jak nowe
        </p>
      </div>
    </Carousel>
  );
}
