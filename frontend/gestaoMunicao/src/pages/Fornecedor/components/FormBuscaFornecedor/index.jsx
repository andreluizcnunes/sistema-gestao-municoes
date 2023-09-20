import { useEffect, useState } from "react";

import { Cmain, BuscaFornecedor } from "./FormBuscaF.styled"

import TabelaFornecedor from "../TabelaFornecedor"

function FormBuscaFornecedor(){

    const [razaoSocial, setRazaoSocial] = useState('');
    const [resultados, setResultados] = useState([]);

    

    useEffect(() => {
        if (razaoSocial) {
            fetch(`http://localhost:8080/fornecedor/consultardto?razaoSocial=${razaoSocial}`)
              .then(retorno => retorno.json())
              .then(retornoConvertido => setResultados(retornoConvertido));
        }else {
            // Se razaoSocial for uma string vazia, limpe os resultados
            setResultados([]);
        }

    }, [razaoSocial]);

    const handleSubmit = (e) =>{
        e.preventDefault();    
           
    }

    return(
      <Cmain>
            <BuscaFornecedor onSubmit={handleSubmit}>
                <p>
                    Busca:
                </p>
                <input 
                    type="text" 
                    name='razaoSocial' 
                    id='razaoSocial' 
                    placeholder='Digite a Razão Social' 
                    value={razaoSocial}
                    onChange={(e) => setRazaoSocial(e.target.value)}
                    required/>

                {/* <button type='submit'>
                    Buscar
                </button> */}
            </BuscaFornecedor>
            
            <div>
                {resultados.length > 0 ? (
                    <TabelaFornecedor 
                        vetor={resultados} 
                    />
                ) : null}
            </div>
        </Cmain>
    );
}

export default FormBuscaFornecedor;