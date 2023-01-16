import Nav from '../../components/global/nav/Nav'
import Footer from '../../components/global/footer/Footer'

export default function Layout ({ children }) {
    return (
        <>
            <Nav />
            {children}
            <Footer />
        </>
    )
}