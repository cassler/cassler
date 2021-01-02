export declare type LocalStorageHook<T> = [T, (value: T | ((val: T) => T)) => void];
export default function useLocalStorage<T>(key: string, initialValue: T): LocalStorageHook<T>;
