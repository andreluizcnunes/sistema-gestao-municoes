import { Cmain, RazaoSocial, Cnpj, Inscricao, GroupInput } from './FormFornecedor.styled';

function FormFornecedor(){
    return(
        <Cmain>
            <RazaoSocial htmlFor="razaoSocial">
                <p>
                    Razão Social: <span>(Campo Obrigatório)</span>
                </p>
                <input type="text" name='razaoSocial' id='razaoSocial' placeholder='Digite a Razão Social' required/>
            </RazaoSocial>

            <GroupInput>
                <Cnpj htmlFor="cnpj">
                    <p>
                        CNPJ: <span>(Campo Obrigatório)</span>
                    </p>
                    <input type="text" name='cnpj' id='cnpj' placeholder='Digite o CNPJ' required/>
                </Cnpj>

                <Inscricao htmlFor="razaoSocial">
                    <p>
                        Inscrição Estadual:
                    </p>
                    <input type="text" name='razaoSocial' id='razaoSocial' placeholder='Digite a Razão Social'/>
                </Inscricao>
            </GroupInput>            

            <button type='submit'>
                Salvar
            </button>
        </Cmain>
    );
}

export default FormFornecedor;