import SelectedProductsProvider from "./CartProductsProvider";
import QueryProvider from "./QueryProvider";
import ThemeProvider from "./ThemeProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider>
            <QueryProvider>
                <SelectedProductsProvider>{children}</SelectedProductsProvider>
            </QueryProvider>
        </ThemeProvider>
    );
}
