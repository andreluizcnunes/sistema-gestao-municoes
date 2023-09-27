import styled from 'styled-components'

export const ModalWrapper = styled.div`
    position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6); /* Fundo escuro para cobrir a tela */
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background: #cccccc;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    max-width: 50vw;
    width: 100%;

    h2{
        font-size: 2rem;
        text-align: center;
    }

    p{
        font-size: 1.8rem;
        font-weight: 700;
        margin-left: .5rem ;
        text-align: center;
        background-color: #fff;
    }    
`;

export const ContainerButton = styled.div`
    
    display: flex;
    gap: .5rem;
    justify-content: center;
    align-items: center;


    button{
        width: 45%;
        border: none;
        border-radius: 20px;
        background: #4B4B4B;
        color: #fff;
        font-size: 2.5rem;
        cursor: pointer;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

        &:hover{
            background: #037903;
        }
    }
`;