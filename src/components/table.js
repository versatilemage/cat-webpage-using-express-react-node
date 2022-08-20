import React, { useState } from "react";

const CatStatBar = ({ stat = 0, statName = "None" }) => {
  const [bars, setBars] = useState([null, null, null, null, null]);
  for (let index = 0; index < stat; index++) {
    bars[index] = "full";
  }
  return (
    <div className=" h-8 flex  sm:flex-row flex-col sm:items-center  w-[36rem] justify-between  ">
      <div className="mr-full sm:mb-0 mb-2">
        <strong className="text-lg capitalize">{statName}</strong>
      </div>
      <div className="flex items-center h-full w-auto gap-x-2 ">
        {bars.map((bar, key) => (
          <div
            key={key}
            className={`h-3 w-16 sm:w-20   ${
              bar == "full" ? "bg-[#008000]" : "bg-[#FFFFFF]"
            } rounded-lg`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CatStatBar;