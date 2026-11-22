'use client'

import { createContext, useContext, useState, ReactNode } from "react";

export type Usuario = {
    nome: string;
    email: string;
    UID: string;
    dataDeNasc: string;
    status: boolean;
    termosAceitos: boolean;
    theme: "light" | "dark";
};

type UserContextType = {
    usuario: Usuario | null;
    setUsuario: (usuario: Usuario | null) => void;
    logout: () => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
    const [usuario, setUsuario] = useState<Usuario | null>(null);

    function logout() {
        setUsuario(null);
    }

    return (
        <UserContext.Provider value={{ usuario, setUsuario, logout }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error("useUser precisa estar dentro de um UserProvider");
    }

    return context;
}
