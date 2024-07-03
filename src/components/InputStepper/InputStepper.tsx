import { Button } from "../Button/Button.styled";
import MinusIcon from "../../assets/minus-icon.svg";
import PlusIcon from "../../assets/plus-icon.svg";

type InputStepperProps = {
    decrease: () => void;
    increase: () => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: number;
    className?: string;
};

export default function StyledInputStepper({
    decrease,
    increase,
    onChange,
    value,
    className,
}: InputStepperProps) {
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
