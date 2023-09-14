import { Cmain, BuscarMunicao } from "./BuscaMunicao.styled"

function FormBuscaMunicao(){
    return(
      <Cmain>
            <BuscarMunicao htmlFor="buscarMunicao">
                <p>
                    Busca:
                </p>
                <input type="text" name='buscarMunicao' id='buscarMunicao' placeholder='Digite o nome da munição' required/>

                <button type='submit'>
                    Buscar
                </button>
            </BuscarMunicao>       
        </Cmain>
    );
}

export default FormBuscaMunicao;