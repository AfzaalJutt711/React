import { useContext, createContext } from "react";

export const themeContext = createContext()

export const ThemeProvider = themeContext.Provider

export  function useTheme() {
    return useContext(themeContext)
}