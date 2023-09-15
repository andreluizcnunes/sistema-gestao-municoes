import { Cmain, NomeCompleto, EmailUser, SenhaUser } from './FormUsuario.styled';

function FormUsuario({ getDadosForm, cadastrar, obj }){
    return(
        <Cmain>
            <NomeCompleto htmlFor="nome">
                <p>
                    Nome Completo: <span>(Campo Obrigatório)</span>
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

            <EmailUser htmlFor="email">
                <p>
                    E-mail: <span>(Campo Obrigatório)</span>
                </p>
                <input 
                    type="text" 
                    name='email' 
                    id='email' 
                    placeholder='Digite o e-mail'
                    onChange={getDadosForm}
                    value={obj.email}  
                    required
                />
            </EmailUser>

            <SenhaUser htmlFor="senha">
                <p>
                    Senha: <span>(Campo Obrigatório)</span>
                </p>
                <input 
                    type="text" 
                    name='senha' 
                    id='senha' 
                    placeholder='Digite a senha'
                    onChange={getDadosForm}
                    value={obj.senha}  
                    required
                />
            </SenhaUser>
             

            <button onClick={cadastrar} type='submit'>
                Salvar
            </button>
        </Cmain>
    );
}

export default FormUsuario;