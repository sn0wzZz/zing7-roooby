'use client'
import { SubmitHandler, useForm } from 'react-hook-form'
import ButtonMore from '../../ui/ButtonMore'
import FormInput from '../../ui/FormInput'
import { isValidEmail } from '../../utils/helpers'

type Inputs = {
  name: string
  email: string
  message: string
}

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  console.log(watch('name')) // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col items-start gap-5 lg:gap-10 last:h-full'
    >
      {/* register your input into the hook by invoking the "register" function */}
      <FormInput error={errors.name}>
        <input
          className={`form-input ${errors.name && ' border-red-500'}`}
          placeholder='Your Name'
          {...register('name', {
            required: { value: true, message: 'This field is required!' },
            minLength: {
              value: 5,
              message: `Name should be at least 5 characters!`,
            },
            maxLength: {
              value: 40,
              message: `Name should be at least 40 characters!`,
            },
          })}
        />
      </FormInput>
      <FormInput error={errors.email}>
        <input
          className={`form-input ${errors.email && ' border-red-500'}`}
          placeholder='Your Email'
          {...register('email', {
            required: { value: true, message: 'This field is required!' },
            validate: (value) =>
              isValidEmail(value) || "Make sure you've entered a valid email!",
            minLength: {
              value: 5,
              message: `Email should be at least 5 characters!`,
            },
            maxLength: {
              value: 20,
              message: `Email message should be at most 20 charecters!`,
            },
          })}
        />
      </FormInput>

      <FormInput error={errors.message} full>
        <textarea
          className={`form-input h-full ${errors.message && ' border-red-500'}`}
          placeholder='Message'
          {...register('message', {
            required: { value: true, message: 'This field is required!' },
            minLength: {
              value: 30,
              message: `Your message should be at least 30 charecters!`,
            },
            maxLength: {
              value: 500,
              message: `Your message should be at most 500 charecters!`,
            },
          })}
        />
      </FormInput>

      <ButtonMore type='submit' variant3>
        Send message
      </ButtonMore>
    </form>
  )
}
