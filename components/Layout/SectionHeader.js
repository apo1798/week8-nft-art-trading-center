import NavButton from 'components/UI/Button/NavButton';

const SectionHeader = ({ mainTitle = 'main', subTitle = 'sub' }) => {
  return (
    <div className="flex justify-between border-b border-black">
      <h2 className="mb-2 text-5xl md:mb-4">
        {mainTitle}
        <span className="ml-4 hidden text-xl font-bold sm:inline">
          {subTitle}
        </span>
      </h2>
      <NavButton className="mb-[-1px] self-end border-b border-black" />
    </div>
  );
};
export default SectionHeader;
