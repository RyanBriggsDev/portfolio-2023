import Header from '../../../components/global/Header'
import VerticalScroll from '../../../components/global/VerticalScroll'
import InlineLink from '../../../components/global/type/Inlinelink'

function index() {

  return (
    <>
        <VerticalScroll
          link='2'
        >
          <Header 
            className='flex f-center f-d-col gap-1'
            h1='Header Component'
            label='Header Component Label'
            btnText='Button Component'
            btnOnClick={() => console.log('click')}
            btnClassName='btn-primary'
          />
        </VerticalScroll>

        <VerticalScroll
          id='2'
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
        </VerticalScroll>
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