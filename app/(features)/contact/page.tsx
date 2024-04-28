import Header from '../../ui/Header'
import Partners from '../../ui/Partners'
import Contact from './Contact'

export default function page() {
  return (
    <div>
      <Header bgColor='bg-background-main py-6 md:py-16'>
        Get in touch with <br /> our lovely team
      </Header>
      <Contact />
      <Partners noPadding />
    </div>
  )
}
