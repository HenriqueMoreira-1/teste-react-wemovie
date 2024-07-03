import Spinner from "../../assets/load-spinner.svg";
import { ILoadingSpinner } from "./ILoadingSpinner";

export default function StyledLoadingSpinner({ className }: ILoadingSpinner) {
    return (
        <div className={className}>
            <img src={Spinner} alt="Loading spinner" width="64" height="64" />
        </div>
    );
}
