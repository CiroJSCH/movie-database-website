import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
} from 'react-icons/ai';
import { BiMoviePlay } from 'react-icons/bi';

const iconStyle =
  'text-[28px] cursor-pointer hover:text-secondary-500 hover:-translate-y-1 transition-all duration-300';

const socialIcons = [
  <AiFillFacebook key={0} className={iconStyle} />,
  <AiFillInstagram key={1} className={iconStyle} />,
  <AiOutlineTwitter key={2} className={iconStyle} />,
  <AiFillLinkedin key={3} className={iconStyle} />,
];

const Footer = () => {
  return (
    <footer>
      <section className='bg-primary-700 py-6 px-3 lg:px-7'>
        <div className='max-w-[1440px] m-auto flex flex-col md:flex-row gap-4 items-center justify-between text-txt text-center'>
          <p className='text-[18px] lg:text-[19px]'>
            Get connected with us on social networks
          </p>
          <ul className='flex gap-3'>{socialIcons.map((icon) => icon)}</ul>
        </div>
      </section>
      <section className='bg-background-600 py-6 px-3 lg:px-7'>
        <div className='max-w-[1440px] m-auto grid grid-cols-12 gap-6 lg:gap-10 lg:justify-items-end'>
          <div className='col-span-12 lg:col-span-3 flex flex-col items-center lg:items-start'>
            <div className='flex items-center gap-2 text-[22px] md:text-[24px] font-bold'>
              <BiMoviePlay className='text-txt' />
              <p className='text-primary-400'>IMBb Clone</p>
            </div>
            <p className='mt-2 leading-[27.5px] max-w-[350px] lg:max-w-none text-center lg:text-left'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Pariatur, quas nostrum? Reiciendis nam animi, dignissimos libero,
              eaque dolorum laudantium
            </p>
          </div>
          <div className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 flex flex-col items-center text-center'>
            <p className='text-[20px] text-txt font-bold tracking-[1.15px]'>
              Links
            </p>
            <ul className='mt-2 flex flex-col gap-3'>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
            </ul>
          </div>
          <div className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 flex flex-col items-center text-center'>
            <p className='text-[20px] text-txt font-bold tracking-[1.15px]'>
              Links
            </p>
            <ul className='mt-2 flex flex-col gap-3'>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
            </ul>
          </div>
          <div className='col-span-12 md:col-span-4 lg:col-span-3 flex flex-col items-center text-center lg:text-left'>
            <p className='text-[20px] text-txt font-bold tracking-[1.15px]'>
              Links
            </p>
            <ul className='mt-2 flex flex-col gap-3'>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
            </ul>
          </div>
        </div>
      </section>
      <section className='bg-black py-4 px-3'>
        <div className='max-w-[1440px] m-auto text-center'>
          <p>
            © {new Date().getFullYear()} Copyright: IMBb Clone by Ciro Schapert
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
