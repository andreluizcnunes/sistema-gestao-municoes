import { Cmain, BuscarUsuario } from "./BuscarUsuario.styled"

function BucarUsuario(){
    return(
      <Cmain>
            <BuscarUsuario htmlFor="buscarMunicao">
                <p>
                    Busca:
                </p>
                <input 
                    type="text" 
                    name='buscarMunicao' 
                    id='buscarMunicao' 
                    placeholder='Digite o nome do Usuário' 
                    required
                />

                <button type='submit'>
                    Buscar
                </button>
            </BuscarUsuario>       
        </Cmain>
    );
}

export default BucarUsuario;