import Link from 'next/link';
interface IProps {
  filter: string;
  pageNumber: string;
}

const Pagination = ({ filter, pageNumber }: IProps) => {

  return (
    <div className='btn-group flex items-center justify-center'>
      <Link
        href={`movies/${filter}/${parseInt(pageNumber) - 1}`}
        className={`btn btn-outline max-w-[150px] ${parseInt(pageNumber) === 1 ? "btn-disabled" : ""}`}
        
      >
        Previous page
      </Link>
      <Link
        href={`movies/${filter}/${parseInt(pageNumber) + 1}`}
        className='btn btn-outline min-w-[150px]'
      >
        Next Page
      </Link>
    </div>
  );
};

export default Pagination;
