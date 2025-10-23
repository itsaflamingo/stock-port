"use client"

import * as React from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";

// Wraps next-themes provider 
// Takes in children and props
// Renders NextThemeProvider component with spread and children passed in
// Allows whole app to use useTheme hook provided by next-themes
export function ThemeProvider({ children, ...props }: React.ComponentProps<typeof NextThemeProvider>) {
    return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
}