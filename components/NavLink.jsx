import Link from 'next/link';

const NavLink = ({ href, title }) => {
  console.log(`NavLink - href: ${href}`);
  
  return (
    <Link legacyBehavior href={href}>
      <a className='block py-2 pl-3 pr-4 text-3xl text-slate-500 sm:text-xl rounded md:p-0 hover:text-black'>{title}</a>
    </Link>
  );
};

export default NavLink;
