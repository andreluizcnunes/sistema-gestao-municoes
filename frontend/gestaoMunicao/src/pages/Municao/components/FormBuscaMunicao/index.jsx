import { useEffect, useState } from "react";

import { Cmain, BuscarMunicao } from "./BuscaMunicao.styled"

import TabelaMunicao from "../TabelaMunicao";

function FormBuscaMunicao(){
    const [municao, setMunicao] = useState('')
    const [resultados, setResultados] = useState([]);

    useEffect(() => {
        if (municao) {
            fetch(`http://localhost:8080/municao/consultar?nome=${municao}`)
              .then(retorno => retorno.json())
              .then(retornoConvertido => setResultados(retornoConvertido));
        }else {
            // Se razaoSocial for uma string vazia, limpe os resultados
            setResultados([]);
        }

    }, [municao]);

    const handleSubmit = (e) =>{
        e.preventDefault();
    }

    return(
        <Cmain>
            <BuscarMunicao onSubmit={handleSubmit}>
                <p>
                    Busca:
                </p>
                <input 
                    type="text" 
                    name='nome' 
                    id='nome' 
                    placeholder='Digite o nome da Munição'
                    value={municao} 
                    onChange={(e) => setMunicao(e.target.value)}
                    required
                />
            </BuscarMunicao>

            <div>
                {resultados.length > 0 ? (
                    <TabelaMunicao vetor={resultados}/>
                ): null}
            </div>       
        </Cmain>
    );
}

export default FormBuscaMunicao;