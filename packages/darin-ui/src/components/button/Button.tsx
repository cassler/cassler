import * as React from "react";
import Color from "color";

interface IButtonProps {
  label: string | React.ReactElement;
  background?: string;
  color?: string;
}

const ButtonZ: React.FunctionComponent<IButtonProps> = ({
  label,
  background = "#d3d3d3",
  color,
}) => {
  const borderColor = Color(background).lightness(40).hex();
  const bgColor = Color(background).lightness(90).hex();
  const textColor = Color(background).lightness(20).hex();
  const s = {
    backgroundColor: bgColor || "inherit",
    color: textColor || "inherit",
    outline: "none",
    border: `1px solid ${borderColor}`,
    borderRadius: 8,
    padding: "0.7em 1.4em",
    fontSize: "14px",
    fontWeight: 500,
  };
  return (
    <button type="button" style={s}>
      {label}
    </button>
  );
};

export default ButtonZ;
