import React from 'react'

const NavBar = () => {
  return (
    <nav className='flex p-4 justify-center w-full h-[50px] '>
        
        <div className='flex justify-between items-center w-[1300px]'>
            <div className='flex items-center'>
                <h1 className='text-[#01303A] text-xl font-bold leading-7 align-middle '>
                    Website
                </h1>
            </div>

                <ul className='flex items-center'>
                    <li className='mr-7'>
                        <a className='text-[#3C4A47] hover:text-gray-300 cursor-pointer'> Начало</a>
                    </li>
                    <li className='mr-7'>
                        <a className='text-[#3C4A47] hover:text-gray-300 cursor-pointer'> За нас</a>
                    </li>
                    <li className='mr-7'>
                        <a className='text-[#3C4A47] hover:text-gray-300 cursor-pointer'> Услуги</a>
                    </li>
                    <li className='mr-7'>
                        <a className='text-[#3C4A47] hover:text-gray-300 cursor-pointer'> Цени</a>
                    </li>
                    <li className='mr-7'>
                        <a className='text-[#3C4A47] hover:text-gray-300 cursor-pointer'> Контакти</a>
                    </li>
                </ul>

                <div className="flex items-center">
                    <p className="text-[#083C2F] cursor-pointer mr-3 w-[55px] h-[25px] hover:underline">Профил</p>

                <button className="bg-white border rounded-xl border-black text-[#01303A] text-[16px] hover:bg-[#01303A] hover:text-white font-semibold px-4 py-3">
                    Заявка за пратка
                </button>
            </div>
        </div>
    </nav>
  )
}

export default NavBar;