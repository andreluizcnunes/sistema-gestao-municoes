import { Cmain, NomeMarca } from './FormMarca.styled';

function FormMarca(){
    return(
        <Cmain>
            <NomeMarca htmlFor="nomeMarca">
                <p>
                    Nome: <span>(Campo Obrigatório)</span>
                </p>
                <input type="text" name='nomeMarca' id='nomeMarca' placeholder='Digite a Razão Social' required/>
            </NomeMarca>           

            <button type='submit'>
                Salvar
            </button>
        </Cmain>
    );
}

export default FormMarca;