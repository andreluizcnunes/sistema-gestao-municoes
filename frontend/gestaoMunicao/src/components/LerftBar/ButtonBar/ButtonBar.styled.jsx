import styled from 'styled-components'

export const Cbutton = styled.button`
    
    width: 90%;
    margin: 0 auto;
    text-decoration: none;
    background-color: #1E217C;
    color: #E0E0E0;
    text-align: center;
    font-size: 2rem;
    padding-top: .9375rem;
    padding-bottom: .9375rem;
    font-weight: 500;
    border: none;
    cursor: pointer;

    &:hover{
        background-color: #2f34bb;
    }
    

    @media screen and (max-width: 1600px) { 
        
        font-size: 1.2rem;
        
    }
`;