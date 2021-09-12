import React from 'react';

import {THEME} from '../constants/light';
import {ITheme, IThemeProvider} from '../constants/types';

export const ThemeContext = React.createContext({
  theme: THEME,
  setTheme: () => {},
});

export const ThemeProvider = ({
  children,
  theme = THEME,
  setTheme = () => {},
}: IThemeProvider) => {
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default function useTheme(): ITheme {
  const {theme} = React.useContext(ThemeContext);
  return theme;
}
