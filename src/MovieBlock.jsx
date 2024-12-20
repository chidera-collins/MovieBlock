import React, { useEffect, useState } from 'react'
import Movies from './Movies/Movies'
import MovieDtails from './MovieDetails/MovieDtails'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Loader from './Loader/Loader'
import MyList from './Mylist/MyList'


function MovieBlock() {
  const [loading , setLoading] = useState(true);
  useEffect(()=>{
    const timer= setTimeout(()=>setLoading(false),9000);
    return()=>clearTimeout(timer)
  },[])
  return (
    <div>
    {loading ? (
      <Loader />
    ) : (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/MovieDetails" element={<MovieDtails />} />
          <Route path='/Mylist' element={<MyList/>}/>
        </Routes>
      </BrowserRouter>
    )}
  </div>
);
}

export default MovieBlock