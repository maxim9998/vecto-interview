import { useState } from 'react';

import CurrentUser from './CurrentUser';
import Search from './Search';
import BottomLinks from './bottomLinks/BottomLinks';
import Navbar from './navbar/Navbar';

const Sidebar = () => {
  const [isHover, setIsHover] = useState(false);
  const onChangeHoverState = () => {
    setIsHover(prev => !prev);
  };

  return (
    <aside
      className={`absolute top-0 left-0 h-full p-8 flex flex-col items-start justify-center transition-[width] duration-300 bg-gradient-to-r z-11 from-black from-20% to-black/10 ${!isHover ? 'w-32' : 'w-full '}`}
    >
      <div onMouseEnter={onChangeHoverState} onMouseLeave={onChangeHoverState} className="flex flex-col items-start justify-between h-full">
        <div className="flex flex-col items-start justify-start gap-5 text-snow">
          <CurrentUser isHover={isHover} />
          <Search isHover={isHover} />
          <Navbar isHover={isHover} />
        </div>
        {isHover && <BottomLinks />}
      </div>
    </aside>
  );
};

export default Sidebar;
