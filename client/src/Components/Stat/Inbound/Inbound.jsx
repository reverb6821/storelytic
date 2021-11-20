import { Line } from 'react-chartjs-2';

const data = {
    labels: [1, 2, 1, 3, 5, 4, 7],
        datasets: [
            {
                backgroundColor: "rgba(101, 116, 205, 0.1)",
                borderColor: "rgba(101, 116, 205, 0.8)",
                borderWidth: 2,
                data: [1, 2, 1, 3, 5, 4, 7],
            },
        ],
};

const options ={
    plugins: {
        legend: {
            display: false,
        },
        tooltip: {
            enabled: false,
        },
    },
    elements:{
        point: {
            radius: 0
        },
    },
    scales:{
            xAxes: {
                display: false,
                grid: {
                    display: false,
                    scaleLabel: false,
                }, 
                ticks: {
                    display: false
                }
            },
            yAxes: {
                display: false,
                grid: {
                    display:false,
                    scaleLabel: false,
                },     
                ticks: {
                    display: false,
                    suggestedMin: 0,
                    suggestedMax: 10
                }
                
            }
    }
};

const Inbound = () => {
    return (
        <div className="rounded-lg mb-4 shadow-material">
            <div className="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden">
                <div className="px-3 pt-8 pb-10 text-center relative z-10">
                    <h4 className="text-sm uppercase text-gray-500 leading-tight">Inbound</h4>
                    <h3 className="text-3xl text-gray-700 font-semibold leading-tight my-3">3,682</h3>
                    <p className="text-xs text-green-500 leading-tight">▲ 57.1%</p>
                </div>
                <div className="absolute bottom-0 inset-x-0">
                    <Line id="line" data={data} options={options} height={70} />
                </div>
            </div>
        </div>
    )
}

export default Inbound;