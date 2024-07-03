import { Button } from "../Button/Button.styled";
import MinusIcon from "../../assets/minus-icon.svg";
import PlusIcon from "../../assets/plus-icon.svg";
import { IInputStepperProps } from "./IInputStepper";

export default function StyledInputStepper({
    decrease,
    increase,
    onChange,
    value,
    className,
}: IInputStepperProps) {
    return (
        <div className={className}>
            <Button onClick={decrease}>
                <img src={MinusIcon} alt="Minus icon" />
            </Button>
            <input type="text" onChange={onChange} value={value} />
            <Button onClick={increase}>
                <img src={PlusIcon} alt="Plus icon" />
            </Button>
        </div>
    );
}
