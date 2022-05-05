import React from "react";
import { useDispatch } from 'react-redux'
import { setSearchTerm, fetchData} from '../Slices/SearchAndDataSlice'


function SearchBar(){
// const searchState = useSelector(state => state.search)
const dispatch = useDispatch()
    return( 
        <div className="relative top-32 w-screen h-[2rem]  pl-[2rem]">
         <input type='text' className="w-[50%] h-[100%] pl-[1.1rem] px-5 " placeholder="fetch a pokemon" onChange={(e)=>dispatch(setSearchTerm(e.target.value.toLowerCase()))}></input>
        
            <button className="w-[20%] h-[100%]" onClick={() => dispatch(fetchData())}>log state</button> 
                
        </div>
     
    )
}

export default SearchBar