import type { IconType } from 'react-icons';

interface IButton {
  onClick: () => void;
  className: string;
  text: string;
  IconLeft?: IconType;
}

const Button = ({ onClick, className, text, IconLeft }: IButton) => {
  return (
    <button
      onClick={onClick}
      className={`${className} px-6 py-2 min-w-38 rounded-full text-lg font-bold hover:opacity-70 cursor-pointer flex items-center justify-center`}
    >
      {IconLeft && <IconLeft />}
      {text}
    </button>
  );
};

export default Button;
