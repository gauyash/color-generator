import React from "react";
import rgbToHex from "./utils";

export const ColorContainer = ({ color }) => {

  return (
    <div className="pb-5 d-flex flex-wrap gap-2">
      {color.map((items, index) => {
        return (
          <div
            style={{
              backgroundColor: `rgb(${items.rgb.toString()})`,
              color: items.type === "tint" ? "black" : "white",
            }}
            key={index}
            className="items"
          >
            <p className="weight">{items.weight}%</p>
            <p className="color">{rgbToHex(items.rgb[0],items.rgb[1],items.rgb[2])}</p>
          </div>
        );
      })}
    </div>
  );
};
