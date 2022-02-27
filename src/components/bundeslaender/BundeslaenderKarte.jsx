import React, { useEffect, useState } from "react";
import axios from "axios";
import { ResponsiveChoroplethCanvas } from "@nivo/geo";
import bundeslaender from "../../data/x/bundeslaender.geo.json";
import kreise from "../../data/x/kreise.geo.json";

function BundeslaenderKarte() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const getData = async () => {
  //     const url = "https://api.corona-zahlen.org/states";
  //     try {
  //       const bl = await axios.get(url);
  //       setData(bl.data.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getData();
  // }, []);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let data = [];

  for (let i = 0; i <= 433; i++) {
    data.push({
      id: i,
      value: getRandomInt(30, 100),
    });
  }

  return (
    <div className="Body" style={{ display: "flex", placeItems: "center" }}>
      <div
        className="Map"
        style={{ height: 497, width: "100%", border: "1px solid orange" }}
      >
        <ResponsiveChoroplethCanvas
          //@ts-ignore
          data={data}
          // match={(a, b) => {
          //   //   console.log(a, b);
          //   return a.properties.ID_2 === b.ID_2;
          // }}
          features={kreise.features}
          domain={[0, 100]}
          label={(a) => {
            // console.log(a, a.properties["NAME_3"]);
            return a.properties["NAME_3"];
          }}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          colors="YlOrRd"
          unknownColor="#666666"
          valueFormat=".2s"
          projectionScale={2000}
          projectionTranslation={[0, 4.73]}
          projectionRotation={[0, 0, 0]}
          borderWidth={0.5}
          borderColor="#152538"
          // tooltip={(a) => {
          //   console.log(a);
          //   return <p>yea!</p>;
          // }}
          // onClick={(a) => console.log(a)}
          // isInteractive={true}
          legends={[
            {
              anchor: "right",
              direction: "column",
              justify: true,
              translateX: 10,
              translateY: -100,
              itemsSpacing: 0,
              itemWidth: 94,
              itemHeight: 18,
              itemDirection: "left-to-right",
              itemTextColor: "#444444",
              itemOpacity: 0.85,
              symbolSize: 18,
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: "#000000",
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      </div>
    </div>
  );
}

export default BundeslaenderKarte;
