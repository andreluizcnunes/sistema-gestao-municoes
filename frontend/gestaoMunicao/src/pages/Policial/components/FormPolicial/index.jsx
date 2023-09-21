import { Cmain, NomeCompleto, PolicialCpf, PolicialRg, GroupInput, DataNascimento, PolicialTelefone } from './FormPolicial.styled';

function FormMunicao({ getDadosForm, cadastrar, obj }){
    return(
        <Cmain>
            <NomeCompleto htmlFor="nome">
                <p>
                    Nome Completo <span>(Campo Obrigatório)</span>
                </p>
                <input 
                    type="text" 
                    name='nome' 
                    id='nome' 
                    placeholder='Digite o Nome Completo'
                    onChange={getDadosForm}
                    value={obj.nome} 
                    required
                />
            </NomeCompleto>

            <GroupInput>
                <PolicialCpf htmlFor="cpf">
                    <p>
                        CPF: <span>(Campo Obrigatório)</span>
                    </p>
                    <input 
                        type="text" 
                        name='cpf' 
                        id='cpf' 
                        placeholder='Digite o CPF' 
                        onChange={getDadosForm}
                        value={obj.cpf}
                        required
                    />
                </PolicialCpf>

                <PolicialRg htmlFor="rg">
                    <p>
                        RG:
                    </p>
                    <input 
                        type="text" 
                        name='rg' 
                        id='rg' 
                        placeholder='Digite o RG'
                        onChange={getDadosForm}
                        value={obj.rg}
                    />
                </PolicialRg>
            </GroupInput>

            <GroupInput>
                <DataNascimento htmlFor="dataNascimento">
                    <p>
                        Data de Nascimento: <span>(Campo Obrigatório)</span>
                    </p>
                    <input 
                        type="date" 
                        name='dataNascimento' 
                        id='dataNascimento' 
                        placeholder='Digite a data nascimento' 
                        onChange={getDadosForm}
                        value={obj.dataNascimento}
                        required
                    />
                </DataNascimento>

                <PolicialTelefone htmlFor="telefone">
                    <p>
                        Telefone:
                    </p>
                    <input 
                        type="text" 
                        name='telefone' 
                        id='telefone' 
                        placeholder='Digite o Telefone'
                        onChange={getDadosForm}
                        value={obj.telefone}
                    />
                </PolicialTelefone>
            </GroupInput>            

            <button onClick={cadastrar} type='submit'>
                Salvar
            </button>
        </Cmain>
    );
}

export default FormMunicao;