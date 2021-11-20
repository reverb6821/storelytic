import { Line } from 'react-chartjs-2';
import Inbound from './Inbound/Inbound';
import Outbound from './Outbound/Outbound';
import Total from './Total/Total';

const StatCard = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="w-full max-w-3xl">
                <div className="-mx-2 md:flex">
                    <div className="w-full md:w-1/3 px-2">
                        <Inbound/>
                    </div>
                    <div className="w-full md:w-1/3 px-2">
                        <Outbound/>
                    </div>
                    <div className="w-full md:w-1/3 px-2">
                        <div className="rounded-lg shadow-material mb-4">
                            <Total/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatCard;