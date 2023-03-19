"use client";
import Link from "next/link";
import { usePathname } from 'next/navigation';

interface IProps {
  pageNumber: string,
  handlePageChange: (page: string) => void
}

const Pagination = ({pageNumber, handlePageChange}: IProps) => {

  const nextPage = () => {
    handlePageChange(`${parseInt(pageNumber) + 1}`)
  }

  const prevPage = () => {
    handlePageChange(`${parseInt(pageNumber) - 1}`)
  }

  const pathname = usePathname();

  return (
    <div className='btn-group grid grid-cols-2'>
      <Link href={`${pathname}?page=${pageNumber}`} className='btn btn-outline' onClick={prevPage}>Previous page</Link>
      <Link href={`${pathname}?page=${pageNumber}`} className='btn btn-outline' onClick={nextPage}>Next</Link>
    </div>
  );
};

export default Pagination;
