import { Cmain, NomeCompleto, PolicialCpf, PolicialRg, GroupInput, DataNascimento, PolicialTelefone } from './FormPolicial.styled';

function FormMunicao(){
    return(
        <Cmain>
            <NomeCompleto htmlFor="NomeCompleto">
                <p>
                    Nome Completo <span>(Campo Obrigatório)</span>
                </p>
                <input 
                    type="text" 
                    name='NomeCompleto' 
                    id='NomeCompleto' 
                    placeholder='Digite o Nome Completo' 
                    required
                />
            </NomeCompleto>

            <GroupInput>
                <PolicialCpf htmlFor="PolicialCpf">
                    <p>
                        CPF: <span>(Campo Obrigatório)</span>
                    </p>
                    <input 
                        type="text" 
                        name='PolicialCpf' 
                        id='PolicialCpf' 
                        placeholder='Digite o CPF' 
                        required
                    />
                </PolicialCpf>

                <PolicialRg htmlFor="PolicialRg">
                    <p>
                        RG:
                    </p>
                    <input 
                        type="text" 
                        name='PolicialRg' 
                        id='PolicialRg' 
                        placeholder='Digite o RG'
                    />
                </PolicialRg>
            </GroupInput>

            <GroupInput>
                <DataNascimento htmlFor="DataNascimento">
                    <p>
                        Data de Nascimento: <span>(Campo Obrigatório)</span>
                    </p>
                    <input 
                        type="text" 
                        name='DataNascimento' 
                        id='DataNascimento' 
                        placeholder='Digite a data nascimento' 
                        required
                    />
                </DataNascimento>

                <PolicialTelefone htmlFor="PolicialTelefone">
                    <p>
                        Telefone:
                    </p>
                    <input 
                        type="text" 
                        name='PolicialTelefone' 
                        id='PolicialTelefone' 
                        placeholder='Digite o Telefone'
                    />
                </PolicialTelefone>
            </GroupInput>            

            <button type='submit'>
                Salvar
            </button>
        </Cmain>
    );
}

export default FormMunicao;