import Button from "./Button"
import Card from "./Card"

import wrongmove from '../../assets/images/wrongmove.jpg'
import pokedex from '../../assets/images/pokedex.jpg'
import expenseTracker from '../../assets/images/expenseTracker.jpg'

export default function Projects () {

    return (
        <>
        <div className="project grid grid-2" style={{minHeight: '20rem'}}>
            <Card
              width={'w-100'}
              cardPadding={true}
              cardBgHover={true}
              cardBgImg={wrongmove}
              alt={'wrongmove webpage home screenshot'}
              minHeight={'20rem'}
              backgroundClassName='divImg'
            >
            </Card>
            <Card 
              width={'w-100'}
              cardBorder={true}
              cardPadding={true}
              minHeight={'20rem'}
            >
              <div className="flex f-d-col gap-1 h-100 space-between">

                <div className='flex f-d-col gap-1'>
                  <h3 className='font-2'>Wrongmove</h3>
                  <div className='flex f-d-col gap-1'>
                    <p>
                      A project working with a friend, Chris. Wrongmove is a clone of the popular property website Rightmove.co.uk. We build this using Next.JS and Vanilla CSS for the frontend. Chris did the backend work using an Express API and a Postgres database.
                    </p>
                    <p>
                      Public users can view listings for sale/rent and filter based on min-max price, property type and min-bedrooms. Agents have full CRUD capabilities for rental/sales listings including image upload.
                    </p>
                  </div>
                </div>
                <div className='grid grid-2 gap-1'>
                  <Button 
                    text='GitHub Repo'
                    className='btn-primary w-100' 
                    externalUrl={true}
                    href='https://github.com/ytsruh/wrongmove'
                  />
                  <Button 
                    text='Live Site'
                    className='w-100'
                    externalUrl={true}
                    href='https://wrongmove.ytsruh.com/'
                  />
                </div>
              </div>
            </Card>
          </div>

          <div className="project grid grid-2" style={{minHeight: '20rem'}}>
            <Card
              width={'w-100'}
              cardPadding={true}
              cardBgHover={true}
              cardBgImg={pokedex}
              alt={'pokedex website screenshot'}
              minHeight={'20rem'}
              backgroundClassName='divImg'
            >
            </Card>
            <Card 
              width={'w-100'}
              cardBorder={true}
              cardPadding={true}
              minHeight={'20rem'}
            >
              <div className="flex f-d-col gap-1 h-100 space-between">
    
                <div className='flex f-d-col gap-1'>
                  <h3 className='font-2'>Pokédex</h3>
                  <div className='flex f-d-col gap-1'>
                    <p>My first project after switching from Vanilla JavaScript to React JS. </p>
                    <p>A Pokédex made using the PokéAPI. Users can search using a number or name and the app will use this to fetch data from the PokéAPI.</p>
                    <p>The app will then display the Pokémon stats.</p>
                  </div>
                </div>
                <div className='grid grid-2 gap-1'>
                  <Button 
                    text='GitHub Repo'
                    className='btn-primary w-100' 
                    externalUrl={true}
                    href='https://github.com/RyanBriggsDev/ReactPokedex'
                  />
                  <Button 
                    text='Live Site'
                    className='w-100'
                    externalUrl={true}
                    href='https://pokedex.ryanbriggs.dev/'
                  />
                </div>
              </div>
            </Card>
          </div>

                    <div className="project grid grid-2" style={{minHeight: '20rem'}}>
            <Card
              width={'w-100'}
              cardPadding={true}
              cardBgHover={true}
              cardBgImg={expenseTracker}
              alt={'expense tracker screenshot'}
              minHeight={'20rem'}
              backgroundClassName='divImg'
            >
            </Card>
            <Card 
              width={'w-100'}
              cardBorder={true}
              cardPadding={true}
              minHeight={'20rem'}
            >
              <div className="flex f-d-col gap-1 h-100 space-between">
    
                <div className='flex f-d-col gap-1'>
                  <h3 className='font-2'>Expense Tracker</h3>
                  <div className='flex f-d-col gap-1'>
                    <p>A basic expense tracker, developed using plain Vanilla JavaScript and styled with SCSS, offers users the ability to track their expenditures.</p>
                    <p>The app enables users to input their expenses, and calculates the overall total for the user to view. </p>
                    <p>The use of Local Storage ensures that users can save their progress and revisit the site to add new expenses at a later time.</p>
                  </div>
                </div>
                <div className='grid grid-2 gap-1'>
                  <Button 
                    text='GitHub Repo'
                    className='btn-primary w-100' 
                    externalUrl={true}
                    href='https://github.com/RyanBriggsDev/expense-tracker'
                  />
                  <Button 
                    text='Live Site'
                    className='w-100'
                    externalUrl={true}
                    href='https://expense-tracker.ryanbriggs.dev/'
                  />
                </div>
              </div>
            </Card>
          </div>
        </>
    )
}