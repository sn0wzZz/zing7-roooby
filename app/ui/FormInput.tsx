import Error from './Error';


export default function FormInput({children, error,full }:any) {
  return (
    <div className={`relative flex flex-col w-full ${full&& 'h-full'}`}>
      {children}
      {error&& <Error>{error.message}</Error>}
    </div>
  )
}