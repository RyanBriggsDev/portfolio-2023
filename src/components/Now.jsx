import Card from './global/Card'
import Button from './global/Button'

import certifyLogoFull from '../assets/images/certifyFullLogo.png'

export default function Now() {
  return (
    <div className="grid grid-2 gap-2">
      <Card
        cardRounded={true}
        cardPadding={true}
        style={{ backgroundImage: `url(${certifyLogoFull.src})` }}
        alt="certify logo"
        className={'divImgContain mh-300'}
      ></Card>
      <Card
        cardBorder={true}
        cardRounded={true}
        cardPadding={true}
        cardBgHover={true}
        className="pointer"
      >
        <div className="flex f-d-col gap-2 space-between">
          <h3 className="font-2">Certify</h3>
          <div className="flex f-d-col gap-1 py-1">
            <p>
              I am currently developing Certify, an application designed to
              streamline the management of training course records and
              facilitate the generation of professional certificates. This
              platform is intended for use by training providers and businesses
              that have staff requirements.
            </p>
            <p>
              With Certify, administrators are fully authenticated using
              next/auth before gaining access to their dashboard. From there,
              they can easily add new courses, enroll candidates, store training
              records, and generate customised PDF certificates based on
              inputted results.
            </p>
            <p>
              I am also taking the opportunity to expand my skill set by
              learning TailwindCSS and TypeScript for this project.
            </p>
          </div>
          <div className="grid grid-2 gap-1">
            <Button
              text="GitHub Repo"
              className="btn-primary w-100"
              externalUrl={true}
              href="https://github.com/RyanBriggsDev/certify"
            />
            <Button
              text="Current Build"
              className="w-100"
              externalUrl={true}
              href="https://certify.ryanbriggs.dev/"
            />
          </div>
        </div>
        <p></p>
      </Card>
    </div>
  )
}
