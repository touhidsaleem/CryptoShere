import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const History = () => {
    const historyData = useSelector((state) => state?.assets?.historyData);
    const [search, setSearch] = useState("");

    return (


        <div className="min-h-screen bg-[#1A1A1A] text-white p-6 flex justify-center items-center">
            <div className="w-full max-w-4xl bg-[#1a1a1a] p-6 rounded-lg border border-[#ccc] ">
                <h2 className="text-2xl font-bold mb-4 text-center">Historical Price Data (7 Days)</h2>

                <input
                    type="text"
                    placeholder="Search by date (e.g., Jan 24, 2025)"
                    className="w-full p-2 mb-4 bg-[#1A1A1A80] rounded-md text-white placeholder-gray focus:outline-none border border-[#ccc"
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                />

                <div className="overflow-x-auto">
                    <table className="w-full table-auto border-collapse">
                        <thead>
                            <tr className="bg-[#1A1A1A80]">
                                <th className="p-3 text-left">Date</th>
                                <th className="p-3 text-right">Price (USD)</th>
                                <th className="p-3 text-right">24h Volume</th>
                            </tr>
                        </thead>
                        <tbody>
                            {historyData?.filter((entry) => entry.date.toLowerCase().includes(search))
                                .map((entry, index) => (
                                    <tr key={index} className="border-b border-gray hover:bg-gray">
                                        <td className="p-3">{entry.date}</td>
                                        <td className="p-3 text-right">{entry.price}</td>
                                        <td className="p-3 text-right">{entry.volume}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default History
