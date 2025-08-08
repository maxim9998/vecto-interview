interface IIcon {
  name: string;
  className: string;
}

const Icon = ({ name, className }: IIcon) => {
  return (
    <div className={className}>
      <img src={`/assets/icons/${name}.png`} />
    </div>
  );
};

export default Icon;
