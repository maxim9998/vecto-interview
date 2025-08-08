interface IButton {
  onClick: () => void;
  className: string;
  text: string;
}

const Button = ({ onClick, className, text }: IButton) => {
  return (
    <button onClick={onClick} className={`${className}  px-6 py-2 min-w-38 rounded-full text-lg font-bold hover:opacity-70 cursor-pointer`}>
      {text}
    </button>
  );
};

export default Button;
