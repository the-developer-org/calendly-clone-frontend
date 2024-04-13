import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CopyPlus } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';
import { setDefaultMeetlinkAction } from '@/store/actions/authActions';
const AddMeetingLinks = () => {
  const dispatch = useDispatch();
  const { defaultMeetLink } = useSelector((state) => state.auth);
  const [meetingLink, setMeetingLink] = useState('');
  const [mode, setMode] = useState('');
  const [btnLoader, setBtnLoader] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const submitFormHandeler = (e) => {
    e.preventDefault();
    if (!meetingLink.trim() || !mode) {
      return toast.error('something missing');
    }
    const formData = { meetingLink, mode };
    dispatch(setDefaultMeetlinkAction(formData, setBtnLoader, setShowModal));
  };

  const showModalHandeler = () => {
    if (defaultMeetLink && defaultMeetLink.mode) {
      return toast.error('Default link already added');
    }
    setShowModal(true);
  };
  return (
    <div className=" font-poppins">
      <Dialog isOpen={showModal} onDismiss={() => setShowModal(false)}>
        <div className="px-2 font-poppins">
          <div className="  rounded-md flex items-center gap-5">
            <h1 className=" bg-purple-400 text-xl px-10 py-1 text-white rounded-md">
              Default Meeting Link
            </h1>
            <DialogTrigger asChild>
              <Button variant="outline" className="max-w-1/2">
                <CopyPlus
                  size={32}
                  className=" cursor-pointer"
                  onClick={showModalHandeler}
                />
              </Button>
            </DialogTrigger>
          </div>
        </div>
        {showModal && (
          <DialogContent className="sm:max-w-full md:max-w-[50rem] xl:max-w-[40rem] 2xl:max-w-[45rem] ">
            <DialogHeader>
              <DialogTitle>Default Meet Link</DialogTitle>
            </DialogHeader>
            <form onSubmit={submitFormHandeler}>
              <div className="grid gap-4 py-4">
                <div className=" flex flex-col gap-2">
                  <Label htmlFor="userName" className="w-full">
                    Meeting Link
                  </Label>
                  <Input
                    id="link"
                    name="link"
                    placeholder="Paste the meeting link"
                    className="col-span-4"
                    value={meetingLink}
                    onChange={(e) => {
                      setMeetingLink(e.target.value);
                    }}
                  />
                </div>
                <div className=" w-full">
                  <Select
                    className="w-full font-poppins"
                    onValueChange={(e) => {
                      setMode(e);
                    }}
                    defaultValue={mode}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select the mode" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="Google Meet">Google Meet</SelectItem>
                        <SelectItem value="Zoom">Zoom</SelectItem>
                        <SelectItem value="Teams">Teams</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                {btnLoader ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <button
                    type="submit"
                    className=" bg-purple-400 font-poppins px-5 py-1 text-white"
                  >
                    Add
                  </button>
                )}
              </DialogFooter>
            </form>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
};

export default AddMeetingLinks;
