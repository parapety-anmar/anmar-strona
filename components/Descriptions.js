import { useEffect, useState } from "react";
import {
  SteelConglomeratDescription,
  AluminiumConglomeratDescription,
  SynteticConglomeratDescription,
  MarbleConglomeratDescription,
  ShorterSteelConglomeratDescription,
  ShorterSynteticConglomeratDescription,
  ShorterMarbleConglomeratDescription,
} from "../constants/descriptions";

const Descriptions = ({
  activeType,
  activeInnerConglomerat,
  activeOuterConglomerat,
}) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 py-8 text-gray-600 text-sm">
      {width < 1024 ? (
        activeType === "outer" ? (
          activeOuterConglomerat === "steel" ? (
            <ShorterSteelConglomeratDescription />
          ) : (
            <AluminiumConglomeratDescription />
          )
        ) : activeType === "inner" ? (
          activeInnerConglomerat === "syntetic" ? (
            <ShorterSynteticConglomeratDescription />
          ) : (
            <ShorterMarbleConglomeratDescription />
          )
        ) : null
      ) : activeType === "outer" ? (
        activeOuterConglomerat === "steel" ? (
          <SteelConglomeratDescription />
        ) : (
          <AluminiumConglomeratDescription />
        )
      ) : activeType === "inner" ? (
        activeInnerConglomerat === "syntetic" ? (
          <SynteticConglomeratDescription />
        ) : (
          <MarbleConglomeratDescription />
        )
      ) : null}
    </div>
  );
};

export default Descriptions;
