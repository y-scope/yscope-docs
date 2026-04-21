"use client";
import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react";


/**
 * Returns the initial theme, either from localStorage, prefers-color-scheme,
 * or defaults to 'light'.
 *
 * @return The initial theme value.
 */
const getInitialTheme = (): "light" | "dark" => {
    if ("undefined" !== typeof window) {
        const attr = (document.body && document.body.getAttribute("data-bs-theme")) ||
            (document.documentElement && document.documentElement.getAttribute("data-bs-theme"));

        if ("dark" === attr || "light" === attr) {
            return attr;
        }

        const stored = localStorage.getItem("ui-theme");
        if ("dark" === stored || "light" === stored) {
            return stored;
        }

        // Optionally, use prefers-color-scheme
        if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
            return "dark";
        }
    }

    return "light";
};

interface ThemeContextType {
    theme: "light" | "dark";
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme());

    // Update <body> attribute and localStorage when theme changes
    useEffect(() => {
        if ("undefined" !== typeof window) {
            if (document.body) {
                document.body.setAttribute("data-bs-theme", theme);
            }
            if (document.documentElement) {
                document.documentElement.setAttribute("data-bs-theme", theme);
            }
            localStorage.setItem("ui-theme", theme);
        }
    }, [theme]);

    const toggleTheme = useCallback(() => {
        setTheme((prev) => ("dark" === prev ?
            "light" :
            "dark"));
    }, []);

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

/**
 * Custom hook to access the current theme context.
 *
 * @return The current theme context value.
 * @throws If used outside of a ThemeProvider.
 */
export const useTheme = () => {
    const ctx = useContext(ThemeContext);
    if (null === ctx) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }

    return ctx;
};
