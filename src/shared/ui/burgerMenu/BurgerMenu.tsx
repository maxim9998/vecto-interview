import { MdClose, MdMenu } from 'react-icons/md';

interface IBuregerMenu {
  isOpen: boolean;
  onToggle: () => void;
}

const BurgerMenu = ({ isOpen, onToggle }: IBuregerMenu) => {
  const CurrentElement = isOpen ? MdClose : MdMenu;
  return <CurrentElement onClick={onToggle} className="absolute top-2 left-2 md:hidden text-snow text-3xl z-14" />;
};

export default BurgerMenu;
