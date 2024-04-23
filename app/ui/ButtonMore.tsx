import { FaChevronRight } from 'react-icons/fa6'

export default function ButtonMore({ children, onClick, variant2 }: any) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center text-xl text-black ${
        variant2 ? 'hover:bg-white' : 'hover:bg-background-main'
      } p-2 md:p-5 rounded-lg max-w-max`}
    >
      <div className='flex items-center'>
        <span className='mr-2 whitespace-nowrap'>{children || 'See all'}</span>
        <FaChevronRight className='text-f-banner-3' />
      </div>
    </button>
  )
}

