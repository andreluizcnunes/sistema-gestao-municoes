import styled from 'styled-components'

export const CLeftBar = styled.div`
    background-color: #E0E0E0;
    width: 20%;
    height: 90vh;

    display: flex;
    flex-direction: column;
    padding-top: 5%;
    gap: 1rem;

    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.70);

    a{
        text-decoration: none;
        background-color: #1E217C;
        color: #E0E0E0;
        text-align: center;
        font-size: 2rem;
        padding-top: .9375rem;
        padding-bottom: .9375rem;
        font-weight: 500;

        &:hover{
            background-color: #2f34bb;
        }
    }

    @media screen and (max-width: 1600px) {
        width: 15%;

        a{
            font-size: 1.2rem;
        }
    }
`;