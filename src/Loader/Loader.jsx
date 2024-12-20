import React from 'react'
import { GiBurningSkull } from "react-icons/gi";

function Loader() {
  return (
    <div>
        <div className='h-[100vh] bg-black flex items-center justify-center'>
            <div className='h-[200px] w-[200px] bg-[red] flex justify-center items-center rounded-[50%] loading'>
                <h1>
                <GiBurningSkull className='text-black text-[5rem] '  />
                </h1>

            </div>


        </div>
    </div>
  )
}

export default Loader