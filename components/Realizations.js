import { useEffect, useState } from "react";

import ArrowDownIcon from "../utils/ArrowDownIcon";
import Gallery from "./Gallery";
import Descriptions from "../components/Descriptions";

import {
  marbledConglomerate,
  steelConglomerate,
  synteticConglomerate,
  aluminiumConglomerate,
} from "../constants/conglomerates";

const activeButtonStyle =
  "uppercase bg-red-500 px-4 py-1 shadow-md text-white text-sm sm:text-md";
const notActiveButtonStyle =
  "uppercase border border-gray-400 px-4 py-1 shadow-md text-gray-400 text-sm sm:text-md";

export default function Realizations() {
  const [galleryData, setGalleryData] = useState(steelConglomerate);
  const [activeType, setActiveType] = useState("outer");
  const [activeOuterConglomerat, setActiveOuterConglomerat] = useState("steel");
  const [activeInnerConglomerat, setActiveInnerConglomerat] =
    useState("syntetic");

  useEffect(() => {
    if (activeType === "outer") {
      if (activeOuterConglomerat === "steel") {
        setGalleryData(steelConglomerate);
      } else setGalleryData(aluminiumConglomerate);
    } else {
      if (activeInnerConglomerat === "syntetic") {
        setGalleryData(synteticConglomerate);
      } else setGalleryData(marbledConglomerate);
    }
  }, [activeType, activeOuterConglomerat, activeInnerConglomerat]);

  return (
    <div
      className="container max-w-xs md:max-w-2xl lg:max-w-6xl mx-auto mt-10 pb-20"
      id="realizations"
    >
      <div className="px-4 py-6 flex items-center justify-between bg-white shadow-lg rounded-lg">
        <h2 className="hidden sm:flex sm:items-center">
          <img src="/icons/realizacje.png" alt="Ikona Realizacje" />
          <span className="ml-2 text-md sm:text-2xl text-red-600">
            Realizacje
          </span>
        </h2>
        <div className="flex items-center gap-6">
          <button
            className={`${
              activeType === "outer" ? activeButtonStyle : notActiveButtonStyle
            }`}
            onClick={() => setActiveType("outer")}
          >
            Parapety zewnętrzne
          </button>
          <button
            className={`${
              activeType === "inner" ? activeButtonStyle : notActiveButtonStyle
            }`}
            onClick={() => setActiveType("inner")}
          >
            Parapety wewnętrzne
          </button>
        </div>
      </div>

      <div className="flex items-center my-4 mt-8 gap-6 px-4 py-6">
        {activeType === "inner" ? (
          <>
            <h3
              className={`flex items-center gap-2 cursor-pointer text-sm sm:text-md ${
                activeInnerConglomerat === "syntetic"
                  ? "border border-red-600 px-2 py-4 rounded-md"
                  : ""
              }`}
              onClick={() => setActiveInnerConglomerat("syntetic")}
            >
              <span
                className={`hidden sm:block ${
                  activeInnerConglomerat === "syntetic" && "text-red-600"
                }`}
              >
                <ArrowDownIcon />
              </span>
              <span
                className={`${
                  activeInnerConglomerat === "syntetic"
                    ? "uppercase text-red-600"
                    : "uppercase text-gray-600"
                }`}
              >
                Parapety z konglomeratu syntetycznego
              </span>
            </h3>
            <h3
              className={`flex items-center gap-2 cursor-pointer text-sm sm:text-md ${
                activeInnerConglomerat === "marble"
                  ? "border border-red-600 px-2 py-4 rounded-md"
                  : ""
              }`}
              onClick={() => setActiveInnerConglomerat("marble")}
            >
              <span
                className={`hidden sm:block ${
                  activeInnerConglomerat === "marble" && "text-red-600"
                }`}
              >
                <ArrowDownIcon />
              </span>
              <span
                className={`${
                  activeInnerConglomerat === "marble"
                    ? "uppercase text-red-600"
                    : "uppercase text-gray-600"
                }`}
              >
                Parapety z konglomeratu marmurowego
              </span>
            </h3>
          </>
        ) : (
          <>
            <h3
              className={`flex items-center gap-2 cursor-pointer text-sm sm:text-md ${
                activeOuterConglomerat === "steel"
                  ? "border border-red-600 px-2 py-4 rounded-md"
                  : ""
              }`}
              onClick={() => setActiveOuterConglomerat("steel")}
            >
              <span
                className={`hidden sm:block ${
                  activeOuterConglomerat === "steel" && "text-red-600"
                }`}
              >
                <ArrowDownIcon />
              </span>
              <span
                className={`${
                  activeOuterConglomerat === "steel"
                    ? "uppercase text-red-600"
                    : "uppercase text-gray-600"
                }`}
              >
                Parapety stalowe
              </span>
            </h3>
            <h3
              className={`flex items-center gap-2 cursor-pointer text-sm sm:text-md ${
                activeOuterConglomerat === "aluminium"
                  ? "border border-red-600 px-2 py-4 rounded-md"
                  : ""
              }`}
              onClick={() => setActiveOuterConglomerat("aluminium")}
            >
              <span
                className={`hidden sm:block ${
                  activeOuterConglomerat === "aluminium" && "text-red-600"
                }`}
              >
                <ArrowDownIcon />
              </span>
              <span
                className={`${
                  activeOuterConglomerat === "aluminium"
                    ? "uppercase text-red-600"
                    : "uppercase text-gray-600"
                }`}
              >
                Parapety aluminiowe
              </span>
            </h3>
          </>
        )}
      </div>
      <Descriptions
        activeType={activeType}
        activeInnerConglomerat={activeInnerConglomerat}
        activeOuterConglomerat={activeOuterConglomerat}
      />

      <Gallery data={galleryData} />
    </div>
  );
}
