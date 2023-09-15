import { Cmain, BuscarMunicao } from "./BuscarPolicial.styled"

function BuscarPolicial(){
    return(
      <Cmain>
            <BuscarMunicao htmlFor="buscarMunicao">
                <p>
                    Busca:
                </p>
                <input 
                    type="text" 
                    name='buscarMunicao' 
                    id='buscarMunicao' 
                    placeholder='Digite o nome do Policial' 
                    required
                />

                <button type='submit'>
                    Buscar
                </button>
            </BuscarMunicao>       
        </Cmain>
    );
}

export default BuscarPolicial;