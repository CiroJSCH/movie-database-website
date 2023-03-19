import Pagination from '@/components/movies/Pagination';

interface IProps {
  params: {
    filter: string[];
  };
}

const page = ({ params }: IProps) => {
  const filter = params.filter[0];
  const pageNumber = params.filter[1];
  return (
    <section className='flex flex-col justify-center items-center mt-10'>
      <Pagination filter={filter} pageNumber={pageNumber} />
    </section>
  );
};

export default page;
