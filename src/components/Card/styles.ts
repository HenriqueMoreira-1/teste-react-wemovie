import styled from "styled-components";

export const CardContainer = styled.div`
    max-width: 339px;
    background-color: #FFFFFF;
    padding: 1rem;
    border-radius: 4px;
`;

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 307px;
`;

export const Image = styled.img`
    max-width: 147px;
    height: 188px;
`;

export const Title = styled.span`
    font-size: 0.8rem;
    font-weight: 700;
    color: #333333;
    margin: 0.5rem 0;
`;

export const Price = styled.span`
    font-size: 1rem;
    font-weight: 700;
    color: #2F2E41;
    margin-bottom: 0.2rem;
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 307px;
    height: 40px;
    background-color: #009EDD;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 0.8rem;
    border-radius: 4px;
    padding: 0.5rem;
`;

export const CounterText = styled.span`
    margin: 0 0.8rem 0 0.1rem;
    font-size: 0.8rem;
    font-weight: 400;
`;