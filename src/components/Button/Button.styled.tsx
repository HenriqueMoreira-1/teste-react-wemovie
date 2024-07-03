import styled from "styled-components";

export const Button = styled.button`
    background-color: transparent;
    color: ${({ theme }) => theme.color.white};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme }) => theme.size.xs};
    text-transform: uppercase;
    cursor: pointer;

    border: none;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    gap: ${({ theme }) => theme.size.xs};
`;

export const ButtonPrimary = styled(Button)`
    background-color: ${({ theme }) => theme.color.blue[500]};
    padding: 11px 0;
`;

export const ButtonSuccess = styled(Button)`
    background-color: ${({ theme }) => theme.color.green[500]};
    padding: 11px 0;
`;
