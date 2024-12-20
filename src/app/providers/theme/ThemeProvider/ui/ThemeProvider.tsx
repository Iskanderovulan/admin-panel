import { FC, useMemo, useState, useEffect, ReactNode } from "react";
import { Theme, ThemeContext } from "../lib/ThemeContext";
import { LOCAL_STORAGE_THEME_KEY } from "@shared/const/localstorage";

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.DARK;

interface ThemeProviderProps {
    children: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    );
    const applyTheme = (newTheme: Theme) => {
        document.body.classList.add("disable-transitions");
        document.body.setAttribute("data-theme", newTheme);

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                document.body.classList.remove("disable-transitions");
            });
        });
    };

    useEffect(() => {
        applyTheme(theme);
    }, [theme]);

    return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
