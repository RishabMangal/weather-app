import React from "react";
import {
  //   VictoryAxis,
  VictoryChart,
  VictoryLine,
  VictoryTheme,
  VictoryVoronoiContainer,
} from "victory";
const DrawLine = (props) => {
  return (
    <div>
      <VictoryChart
        height={200}
        theme={VictoryTheme.material}
        // domainPadding={2}
        // scale={{ x: "linear", y: "linear" }}
        // padding={{ top: 40, bottom: 80, left: 40, right: 80 }}
        containerComponent={
          <VictoryVoronoiContainer
            labels={({ datum }) =>
              `${Math.round(datum.x, 2)}, ${Math.round(datum.y, 2)}`
            }
          />
        }
      >
        {/* <VictoryAxis tickValues={[...props.data]}></VictoryAxis> */}
        <VictoryLine
          data={props.data}
          //   interpolation="natural"
          //   labels={({ datum }) => datum.y}
          //   style={{
          //     data: { stroke: "#c43a31" },
          //     parent: { border: "0.5px solid #ccc" },
          //   }}
        />
      </VictoryChart>
    </div>
  );
};

export default DrawLine;
