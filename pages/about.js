import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/About.module.css'
import Navbar from '../components/Navbar/navbar'
import { words } from '../data/words'
import { useState } from 'react'
import UpArrow from '../components/UpArrow/upArrow'
import DownArrow from '../components/DownArrow/downArrow'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
    const [text, setText] = useState([...words])
    const [current, setCurrent] = useState(0)
    const length = text.length;
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    if(!Array.isArray(text) || words.length <= 0) {
        return null;
    }
    
    return (
      <>
        <Head>
          <title>About Us</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="author" content="MDIA 2109"/>
          <meta property="og:title" content='Assignment #1 - About Us Page'/>
          <meta property="og:description" content='BCIT Digital Design and Development Diploma'/>
          <link rel="icon" href="/favicon.png" />
        </Head>
        <main className={styles.main}>
            <Navbar/>
            <div>
                <div className={styles.header}>
                    <div className={styles.line}></div>
                        <h1>About Us</h1>
                    <div className={styles.line}></div>
                </div>
                <div className={styles.textAlign}>
                    <div className={styles.paragraph}>
                        <p>We are proud to deliver an education that goes beyond textbooks and classrooms.</p>
                    </div>
                    <div className={styles.paragraph}>
                        <p>Our students gain the technical skills, real-world experience, and problem-solving ability needed to embrace complexity and lead innovation in a rapidly changing workforce.</p>
                    </div>
                    <div className={styles.paragraph}>
                        <p>Through close collaboration with industry, our network of alumni and partners continue to achieve global sucess.</p>
                    </div>
                    <div className={styles.paragraph}>
                        <h2>Information Sessions</h2>
                    </div>
                    <div className={styles.paragraph}>
                        <p>Information sessions are a simple way to figure out the next step along your career path. Learn more about the programs that interst you.</p>
                    </div>
                    <div className={styles.sectionHaeder}>
                        <h3>Big Info</h3>
                    </div>
                    <div className={styles.paragraph}>
                        <p>Big Info is the largest program expo and nformation session at BCIT. It's your chance to find out about all our programs - from business, computing, and health to engeneering, trades, and applied sciences.</p>
                    </div>
                    <div className={styles.paragraph}>
                        <p>If you missed our fall event the next Big Info is scheduled to return on February 15, 2023.</p>
                    </div>
                    <div className={styles.sectionHeader}>
                        <h2>Campus Tours</h2>
                    </div>
                    <div className={styles.paragraph}>
                        <p>Tours run weekdays September to May, on our Burnaby campus. See BCIT in person and get a taste of campus life.</p>
                    </div>
                </div>
            </div>
            <div>   
            <div className={styles.carousel}>
                    <img onClick={prevSlide} className={styles.leftArrow} src='/icons/leftArrow.png'/>
                        
                        {
                            text.map((w, index) => {
                                return (
                                    <div
                                        className={index === current ? 'slide active carouselImage' : 'slide'} 
                                        key={index}>
                                        { index === current && (
                                            <div>
                                                <h6 className={styles.textOnImage} id="testOnImageHere">{w.value}</h6>
                                                    <img 
                                                        className={styles.carouselImage} 
                                                        id="carouselImage" 
                                                        src={w.image}
                                                    />
                                            </div>
                                        )} 
                                    </div>
                                )
                            })
                        }

                    <img onClick={nextSlide} className={styles.rightArrow} src='/icons/rightArrow.png'/>
                </div>
            </div>
            <div className={styles.bottomHeader}>
                <div className={styles.line}></div>
                    <h1>DEPARTMENTS</h1>
                <div className={styles.line}></div>
            </div>
            <div className={styles.list}>
                <ul className={styles.listItems}>
                    <li className={styles.indivListItem}>Applied & Natural Sciences</li>
                    <li className={styles.indivListItem}>Business & Media</li>
                    <li className={styles.indivListItem}>Computing & IT</li>
                    <li className={styles.indivListItem}>Engineerin</li>
                    <li className={styles.indivListItem}>Health Sciences</li>
                    <li className={styles.indivListItem}>Trades & Apprenticeships</li>
                </ul>
            </div>
           <div className={styles.arrows}>
           <a href='/'><UpArrow/></a>
            <a href='/contact'><DownArrow/></a>
           </div>
        </main>
      </>
    )
  }