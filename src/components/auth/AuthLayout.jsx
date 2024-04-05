import PropTypes from 'prop-types'
import { Menu } from "lucide-react"
import { Link } from 'react-router-dom'
import { useState } from 'react'
const AuthLayout = ({ children }) => {
    const [state, setState] = useState(false)
    const menus = [
        { title: "Home", path: "" },
        { title: "Blog", path: "" },
        { title: "About Us", path: "" },
        { title: "Contact Us", path: "" },
    ]
    return (
        <section className="w-full h-screen flex flex-col">
            <div className="bg-white w-full border-b md:border-0 shadow-md ">
                <div className="items-center justify-between px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link href="/">
                            <h1 className="text-3xl font-bold text-purple-700">Appointmently</h1>
                        </Link>
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

AuthLayout.propTypes = {
    children: PropTypes.node
}
export default AuthLayout