import Loading from '@shared/ui/loader/Loading';

const LoadingPage = () => {
  return (
    <div className="absolute top-0 left-0 h-screen w-screen flex items-center justify-center">
      <Loading />
    </div>
  );
};

export default LoadingPage;
