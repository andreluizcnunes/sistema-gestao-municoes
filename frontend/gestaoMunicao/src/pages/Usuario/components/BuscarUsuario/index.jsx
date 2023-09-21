import { Cmain, BuscarUsuario } from "./BuscarUsuario.styled"

import TabelaUsuario from "../TabelaUsuario";
import { useEffect, useState } from "react";

function BucarUsuario(){

    const [usuario, setUsuario] = useState('')
    const [resultados, setResultados] = useState([]);

    useEffect(() => {
        if (usuario) {
            fetch(`http://localhost:8080/users/consultar?nome=${usuario}`)
              .then(retorno => retorno.json())
              .then(retornoConvertido => setResultados(retornoConvertido));
        }else {
            // Se razaoSocial for uma string vazia, limpe os resultados
            setResultados([]);
        }

    }, [usuario]);

    const handleSubmit = (e) =>{
        e.preventDefault();
    }


    return(
      <Cmain>
            <BuscarUsuario onSubmit={handleSubmit}>
                <p>
                    Busca:
                </p>
                <input 
                    type="text" 
                    name='buscarMunicao' 
                    id='buscarMunicao' 
                    placeholder='Digite o nome do Usuário' 
                    value={usuario} 
                    onChange={(e) => setUsuario(e.target.value)}
                    required
                />

                {/* <button type='submit'>
                    Buscar
                </button> */}
            </BuscarUsuario>

            <div>
                {resultados.length > 0 ? (
                    <TabelaUsuario vetor={resultados}/>
                ): null}
            </div>       
        </Cmain>
    );
}

export default BucarUsuario;