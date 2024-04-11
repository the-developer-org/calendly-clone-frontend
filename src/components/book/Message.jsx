const Message = ({ name, date, time, link }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Booking Confirmed!</h2>
            <p className="text-gray-700">Your slot for the <span className="font-semibold">{name}</span> has been successfully booked.</p>
            <div className="mt-4">
                <h3 className="font-semibold text-gray-800">Slot Details:</h3>
                <ul className="list-disc list-inside">
                    <li>Time: <span className="font-normal text-gray-600">{time}</span></li>
                    <li>Event: <span className="font-normal text-gray-600">{name}</span></li>
                    <li>Meeting Link: <a href={link} className="text-blue-500 hover:underline">{link}</a></li>
                </ul>
            </div>
            <div className="mt-4">
                <a href={link} className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200">Join Meeting</a>
            </div>
        </div>

    );
}

export default Message;
