import React from 'react';
import { useLocation } from 'react-router-dom';
import { MdOutlineSubtitles } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

function MyList() {
    const location = useLocation();
    const movie = location.state?.movie;

    if (!movie) {
        return (
            <div className="min-h-[100vh] bg-black px-4">
                <h1 className="font-semibold text-white text-[1.5rem] my-4">Your Movie</h1>
                <p className="text-white">No movie selected!</p>
            </div>
        );
    }

    const year = movie.release_date.split('-')[0];

    return (
        <div className="min-h-[100vh] bg-black px-4">
            <h1 className="font-semibold text-white text-[1.5rem] my-4">Your Movie</h1>
             <div className='grid '>
                          <div className=''>
                              <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}alt={movie.original_title} className='object-fill w-full h-[300px]' />
          
                          </div>
                          <div className='mt-4 text-white px-4'>
                            <div className='flex items-center gap-2'>
                             <h1 className='font-bold text-white text-2xl'>{movie.original_title}</h1>
                             <h1>{year}</h1>
                            </div>
                             <div className='flex items-center gap-2'>
                             <h1 className='flex items-center gap-1'> <MdOutlineSubtitles />{movie.original_language}</h1>


                             </div>  

                                <div className='bg px-'>
                                             <div>
                                                 <button className='h-[40px] w-full bg-white text-black capitalize flex items-center justify-center gap-2 text-[1.2rem] md:text-[1.4rem] rounded-lg font-semibold '> <FaPlay />play</button>
                                                 <button className='h-[40px] w-full bg-gray-600 text-white capitalize flex items-center justify-center gap-2 text-[1.2rem] md:text-[1.4rem] rounded-lg font-semibold mt-2 md:mt-5'> <HiDownload /> download</button>
                                             </div>
                                             <div className='text-white mt-2 md:mt-5 text-[1.2rem] lg:text-[1.4rem] text-start '>
                                                 <p>{movie.overview}</p>
                                             </div>
                                        
                                </div>
                          </div>
          
          
                 </div>
        </div>
    );
}

export default MyList;
