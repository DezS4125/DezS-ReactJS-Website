interface Props {
  id?: string;
  children?: string;
  onClick?: () => void;
}

const Button = ({ id, children, onClick }: Props) => {
  return (
    <button type="button" className="btn" onClick={onClick} id={id}>
      {children}
    </button>
  );
};

export default Button;
