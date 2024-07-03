import { ThemeProvider as StyledComponentsThemProvider } from "styled-components";
import { theme } from "../Theme";

export default function ThemeProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <StyledComponentsThemProvider theme={theme}>
            {children}
        </StyledComponentsThemProvider>
    );
}
