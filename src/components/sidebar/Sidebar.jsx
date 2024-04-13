import { useState } from 'react';
import { EyeOff, Menu } from 'lucide-react';
import BrandTitle from '../common/BrandTitle';
import { mainLinks } from '../../assets/data';
import { Link } from 'react-router-dom';
import SidebarButton from './SidebarButton';
import { LogOut } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { logOutAction } from '@/store/actions/authActions';
const Sidebar = ({ show, setShow }) => {
  const dispatch = useDispatch();
  const [state, setState] = useState(false);

  const logOutHandeler = () => {
    dispatch(logOutAction());
  };
  return (
    <div
      className={`flex  ${state ? 'flex-col ' : 'flex-row  '} ${show ? 'md:w-[5rem] px-3 py-4' : 'lg:w-[12rem] md:w-[11rem]'}  md:h-full  md:flex-col`}
      onMouseEnter={() => setShow(false)}
      onMouseLeave={() => setShow(true)}
    >
      <div className="flex flex-row justify-between w-full">
        <BrandTitle show={show} />
        <div className="block sm:hidden">
          <button
            className="text-gray-700 outline-none p-5 rounded-md focus:border-gray-400 focus:border"
            onClick={() => setState(!state)}
          >
            {!state ? <Menu /> : <EyeOff />}
          </button>
        </div>
      </div>
      <div className="md:mt-2 font-poppins">
        <div className="md:mt-10">
          <div className="hidden md:flex sm:flex-col gap-4 ">
            {mainLinks.map((link, index) => (
              <Link key={index} to={link.path}>
                <SidebarButton
                  label={link.label}
                  icon={link.icon}
                  show={show}
                />
              </Link>
            ))}
            <button onClick={logOutHandeler}>
              <SidebarButton label={'Log Out'} icon={LogOut} show={show} />
            </button>
          </div>
          <div className="md:hidden relative items-end w-full">
            <div
              className={`pb-3 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'} flex flex-col  justify-start items-start absolute top-0 right-0 bg-gray-200 z-50 w-[60%] h-[calc(100vh-4rem)]`}
            >
              {mainLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  onClick={() => setState(!state)}
                >
                  <SidebarButton label={link.label} icon={link.icon} />
                </Link>
              ))}
              <button
                onClick={logOutHandeler}
                className="flex justify-center items-center"
              >
                <SidebarButton label={'Log Out'} icon={LogOut} show={show} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
