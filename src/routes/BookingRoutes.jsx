import Book from '@/components/events/Book'
import { Routes, Route } from 'react-router-dom'
const BookingRoutes = () => {
    return <>
        <Routes>
            <Route path='/book/:id' element={<Book />} />
        </Routes>
    </>
}
export default BookingRoutes