import { useEffect, useState } from "react";
import { Cmain, BuscarMunicao } from "./BuscarPolicial.styled"

import TabelaPolicial from "../TabelaPolicial"

function BuscarPolicial(){

    const [policial, setPolicial] = useState('')
    const [resultados, setResultados] = useState([]);

    useEffect(() => {
        if (policial) {
            fetch(`http://localhost:8080/policial/consultar?nome=${policial}`)
              .then(retorno => retorno.json())
              .then(retornoConvertido => setResultados(retornoConvertido));
        }else {
            // Se razaoSocial for uma string vazia, limpe os resultados
            setResultados([]);
        }

    }, [policial]);

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
                    name='buscarMunicao' 
                    id='buscarMunicao' 
                    placeholder='Digite o nome do Policial'
                    value={policial} 
                    onChange={(e) => setPolicial(e.target.value)} 
                    required
                />

                {/* <button type='submit'>
                    Buscar
                </button> */}
            </BuscarMunicao>

            <div>
            <div>
                {resultados.length > 0 ? (
                    <TabelaPolicial vetor={resultados}/>
                ): null}
            </div> 
            </div>       
        </Cmain>
    );
}

export default BuscarPolicial;