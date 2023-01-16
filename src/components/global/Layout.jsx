import Nav from '../../components/global/nav/Nav'
import Footer from '../../components/global/footer/Footer'

export default function Layout ({ children }) {
    return (
        <div style={styles.layout}>
            <Nav />
            {children}
            <Footer />
        </div>
    )
}

const styles = {
    layout: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '100vh',
    }
}