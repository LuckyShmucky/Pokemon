import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    searchTerm: '',
    pokemonData: null
}

export const searchBarSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchTerm: (state, action) => {
            return {...state, searchTerm: action.payload }
        },
        setPokemonData: (state, action) =>{
            return {...state, pokemonData: action.payload}
        }
    }
})

export const {setSearchTerm, setPokemonData} = searchBarSlice.actions

export const fetchData = () =>{
    const searchThunk = async (dispatch, getState) => {
        let state = getState()
        // console.log(state)
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${state.search.searchTerm}`)
        const resData = await response.json()
        // console.log(state.search.searchTerm)
        console.log(resData)
         dispatch(setPokemonData(resData)) 
    }
    return searchThunk
}


export default searchBarSlice.reducer