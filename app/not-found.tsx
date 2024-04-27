import Link from 'next/link'

const NotFoundPage = () => {
  return (
    <div className='flex flex-col justify-start items-start h-screen p-10 '>
      <h1 className='text-7xl font-bold text-p-secondary'>404</h1>
      <p className='text-lg  text-p-secondary'>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link href='/' className='button-primary mt-4 !no-underline'>
        Go back to home
      </Link>
    </div>
  )
}

export default NotFoundPage
