import { Cmain, BuscarMarca } from "./FormBuscaMarca.styled"

function FormBuscaMarca(){
    return(
        <Cmain>
            <BuscarMarca htmlFor="nomeMarca">
                <p>
                    Busca:
                </p>
                <input type="text" name='nomeMarca' id='nomeMarca' placeholder='Digite o nome da Marca' required/>

                <button type='submit'>
                    Buscar
                </button>
            </BuscarMarca>       
        </Cmain>
    );
}

export default FormBuscaMarca;