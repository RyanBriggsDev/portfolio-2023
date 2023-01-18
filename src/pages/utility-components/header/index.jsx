import Header from '../../../components/global/Header'
import { useRouter } from 'next/router'

function index() {
  
  const router = useRouter()

  return (
    <>
      <Header 
        className='flex f-center f-d-col gap-1'
        h1='Header Component'
        label='Header Component Label'
        btnText='Click this to do something'
        btnOnClick={() => router.push('/')}
        btnClassName='btn-primary'
        />
    </>
  )
}

export default index