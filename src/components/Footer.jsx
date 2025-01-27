import React from 'react'
import { useSelector } from 'react-redux';

const Footer = () => {

    const startTime = new Date('January 22, 2025 12:50:00').getTime();

    const coinAllData = useSelector((state) => state?.assets?.selectedCoinAllData)

    const date = new Date(coinAllData?.market_data?.last_updated)
    const isValidDate = !isNaN(date.getTime())

    const formattedDate = isValidDate
        ? date.toLocaleString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        })
        : new Date().toLocaleString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        });




    return (
        <div className='w-full h-20 border-t border-[#C4C4C4] flex justify-center items-center'>
            {formattedDate}
        </div>
    )
}

export default Footer
