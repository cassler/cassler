import { useEffect } from "react";
import useMedia from "./useMedia";
import useLocalStorage from "./useLocalStorage";

export type HookStringBool = [
  boolean,
  (value: boolean | ((val: boolean) => boolean)) => void
];
export default function useDarkMode(): HookStringBool {
  // Use our useLocalStorage hook to persist state through a page refresh.
  // Read the recipe for this hook to learn more: usehooks.com/useLocalStorage
  const [enabledState, setEnabledState] = useLocalStorage<boolean>(
    "enabledState",
    true
  );
  // const [name, setName] = useLocalStorage<string>('name', 'Bob');

  // See if user has set a browser or OS preference for dark mode.
  // The usePrefersDarkMode hook composes a useMedia hook (see code below).
  const prefersDarkMode = usePrefersDarkMode();

  // If enabledState is defined use it, otherwise fallback to prefersDarkMode.
  // This allows user to override OS level setting on our website.
  const enabled =
    typeof enabledState !== "undefined" ? enabledState : prefersDarkMode;

  // Fire off effect that add/removes dark mode class
  useEffect(
    () => {
      // Convert this to another hook!
      // const currentTheme = enabled ? "dark" : "light";
      // const accent = 'grape';
      // let currentAccent = `${currentTheme}-${accent}`;
      // document.documentElement.setAttribute("data-theme", currentAccent);
    },
    [enabled, setEnabledState] // Only re-call effect when value changes
  );

  // Return enabled state and setter
  return [enabled, setEnabledState];
}

// Compose our useMedia hook to detect dark mode preference.
// The API for useMedia looks a bit weird, but that's because ...
// ... it was designed to support multiple media queries and return values.
// Thanks to hook composition we can hide away that extra complexity!
// Read the recipe for useMedia to learn more: usehooks.com/useMedia
export function usePrefersDarkMode() {
  return useMedia(["(prefers-color-scheme: dark)"], [true], false);
}
