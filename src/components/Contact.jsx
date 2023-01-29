import github from '../assets/images/contact/github.png'
import twitter from '../assets/images/contact/twitter.png'
import envelope from '../assets/images/contact/envelope.png'
import Image from 'next/image'
import Card from './global/Card'

export default function Contact () {

    return (
        <div className='grid grid-3 gap-1 f-center'>
            <Card
                cardBgHover={true}
                cardRounded={true}
                cardPadding={true}
            >
                <a href="https://github.com/RyanBriggsDev" target={'_blank noreferrer'}>
                    <div className="flex f-d-col gap-2 f-center">
                        <Image src={github} width={100} height={100} alt={'github octocat black logo'} />
                        <p>@ryanbriggsdev</p>
                    </div>
                </a>
            </Card>
            <Card
                cardBgHover={true}
                cardRounded={true}
                cardPadding={true}
            >
                <a href="https://twitter.com/RyanBriggsDev" target={'_blank noreferrer'}>
                    <div className="flex f-d-col gap-2 f-center">
                        <Image src={twitter} width={100} height={100} alt={'twitter blue logo'} />
                        <p>@ryanbriggsdev</p>
                    </div>
                </a>
            </Card>
            <Card
                cardBgHover={true}
                cardRounded={true}
                cardPadding={true}
            >
                <a href="mailto:r@ryanbriggs.dev">
                    <div className="flex f-d-col gap-2 f-center">
                        <Image src={envelope} width={100} height={100} alt={'white envelope'} />
                        <p>r@ryanbriggs.dev</p>
                    </div>
                </a>
            </Card>
        </div>
    )
}