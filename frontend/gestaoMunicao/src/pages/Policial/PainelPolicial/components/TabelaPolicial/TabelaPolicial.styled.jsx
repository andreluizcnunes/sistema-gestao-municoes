import styled from 'styled-components'

export const CTabela = styled.table`
    width: 90%;
    margin-left: 2rem;
    background-color: #A0A0A0;

    thead{
        background-color: #4B4B4B;
        color: #fff;
    }
    
    th{
        text-align: center;
        font-size: 1.3rem;
        font-weight: 600;
        padding: .2rem 0;
    }

    td{
        text-align: center;
        font-weight: 500;
        font-size: 1.1rem;
        background-color: #dddddd;
        padding: .2rem 0;
    }
    
    button{
        width: initial !important;
        font-size: initial !important;
    }
`;