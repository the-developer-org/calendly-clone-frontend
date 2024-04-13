const CardWrapper = ({ children }) => {
  return (
    <div className="max-w-full h-[16rem] lg:h-[15rem] border-2 border-gray-100 p-2 mx-2 rounded-lg shadow-sm mt-1 hover:shadow-lg hover:border-gray-300 transition duration-300">
      {children}
    </div>
  );
};

export default CardWrapper;
