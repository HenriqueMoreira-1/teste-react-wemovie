import Spinner from "../../assets/load-spinner.svg";

type LoadingSpinner = {
    className?: string;
};

export default function StyledLoadingSpinner({ className }: LoadingSpinner) {
    return (
        <div className={className}>
            <img src={Spinner} alt="Loading spinner" width="64" height="64" />
        </div>
    );
}
