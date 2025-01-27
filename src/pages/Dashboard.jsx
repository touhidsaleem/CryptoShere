import { CategoryScale, Chart, Legend, LinearScale, LineElement, PointElement, Tooltip } from "chart.js";
import React, { useEffect, useState } from 'react';
import { Line } from "react-chartjs-2";
import { useDispatch, useSelector } from 'react-redux';
import { API_KEY, getMarketApiUrl, getMarketByIdApiUrl } from '../constants/apiConstants';
import { getCoinById } from '../query/useAssetQuery';
import { makeApiGetCall } from '../utils/apiUtils';
import Header from "../components/Header";
import Footer from '../components/Footer'
import { Link } from "react-router-dom";
import { setHistoryData, setSelectedCoinAllData } from "../store/slice";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);


const Dashboard = () => {
    const dispatch = useDispatch();
    const coin = useSelector((state) => state?.assets?.selectedCoin);
    const [chartData, setChartData] = useState(null);
    const [fetchedData, setFetchedData] = useState(null)



    useEffect(() => {
        async function getCoin() {
            const res = await getCoinById(coin?.id || 'bitcoin')
            console.log('getCoin', res)
            dispatch(setSelectedCoinAllData(res))
        }

        getCoin()
        getMarketData()
    }, [coin])


    const getMarketData = async () => {
        const url = getMarketApiUrl();
        try {
            const response = await makeApiGetCall({
                url,
                headers: {
                    'x-cg-demo-api-key': API_KEY
                },
                queryParams: {
                    vs_currency: "usd",
                    ids: coin?.id || 'bitcoin',
                    order: "market_cap_desc",
                    per_page: 1,
                    page: 1,
                    sparkline: false,
                },
            });
            console.log('getMarketData', response)
            if (response?.length) {
                getMarketById()
                setFetchedData({
                    price: response[0]?.current_price,
                    change: response[0]?.price_change_percentage_24h.toFixed(2),
                    image: response[0]?.image,
                    name: response[0]?.name
                })
            }
        } catch (err) {
            console.log('getMarketData', err)
            toast.error(err, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
            });
        }
    };


    const getMarketById = async () => {

        const url = getMarketByIdApiUrl(coin?.id || 'bitcoin')

        try {
            const res = await makeApiGetCall({
                url,
                headers: {
                    'x-cg-demo-api-key': API_KEY
                },
                queryParams: { vs_currency: "usd", days: 7 }
            });
            const formattedHistoryData = res?.prices.map((entry, index) => ({
                date: new Date(entry[0]).toLocaleDateString("en-US", {
                    weekday: "short",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                }),
                price: `$${entry[1].toFixed(2)}`,
                volume: res?.total_volumes[index][1].toLocaleString(),
            }));
            dispatch(setHistoryData(formattedHistoryData))
            setChartData({
                labels: res?.prices?.map((entry) => new Date(entry[0]).toLocaleDateString()),
                datasets: [
                    {
                        label: "Price (USD)",
                        data: res?.prices?.map((entry) => entry[1]),
                        borderColor: "rgba(255, 255, 255, 1)",
                        fill: false,
                        tension: 0.2,
                    },
                ],
            });
        } catch (err) {
            console.log('getMarketById', err)
            toast.error(err, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
            });
        }
    };

    console.log({ chartData })



    return (
        <>
            <Header />

            <div className="min-h-screen bg-[#1e1e1e] text-white p-6">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-[#1A1A1A80] p-6 rounded-lg shadow-lg text-center">
                        {fetchedData?.image && <img src={fetchedData?.image} alt={fetchedData?.name} className="w-16 h-16 mx-auto mb-2" />}
                        <h2 className="text-2xl font-bold">{fetchedData?.name}</h2>
                        {fetchedData?.price !== null && (
                            <>
                                <p className="text-3xl font-semibold mt-2">${fetchedData?.price.toLocaleString()}</p>
                                <p className={`mt-2 text-lg ${fetchedData?.change >= 0 ? "text-[green]" : "text-[red"}`}>
                                    {fetchedData?.change >= 0 ? "▲" : "▼"} {fetchedData?.change}%
                                </p>
                            </>
                        )}
                    </div>

                    <div className="bg-[#1A1A1A80] p-6 rounded-lg  mt-6">
                        <h3 className="text-xl font-semibold mb-4">7-Day Price Trend</h3>
                        {chartData ? <Line data={chartData} /> : <p>Loading chart...</p>}
                    </div>

                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:items-center md:space-x-4">
                        <Link to="/overview" className="bg-[#CCC] text-[#1a1a1a] px-4 py-2 rounded-lg font-semibold">Show Key Details</Link>
                        <Link to="/history" className="bg-[#CCC] text-[#1a1a1a] px-4 py-2 rounded-lg font-semibold">History</Link>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Dashboard
