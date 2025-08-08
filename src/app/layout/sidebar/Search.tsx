import Icon from '@shared/ui/icon/Icon';

const Search = ({ isHover }: { isHover: boolean }) => {
  return (
    <button className={`flex items-center gap-4 p-4 w-full cursor-pointer ${isHover ? 'justify-start rounded-lg' : 'justify-center rounded-full'}`}>
      <Icon name={'search'} className="min-w-6 min-h-6" />
      {isHover && <span className="text-xl whitespace-nowrap">Search</span>}
    </button>
  );
};

export default Search;
