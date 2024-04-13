import { useState, useEffect } from 'react';
import MobileHeader from '../header/MobileHeader';
import { useSelector, useDispatch } from 'react-redux';
import ScheduledTable from './Table';
import TablePagination from './Pagination';
import { fecthedBookSlots } from '@/store/actions/eventActions';
import PageLoader from '../common/PageLoader';
import { Input } from "@/components/ui/input"
import { Button } from '../ui/button';


const Schedule = ({ title }) => {
  const dispatch = useDispatch();
  const { bookedSlots } = useSelector(state => state.event)
  const [current, setCurrent] = useState(1);
  const lastPage = bookedSlots.totalPages;
  const [rows, setRows] = useState(5)
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    dispatch(fecthedBookSlots({ current, rows }, setLoader));
  }, []);
  const nextHandler = () => {
    dispatch(fecthedBookSlots({ current: current + 1, rows }, setLoader));
    setCurrent(() => current + 1);

  };
  const prevHandler = () => {
    dispatch(fecthedBookSlots({ current: current - 1, rows }, setLoader));
    setCurrent(() => current - 1);

  };
  const handleRowsChange = (event) => {
    const newRows = parseInt(event.target.value);
    if (newRows >= 0) {
      setRows(newRows);
    }
    else {
      setRows('')
    }
  };
  const clickHandler = () => {

    dispatch(fecthedBookSlots({ current: 1, rows }, setLoader));
    setCurrent(1)
  }
  return (
    <>
      {loader ? (
        <PageLoader />
      ) : (
        <section className="flex flex-col gap-[1rem] mt-1">
          <MobileHeader className="block sm:hidden" />
          <h1 className="flex flex-row gap-5 text-1xl md:text-2xl lg:text-3xl font-poppins">
            <p>{title}</p>
            <Input type="number" placeholder="Rows per page" className="max-w-20" value={rows} onChange={handleRowsChange} />
            <Button type='submit' onClick={clickHandler} className="bg-purple-500 hover:bg-purple-300" >Search</Button>

          </h1>
          <ScheduledTable data={bookedSlots.slots} />
          <TablePagination
            setNext={nextHandler}
            setPrev={prevHandler}
            lastPage={lastPage}
            current={current}
          />
        </section>
      )}
    </>
  );
};

export default Schedule;
