import { useEffect, useState } from "react";

import { Cmain, BuscarMarca } from "./FormBuscaMarca.styled"

import TabelaMacar from "../TabelaMarca"

function FormBuscaMarca(){

    const [marca, setMarca] = useState('')
    const [resultados, setResultados] = useState([]);

    useEffect(() => {
        if (marca) {
            fetch(`http://localhost:8080/marca/consultar?nome=${marca}`)
              .then(retorno => retorno.json())
              .then(retornoConvertido => setResultados(retornoConvertido));
        }else {
            // Se razaoSocial for uma string vazia, limpe os resultados
            setResultados([]);
        }

    }, [marca]);

    const handleSubmit = (e) =>{
        e.preventDefault();
    }

    return(
        <Cmain>
            <BuscarMarca onSubmit={handleSubmit}>
                <p>
                    Busca:
                </p>
                <input 
                    type="text" 
                    name='nome' 
                    id='nome' 
                    placeholder='Digite o nome da Marca'
                    value={marca} 
                    onChange={(e) => setMarca(e.target.value)}
                    required
                />

                {/* <button type='submit'>
                    Buscar
                </button> */}
            </BuscarMarca>

            <div>
                {resultados.length > 0 ? (
                    <TabelaMacar vetor={resultados}/>
                ): null}
            </div>       
        </Cmain>
    );
}

export default FormBuscaMarca;