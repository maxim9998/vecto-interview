import { useState } from 'react';

import BurgerMenu from '@shared/ui/burgerMenu/BurgerMenu';

import CurrentUser from './CurrentUser';
import Search from './Search';
import BottomLinks from './bottomLinks/BottomLinks';
import Navbar from './navbar/Navbar';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onToggle = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <>
      <BurgerMenu isOpen={isOpen} onToggle={onToggle} />
      <aside
        className={`absolute top-0 -left-full md:left-0 h-full p-8 flex flex-col items-start justify-center transition-[width] duration-300 max-md:bg-black/90 bg-gradient-to-r z-11 from-black md:from-20% to-black/10 ${!isOpen ? 'md:w-32' : 'w-full left-0'}`}
      >
        <div onMouseEnter={onToggle} onMouseLeave={onToggle} className="flex flex-col items-start justify-between h-full">
          <div className="flex flex-col items-start justify-start gap-5 text-snow">
            <CurrentUser isHover={isOpen} />
            <Search isOpen={isOpen} />
            <Navbar isOpen={isOpen} />
          </div>
          {isOpen && <BottomLinks />}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
