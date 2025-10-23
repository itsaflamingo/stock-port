"use client"

import { createContext, useState } from "react";

interface UserContextType {
    user: Object | null;
    setUser: React.Dispatch<React.SetStateAction<Object | null>>;
}

export const UserContext = createContext<UserContextType>({
    user: null,
    setUser: () => { }
})

export default function UserProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<Object | null>(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}