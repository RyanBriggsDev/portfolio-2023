import Header from '../../../components/global/Header'
import FullPage from '../../../components/global/FullPage'

function index() {

  return (
    <>
        <FullPage>
          <Header 
            className='flex f-center f-d-col gap-1'
            h1='Header Component'
            label='Header Component Label'
            btnText='Button Component'
            btnOnClick={() => console.log('click')}
            btnClassName='btn-primary'
          />
        </FullPage>

        <FullPage
          style={{backgroundColor: 'red'}}
        >
          <Header 
            className='flex f-center f-d-col gap-1'
            h1='Number Two'
            label='Another Header Component'
            dropdownTitle='Dropdown Component'
            dropdownData={dropdownData}
            dropdownBtnClassName='w-100 btn-primary'
          />
        </FullPage>
    </>
  )
}

export default index

const dropdownData = [
  {
    name: 'Home',
    link: '/'
  },
  {
    name: 'Projects',
    link: '/projects'
  },
  {
    name: 'Now',
    link: '/now'
  }
]