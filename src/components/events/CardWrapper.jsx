const CardWrapper = ({ children }) => {
  return (
    <div className="w-full h-[15rem] flex flex-col  justify-between lg:h-[15rem] border-2 border-gray-100 p-2 rounded-lg shadow-sm mt-1 hover:shadow-lg hover:border-gray-300 transition duration-300">
      {children}
    </div>
  );
};

export default CardWrapper;
