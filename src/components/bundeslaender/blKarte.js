import { ResponsiveChoroplethCanvas } from "@nivo/geo";
import bundeslaender from "./bundeslaender.geo.json";
import data from "./data.json";

const BlKarte = () => {
  <ResponsiveChoroplethCanvas
    data={data}
    features={bundeslaender.features}
    pixelRatio={2}
    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
    colors="RdBu"
    domain={[0, 1000000]}
    unknownColor="#c0c0c0"
    label="properties.name"
    valueFormat=".2s"
    projectionTranslation={[0.5, 0.5]}
    projectionRotation={[0, 0, 0]}
    graticuleLineColor="rgba(0, 0, 0, .2)"
    borderWidth={0.5}
    borderColor="#808080"
    legends={[
      {
        anchor: "right",
        direction: "column",
        justify: true,
        translateX: -50,
        translateY: -60,
        itemsSpacing: 0,
        itemWidth: 92,
        itemHeight: 18,
        itemDirection: "left-to-right",
        itemOpacity: 0.85,
        symbolSize: 18,
      },
    ]}
  />;
};

export default BlKarte;
