import React, { useEffect, useState } from "react";
import { Line, Bar } from "react-chartjs-2";
const ChartLine = (props) => {
  const [labels, setLabels] = useState([]);
  const [values, setValues] = useState([]);
  const [gT, setGT] = useState("Line");

  useEffect(() => {
    let labels = [];
    let values = [];
    props.data.forEach((d, i) => {
      labels.push(d.x);
      values.push(d.y);
    });
    setLabels([...labels]);
    setValues([...values]);
  }, [props.data]);

  const data = {
    labels: [...labels],
    datasets: [
      {
        label: props.keyName,
        data: [...values],
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.9)",
      },
    ],
  };

  const options = {
    aspectRatio: 5,
    plugins: {
      title: {
        // display: true,
        // text: props.keyName,
      },
      legend: {
        display: true,
        position: "bottom",
        labels: {
          //   color: "rgb(0, 0, 255)",
        },
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <div>
      <div
        className="text-light p-2"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="mx-4">
          <input
            type="radio"
            onChange={(e) => setGT(e.target.value)}
            value="Line"
            name="graphType"
            id="Line"
            className=" mx-2"
          ></input>
          <label htmlFor="Line" className="lead">
            Line
          </label>
        </div>
        <div className="mx-4">
          <input
            type="radio"
            onChange={(e) => setGT(e.target.value)}
            value="Bar"
            name="graphType"
            id="Bar"
            className=" mx-2"
          ></input>
          <label htmlFor="Bar" className="lead">
            Bar
          </label>
        </div>
      </div>
      {gT === "Line" ? (
        <Line data={data} options={options}></Line>
      ) : (
        <Bar data={data} options={options}></Bar>
      )}
    </div>
  );
};

export default ChartLine;
