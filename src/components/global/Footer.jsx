import Container from './Container'
import Image from 'next/image'
import profilePic from '../../assets/images/profilePic.png'

export default function Footer () {

    const year = new Date().getFullYear()

    return (
        <footer className="w-100 flex f-center py-3">
            <Container>
                <div className="flex f-d-col gap-2 f-center">
                    <div className="flex f-center flex-flow gap-3 w-100 space-evenly">
                        <div>
                            <p>© <a href="https://github.com/ryanbriggsdev">Ryan Briggs</a> {year}</p>
                            <p><a href="https://ryanbriggs.dev">ryanbriggs.dev</a></p>
                        </div>
                            <Image src={profilePic} width={150} height={150} alt={'Ryan Briggs Profile Picture'}/>
                    </div>
                </div>
            </Container>
        </footer>
    )
}