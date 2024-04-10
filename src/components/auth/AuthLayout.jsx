import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Menu } from "lucide-react"

import { menus } from '../../assets/data'
import BrandTitle from "../common/BrandTitle"

const AuthLayout = ({ children }) => {
    const [state, setState] = useState(false)
    return (
        <section className="w-full h-screen flex flex-col">
            <div className="bg-white w-full border-b md:border-0 shadow-md ">
                <div className="items-center justify-between px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <BrandTitle />
                        <div className="md:hidden">
                            <button
                                className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                                onClick={() => setState(!state)}
                            >
                                <Menu />
                            </button>
                        </div>
                    </div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? "block" : "hidden"
                            }`}
                    >
                        <ul className="justify-end items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            {menus.map((menu, idx) => (
                                <li key={idx} className="text-gray-600 hover:text-purple-400">
                                    <Link to={Menu.path}>{menu.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex-grow flex items-center justify-center">{children}</div>
        </section>
    )
}
export default AuthLayout