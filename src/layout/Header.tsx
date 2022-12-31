import clsxm from '@/lib/clsxm';

export default function Header() {
  return (
    <>
      <header className='layout-header fixed top-0 z-50 hidden w-full md:block'>
        <div
          className={clsxm(
            'flex items-center justify-between px-8 pt-8 text-[#554660]'
          )}
        ></div>
      </header>
    </>
  );
}
