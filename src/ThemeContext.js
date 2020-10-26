import React, { useContext, useState } from 'react';
const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

export function useTheme() {
    return useContext(ThemeContext)
}

export function useThemeUpdate() {
    return useContext(ThemeUpdateContext)
}

export function ThemeProvider({ children }) {
    const [navLogo, setNavLogo] = useState(false)

    function changeLogoSize() {
        setNavLogo(true)
    }
    window.addEventListener("scroll", changeLogoSize);

    return (
        <ThemeContext.Provider value={navLogo}>
            <ThemeUpdateContext.Provider value={changeLogoSize}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>

    )
}

