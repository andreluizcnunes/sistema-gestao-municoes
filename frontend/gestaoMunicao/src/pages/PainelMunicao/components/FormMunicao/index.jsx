import { Cmain, NomeMunicao, Marca, Modelo, GroupInput, Calibre, Peso } from './FormMunicao.styled';

function FormMunicao(){
    return(
        <Cmain>
            <NomeMunicao htmlFor="NomeMunicao">
                <p>
                    Nome Munição: <span>(Campo Obrigatório)</span>
                </p>
                <input type="text" name='NomeMunicao' id='NomeMunicao' placeholder='Digite o Nome da Munição' required/>
            </NomeMunicao>

            <GroupInput>
                <Marca htmlFor="marca">
                    <p>
                        Marca: <span>(Campo Obrigatório)</span>
                    </p>
                    <input type="text" name='marca' id='marca' placeholder='Digite a Marca' required/>
                </Marca>

                <Modelo htmlFor="Modelo">
                    <p>
                        Modelo:
                    </p>
                    <input type="text" name='Modelo' id='Modelo' placeholder='Digite o Modelo'/>
                </Modelo>
            </GroupInput>

            <GroupInput>
                <Calibre htmlFor="Calibre">
                    <p>
                        Calibre: <span>(Campo Obrigatório)</span>
                    </p>
                    <input type="text" name='Calibre' id='Calibre' placeholder='Digite o Calibre' required/>
                </Calibre>

                <Peso htmlFor="Peso">
                    <p>
                        Peso:
                    </p>
                    <input type="text" name='Peso' id='Peso' placeholder='Digite o Peso'/>
                </Peso>
            </GroupInput>            

            <button type='submit'>
                Salvar
            </button>
        </Cmain>
    );
}

export default FormMunicao;