import { useState, useEffect } from 'react'
import MobileHeader from "../header/MobileHeader";
import { useSelector } from "react-redux";
import ScheduledTable from "./Table";
import TablePagination from "./Pagination";
import { scheduledEvents } from '../../assets/data'

const Schedule = ({ title }) => {
    const { userDetails } = useSelector((state) => state.auth)
    const [data, setData] = useState([])
    const rowsPerPage = 7;
    const [startIndex, setStartIndex] = useState(0)
    const [endIndex, setendIndex] = useState(rowsPerPage);
    const [current, setCurrent] = useState(1)
    const [lastPage, setLastPage] = useState(1)
    const { name } = userDetails;
    useEffect(() => {
        setData(scheduledEvents)
        setLastPage(Math.ceil(data.length / rowsPerPage))
    }, [])
    const nextHandler = () => {
        setStartIndex(() => startIndex + rowsPerPage);
        setendIndex(() => endIndex + rowsPerPage);
        setCurrent(() => current + 1);
    }
    const prevHandler = () => {
        setStartIndex(() => startIndex - rowsPerPage);
        setendIndex(() => endIndex - rowsPerPage);
        setCurrent(() => current - 1);
    }
    return (
        <section className="flex flex-col gap-[1rem] mt-1">
            <MobileHeader name={name} className="block sm:hidden" />
            <h1 className=" text-1xl md:text-2xl lg:text-3xl font-poppins">{title}</h1>
            <ScheduledTable start={startIndex} end={endIndex} data={data} />
            <TablePagination setNext={nextHandler} setPrev={prevHandler} lastPage={lastPage} startIndex={startIndex} endIndex={endIndex} current={current} />
        </section>
    );
};

export default Schedule;