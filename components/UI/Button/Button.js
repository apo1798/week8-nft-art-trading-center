import Link from 'next/link';

const Button = ({ text = 'more', className, href = '/' }) => {
  return (
    <Link href={href}>
      <a
        className={`relative border border-black px-12 py-2 text-lg uppercase after:absolute after:right-0 after:bottom-0 after:border-l-16 after:border-b-16  after:border-l-transparent after:border-b-primary after:content-[''] hover:bg-primary hover:text-white hover:after:border-b-black ${className}`}
      >
        {text}
      </a>
    </Link>
  );
};
export default Button;
