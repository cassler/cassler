export declare type HookStringBool = [
    boolean,
    (value: boolean | ((val: boolean) => boolean)) => void
];
export default function useDarkMode(): HookStringBool;
export declare function usePrefersDarkMode(): boolean;
