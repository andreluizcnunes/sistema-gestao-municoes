import { Cmain, NomeMarca } from './FormMarca.styled';

function FormMarca({ getDadosForm, cadastrar, obj }){
    return(
        <Cmain>
            <NomeMarca htmlFor="nomeMarca">
                <p>
                    Nome: <span>(Campo Obrigatório)</span>
                </p>
                <input 
                    type="text" 
                    name='nome' 
                    id='nomeMarca' 
                    placeholder='Digite o Nome da Marca'
                    onChange={getDadosForm}
                    value={obj.nome}
                    required
                />
            </NomeMarca>           

            <button onClick={cadastrar} type='submit'>
                Salvar
            </button>
        </Cmain>
    );
}

export default FormMarca;