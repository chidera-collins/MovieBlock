import React from 'react'
import Movies from './Movies/Movies'
import MovieDtails from './MovieDetails/MovieDtails'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function MovieBlock() {
  return (
    <div>
        <BrowserRouter>
        
        <Routes>
            <Route path='/' element={<Movies/>}/>
       q    <Route path='/MovieDetails' element={ <MovieDtails/>}/>
        </Routes>
        
        </BrowserRouter>
       
    </div>
  )
}

export default MovieBlock