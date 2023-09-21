import styled from 'styled-components'

export const Cmain = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: #A0A0A0;
    margin-left: 2rem;
    margin-right: 2rem;
    border-radius: 20px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 1.2rem;

    label{
        width: 90%;
        p{
            font-size: 2rem;
            font-weight: 700;
            margin-left: .5rem ;
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        input{
            font-size: 1.2rem;
            border-radius: 20px;
            border: none;
            padding: .8rem;
            filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        }
    }
`;

export const BuscarUsuario = styled.label`
    display: flex;
    gap: .5rem;
    input{
        width: 100%;
    }

`;