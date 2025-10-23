"use client"

import * as React from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";

//Wraps next-themes provider and allows whole app to use useTheme
export function ThemeProvider({ children, ...props }: React.ComponentProps<typeof NextThemeProvider>) {
    return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
}