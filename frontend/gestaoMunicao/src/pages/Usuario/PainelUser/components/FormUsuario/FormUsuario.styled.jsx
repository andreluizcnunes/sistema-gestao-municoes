import styled from 'styled-components'

export const Cmain = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    background-color: #A0A0A0;
    margin-left: 2rem;
    margin-right: 2rem;
    border-radius: 20px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 1.2rem;

    label{
        width: 100%;
        p{
            font-size: 1.8rem;
            font-weight: 700;
            margin-left: .5rem ;
            display: flex;
            align-items: center;
            gap: 1rem;

            span{
                font-size: 1rem;
            }
        }

        input{
            font-size: 1.2rem;
            border-radius: 20px;
            border: none;
            padding: .8rem;
            filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        }
    }

    button{
        width: 50%;
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

export const GroupInput = styled.div`
    display: flex;
    justify-content: start;
    width: 100%;
    gap: .5rem;
`;

export const NomeCompleto = styled.label`
    
    input{
        width: 100%;
    }

`;

export const EmailUser = styled.label`
    
    input{
        width: 100%;
    }

`;

export const SenhaUser = styled.label`
    
    input{
        width: 100%;
    }

`;