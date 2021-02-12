import * as React from "react";
import { getShades } from "../../_util";

interface IButtonProps {
  label: string | React.ReactElement;
  background?: string;
  dark?: boolean;
}

const ButtonZ: React.FunctionComponent<IButtonProps> = ({
  label,
  background = "#d3d3d3",
  dark,
}) => {
  const { bg, accent, base } = getShades(background, dark);

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
