import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Movies() {
    const [movieShow, SetMovieShow] = useState([]);
    const [options,setOptions] = useState('');
    const [search , setSearch] = useState('');
    const navigate = useNavigate()
    useEffect(()=>{
        async function movies() {
            const url = 'https://api.themoviedb.org/3/movie/popular';
            const options = {
              method: 'GET',
              headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZWEwNDE3NWJiODE5NWE3MmVjYmMzMjhkNzU3NGE1YSIsIm5iZiI6MTczNDM4MTQzMS44NzIsInN1YiI6IjY3NjA4Zjc3MjBiZTUzNzU3MmVlNTIwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S0c_BxhNw7v8i3sE6DD1GMs_XXUuG_ED2zI5N9wgXLk'
              }
            };

            try {
                const result = await fetch(url,options);
                const response = await result.json();

                if (!result) {
                    throw new Error("Failed to fetch");
                    
                    
                }

                console.log(response)
                 SetMovieShow(response.results)

                
            } catch (error) {
             console.error('Error fetching movies:', error); // Log errors

                
            }
        }
        movies();

    },[])
   const filteredMovies = [...movieShow].sort((a , b)=>{
    if (options=== 'Popularity') {
      return b.popularity - a.popularity
        
    } 
     else if (options === "Rating") {
     return b.vote_average - a.vote_average;
          }
          return 0;   
   });


   const searchedmovies = filteredMovies.filter((movie) => {
    const matchesSearch = movie.original_title.toLowerCase().includes(search.toLowerCase());
    return matchesSearch;

 
  });

  if (searchedmovies.length === 0) {
    console.log('we dont have')    
} else {
        console.log('we have it')
        
    }

    const movieMain =(movie)=>{
        navigate('/MovieDetails',{state:{movie}})
    }

 
  return (
    <div>
        <div className='min-h-[100px] bg-black  w-full'>
            <div>
                <h1 className='font-bold text-3xl text-center text-red-500'>Movie Block</h1>
            </div>
            <div className='min-h-[20px] bg mb-3 mt-2 flex justify-between px-2 border-[2px] border-white gap-6'>
                <div>
                    <span className='dark:text-white text-white'>Sort by:</span>
                        <select
                            className="max-w-28 select bg-bodybg text-boldtext font-custom font-bold text-[1rem]"
                            value={options}
                            onChange={(e) => setOptions(e.target.value)}
                        >
                            <option ></option>
                            <option>All</option>
                            <option>Rating</option>
                            <option>Popularity</option>
                        </select>
                </div>
                <div>
                    <input type="search" name="" id="" placeholder='search '   value={search}
                    onChange={(e) => setSearch(e.target.value)} />
                </div>

            </div>
            <div className='min-h-[100px] bg-black text-white grid grid-cols-3 gap-6 lg:grid-cols-4'>
                { searchedmovies.length > 0 ? (searchedmovies.map((item, index)=>(
                    <div
                     key={index} 
                     onClick={()=>movieMain(item)}
                     className='border-[2px] border-black relative rounded-md cursor-pointer'>
                        <div>
                            <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} className='object-contain' alt={item.original_title} />
                        </div>

                        <div className='min-h-[10px] w-full bg-purple-100 text-black px-1 flex justify-between items-center'>
                         <h1 className='text-ellipsis whitespace-nowrap overflow-hidden text-1xl font-bold text-center text-[1.2rem]'>{item.original_title}</h1>
                      

                        </div>
                       


                    </div>
                )
                )):(
                    <p className='text-white'>No Results found</p>
                )}

            </div>


        </div>


    </div>
  )
}

export default Movies