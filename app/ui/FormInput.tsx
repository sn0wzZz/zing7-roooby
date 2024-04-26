import InputError from './InputError';


export default function FormInput({children, error,full }:any) {
  return (
    <div className={`relative flex flex-col w-full ${full&& 'h-full'}`}>
      {children}
      {error&& <InputError>{error.message}</InputError>}
    </div>
  )
}