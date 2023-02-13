import { useEffect, useState } from "react";
import {
  AluminiumConglomeratDescription,
  MarbleConglomeratDescription,
  MdfConglomeratDescription,
  ShorterMarbleConglomeratDescription,
  ShorterSteelConglomeratDescription,
  ShorterSynteticConglomeratDescription,
  ShorterSynteticConglomeratStraightFinishDescription,
  SteelConglomeratDescription,
  SynteticConglomeratDescription,
  SynteticConglomeratStraightFinishDescription,
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

  const showDescription = () => {
    if (width < 1024) {
      if (activeType === "outer") {
        if (activeOuterConglomerat === "steel")
          return <ShorterSteelConglomeratDescription />;
        else return <AluminiumConglomeratDescription />;
      } else if (activeType === "inner") {
        if (activeInnerConglomerat === "syntetic")
          return <ShorterSynteticConglomeratDescription />;
        else if (activeInnerConglomerat === "marble")
          return <ShorterMarbleConglomeratDescription />;
        else if (
          activeInnerConglomerat === "mdfLaminate" ||
          activeInnerConglomerat === "mdfVarnished"
        )
          return <MdfConglomeratDescription />;
        else return <ShorterSynteticConglomeratStraightFinishDescription />;
      } else return null;
    } else {
      if (activeType === "outer") {
        if (activeOuterConglomerat === "steel")
          return <SteelConglomeratDescription />;
        else return <AluminiumConglomeratDescription />;
      } else if ((activeType = "inner")) {
        if (activeInnerConglomerat === "syntetic")
          return <SynteticConglomeratDescription />;
        else if (activeInnerConglomerat === "marble")
          return <MarbleConglomeratDescription />;
        else if (
          activeInnerConglomerat === "mdfLaminate" ||
          activeInnerConglomerat === "mdfVarnished"
        )
          return <MdfConglomeratDescription />;
        else return <SynteticConglomeratStraightFinishDescription />;
      }
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 py-8 text-gray-600 text-sm">
      {showDescription()}
    </div>
  );
};

export default Descriptions;
