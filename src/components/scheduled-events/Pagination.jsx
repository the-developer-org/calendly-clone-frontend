import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

const TablePagination = ({ setNext, setPrev, startIndex, lastPage, current }) => {
    console.log(current, lastPage)
    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious href="#" onClick={setPrev} className={startIndex <= '0' && "pointer-events-none opacity-50"} />
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext href="#" onClick={setNext} className={current >= lastPage && "pointer-events-none opacity-50"} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>

    )
}
export default TablePagination