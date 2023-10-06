import styled from 'styled-components'

export const CLogin = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    
    form{
        background-color: #1E217C;
        padding-top: 30px;
        position: relative;

        width: 100%;
        max-width: 34.375rem;
        height: 100%;
        max-height: 43.75rem;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.50);


        p{
            color: #fd0202;
            position: absolute;
            top: 25%;
            text-align: center;
            font-size: 1rem;
        }
        

        img{
            width: 100%;
            max-width: 21.8125rem;
            margin-bottom: 6.125rem;
        }

        @media screen and (max-width: 1400px) {
            max-width: 25rem;
            max-height: 30rem;

            img{
                max-width: 15rem;
                margin-bottom: 3rem;
            }
        }
    }

    
`;

export const CInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4.0625rem;
    width: 100%;

    button{
        background-color: #737373;
        color: #fff;
        padding: 0.4375rem 4.5rem;
        font-size: 2.5rem;
        border-radius: 20px;
        border: none;
        cursor: pointer;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.50);

        &:hover{
            background-color: #3f3f3f;
        }
        
    }

    a{
        text-decoration: none;
        color: #fff;
        font-size: 2rem;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    @media screen and (max-width: 1400px) {
        gap: 2rem;

        button{
            font-size: 2rem;
        }

        a{
            font-size: 1.3rem;
        }
    }
`;

export const InputLogin = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;

    img{
        width: 100% !important;
        max-width: 3.0625rem !important;
        margin: 0 !important;
    }

    input{
        width: 70%;
        max-width: 28.125rem;
        border-radius: .2rem;
        border: none;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.50);
        font-size: 2rem;
        padding: 0.3125rem 0.625rem;
    }

`;