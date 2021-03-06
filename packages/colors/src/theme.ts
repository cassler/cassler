import { colors } from "./colors";

export const theme = {
  color: {
    bg: colors.gray[0],
    text: colors.lime[5],
    secondary: colors.gray[6],
    muted: colors.gray[4],
    error: colors.red[5],
  },
  link: {
    primary: colors.indigo[7],
    visited: colors.grape[6],
    hover: colors.indigo[5],
  },
};

export const appStyle = () => ({
  color: theme.color.text,
});
