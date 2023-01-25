import Nav from './Nav'
import Footer from '../../components/global/footer/Footer'

export default function Layout ({ children }) {
    return (
        <div className='layout'>
            <Nav />
                {children}
            <Footer />
        </div>
    )
}