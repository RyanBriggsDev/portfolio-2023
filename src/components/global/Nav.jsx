import Container from './Container'
import InternalButton from './InternalButton'

import { useRouter } from 'next/router'

export default function Nav () {
    
    const router = useRouter()
    
    return (
        <nav className='flex f-center'>
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
        </nav>
    )
}