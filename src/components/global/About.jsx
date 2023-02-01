import Image from "next/image"
import Card from "./Card"
import logo from '../../assets/images/logo.png'

export default function About () { 
    
    return (
        <div className='grid grid-2_60-40 gap-2'>
            <Card 
                cardBorder={true}
                cardPadding={true}
                cardRounded={true}
                cardBgHover={true}
                minHeight={'20rem'}
            >
                <div className='about-me flex f-d-col gap-1'>
                    <p>
                    I am a self taught front end web developer with 1 year of experience in creating dynamic and responsive web applications using React and Next.js frameworks. 
                    </p>
                    <p>
                    My expertise in HTML, CSS, and JavaScript allows me to build visually appealing and user-friendly websites. I have a solid understanding of the principles of component-based development, and am passionate about creating high-performance and scalable web applications that provide an exceptional user experience.
                    </p>
                    <p>
                    I am a fast learner, and I am always eager to expand my skillset and improve my development process. I am excited to continue learning and growing as a developer, and am eager to apply my skills to real-world projects.
                    </p>
                    <p>
                    In my free time, I love going for long walks with my dog, Ivy. I am also currently learning CAD modelling so I can 3D print my own designs.  
                    </p>
                </div>
            </Card>
            <div id='hide-mobile' className='w-100 flex justify-center'>
                <Image 
                    style={{objectFit: 'contain'}}
                    id='hide-mobile'
                    className='w-100'
                    src={logo} 
                    alt='ryanbriggs.dev logo'
                    height={300}
                />
            </div>
        </div>
    )
}