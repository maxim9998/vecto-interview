import { iconImgs } from './iconsList';

interface IIcon {
  name: string;
  className: string;
}

const Icon = ({ name, className }: IIcon) => {
  return (
    <div className={className}>
      <img src={iconImgs[name]} />
    </div>
  );
};

export default Icon;
