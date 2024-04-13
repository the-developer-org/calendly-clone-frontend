import { CalendarCheck } from 'lucide-react'
const BrandTitle = ({ show, color }) => {
  return (
    <div className='flex flex-row items-center gap-3 m-4'>
      <CalendarCheck className=' text-purple-700 w-2rem' size="1.7rem" />
      <h1 className={`text-3xl md:text-2xl lg:text-3xl  font-bold  font-poppins ${show ? "md:hidden" : "md:block "}`}>Eventify</h1>
    </div>
  )
}
export default BrandTitle;