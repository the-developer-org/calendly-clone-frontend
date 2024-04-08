const CardWrapper = ({ children }) => {
    return (
        <div className="max-w-[20rem] h-[16rem] border-2 border-gray-100 p-4 rounded-lg shadow-sm mt-2 hover:shadow-lg hover:border-gray-300 transition duration-300">
            {children}
        </div>
    )
}

export default CardWrapper;
