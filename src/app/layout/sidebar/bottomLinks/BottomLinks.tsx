import { bottomLinkItems } from './bottomLinkItems';

const BottomLinks = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-4 ml-5">
      {bottomLinkItems.map(({ name }) => (
        <p key={name} className="text-2xl font-bold text-grey-text">
          {name}
        </p>
      ))}
    </div>
  );
};

export default BottomLinks;
