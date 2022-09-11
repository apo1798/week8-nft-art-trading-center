import Link from 'next/link';

const NavButton = ({ text = 'more', className, href = '/' }) => {
  return (
    <Link href={href}>
      <a
        className={`relative px-12 py-2 uppercase after:absolute after:bottom-0 after:right-0 after:border-l-16 after:border-b-16 after:border-l-transparent after:border-b-primary after:content-[''] hover:border hover:border-black hover:bg-primary hover:text-white hover:after:border-b-black ${className}`}
      >
        {text}
      </a>
    </Link>
  );
};
export default NavButton;
