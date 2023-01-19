import Header from '../../../components/global/Header'
import VerticalScroll from '../../../components/global/VerticalScroll'

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
          link='3'
          style={{backgroundColor: 'red'}}
        >
          <Header 
            className='flex f-center f-d-col gap-1'
            h1='Number Two'
            label='Another Header Component'
            btnText='Another Button Component'
            btnOnClick={() => console.log('click')}
            btnClassName='btn-primary'
          />
        </VerticalScroll>

        <VerticalScroll
          id='3'
          link='4'
        >
          <Header 
            className='flex f-center f-d-col gap-1'
            h1='Number Three'
            label='Another Header Component'
            btnText='Another Button Component'
            btnOnClick={() => console.log('click')}
            btnClassName='btn-primary'
          />
        </VerticalScroll>

        <VerticalScroll
          id='4'
          link='5'
        >
          <Header 
            className='flex f-center f-d-col gap-1'
            h1='Number Four'
            label='Another Header Component'
            btnText='Another Button Component'
            btnOnClick={() => console.log('click')}
            btnClassName='btn-primary'
          />
        </VerticalScroll>

        <VerticalScroll
          id='5'
        >
          <Header 
            className='flex f-center f-d-col gap-1'
            h1='Number Five'
            label='Another Header Component'
            btnText='Another Button Component'
            btnOnClick={() => console.log('click')}
            btnClassName='btn-primary'
          />
        </VerticalScroll>
    </>
  )
}

export default index