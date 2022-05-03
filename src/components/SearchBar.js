import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import { setSearchTerm, fetchData} from '../Slices/SearchAndDataSlice'


function SearchBar(){
const searchState = useSelector(state => state.search)
const dispatch = useDispatch()
    return( 
        <div className="relative top-32">
         <input type='text' placeholder="fetch a pokemon" onChange={(e)=>dispatch(setSearchTerm(e.target.value.toLowerCase()))}></input>
        
            <button onClick={() => dispatch(fetchData())}>log state</button> 
                
        </div>
     
    )
}

export default SearchBar