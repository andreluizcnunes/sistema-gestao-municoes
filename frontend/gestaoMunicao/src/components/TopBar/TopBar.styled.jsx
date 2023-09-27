import styled from 'styled-components'

export const CNavBar = styled.div`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #1E217C;
    padding: 0.625rem;
    z-index: 99;

    display: flex;
    align-items: center;
    justify-content: space-between;

    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    img{
        width: 13.6875em;
    }

    button{
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 1rem;
        border: none;
        padding: .5rem 1rem;
        font-size: 2.0625rem;
        background-color: #D9D9D9;
        cursor: pointer;

        img{
            width: 3.3125rem !important;
            margin-left: 1rem;
        }

        &:hover{
            background-color: #929292;
        }
    }

    @media screen and (max-width: 1600px) {
        img{
            width: 8rem;
        }

        button{
            font-size: 1.5rem;

            img{
                width: 1.5rem !important;
                margin-left: 1rem;
            }
        }
    }
`;

export const CUser = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;

    img{
        width: 3.0625rem;
    }

    p{
        font-size: 1.5rem;
        color: #fff;

    }

    @media screen and (max-width: 1400px) {
        img{
            width: 2.2rem;
        }

        p{
            font-size: 1.1rem;
        }
    }

    @media screen and (max-width: 1000px) {
        p{
            display: none;
        }
    }
`;