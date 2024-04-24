import React from 'react';

const Other = () => {
  return (
    <div className="flex justify-center items-center mb-[80px]">
      <div className="flex flex-col justify-center w-[100%] h-[auto] mt-[48px] md:w-[90%] md:h-[481px] lg:w-[1296px] lg:h-[481px]">
        <h1 className="text-[24px] text-start text-[#01303A] font-bold md:text-[36px] mb-[32px]">
            Други услуги
        </h1>
        <div className="flex flex-col justify-between items-center md:flex-row">
          <article className="mb-[16px] md:mb-0">
            <img src="/docking.png" alt="docking" width={416} height={300} 
            className="cursor-pointer hover:scale-105 transition-transform duration-400 ease-in-out"/>
            <p className="text-[18px] text-[#01303A] hover:text-black font-semibold mt-4 leading-[140%] tracking-[-0.5px] 
             cursor-pointer hover:scale-105 transition-transform duration-400 ease-in-out md:text-[24px]">
            Опасни товари(ADR)
            </p>
          </article>
          <article className="mb-[16px] md:mb-0">
            <img src="/pushing-cart.png" alt="pushing" width={416} height={300} 
            className="cursor-pointer hover:scale-105 transition-transform duration-400 ease-in-out"/>
           <p className="text-[18px] text-[#01303A] hover:text-black font-semibold mt-4 leading-[140%] tracking-[-0.5px] 
             cursor-pointer hover:scale-105 transition-transform duration-400 ease-in-out md:text-[24px]">
                Хладилен транспорт
            </p>
          </article>
          <article className="mb-[16px] md:mb-0">
            <img src="/containers.png" alt="containers" width={416} height={300} 
            className="cursor-pointer hover:scale-105 transition-transform duration-400 ease-in-out"/>
            <p className="text-[18px] text-[#01303A] hover:text-black font-semibold mt-4 leading-[140%] tracking-[-0.5px] 
             cursor-pointer hover:scale-105 transition-transform duration-400 ease-in-out md:text-[24px]">
                Извънгабаритни товари(ADR)
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Other;
