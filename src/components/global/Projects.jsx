import Button from './Button'
import Card from './Card'
import Image from 'next/image'
import wrongmove from '../../assets/images/wrongmove.jpg'
import pokedex from '../../assets/images/pokedex.jpg'
import expenseTracker from '../../assets/images/expenseTracker.jpg'

import nextjs from '../../assets/images/skills/nextjs.svg'
import typescript from '../../assets/images/skills/typescript.svg'
import css3 from '../../assets/images/skills/css3.svg'
import tailwindcssMark from '../../assets/images/skills/tailwindcssMark.svg'
import sass from '../../assets/images/skills/sass.svg'
import javascript from '../../assets/images/skills/javascript.svg'

export default function Projects() {
  return (
    <>
      <div className="project grid grid-2" style={{ minHeight: '20rem' }}>
        <Card
          width={'w-100'}
          cardPadding={true}
          cardBgHover={true}
          cardBgImg={wrongmove}
          alt={'wrongmove webpage home screenshot'}
          minHeight={'20rem'}
          backgroundClassName="divImg flex f-d-col w-100 bottom-right"
        >
          <div
            className="grid grid-2 gap-1"
            style={{
              bottom: 0,
              left: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              borderRadius: '0.25rem',
              padding: '0.5rem',
            }}
          >
            <Image alt="nextjs logo" src={nextjs} height={90} />
            <Image alt="plain css logo" src={css3} height={90} />
          </div>
        </Card>
        <Card
          width={'w-100'}
          cardBorder={true}
          cardPadding={true}
          minHeight={'20rem'}
        >
          <div className="flex f-d-col gap-1 h-100 space-between">
            <div className="flex f-d-col gap-1">
              <h3 className="font-2">Wrongmove</h3>
              <div className="flex f-d-col gap-1">
                <p>
                  A project working with a friend, Chris. Wrongmove is a clone
                  of the popular property website Rightmove.co.uk. We build this
                  using Next.JS and Vanilla CSS for the frontend. Chris did the
                  backend work using an Express API and a Postgres database.
                </p>
                <p>
                  Public users can view listings for sale/rent and filter based
                  on min-max price, property type and min-bedrooms. Agents have
                  full CRUD capabilities for rental/sales listings including
                  image upload.
                </p>
              </div>
            </div>
            <div className="grid grid-2 gap-1">
              <Button
                text="GitHub Repo"
                className="btn-primary w-100"
                externalUrl={true}
                href="https://github.com/ytsruh/wrongmove"
              />
              <Button
                text="Live Site"
                className="w-100"
                externalUrl={true}
                href="https://wrongmove.ytsruh.com/"
              />
            </div>
          </div>
        </Card>
      </div>

      <div className="project grid grid-2" style={{ minHeight: '20rem' }}>
        <Card
          width={'w-100'}
          cardPadding={true}
          cardBgHover={true}
          cardBgImg={pokedex}
          alt={'pokedex website screenshot'}
          minHeight={'20rem'}
          backgroundClassName="divImg flex f-d-col w-100 bottom-right"
        >
          <div
            className="grid grid-2 gap-1"
            style={{
              bottom: 0,
              left: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
              borderRadius: '0.25rem',
              padding: '0.5rem',
            }}
          >
            <Image alt={'typescript logo'} src={typescript} height={90} />
            <Image
              alt={'tailwind css logo'}
              src={tailwindcssMark}
              height={90}
              width={90}
            />
          </div>
        </Card>
        <Card
          width={'w-100'}
          cardBorder={true}
          cardPadding={true}
          minHeight={'20rem'}
        >
          <div className="flex f-d-col gap-1 h-100 space-between">
            <div className="flex f-d-col gap-1">
              <h3 className="font-2">Pokédex</h3>
              <div className="flex f-d-col gap-1">
                <p>
                  This application utilises Next.js, TypeScript, and Tailwind
                  CSS to create a Pokédex using data from the PokéAPI.{' '}
                </p>
                <p>
                  By default, the app displays information for all 151 original
                  Pokémon, but users can search and filter the list by entering
                  a search term. Users can also select a specific Pokémon to
                  view more detailed information on an individual page
                  designated by its ID number.
                </p>
                <p>
                  Additionally, the app offers a feature that allows users to
                  compare two different Pokémon by displaying them side by side.
                </p>
              </div>
            </div>
            <div className="grid grid-2 gap-1">
              <Button
                text="GitHub Repo"
                className="btn-primary w-100"
                externalUrl={true}
                href="https://github.com/RyanBriggsDev/pokedex-2023"
              />
              <Button
                text="Live Site"
                className="w-100"
                externalUrl={true}
                href="https://pokedex.ryanbriggs.dev/"
              />
            </div>
          </div>
        </Card>
      </div>

      <div className="project grid grid-2" style={{ minHeight: '20rem' }}>
        <Card
          width={'w-100'}
          cardPadding={true}
          cardBgHover={true}
          cardBgImg={expenseTracker}
          alt={'expense tracker screenshot'}
          minHeight={'20rem'}
          backgroundClassName="divImg flex f-d-col w-100 bottom-right"
        >
          <div
            className="grid grid-2 gap-1"
            style={{
              bottom: 0,
              left: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
              borderRadius: '0.25rem',
              padding: '0.5rem',
            }}
          >
            <Image alt={'javascript logo'} src={javascript} height={90} />
            <Image alt={'sass css logo'} src={sass} height={90} />
          </div>
        </Card>
        <Card
          width={'w-100'}
          cardBorder={true}
          cardPadding={true}
          minHeight={'20rem'}
        >
          <div className="flex f-d-col gap-1 h-100 space-between">
            <div className="flex f-d-col gap-1">
              <h3 className="font-2">Expense Tracker</h3>
              <div className="flex f-d-col gap-1">
                <p>
                  A basic expense tracker, developed using plain Vanilla
                  JavaScript and styled with SCSS, offers users the ability to
                  track their expenditures.
                </p>
                <p>
                  The app enables users to input their expenses, and calculates
                  the overall total for the user to view.{' '}
                </p>
                <p>
                  The use of Local Storage ensures that users can save their
                  progress and revisit the site to add new expenses at a later
                  time.
                </p>
              </div>
            </div>
            <div className="grid grid-2 gap-1">
              <Button
                text="GitHub Repo"
                className="btn-primary w-100"
                externalUrl={true}
                href="https://github.com/RyanBriggsDev/expense-tracker"
              />
              <Button
                text="Live Site"
                className="w-100"
                externalUrl={true}
                href="https://expense-tracker.ryanbriggs.dev/"
              />
            </div>
          </div>
        </Card>
      </div>
    </>
  )
}
