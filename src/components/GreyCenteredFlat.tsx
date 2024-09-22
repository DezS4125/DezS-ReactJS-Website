interface Props {
  children?: ReactNode;
  id?: string;
}
import { ReactNode } from "react";
import "../css/GreyCenteredFlat.css";

const GreyCenteredFlat = ({ children, id }: Props) => {
  return (
    <div className="GreyCenteredFlat" id={id}>
      {children}
    </div>
  );
};

export default GreyCenteredFlat;
