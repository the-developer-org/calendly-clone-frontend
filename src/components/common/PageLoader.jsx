import "./PageLoader.css";

const PageLoader = () => {
    return (
        <div className=" flex justify-center items-center w-full h-[calc(100vh-6rem)]">
            <svg className="loader" width="240" height="240" viewBox="0 0 240 240">
                <circle
                    className="loader-ring loader-ring-a"
                    cx="120"
                    cy="120"
                    r="105"
                    fill="none"
                    stroke="#000"
                    strokeWidth="20"
                    strokeDasharray="0 660"
                    strokeDashoffset="-330"
                    strokeLinecap="round"
                ></circle>
                <circle
                    className="loader-ring loader-ring-b"
                    cx="120"
                    cy="120"
                    r="35"
                    fill="none"
                    stroke="#000"
                    strokeWidth="20"
                    strokeDasharray="0 220"
                    strokeDashoffset="-110"
                    strokeLinecap="round"
                ></circle>
                <circle
                    className="loader-ring loader-ring-c"
                    cx="85"
                    cy="120"
                    r="70"
                    fill="none"
                    stroke="#000"
                    strokeWidth="20"
                    strokeDasharray="0 440"
                    strokeLinecap="round"
                ></circle>
                <circle
                    className="loader-ring loader-ring-d"
                    cx="155"
                    cy="120"
                    r="70"
                    fill="none"
                    stroke="#000"
                    strokeWidth="20"
                    strokeDasharray="0 440"
                    strokeLinecap="round"
                ></circle>
            </svg>
        </div>
    );
};

export default PageLoader;