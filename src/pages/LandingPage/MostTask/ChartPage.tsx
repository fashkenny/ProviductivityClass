import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { useState } from 'react';
  import { Bar } from 'react-chartjs-2';
import { readProgress } from '../../../utils/progressAPI';
import { useQuery } from "@tanstack/react-query"
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
 

  const ChartPage: React.FC<{}> = () => {
    const { data: progress } = useQuery({
        queryKey: ["progress"],
        queryFn: readProgress,
        refetchInterval: 2000
    })
    console.log("progress",progress[0].name)
    
    const labels = progress;
    console.log("Lables",labels)
    const [data, setData] = useState({
      labels: labels,
      datasets: [{
        label: 'Expenses by Month',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          'rgb(153, 102, 255)'
        ],
        borderColor: [
          'rgb(153, 102, 255)'
        ],
        borderWidth: 1
      }]
    });
  
    return <Bar data={data} />;
  };
  export  default ChartPage