import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllAssets } from '../query/useAssetQuery'
import { setAllAssets, setSelectedCoin } from '../store/slice'
import CustomDropdown from './CustomDropdown'



const Header = () => {

  const dispatch = useDispatch();
  const allAssets = useSelector((state) => state?.assets?.allAssets);
  const coin = useSelector((state) => state?.assets?.selectedCoin);


  function onDropdownChange(item) {
    dispatch(setSelectedCoin(item))
  }

  useEffect(() => {
    async function getAssets() {
      const res = await getAllAssets()
      if (res) {
        dispatch(setAllAssets(res))
        dispatch(setSelectedCoin(res[0]))
      }
    }

    getAssets()

  }, [])


  return (
    <div className='w-full md:h-20 border-b border-[#C4C4C4] flex justify-center md:justify-between items-center flex-col md:flex-row px-6 py-4 md:py-0'>
      <h1 className='text-xl font-bold'>CryptoSphere 🚀</h1>
      <div className='pt-4 md:pt-0'>
        <CustomDropdown data={allAssets} selected={coin} setSelected={onDropdownChange} />
      </div>
    </div>
  )
}

export default Header