import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator"


const Tab = ({ to, label, isActive, onClick, disabled }) => {
  const onClickhHandler = () => {
    if (!disabled) {
      onClick()
    }
  }
  return (
    <div className="space-y-1">
      <Link
        to={`${disabled ? "" : to}`}
        className={`py-2 px-4  ${isActive && !disabled ? 'bg-transparent text-black ' : 'text-gray-400'
          } hover:bg-gray-100 hover:text-black`}
        onClick={onClickhHandler}
      >
        {label}
      </Link>
      <Separator orientation="horizontal" size="sm" />
    </div>


  );
};
export default Tab