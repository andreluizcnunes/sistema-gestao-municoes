import styled from 'styled-components'

export const CLeftBar = styled.div`
    background-color: #E0E0E0;
    width: 17rem;
    height: 100vh;
    position: fixed;
    z-index: 90;
    left: 0;
    top: 0;

    display: flex;
    flex-direction: column;
    padding-top: 7%;
    gap: 1rem;

    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.70);

    

    @media screen and (max-width: 1600px) {
        width: 12rem;
    }

    @media screen and (max-width: 1300px) {
        padding-top: 10%;
    }

    @media screen and (max-width: 1050px) {
        width: 10rem;
    }
`;