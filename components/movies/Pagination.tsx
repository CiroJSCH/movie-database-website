import Link from 'next/link';
interface IProps {
  filter: string;
  pageNumber: string;
}

const Pagination = ({ filter, pageNumber }: IProps) => {

  return (
    <div className='btn-group grid grid-cols-2'>
      <Link
        href={`movies/${filter}/${parseInt(pageNumber) - 1}`}
        className={`btn btn-outline ${parseInt(pageNumber) === 1 ? "btn-disabled" : ""}`}
        
      >
        Previous page
      </Link>
      <Link
        href={`movies/${filter}/${parseInt(pageNumber) + 1}`}
        className='btn btn-outline'
      >
        Next
      </Link>
    </div>
  );
};

export default Pagination;
