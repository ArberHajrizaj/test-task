import React from 'react';
// import moment from 'moment';
import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import { deflateSync } from 'zlib';
import { asset } from "../types";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  asset:asset[];
}



export const options = {
  responsive: true,
  plugins: {
    legend: {
      display:false,
    },
    title: {
      display: true,
      text: 'ID',
    },
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'days'
        }
      }
    }
  },
};


// const labels = moment().startOf('hour').fromNow(); 
const labels = ['Jun 30', 'Jul 01', 'Jul 02', 'Jul 03', 'Jul 04', 'Jul 05', 'Jul 06'];

const testData= ['0','20','30','25','30','44','35'];

export const data = {
  labels,
  datasets: [
    {
      data:testData,
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      
    },
    
  ],
};


const LineChart:React.FunctionComponent<Props> = ({asset}) => {
  return (<div>
    <Line options={options} data={data} />;
    {asset.map((asset)=>(
      <li key={asset.assetId}>{asset.dateUpdated}</li>
    ))}
    </div>
  );
};

export default LineChart;
