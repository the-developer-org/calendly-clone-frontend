import { CalendarCheck } from 'lucide-react'
const BrandTitle = () => {
    return (
        <div className='flex flex-row items-center gap-3'>
            <CalendarCheck className=' text-purple-700 w-2rem' size="1.7rem" />
            <h1 className="text-3xl md:text-2xl lg:text-3xl  font-bold text-purple-700 font-poppins ">Eventify</h1>
        </div>
    )
}
export default BrandTitle;