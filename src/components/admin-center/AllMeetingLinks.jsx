import { deleteDefaultMeetlinkAction } from '@/store/actions/authActions';
import { Trash2 } from 'lucide-react';
import { CopyPlus } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';

const AllMeetingLinks = () => {
  const { defaultMeetLink } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const deleteDefaultLink = () => {
    dispatch(deleteDefaultMeetlinkAction());
  };

  return (
    <>
      <div className=" mt-5 px-2">
        <div className=" flex flex-col gap-2 mt-4">
          {defaultMeetLink && defaultMeetLink.mode ? (
            <div className=" bg-gray-100   w-full flex gap-2 items-center justify-between px-2 rounded-md">
              <div className=" flex flex-col font-poppins">
                <p className=" p-2 text-1xl  text-black">{defaultMeetLink.mode}</p>
                <p className=" p-2 text-sm">{defaultMeetLink.meetingLink}</p>
              </div>
              <Trash2
                className=" justify-end cursor-pointer text-red-400"
                onClick={deleteDefaultLink}
              />
            </div>
          ) : (
            <div className=" font-poppins text-xl">
              <h1>No meeting link present ....</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AllMeetingLinks;
