import Image from "next/image";
import { useEffect, useState } from "react";

import Descriptions from "../components/Descriptions";
import ArrowDownIcon from "../utils/ArrowDownIcon";
import Gallery from "./Gallery";

import {
  aluminiumConglomerate,
  externalSynteticConglomerate,
  laminateConglomerate,
  marbledConglomerate,
  quartzGraniteConglomerate,
  steelConglomerate,
  synteticConglomerate,
  synteticConglomerateStraightFinish,
  varnishedConglomerate,
} from "../constants/conglomerates";

const activeButtonStyle =
  "uppercase bg-red-500 px-4 py-1 shadow-md text-white text-sm sm:text-md";
const notActiveButtonStyle =
  "uppercase border border-gray-400 px-4 py-1 shadow-md text-gray-400 text-sm sm:text-md";

export default function Realizations() {
  const [galleryData, setGalleryData] = useState(steelConglomerate);
  const [activeType, setActiveType] = useState("inner");
  const [activeOuterConglomerat, setActiveOuterConglomerat] = useState("steel");
  const [activeInnerConglomerat, setActiveInnerConglomerat] =
    useState("syntetic");

  useEffect(() => {
    if (activeType === "outer") {
      if (activeOuterConglomerat === "steel") {
        setGalleryData(steelConglomerate);
      } else if (activeOuterConglomerat === "aluminium") {
        setGalleryData(aluminiumConglomerate);
      } else {
        setGalleryData(externalSynteticConglomerate);
      }
    } else {
      if (activeInnerConglomerat === "quartzGranite") {
        setGalleryData(quartzGraniteConglomerate);
      } else if (activeInnerConglomerat === "syntetic") {
        setGalleryData(synteticConglomerate);
      } else if (activeInnerConglomerat === "marble") {
        setGalleryData(marbledConglomerate);
      } else if (activeInnerConglomerat === "mdfVarnished") {
        setGalleryData(varnishedConglomerate);
      } else if (activeInnerConglomerat === "mdfLaminate") {
        setGalleryData(laminateConglomerate);
      } else {
        setGalleryData(synteticConglomerateStraightFinish);
      }
    }
  }, [activeType, activeOuterConglomerat, activeInnerConglomerat]);

  return (
    <div
      className="container max-w-xs md:max-w-2xl lg:max-w-6xl mx-auto mt-10 pb-20"
      id="realizations"
    >
      <div className="px-4 py-6 flex items-center justify-between bg-white shadow-lg rounded-lg">
        <h2 className="hidden sm:flex sm:items-center">
          <Image
            src="/icons/realizacje.png"
            alt="Ikona Realizacje"
            width={32}
            height={32}
          />
          <span className="ml-2 text-md sm:text-2xl text-red-600">
            Realizacje
          </span>
        </h2>
        <div className="flex items-center gap-6">
          <button
            className={`${
              activeType === "inner" ? activeButtonStyle : notActiveButtonStyle
            }`}
            onClick={() => setActiveType("inner")}
          >
            Parapety wewnętrzne
          </button>
          <button
            className={`${
              activeType === "outer" ? activeButtonStyle : notActiveButtonStyle
            }`}
            onClick={() => setActiveType("outer")}
          >
            Parapety zewnętrzne
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-start my-4 mt-8 gap-6 px-4 py-6">
        {activeType === "inner" ? (
          <>
            <h3
              className={`border px-2 py-4 rounded-md flex items-center gap-2 cursor-pointer text-sm sm:text-md basis-60 ${
                activeInnerConglomerat === "syntetic"
                  ? "border-red-600"
                  : "border-gray-200"
              }`}
              onClick={() => setActiveInnerConglomerat("syntetic")}
            >
              <span
                className={`hidden sm:block shrink-0 ${
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
              className={`border px-2 py-4 rounded-md flex items-center gap-2 cursor-pointer text-sm sm:text-md basis-60 ${
                activeInnerConglomerat === "quartzGranite"
                  ? "border-red-600"
                  : "border-gray-200"
              }`}
              onClick={() => setActiveInnerConglomerat("quartzGranite")}
            >
              <span
                className={`hidden sm:block shrink-0 ${
                  activeInnerConglomerat === "quartzGranite" && "text-red-600"
                }`}
              >
                <ArrowDownIcon />
              </span>
              <span
                className={`${
                  activeInnerConglomerat === "quartzGranite"
                    ? "uppercase text-red-600"
                    : "uppercase text-gray-600"
                }`}
              >
                Parapety kwarcowe & granitowe
              </span>
            </h3>
            <h3
              className={`border px-2 py-4 rounded-md flex items-center gap-2 cursor-pointer text-sm sm:text-md basis-60  ${
                activeInnerConglomerat === "synteticStraight"
                  ? "border-red-600"
                  : "border-gray-200"
              }`}
              onClick={() => setActiveInnerConglomerat("synteticStraight")}
            >
              <span
                className={`hidden sm:block shrink-0 ${
                  activeInnerConglomerat === "synteticStraight" &&
                  "text-red-600"
                }`}
              >
                <ArrowDownIcon />
              </span>
              <span
                className={`${
                  activeInnerConglomerat === "synteticStraight"
                    ? "uppercase text-red-600"
                    : "uppercase text-gray-600"
                }`}
              >
                Parapety z konglomeratu syntetycznego z zakończeniem prostym
              </span>
            </h3>
            <h3
              className={`border px-2 py-4 rounded-md flex items-center gap-2 cursor-pointer text-sm sm:text-md basis-60 ${
                activeInnerConglomerat === "marble"
                  ? "border-red-600"
                  : "border-gray-200"
              }`}
              onClick={() => setActiveInnerConglomerat("marble")}
            >
              <span
                className={`hidden sm:block shrink-0 ${
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
            <h3
              className={`border px-2 py-4 rounded-md flex items-center gap-2 cursor-pointer text-sm sm:text-md basis-60 ${
                activeInnerConglomerat === "mdfVarnished"
                  ? "border-red-600"
                  : "border-gray-200"
              }`}
              onClick={() => setActiveInnerConglomerat("mdfVarnished")}
            >
              <span
                className={`hidden sm:block shrink-0 ${
                  activeInnerConglomerat === "marble" && "text-red-600"
                }`}
              >
                <ArrowDownIcon />
              </span>
              <span
                className={`${
                  activeInnerConglomerat === "mdfVarnished"
                    ? "uppercase text-red-600"
                    : "uppercase text-gray-600"
                }`}
              >
                Parapety MDF - Lakierowane
              </span>
            </h3>
            <h3
              className={`border px-2 py-4 rounded-md flex items-center gap-2 cursor-pointer text-sm sm:text-md basis-60 ${
                activeInnerConglomerat === "mdfLaminate"
                  ? "border-red-600"
                  : "border-gray-200"
              }`}
              onClick={() => setActiveInnerConglomerat("mdfLaminate")}
            >
              <span
                className={`hidden sm:block shrink-0 ${
                  activeInnerConglomerat === "mdfLaminate" && "text-red-600"
                }`}
              >
                <ArrowDownIcon />
              </span>
              <span
                className={`${
                  activeInnerConglomerat === "mdfLaminate"
                    ? "uppercase text-red-600"
                    : "uppercase text-gray-600"
                }`}
              >
                Parapety MDF - Laminat
              </span>
            </h3>
          </>
        ) : (
          <>
            <h3
              className={`border px-2 py-4 rounded-md flex items-center gap-2 cursor-pointer text-sm sm:text-md ${
                activeOuterConglomerat === "steel"
                  ? "border-red-600"
                  : "border-gray-200"
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
              className={`border px-2 py-4 rounded-md flex items-center gap-2 cursor-pointer text-sm sm:text-md ${
                activeOuterConglomerat === "aluminium"
                  ? "border-red-600"
                  : "border-gray-200"
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
            <h3
              className={`border px-2 py-4 rounded-md flex items-center gap-2 cursor-pointer text-sm sm:text-md ${
                activeOuterConglomerat === "externalSyntetic"
                  ? "border-red-600"
                  : "border-gray-200"
              }`}
              onClick={() => setActiveOuterConglomerat("externalSyntetic")}
            >
              <span
                className={`hidden sm:block ${
                  activeOuterConglomerat === "externalSyntetic" &&
                  "text-red-600"
                }`}
              >
                <ArrowDownIcon />
              </span>
              <span
                className={`${
                  activeOuterConglomerat === "externalSyntetic"
                    ? "uppercase text-red-600"
                    : "uppercase text-gray-600"
                }`}
              >
                Parapety syntetyczne
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
