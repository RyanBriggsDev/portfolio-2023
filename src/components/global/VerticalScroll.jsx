import iconDownArrow from '../../assets/icons/iconDownArrow.png'
import Link from 'next/link'

export default function VerticalScroll ({children, link, id, style, className}) { 

    const onClick = () => {
        
    }

    return (
        <div id={id ? id : ''} onClick={() => onClick()} className={`vertical-scroll flex f-center w-100 ${className ? className : ''}`} style={style ? style : null}>
            {children}
            {link ? 
                <Link className='vertical-scroll-link flex f-center' scroll={false} href={`#${link ? link : ''}`}>
                <div className="vertical-scroll-arrow" style={{backgroundImage: `url(${iconDownArrow.src})`}}></div>
            </Link>    
            : <></>
            }
        </div>
    )
}