import React, { useState, useEffect } from "react";
import axios from 'axios'
import PokemonCard from "../PokemonCard/PokemonCard";
const api= axios.create({
    baseURL: "https://pokeapi.co/api/v2/"
  })

  


     const Pokemon = () => {

        const [pokemonArr, setPokemonArr] = useState([]);
        const getPokemons = async () => {
            try {
                const res = await api.get('pokemon/');
                const resTot = await api.get('pokemon/?limit='+res.data.count);
                setPokemonArr( resTot.data.results)
            } catch (error) {
                console.error('Error getting Pokemons:', error);
            }
            };
            
            useEffect(()=>{
                getPokemons()
             },[])

            const [data, setData] = useState({
                name: ""
            });
        
            const initialState = {
                name: "",
            };
        
            const clearState = () => {
                setData(initialState);
            };
        
            const handleInputChange = (event) => {
                console.log(event.target.name)
                console.log(event.target.value)
                setData({
                    ...data,
                    [event.target.name]: event.target.value,
                });
            };
            
            const [isSerching, setIsSerching] = useState(true);
            const [pokemonDataArr, setpokemonDataArr] = useState([]);

            const handleSubmit =  (event) => {
                event.preventDefault();
                console.log("sending data..." + data.name);
                clearState();
                setIsSerching(false)
                setpokemonDataArr([])
                message.map((pokemon)=>{
                    getThisPokemonData(pokemon)
                    console.log('calling getThisPokemonData for : ',pokemon )
                    console.log('pokemonDataArr here : ', pokemonDataArr)
                })

            };
            
            const [message,setMessage] = useState([])
            const searchPockemon = () => {
                setMessage("")
                const regex = new RegExp(`^${data.name}`,'i');
                let newMessage=""
                const PokemonArrFiltered = pokemonArr.filter(pokemon => (regex.test(pokemon.name) && data.name.length != 0));
                setMessage(PokemonArrFiltered)
            };
            
            useEffect(() => {
                searchPockemon();
            }, [data]);
            const myPokemonArr=[];
            const getThisPokemonData = async (pokemon) => {
                try {
                    const url = pokemon.url
                    const urlParts = url.split('/');
                    const filteredUrlParts = urlParts.filter(part => part !== '');
                    const lastUrlValue = filteredUrlParts[filteredUrlParts.length - 1];
                    const res = await api.get("pokemon/"+lastUrlValue);
                    // const pokemonDataArrNew=pokemonDataArr.concat([res.data])
                    myPokemonArr.push(res.data)
                    console.log(" --------------     myPokemonArr : ", myPokemonArr )
                    setpokemonDataArr(myPokemonArr)
                } catch (error) {
                    console.error('Error getting Pokemon:', error);
                }
                };
                //  useEffect(()=>{
                //      getThisPokemonData()
                //   },[])

        return (
          <>
            {console.log('Pokemons : ', pokemonArr)}
            {isSerching?(
                <>
                <form onSubmit={handleSubmit} id="simple-form">
                    <div className="form-group">
                        <label for="name">Pokemon Name </label>
                        <input
                            type="text"
                            placeholder="name"
                            value={data.name}
                            onChange={handleInputChange}
                            name="name"
                        />
                    </div>
                
                    <button type="submit" >Search</button>
                </form>
                {message.map((pokemon,i)=>{
                    return  <p key={i}>{pokemon.name}</p>
                })}
            </>
            ):(<div className="container">
                <button type="submit" onClick={()=>setIsSerching(true)} >Search other Pokemon</button>
                {/* {message.map((pokemon,i)=>{
                    getThisPokemonData(pokemon)
                    console.log('calling getThisPokemonData for : ',pokemon )
                })} */}
                
                {console.log("pokemonDataArr  :",pokemonDataArr)}
                {console.log("pokemonDataArr count  :",pokemonDataArr.length)}
                {pokemonDataArr.map((pokemonData,i )=>{
                    console.log('estoy iterando : ',i )
                   return <PokemonCard name={pokemonData.name} front={pokemonData.sprites.front_default}  back ={pokemonData.sprites.back_default}frontShiny={pokemonData.sprites.front_shiny} backShiny={pokemonData.sprites.back_shiny} home={pokemonData.sprites.other.home.front_default}/>
                })
                } 
                </div>
            )}
            
            
            
          </>
        )
      }
      

export default Pokemon