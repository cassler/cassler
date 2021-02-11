import * as React from "react";
import Color from "color";

interface IButtonProps {
  label: string | React.ReactElement;
  background?: string;
  dark?: boolean;
}

function getShades(hue: string) {
  const color = Color(hue);
  return {
    light: {
      bg: color.lightness(92).hex(),
      accent: color.lightness(40).hex(),
      base: color.lightness(25).hex(),
    },
    dark: {
      bg: color.lightness(18).hex(),
      accent: color.lightness(60).hex(),
      base: color.lightness(75).hex(),
    },
  };
}

const ButtonZ: React.FunctionComponent<IButtonProps> = ({
  label,
  background = "#d3d3d3",
  dark,
}) => {
  const shades = getShades(background);
  const { bg, accent, base } = dark ? shades.dark : shades.light;

  const css: React.CSSProperties = {
    backgroundColor: bg || "inherit",
    color: base || "inherit",
    outline: "none",
    border: `1px solid ${accent}`,
    borderRadius: 8,
    padding: "0.7em 1.4em",
    fontSize: "16px",
    fontWeight: 600,
    letterSpacing: "-0.016em",
  };

  return (
    <button type="button" style={css}>
      {label}
    </button>
  );
};

export default ButtonZ;
