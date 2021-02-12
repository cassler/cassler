import Color from "color";

export function getShades(hue: string, dark: boolean) {
  const color = Color(hue);
  if (dark) {
    return {
      bg: color.lightness(18).hex(),
      accent: color.lightness(60).hex(),
      base: color.lightness(75).hex(),
    };
  }
  return {
    bg: color.lightness(92).hex(),
    accent: color.lightness(40).hex(),
    base: color.lightness(25).hex(),
  };
}
