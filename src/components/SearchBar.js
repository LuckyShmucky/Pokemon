import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import {setPokemonData, setSearchTerm, fetchData} from '../Slices/SearchAndDataSlice'


function SearchBar(){
const searchState = useSelector(state => state.search)
const dispatch = useDispatch()
    return( 
        <div>
            <input type='text' placeholder="find a pokemon" onChange={(e)=> dispatch(setSearchTerm(e.target.value))}></input>
            {/* <button onClick={console.log(searchState)}>log state</button> */}
            <button onClick={() => dispatch(fetchData())}>log state</button>

        </div>
    )
}

export default SearchBar