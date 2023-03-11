import NavbarItem from './NavbarItem';
import { BiTrendingUp } from 'react-icons/bi';
import { BsTrophyFill } from 'react-icons/bs';

const navItems = [
  {
    title: 'Trending',
    param: 'trending',
    icon: <BiTrendingUp />,
  },
  {
    title: 'Top Rated',
    param: 'top-rated',
    icon: <BsTrophyFill />,
  },
];

const Navbar = () => {
  return (
    <div className=' bg-alternative py-3 text-txt'>
      <div className=' max-w-[1440px] m-auto flex justify-center gap-10'>
        {navItems.map((item) => (
          <NavbarItem key={item.param} {...item}/>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
