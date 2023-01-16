import Nav from '../../components/global/nav/Nav'
import Footer from '../../components/global/footer/Footer'
import Container from './Container'

export default function Layout ({ children }) {
    return (
        <div className='layout'>
            <Nav />
            <Container>
                {children}
            </Container>
            <Footer />
        </div>
    )
}