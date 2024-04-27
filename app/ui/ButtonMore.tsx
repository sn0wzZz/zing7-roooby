import { FaChevronRight } from 'react-icons/fa6'

export default function ButtonMore({
  children,
  onClick,
  variant2,
  variant3,
  noArr
}: any) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center text-base lg:text-xl ${
        variant3 ? 'text-white' : 'text-black'
      } ${variant2 ? 'hover:bg-white' : 'hover:bg-background-main'} 
      ${variant3 && 'bg-f-banner-3 hover:bg-green-400'}
       p-2 md:p-5 rounded-lg max-w-max`}
    >
      <div className='flex items-center'>
        <span className='mr-2 font-bold whitespace-nowrap'>{children || 'See all'}</span>
        {!noArr&&<FaChevronRight
          className={`${variant3 ? 'text-white' : 'text-f-banner-3'}`}
        />}
      </div>
    </button>
  )
}
