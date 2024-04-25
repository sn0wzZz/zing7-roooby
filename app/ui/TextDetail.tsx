

export default function TextDetail({text1,text2,variant=1}:any) {
  return (
    <div className={`${variant===1? '': 'px-5 border-l border-p-el'} my-5`}>
      <p className='font-bold' >{text1}</p>
      <p className='font-madium text-p-main'>{text2}</p>
    </div>
  )
}