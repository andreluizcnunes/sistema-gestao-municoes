import { Cmain, BuscaFornecedor } from "./FormBuscaF.styled"

function FormBuscaFornecedor(){
    return(
      <Cmain>
            <BuscaFornecedor htmlFor="razaoSocial">
                <p>
                    Busca:
                </p>
                <input type="text" name='razaoSocial' id='razaoSocial' placeholder='Digite a Razão Social' required/>

                <button type='submit'>
                    Buscar
                </button>
            </BuscaFornecedor>       
        </Cmain>
    );
}

export default FormBuscaFornecedor;