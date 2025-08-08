const CurrentUser = ({ isHover }: { isHover: boolean }) => {
  return (
    <div className="w-full h-20 flex items-center justify-start gap-4">
      {isHover && (
        <>
          <div className="rounded-full h-14 w-14 bg-grey-light flex items-center justify-center text-3xl font-bold">D</div>
          <span className="text-2xl font-bold">Daniel</span>
        </>
      )}
    </div>
  );
};

export default CurrentUser;
