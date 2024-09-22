interface Props {
  children: ReactNode;
}
import { Children, ReactNode } from "react";
import "../css/GreyCenteredFlat.css";

const GreyCenteredFlat = ({ children }: Props) => {
  return <div id="GreyCenteredFlat">{children}</div>;
};

export default GreyCenteredFlat;
