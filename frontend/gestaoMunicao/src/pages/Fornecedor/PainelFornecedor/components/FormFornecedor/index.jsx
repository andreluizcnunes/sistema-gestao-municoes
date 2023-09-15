import { Cmain, RazaoSocial, Cnpj, Inscricao, GroupInput } from './FormFornecedor.styled';

function FormFornecedor({ getDadosForm, obj, cadastrar }){
    return(
        <Cmain>
            <RazaoSocial htmlFor="razaoSocial">
                <p>
                    Razão Social: <span>(Campo Obrigatório)</span>
                </p>
                <input 
                    type="text" 
                    name='razaoSocial' 
                    id='razaoSocial' 
                    placeholder='Digite a Razão Social'
                    onChange={getDadosForm} 
                    value={obj.razaoSocial}
                    required
                />
            </RazaoSocial>

            <GroupInput>
                <Cnpj htmlFor="cnpj">
                    <p>
                        CNPJ: <span>(Campo Obrigatório)</span>
                    </p>
                    <input 
                        type="text" 
                        name='cnpj' 
                        id='cnpj' 
                        placeholder='Digite o CNPJ' 
                        onChange={getDadosForm} 
                        value={obj.cnpj}
                        required
                    />
                </Cnpj>

                <Inscricao htmlFor="inscricao">
                    <p>
                        Inscrição Estadual:
                    </p>
                    <input 
                        type="text" 
                        name='inscricao' 
                        id='inscricao' 
                        placeholder='Digite a Razão Social'
                        onChange={getDadosForm} 
                        value={obj.inscricao}
                    />
                </Inscricao>
            </GroupInput>            

            <button onClick={cadastrar} type='submit'>
                Salvar
            </button>
        </Cmain>
    );
}

export default FormFornecedor;