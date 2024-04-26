import { FaLink } from 'react-icons/fa';
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';


export default function Links({full}:any) {
  return (
    <div className='flex items-center gap-5'>
      <button className='button-social bg-twitter '>
        <FaXTwitter className='size-6 lg:size-5' />
      </button>
      <button className='button-social bg-facebook '>
        <FaFacebookF className='size-6 lg:size-5' />
      </button>
      <button className='button-social bg-linkedin'>
        <FaLinkedinIn className='size-6 lg:size-5' />
      </button>
      {full && (
        <button className='button-social '>
          <FaLink className='size-6 lg:size-5 text-stone-400' />
        </button>
      )}
    </div>
  )
}