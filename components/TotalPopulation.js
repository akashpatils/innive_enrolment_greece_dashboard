import React, { useCallback } from 'react';
import { RadioButton } from "primereact/radiobutton";// Assuming you have a RadioButton component

const TotalPopulation = ({ data, activeIngredient, onClick = () => { } }) => {
  const { title, value, LY_VAR, percentage } = data;

  const handleChange = useCallback((value) => {
    onClick(value);
  }, [onClick]);

  const isActive = activeIngredient === data.ingredient;

  return (
    <div
      className={`rounded-xl h-[188px] flex flex-col items-center justify-center relative  ${isActive ? "bg-img" : "bg-[#ECEFF3] dark:bg-[#313a46] hover:cursor-pointer"
        }`} onClick={() => handleChange(data.ingredient)}
    >
      <RadioButton
        inputId={`ingredient-${data.ingredient}`}
        name={data.ingredient}
        value={data.ingredient}

        checked={isActive}
      />
      <label
        className={`text-[16px] xl:text-[16px] text-center 3xl:text-[0.781vw] font-medium ${data.ingredient === "StudentPop" ? 'text-center leading-tight' : ' text-sm'} ${isActive ? "text-[#fff] leading-6" : "text-[#374151] dark:text-[#fff]"
          }`}
        htmlFor={`ingredient-${data.ingredient}`}
      >
        {title}
      </label>
      <p
        className={`text-[22px] xl:text-[24px] 3xl:text-[1.25vw] leading-10 ${isActive ? "textgradi" : "text-[#374151] font-light dark:text-[#fff]"
          }`}
      >
        {value}
      </p>
      <div
        className={`text-[10px] xl:text-[12px] 3xl:text-[0.625vw] font-light mb-[20px] xl:mb-[24px] 3xl:mb-[1.25vw] ${isActive ? "text-[#fff]" : "text-[#374151] dark:text-[#fff]"
          }`}
      >
        {(LY_VAR).toFixed(2)}% from LY
        <span className="text-[10px] text-[#31C48D] ml-1">
          <i className="innivenrolment-population"></i>
        </span>
      </div>
      {!isActive && (
        <div className="absolute bottom-0 bg-[#F5F6F8] dark:bg-[#272e37] w-full p-1 text-center rounded-b-lg">
          <div className="text-[#4B586E] dark:text-[#fff] text-[10px] xl:text-[12px] 3xl:text-[0.625vw] font-light">
            {percentage ? (percentage).toFixed(2) : 0}% of Potential
          </div>
        </div>
      )}
    </div>
  );
};

export default TotalPopulation;
