import { useState } from "react";

function Loading() {
    const [time, setTime] = useState(false);

    //timer for get product
    setTimeout(() => {
        setTime(true)
    }, 700);

  return (
    <>
    {time ? (
        <div className="flex justify-center items-center my-20 text-5xl font-semibold text-darkshadow-100">
            No Proudcts
        </div>
    ):(
    <div className="flex justify-center items-center animate-spin h-96">
        <div className="border-[3px] w-12 h-12 flex justify-center items-center border-green-100 rounded-full border-r-transparent">
            <div className="border-[3px] w-10 h-10 border-darkshadow-100 rounded-full border-b-transparent flex justify-center items-center">
                <div className="border-[3px] w-8 h-8 border-green-100 rounded-full border-r-transparent flex justify-center items-center">
                    <div className="border-[3px] w-6 h-6 border-darkshadow-100 rounded-full border-l-transparent flex justify-center items-center">
                        <div className="border-4 border-darkshadow-100 rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
    }
  </>
  )
}

export default Loading;