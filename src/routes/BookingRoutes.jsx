import Book from '../components/book/Book';
import Message from '../components/book/Message';
import { Routes, Route } from 'react-router-dom';

const BookingRoutes = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <section className='w-full max-w-5xl p-8 bg-white shadow-lg rounded-lg'>
                <Routes>
                    <Route path='/book/:event-name/:id' element={<Book />} />
                </Routes>
            </section>
        </div>
    );
};

export default BookingRoutes;
