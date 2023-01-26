import Container from './Container'
import InternalButton from './InternalButton'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Nav () {
    
    const router = useRouter()

    const [navLinksOpen, setNavLinksOpen] = useState(false)
    
    return (
        <nav className='flex f-center'>
            <div className="nav-desktop flex w-100 items-center justify-center">
                <Container>
                    <div className='flex space-between my-05'>
                        <div className="nav-left flex items-center">
                            <h3 
                                onClick={() => router.push('/')} 
                                className='pointer hover hover-blue-text'
                            >
                                RyanBriggs.Dev
                            </h3>
                        </div>
                        <div className="nav-right flex gap-1">
                            <InternalButton 
                                text='About'
                                href='#about'
                            />
                            <InternalButton 
                                text='Projects'
                                href='#projects'
                            />
                            <InternalButton 
                                text='Skills'
                                href='#skills'
                            />
                            <InternalButton 
                                text='Now'
                                href='#now'
                            />
                            <InternalButton 
                                text='Contact'
                                className='btn-primary'
                                href='#contact'
                            />
                        </div>
                    </div>
                </Container>
            </div>
            <NavMobile 
                navLinksOpen={navLinksOpen}
                mobileOnClick={() => setNavLinksOpen(!navLinksOpen)}
                closeMobileMenu={() => setNavLinksOpen(false)}
            />
        </nav>
    )
}

function NavMobile ({navLinksOpen, mobileOnClick, closeMobileMenu}) {

    const router = useRouter()
    
    return (
        <div className="nav-mobile">
            {navLinksOpen ? <div onClick={closeMobileMenu} className="nav-mobile-fullpage-close"></div> : <></>}
            <div className='nav-mobile-title py-05'>                            
            <h3 
                onClick={() => router.push('/')} 
                className='pointer hover hover-blue-text'
            >
                    RyanBriggs.Dev
                </h3>
            </div>
            <div className="nav-mobile-container">
                <div className="nav-mobile-links w-100">
                    <InternalButton 
                        text='About'
                        href='#about'
                        className='btn-primary w-100'
                        style={{display: navLinksOpen ? 'flex' : 'none'}}
                        />
                    <InternalButton 
                        text='Projects'
                        href='#projects'
                        className='btn-primary w-100'
                        style={{display: navLinksOpen ? 'flex' : 'none'}}
                        />
                    <InternalButton 
                        text='Skills'
                        href='#skills'
                        className='btn-primary w-100'
                        style={{display: navLinksOpen ? 'flex' : 'none'}}
                        />
                    <InternalButton 
                        text='Now'
                        href='#now'
                        className='btn-primary w-100'
                        style={{display: navLinksOpen ? 'flex' : 'none'}}
                        />
                    <InternalButton 
                        text='Contact'
                        className='btn-primary w-100'
                        style={{display: navLinksOpen ? 'flex' : 'none'}}
                        href='#contact'
                        />
                </div>
                <div onClick={mobileOnClick} className="nav-mobile-open hover pointer">Nav</div>
            </div>
        </div>
    )
}