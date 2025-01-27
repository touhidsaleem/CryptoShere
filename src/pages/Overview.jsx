import React from 'react';
import { useSelector } from 'react-redux';

const Overview = () => {
    const coinAllData = useSelector((state) => state?.assets?.selectedCoinAllData);
    console.log('coinAllData', coinAllData?.market_data?.total_supply)



    return (

        <div className="min-h-screen bg-[#1a1a1a] text-white p-6 flex justify-center items-center">
            <div className="max-w-xl w-full border border-[#ccc] p-6 rounded-lg text-center">
                {coinAllData ? (
                    <>
                        <img
                            src={coinAllData?.image?.large}
                            alt={coinAllData?.name}
                            className="w-20 h-20 mx-auto mb-4"
                        />
                        <h2 className="text-2xl font-bold">{coinAllData?.name}</h2>
                        <p
                            className="text-gray leading-relaxed text-justify"
                            dangerouslySetInnerHTML={{ __html: coinAllData?.description?.en }}
                        />
                        <p className="text-3xl font-semibold mt-2 ">${coinAllData?.market_data?.current_price?.usd?.toLocaleString()}</p>

                        <div className="mt-4 grid grid-cols-2 gap-4 text-lg">
                            <div className="bg-[#1A1A1A80] p-3 rounded-md border border-[#ccc]">
                                <p className="text-gray">Total Supply</p>
                                <p className="font-semibold">{coinAllData?.market_data?.total_supply}</p>
                            </div>
                            <div className="bg-[#1A1A1A80] p-3 rounded-md border border-[#ccc]">
                                <p className="text-gray">Circulating Supply</p>
                                <p className="font-semibold">{coinAllData?.market_data?.circulating_supply}</p>
                            </div>
                            <div className="bg-[#1A1A1A80] p-3 rounded-md border border-[#ccc]">
                                <p className="text-gray">All Time High</p>
                                <p className="font-semibold">${coinAllData?.market_data?.ath?.usd?.toLocaleString()}</p>
                            </div>
                            <div className="bg-[#1A1A1A80] p-3 rounded-md border border-[#ccc]">
                                <p className="text-gray">Rank</p>
                                <p className="font-semibold">#{coinAllData?.market_cap_rank}</p>
                            </div>
                        </div>
                    </>
                ) : (
                    <p className="text-lg">Loading...</p>
                )}
            </div>
        </div>
    )
}

export default Overview
