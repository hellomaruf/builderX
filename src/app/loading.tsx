const LoadingPage = () => {
  return (
    <div className="w-[90%] mx-auto">
      <div className="flex justify-center items-center min-h-[100vh]">
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 rounded-full border-4 border-gray-300"></div>
          <div className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
