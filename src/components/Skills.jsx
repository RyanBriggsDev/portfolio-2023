import Card from "./global/Card"

import nextjs from '../assets/images/skills/nextjs.svg'
import react from '../assets/images/skills/react.svg'
import sass from '../assets/images/skills/sass.svg'
import javascript from '../assets/images/skills/javascript.svg'
import tailwindcss from '../assets/images/skills/tailwindcss.svg'
import github from '../assets/images/skills/github.svg'

export default function Skills () {
    return (
        <div className="skills grid grid-3 gap-2">
            <Card 
                cardBgImg={nextjs}
                cardPadding={true}
                cardRounded={true}
                minHeight='15rem'
                backgroundClassName='divImgContain'
                style={{backgroundColor: 'rgba(0, 73, 121, 0.5)', borderRadius: '0.25rem', padding: '2rem'}}
            >
            </Card>
            <Card 
                cardBgImg={react}
                cardPadding={true}
                cardRounded={true}
                minHeight='15rem'
                backgroundClassName='divImgContain'
                style={{backgroundColor: 'rgba(0, 73, 121, 0.5)', borderRadius: '0.25rem', padding: '2rem'}}
            >
            </Card>
            <Card 
                cardBgImg={javascript}
                cardPadding={true}
                cardRounded={true}
                minHeight='15rem'
                backgroundClassName='divImgContain'
                style={{backgroundColor: 'rgba(0, 73, 121, 0.5)', borderRadius: '0.25rem', padding: '2rem'}}
            >
            </Card>
            <Card 
                cardBgImg={sass}
                cardPadding={true}
                cardRounded={true}
                minHeight='15rem'
                backgroundClassName='divImgContain'
                style={{backgroundColor: 'rgba(0, 73, 121, 0.5)', borderRadius: '0.25rem', padding: '2rem'}}
            >
            </Card>
            <Card 
                cardBgImg={tailwindcss}
                cardPadding={true}
                cardRounded={true}
                minHeight='15rem'
                backgroundClassName='divImgContain'
                style={{backgroundColor: 'rgba(0, 73, 121, 0.35)', borderRadius: '0.25rem', padding: '2rem'}}
            >
            </Card>
            <Card 
                cardBgImg={github}
                cardPadding={true}
                cardRounded={true}
                minHeight='15rem'
                backgroundClassName='divImgContain'
                style={{backgroundColor: 'rgba(0, 73, 121, 0.5)', borderRadius: '0.25rem', padding: '2rem'}}
            >
            </Card>
        </div>
    )
}