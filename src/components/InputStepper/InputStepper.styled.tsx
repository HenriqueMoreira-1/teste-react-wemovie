import styled from "styled-components";
import StyledInputStepper from "./InputStepper";

export const InputStepper = styled(StyledInputStepper)`
    display: flex;
    align-items: center;
    gap: 11px;

    input {
        border: solid 1px ${({ theme }) => theme.color.gray[100]};
        border-radius: 4px;
        font-size: ${({ theme }) => theme.size.sm};
        color: ${({ theme }) => theme.color.gray[900]};
        padding: 3.5px 16px;
        width: 62px;
    }
`;
