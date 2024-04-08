import { useState } from "react";
import { Plus, Menu } from "lucide-react";
import BrandTitle from "../common/BrandTitle";
import { Button } from "@/components/ui/button";
import { mainLinks } from "../../assets/data";
import { Link } from "react-router-dom";
import SidebarButton from "./SidebarButton";

const Sidebar = () => {
    const [state, setState] = useState(false);

    return (
        <div className={`flex ${state ? 'flex-col ' : 'flex-row justify-between'} jus md:h-full px-3 py-4 md:flex-col md:justify-normal`}>
            <BrandTitle />
            <Link to="/create-event">
                <Button className="hidden md:flex w-full mt-10 bg-purple-800 hover:bg-purple-500 text-white flex-row gap-2">
                    <Plus size={20} />
                    Create
                </Button>
            </Link>


            <div className="md:mt-2 font-poppins">
                <div className="md:mt-10">
                    <div className="hidden md:flex sm:flex-col gap-4">
                        {mainLinks.map((link, index) => (
                            <Link key={index} to={link.path}>
                                <SidebarButton label={link.label} icon={link.icon} />
                            </Link>
                        ))}
                    </div>
                    <div className="md:hidden relative">
                        <div className="flex justify-end">
                            <button
                                className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                                onClick={() => setState(!state)}
                            >
                                <Menu />
                            </button>
                        </div>
                        <div className={`pb-3 md:block md:pb-0 md:mt-0 ${state ? "block" : "hidden"}`}>
                            {mainLinks.map((link, index) => (
                                <Link key={index} to={link.path}>
                                    <SidebarButton label={link.label} icon={link.icon} />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
