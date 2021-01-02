import React from "react";
import { HookStringBool } from "./useDarkMode";
export declare type Tint = "indigo" | "orange" | "teal" | "blue" | "grape" | "violet" | "yellow" | "cyan" | "pink";
export declare const Tints: string[];
export interface IColorContextProps {
    darkMode: boolean;
    tint: string;
    columns?: number;
    setColor?: Function;
    setDarkMode?: Function;
}
export declare const ColorContext: React.Context<IColorContextProps>;
export declare const useColorMode: (initialValue?: "blue" | "cyan" | "indigo" | "orange" | "pink" | "teal" | "violet" | "yellow" | "grape" | undefined) => [[string, (Tint: any) => void], HookStringBool];
export declare const ColorProvider: React.FC;
export declare const useColorProvider: () => IColorContextProps;
export default useColorMode;
