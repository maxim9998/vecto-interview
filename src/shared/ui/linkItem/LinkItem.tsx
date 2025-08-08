import { NavLink } from 'react-router';

import Icon from '../icon/Icon';

interface ILinkItem {
  name: string;
  to: string;
  icon: string;
  showName: boolean;
}

const LinkItem = ({ name, to, icon, showName }: ILinkItem) => {
  const navLinkClassName = ({ isActive }: { isActive: boolean }) => {
    return `flex items-center gap-4 p-4 w-full ${isActive && 'bg-grey-light font-bold'} ${showName ? 'justify-start rounded-lg' : 'justify-center rounded-full'}`;
  };

  return (
    <NavLink to={to} className={navLinkClassName}>
      <Icon name={icon} className="min-w-6 min-h-6" />
      {showName && <span className="text-xl whitespace-nowrap">{name}</span>}
    </NavLink>
  );
};

export default LinkItem;
