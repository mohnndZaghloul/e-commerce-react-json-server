import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';
import { useState } from 'react';
// import img from '../assets/images/shopping_bags_noba.svg'

function Slider() {
    const imgArray = [
        '../assets/images/shopping_bags_noba.svg',
        '../assets/images/add_to_cart_re_wrdo.svg',
        '../assets/images/web_shopping_re_owap.svg',
    ];
    const [currentImg, setCurrentImg] = useState(0);

    const prevImgHandler = () => {
        const isFirstImg = (currentImg === 0);
        const prevImg = isFirstImg ? imgArray.length -1 : currentImg - 1;
        setCurrentImg(prevImg);
    }

    const nextImgHandler = () => {
        const isLastImg = (currentImg === imgArray.length - 1);
        const nextImg = isLastImg ? 0 : currentImg + 1;
        setCurrentImg(nextImg);
    }
  return (
    <div className="lg:container h-[600px] flex justify-center">
        <div className='flex flex-wrap flex-col-reverse lg:flex-row lg:flex-nowrap justify-center relative items-center px-0 sm:px-10'>
            <BiSolidLeftArrow onClick={prevImgHandler} className='text-2xl sm:text-4xl text-green-100 hover:text-green-200 transition cursor-pointer absolute left-8 lg:left-0 top-1/3 lg:top-1/2'/>
            <div className='p-2 lg:p-8 w-5/6 lg:w-1/2 text-xs sm:text-base'>
                <h1 className='text-3xl sm:text-5xl font-semibold py-4'>50% Off For Your First Shopping</h1>
                <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nostrum tempora ad voluptatum, id at ut rerum ipsam quam, facere labore! Doloribus fuga blanditiis vero similique excepturi! Veritatis, quae et!</p>
            </div>
            <div className='h-[190px] w-[260px] sm:h-[255px] sm:w-[350px] lg:h-[320px] lg:w-[480px] xl:h-[365px] xl:w-[500px]'>
                <div style={{backgroundImage: `url("${imgArray[currentImg]}")`}} className='duration-500 w-full h-full bg-cover bg-center'></div>
            </div>
            <BiSolidRightArrow onClick={nextImgHandler} className='text-2xl sm:text-4xl text-green-100 hover:text-green-200 transition cursor-pointer absolute right-8 lg:right-0 top-1/3 lg:top-1/2'/>
        </div>
    </div>
  )
}

export default Slider;