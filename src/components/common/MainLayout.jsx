const MainLayout = ({ children, show }) => {
    return (
        <main className={`absolute md:mt-[6rem] px-[1rem] w-full ${show ? 'md:ml-[4rem] lg:ml-[5rem] ' : 'md:ml-[11rem] lg:ml-[12rem] md:w-[37rem] lg:w-[53rem] xl:w-[78rem] w-full'}`}>
            {children}
        </main>
    )
}
export default MainLayout