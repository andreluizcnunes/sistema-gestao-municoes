import { Cmain, NomeCompleto, EmailUser, SenhaUser } from './FormUsuario.styled';

function FormUsuario(){
    return(
        <Cmain>
            <NomeCompleto htmlFor="NomeCompleto">
                <p>
                    Nome Completo: <span>(Campo Obrigatório)</span>
                </p>
                <input 
                    type="text" 
                    name='NomeCompleto' 
                    id='NomeCompleto' 
                    placeholder='Digite o Nome Completo' 
                    required
                />
            </NomeCompleto>

            <EmailUser htmlFor="EmailUser">
                <p>
                    E-mail: <span>(Campo Obrigatório)</span>
                </p>
                <input 
                    type="text" 
                    name='EmailUser' 
                    id='EmailUser' 
                    placeholder='Digite o e-mail' 
                    required
                />
            </EmailUser>

            <SenhaUser htmlFor="SenhaUser">
                <p>
                    Senha: <span>(Campo Obrigatório)</span>
                </p>
                <input 
                    type="text" 
                    name='SenhaUser' 
                    id='SenhaUser' 
                    placeholder='Digite a senha' 
                    required
                />
            </SenhaUser>
             

            <button type='submit'>
                Salvar
            </button>
        </Cmain>
    );
}

export default FormUsuario;