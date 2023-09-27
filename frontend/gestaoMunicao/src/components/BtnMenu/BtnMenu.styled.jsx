import styled from 'styled-components'

export const CBotao = styled.button`
    font-size: 1.3rem;
    padding: .7rem 1rem;
    font-weight: 600;
    border-radius: .2rem;
    background-color: #1E217C;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    border: none;


    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    &:hover{
        background-color: #2c30aa;
    }

    img{
        width: 10%;
    }

    /* @media screen and (max-width: 1400px) {
        width: 7rem;
        height: 7rem;

        font-size: 1.2rem;
    } */
`;