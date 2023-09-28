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

export const GroupButton = styled.div`
    display: flex;
    justify-content: center;
    gap: .5rem;

    button{
        padding: .5rem .9rem;
        border: none;
        cursor: pointer;
        border-radius: .2rem;
        font-size: 1rem;
        color: #fff;
        -webkit-box-shadow: 3px 5px 14px -5px rgba(0,0,0,0.75);
        -moz-box-shadow: 3px 5px 14px -5px rgba(0,0,0,0.75);
        box-shadow: 3px 5px 14px -5px rgba(0,0,0,0.75);
        margin-top: .2rem;
        margin-bottom: .2rem;
    }

`;

export const ButtonEdit = styled.button`
    background-color: #0275d8;    

    &:hover{
        background-color:#014580;
    }
`;

export const ButtonDelete = styled.button`
    background-color: #d9534f;    

    &:hover{
        background-color: #dd1c15;
    }
`;