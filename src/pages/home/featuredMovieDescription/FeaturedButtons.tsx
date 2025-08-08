import Button from '@shared/ui/button/Button';

const FeaturedButtons = () => {
  return (
    <div className="flex items-center justify-start gap-5">
      <Button text="Play" className="bg-snow" onClick={() => null} />
      <Button text="More Info" className="bg-gradient-to-r from-blue-dark to-blue-light text-snow" onClick={() => null} />
    </div>
  );
};

export default FeaturedButtons;
