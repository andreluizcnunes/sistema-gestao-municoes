import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    max-width: 300px;
    background-color: #e4e4e4;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border-radius: 10px;

    -webkit-box-shadow: 4px 4px 17px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 4px 4px 17px 0px rgba(0,0,0,0.75);
    box-shadow: 4px 4px 17px 0px rgba(0,0,0,0.75);

    p{
        font-size: 1.5rem;
        font-weight: 600;
    }
`;