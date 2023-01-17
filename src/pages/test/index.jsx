import Button from "../../components/global/button/Button"

function index() {
  return (
    <div className="flex f-center">
        <Button 
            className='btn-primary'
            onClick={() => console.log('egg')}
            text='Test Button'
        />
    </div>
  )
}

export default index