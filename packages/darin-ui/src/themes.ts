declare module "@emotion/react" {
  export interface Theme {
    name: string;
    backgroundColor: string;
    bg: string;
    primary: string;
    positive: string;
    negative: string;
    bodyText: string;
    captionText: string;
    mutedText: string;
  }
}


export const themes = [
  {
    name: "light", // Required it's used for displaying the button label,
    backgroundColor: "#f3f3f3",
    bg: "#fff", // Optional, it's used for setting dynamic background color on storybook
    primary: "#36c",
    positive: "#1a3",
    negative: "#c52",
    bodyText: "#222",
    captionText: "#666",
    mutedText: "#999",
  },
  {
    name: "dark", // Required it's used for displaying the button label,
    backgroundColor: "#222",
    bg: "#111115", // Optional, it's used for setting dynamic background color on storybook
    primary: "#f4a",
    positive: "#1f2",
    negative: "#f30",
    bodyText: "#ddd",
    captionText: "#aaa",
    mutedText: "#777",
  },
  {
    name: "Autumn", // Required it's used for displaying the button label,
    backgroundColor: "#222",
    bg: "#111115", // Optional, it's used for setting dynamic background color on storybook
    primary: "#d60",
    positive: "#1f2",
    negative: "#f30",
    bodyText: "#fca",
    captionText: "#aaa",
    mutedText: "#777",
  },
];

export default themes;
