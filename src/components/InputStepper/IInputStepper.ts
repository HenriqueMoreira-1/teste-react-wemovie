export type IInputStepperProps = {
    decrease: () => void;
    increase: () => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: number;
    className?: string;
};