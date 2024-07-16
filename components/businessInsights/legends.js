import React from 'react'

const Legends = ({ data = [], colors = [] }) => {
  return (
    <div className="flex gap-5 xl:gap-3 mt-[10px] 3xl:mt-[0.521vw]">
      {data?.map((X, i) => {
        return (
          <div>
            <div className="flex items-center gap-2 xl:gap-1">
              <div className={`flex items-center bg-[${colors[i]}] text-[#019ADE] h-[8px]`}>-</div>
              <div className="flex items-center text-[#101828] dark:text-[#f6f7f9] text-[12px] xl:text-[10px] 3xl:text-[0.625vw]">{X}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Legends