import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { MdOutlineSubtitles } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { IoAddOutline } from "react-icons/io5";
import { SlLike } from "react-icons/sl";
import { TbLocationShare } from "react-icons/tb";
function MovieDtails() {
    const location = useLocation();
    const navigate = useNavigate();


    useEffect(()=>{
        if (!location.state || !location.state.movie) {
            navigate('/');
        }

    },[location,navigate]);
    if (!location.state || !location.state.movie) {
        return null; 
    }

   
    const {movie} = location.state;
    const year = movie.release_date.split('-')[0];


    const genreMap = {
        28: "Action",
        12: "Adventure",
        16: "Animation",
        35: "Comedy",
        80: "Crime",
        99: "Documentary",
        18: "Drama",
        10751: "Family",
        14: "Fantasy",
        36: "History",
        27: "Horror",
        10402: "Music",
        9648: "Mystery",
        10749: "Romance",
        878: "Science Fiction",
        10770: "TV Movie",
        53: "Thriller",
        10752: "War",
        37: "Western"
    };

    const getGenreNames = (genreIds) => {
        return genreIds
            .map((id) => genreMap[id])
            .filter(Boolean)
            .join(", ");
    };

    
    const [mylist, setMyList] = useState(() => {
        // Load movie from localStorage
        const savedlist = localStorage.getItem('mylist');
        return Array.isArray(JSON.parse(savedlist)) ? JSON.parse(savedlist) : [];
    });

    useEffect(() => {
        localStorage.setItem('mylist', JSON.stringify(mylist));
    }, [mylist]);
    
    const addToList = (movie)=>{
        if (!mylist.some((item)=>item.id === movie.id)) {
            const updatedList = [...mylist , movie];
            setMyList(updatedList);
            alert('done')
            
        } else {
            alert('added already')
            
        }

    }

    const removeList =(movieid)=>{
        setMyList((prevList)=>prevList.filter((item) =>item.id !== movieid))
    }



  return (
    <div className='min-h-[100px] bg-black'>
        <div className='min-h-[100vh] grid grid-cols-1'>
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
                   <h1>{getGenreNames(movie.genre_ids)}</h1>
                   </div>
                </div>


            </div>
            <div className='bg px-4'>
                <div>
                    <button className='h-[40px] w-full bg-white capitalize flex items-center justify-center gap-2 text-[1.2rem] md:text-[1.4rem] rounded-lg font-semibold'> <FaPlay />play</button>
                    <button className='h-[40px] w-full bg-gray-600 text-white capitalize flex items-center justify-center gap-2 text-[1.2rem] md:text-[1.4rem] rounded-lg font-semibold mt-2 md:mt-5'> <HiDownload /> download</button>
                </div>
                <div className='text-white mt-2 md:mt-5 text-[1.2rem] text-start '>
                    <p>{movie.overview}</p>
                </div>

                <div className='text-white mt-2 flex gap-5 text-[1.3rem]'>
                    <button className='flex flex-col items-center cursor-pointer' onClick={() =>addToList(movie)}>  <IoAddOutline />   Add To List</button>
                    <button className='flex flex-col items-center cursor-pointer'><SlLike /> Rate</button>
                    <button className='flex flex-col items-center cursor-pointer'><TbLocationShare /> Share</button>
                </div>
           
            </div>
            <div className='bg-black min-h-[100px] mt-5 px-4'>
                <div>
                    <h1 className='font-semibold text-white text-[1.5rem]'>Your List</h1>
                </div>
                <div className='grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-3'>
                     {mylist.length > 0 ? (
                            mylist.map((item) => (
                                <div key={item.id} className='p-2 rounded-lg'>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                                        alt={item.original_title}
                                        className='h-[inherit]'
                                    />
                                    <h2 className='text-white text-start mt-2 font-bold text-[1.3rem]'>{item.original_title}</h2>
                                    <button  className='text-white capitalize border-white border-[2px] p-2 rounded-md' onClick={()=>removeList(item.id)}>delete list</button>
                                </div>
                            ))
                        ) : (
                            <p className='text-white'>No movies in your list yet!</p>
                        )}

                </div>
            </div>

        </div>
    </div>
  )
}

export default MovieDtails