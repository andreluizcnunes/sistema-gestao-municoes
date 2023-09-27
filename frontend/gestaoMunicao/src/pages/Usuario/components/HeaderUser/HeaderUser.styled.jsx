import styled from 'styled-components'

export const ContentInfo = styled.div`
    padding: 2rem;
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    h2{
        font-size: 3.75rem;
    }

    hr{
        background: rgba(0, 0, 0, 0.30);
        width: 100%;
        height: 2px;
    }

    @media screen and (max-width: 1400px) {
        padding: 1.2rem 2rem;
        h2{
            font-size: 2.8rem;
        }
    }
`;

export const ContainerBtn = styled.div`
    display: flex;
    gap: 1rem;
`;