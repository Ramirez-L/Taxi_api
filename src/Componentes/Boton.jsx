import {useState, useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
// import Tabla from './Tabla/Tabla'; 
import { makeCall, Clear } from '../redux/actions.js';



function Boton(){
    const dispatch = useDispatch()

    var [query, setQuery] = useState('');
    var datos = useSelector(state => state.datos);
    var consulta = useSelector(state => state.consulta);


    const llamada = event => {
        event.preventDefault()
        try {
            dispatch(makeCall(query))
        }
        catch (error) {
            console.log(error)
        }
    }

    const limpiar = event => {
        event.preventDefault()
        dispatch(Clear())
        setQuery('')
    }

    useEffect(() => {
        // Nada
    }, [datos])
    

    return (<div>

        <form onSubmit={llamada} autoComplete='off'>
            <label for="query">Ingresar Query:</label><br></br>

            <input 
            type={"text"} 
            id="query" 
            name="query" 
            value={query} 
            onChange={event => setQuery(event.target.value)}
            required
            ></input><br></br>

            <button type="submit">Submit</button>
        </form>

        <form onSubmit={limpiar}>
            <button type='submit'>Clear</button>
        </form>

        <h1>{consulta}</h1>

    </div>)
}

export default Boton