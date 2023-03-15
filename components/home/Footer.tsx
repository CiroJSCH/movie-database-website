import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
} from 'react-icons/ai';

const iconStyle =
  'text-[28px] cursor-pointer hover:text-secondary-500 hover:-translate-y-1 transition-all duration-300';

const Footer = () => {
  return (
    <footer className='mt-[100px] bg-background-600 py-8'>
      <div className='flex flex-col gap-5 mx-auto max-w-[1440px] justify-center items-center'>
        <p className='text-[18px] font-semibold tracking-[1.15px]'>Follow Us</p>
        <div className='flex gap-5'>
          <AiFillFacebook className={iconStyle} />
          <AiFillInstagram className={iconStyle} />
          <AiOutlineTwitter className={iconStyle} />
        </div>
      </div>
      <div className='mx-10 border-t-2 mt-5 text-center py-3'>
        <span className='text-[14px]'>© 2020-{new Date().getFullYear()} by IMBb.com, Inc. | All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
