const MainLayout = ({ children, show }) => {
    return (
        <main className={`relative md:mt-[6rem] px-[1rem] ${show ? 'md:ml-[4rem] lg:ml-[5rem] md:w-[44rem] lg:w-[60rem] xl:w-[85rem]' : 'md:ml-[11rem] lg:ml-[12rem] md:w-[37rem] lg:w-[53rem] xl:w-[78rem] w-full'}`}>
            {children}
        </main>
    )
}
export default MainLayout