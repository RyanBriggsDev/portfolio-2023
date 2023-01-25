import Link from "next/link"

export default function InlineLink ({ href, text, external }) {

    if(!text) return <p className='bg-red-500 text-white p-2 text-center rounded inline-block'>Inline link requires a text prop.</p>

    if(external) return (
        <a
            className={`inline-link`}
            href={href}
            target='_blank'
            rel="noreferrer"
        >
            {text}
        </a>
    )

    return (
        <Link
            className={`inline-link`}
            href={href}
        >
            {text}
        </Link>
    )

}
