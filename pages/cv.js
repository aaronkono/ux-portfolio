import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import Nav from '../components/nav'
import './cv.css';

const Cv = () => {
    return (
        <Layout>
            <Head>
               <title>CV</title> 
            </Head>
            <Nav />
            <div className="wrapper">
    <article className="resume">
        <section className="grid-area name">
            <p className='mb-0 orange-text'>Aaron Konopka</p>
            <p className='mb-0'>User Experience / UI Design</p>
            <p className='mb-0'>linkedin.com/in/aaron-konopka +61 433 529 171 aaronkonopka.ux@gmail.com</p>
        </section>
        {/* <section className="grid-area photo">
            <div className="circle"></div>
        </section> */}
        <section className="grid-area careerObjective">
            <h3 className='orange-text'>Career Objective</h3>
            <p className='mb-0'>To create powerful experiences that users will love and
remember. I strive for excellence and achieving results of which
I can be proud and satisfy my hunger for quality outcomes.</p>
        </section>
        <section className="grid-area work">
            <h3 className='orange-text'>Skills</h3>
            <p className='mb-0'>UX Design, UI Design, Interaction Design
Responsive Web Design, User-centered design
Product design, Information Archiecture
Personas, Wireframing, Rapid Prototyping
User flows / journeys, User research</p>
        </section>
        <section className="grid-area experience">
            <h3 className='orange-text'>Experience</h3>
            <div>
                <p className='mb-0'>UX / UI Designer</p>
                <p className='mb-0'>VirtualAgent</p>
                <p className='mb-0'>2017 - Present</p>
                <p className='mb-0'>My role includes taking ownership over B2B and B2C products at
    VirtualAgent, focusing on user experience and identifying usability issues
    by wireframing / rapid prototyping, usability testing, creating user stories
    and receiving feedback from stakeholders and users. I also implement all
    prototypes by developing them myself then handing off to the backend
    developers.</p>
            </div>
            <div>
                <p className='mb-0'>UX / UI Designer and Frontend Developer</p>
                <p className='mb-0'>Toop&Toop Real Estate</p>
                <p className='mb-0'>2013 - Present</p>
                <p className='mb-0'>My responsibilities within this role was identifying usability issues and
creating user stories / groups, wireframes, email templates, creating
end-to-end products from a simplistic brief.</p>
            </div>
            <div>
                <p className='mb-0'>UX / UI Designer / Graphic Design and Frontend Developer</p>
                <p className='mb-0'>Freelance</p>
                <p className='mb-0'>2010 - Present</p>
                <p className='mb-0'>Whilst working for myself, I created a vast range of products for clients,
such as creating websites, email templates, stationary packs, brochures,
flyers and much more.</p>
            </div>
            <div>
                <p className='mb-0'>Junior / Casual Web & Graphic Designer</p>
                <p className='mb-0'>Tek Graphix</p>
                <p className='mb-0'>2006 - 2013</p>
                <p className='mb-0'>Whilst undertaking studies, I was working on a casual basis with Tek
Graphix. This was a valuable experience as it allowed me to increase my
awareness of how the design industry ran. My responsibilities included
creating visually appealing designs from brief to completion with tight
deadlines and heavy workflows.</p>
            </div>
        </section>
        <section className="grid-area education">
            <h3 className='orange-text'>Education</h3>
            <div>
                <p className='mb-0'>Open2Study</p>
                <p className='mb-0'>Certificate of Achievement - User Experience for the Web, 2015</p>
            </div>
            <div>
                <p className='mb-0'>TAFE</p>
                <p className='mb-0'>Adv. Diploma in Creative Product Development specialising in Interactive
Digital Design, 2008 - 2010</p>
            </div>
            <div>
                <p className='mb-0'>Marden Senior College</p>
                <p className='mb-0'>Certificate IV in Design, 2007</p>
            </div>
        </section>
        <section className="grid-area programming">
            <h3 className='orange-text'>Programming</h3>
            <div className='d-flex flex-row'>
                <div>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>Next.js</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>LESS/SASS</li>
                        <li>MySql</li>
                        <li>C#</li>
                        <li>PHP</li>
                        <li>jQuery</li>
                    </ul>
                </div>
            </div>
        </section>
        <section className="grid-area tools">
            <h3 className='orange-text'>Tools</h3>
            <div className='d-flex flex-row'>
                <div>
                    <ul>
                        <li>Photoshop</li>
                        <li>Illustrator</li>
                        <li>InDesign</li>
                        <li>Dreamweaver</li>
                        <li>Figma</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Invision / Invision studio</li>
                        <li>Visual Studio Code</li>
                        <li>GitHub</li>
                        <li>Pen and paper</li>
                        <li>Azure</li>
                    </ul>
                </div>
            </div>
        </section>
        <section className="grid-area accomplishments">
            <h3 className='orange-text'>Accomplishments</h3>
            <p className='mb-0'>‘FIX’ now has over 15 agencies onboard and over
            35,000 users</p>
            <p className='mb-0'>Reduced email trac by 73.3% with the ‘FIX’ platform</p>
            <p className='mb-0'>‘FIX’ increased productivity by saving users 171.15
            hours per week which equals 4.5 full time staff</p>
            <p className='mb-0'>Increased new user trac by 30.98% with
            redesigned ‘Toop&Toop’ website</p>
            <p className='mb-0'>Increased session times by 14.45% with redesigned
            ‘Toop&Toop’ website</p>
            <p className='mb-0'>Increased page views by 17.18% with redesigned
            ‘Toop&Toop’ website</p>
        </section>
        <section className="grid-area awards">
            <h3 className='orange-text'>Awards</h3>
            <div>
                <p className='mb-0'>REIA Innovation Award 2016</p>
                <p className='mb-0'>MyMaintenance</p>

                <p className='mb-0'>REISA Innovation Award 2015</p>
                <p className='mb-0'>MyMaintenance</p>

                <p className='mb-0'>Toop&Toop Client Services Award</p>
                <p className='mb-0'>2015</p>

                <p className='mb-0'>Marden Senior College Register of achievers program</p>
                <p className='mb-0'>2012</p>
            </div>
        </section>
    </article>
</div>
        </Layout>
    )
}

export default Cv;