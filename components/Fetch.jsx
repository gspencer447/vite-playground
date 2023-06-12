import { useState, useEffect } from "react";

export default function Fetch(){
    const [pokeTypes, setPokeTypes] = useState([])
    pokeTypes.sort()

    function getPokemon() {
        fetch(`https://pokeapi.co/api/v2/type/`)
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            console.log(data.results)
            let pokeTypeArr = []
            for(let i = 0; i < data.results.length; i++){
                console.log(data.results[i].name)
                pokeTypeArr.push(data.results[i].name)
                setPokeTypes([...pokeTypeArr]);
            }
            // setPokeTypes(pokeTypeArr)
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }

useEffect(()=>{
    getPokemon()
}, [])

    return (
    <div>
        <ul>
            {/* {/*put the logos of the types beside the name} */}
            {pokeTypes.map((type, index)=>{
                return <li key ={index+type}>{type}</li>
            })}
        </ul>
    </div>
        )
    }
