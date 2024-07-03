import React from 'react';
import '../css/globalStyle.css'
import DataDisplayCard from './DataDisplayCard';
import { useSelector } from 'react-redux';
    
const DataDisplay = () => {
    const data = useSelector((state) => state.bookings);
    return (
        data.length && <div className="table-container">
            <table className="booking-table">
                <thead className="bg-gray-100/50">
                    <tr className="text-black text-left">
                        <th>Destination From</th>
                        <th>Destination To</th>
                        <th className="text-center">Journey Date</th>
                        <th className="text-center">Guests</th>
                        <th className="text-center">Class</th>
                        <th className="text-center">Delete</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-300/20" id="lws-previewBooked">
                    {
                        data.map(booking => <DataDisplayCard key={booking.id} booking={booking}></DataDisplayCard>)
                    }
                </tbody>
            </table>
        </div>
    )
};

export default DataDisplay;