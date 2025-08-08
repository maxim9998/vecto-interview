import LinkItem from '@shared/ui/linkItem/LinkItem';

import { navItems } from './navItems';

const Navbar = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <nav className="flex flex-col items-start justify-start gap-5">
      {navItems.map(({ name, to, icon }) => (
        <LinkItem name={name} to={to} icon={icon} key={name} showName={isOpen} />
      ))}
    </nav>
  );
};

export default Navbar;
