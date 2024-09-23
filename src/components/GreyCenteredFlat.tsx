interface Props {
  children?: ReactNode;
  className?: string;
  id?: string;
}
import { ReactNode } from "react";
import "../css/GreyCenteredFlat.css";

const GreyCenteredFlat = ({ children, className, id }: Props) => {
  return (
    <div className={"GreyCenteredFlat " + className} id={id}>
      {children}
    </div>
  );
};

export default GreyCenteredFlat;
