import styled from 'styled-components'

export const CBotao = styled.a`
    width: 9.375rem;
    height: 9.375rem;
    font-size: 1.75rem;
    font-weight: 600;
    display: flex;
    gap: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background-color: #1E217C;
    color: #fff;
    text-decoration: none;
    cursor: pointer;

    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    &:hover{
        background-color: #2c30aa;
    }

    img{
        width: 50%;
    }
`;