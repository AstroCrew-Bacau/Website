import React, {useState, useEffect} from 'react'
import {FaAngleDoubleRight} from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'

function App() {
    //const [loading, setLoading] = useState(true)
    //const [jobs, setJobs] = useState([])
    //const [value, setValue] = useState(0)

    /*const fetchJobs = async () => {
      const reponse = await fetch(url)
      const newJobs = await reponse.json()
      setJobs(newJobs)
      setLoading(false)
    }*/

    /*useEffect(() => {
      fetchJobs()
    }, [])
    if (loading) {
      return (
        <section className="section loading">
          <h1>Loading...</h1>
        </section>
      )
    }*/
    //const { company, dates, duties, title } = jobs[value]
    const [loading, setLoading] = useState(true)
    let [astro_info, set_astro_info] = useState([])
    const [value, setValue] = useState(0)
    //let astro_info;
    astro_info = [
        {
            id: "fgergkljergslerjg",
            order: 5,
            title: "Despre AstroCrew Bacau",
            dates: "Aprilie 2021 - Prezent",
            duties: [
                "Cerul este pentru toti. Vrei sa il descoperim impreuna?",
                "Salut! Noi suntem AstroCrew 🚀 . Suntem un grup de tineri din Bacău pasionați de astronomie ce vor să " +
                "o aducă mai aproape de tine. Fie că vrei să faci performanță, fie că vrei doar să îți construiești o " +
                "bază de cunoștințe generale, noi suntem aici pentru tine și te ajutăm să îți atingi potențialul.",
                "Come be part of the Crew!"
            ],
            comp: "ABOUT"

        },
        {
            id: "ergh3ghiwerogsdfkj",
            order: 4,
            title: "Despre Sectiunea Intro",
            dates: "10 Mai 2021 - 11 Iulie 2021",
            duties: [
                "Credem că nu este niciodată prea devreme sau prea târziu să înveți ceva nou, mai ales când vine vorba" +
                " de Univers . Pentru cei care vor să își ia în bagajul de cunoștințe și bazele astronomiei și să " +
                "plece într-o călătorie până la cele mai îndepărtate galaxii și înapoi, noi suntem aici cu secțiunea " +
                "INTRO să vă ajutăm.",
                "Am pregătit pentru voi un modul alcătuit din 9 cursuri ce se vor desfășura online săptămânal în " +
                "perioada 10 mai - 11 iulie, la care vă puteți înscrie cu <a href='https://08i78o4q8ym.typeform.com/to/zLr6EVIB'> acest formular </a>",
                "nline săptămânal în perioada 10 mai - 11 iulie, la care vă puteți înscrie cu formularul de mai jos. " +
                "Avem deja stabilite majoritatea ,,destinațiilor”, unde vă vom povesti despre cum a început astronomia " +
                "și cum poți deveni astronaut, despre evenimente astronomice și cum observăm cerul, despre stele neutronice " +
                "și exoplanete și multe ale lucruri fascinante ce se află în Cosmos"
            ],
            comp: "INTRO"
        },
        {
            id: "kajghiwuergiuarg34gar",
            order: 3,
            title: "Despre Sectiunea Excel",
            dates: "septembrie 2021 - not announced",
            duties: [
                "Universul e caracterizat prin evoluție. Natura nu stă pe loc, știința nu încetează să descopere 🔭 . " +
                "Pentru cei pasionați de astronomie, olimpici sau viitori olimpici, dorim să creăm un mediu primitor, " +
                "care vine cu răspunsuri și cu noi întrebări pentru mințile curioase 🧠",
                "Aici poți afla și aprofunda cunoștințe avansate de astronomie (din mecanica cerească, astronomie " +
                "observațională, fotometrie și multe altele), alături de un Crew care te va încuraja sa devii cel mai " +
                "bun, sa evoluezi ca parte din Univers.",
                "Te așteptăm în grupa de EXCEL, la care te poți înscrie cu " +
                "<a href='https://08i78o4q8ym.typeform.com/to/lHVyv7Fq'>acest formular</a>, dacă ești însetat de cunoaștere și dornic de " +
                "o noua provocare! 👨‍🚀"
            ],
            comp: "EXCEL"
        },
        {
            id: "agkjhwrgh3ih4i3gh",
            order: 2,
            title: "Contacteaza-ne",
            dates: "",
            duties: [
                "<a href='https://www.facebook.com/AstroCrewBacau'>Facebook</a>",
                "<a href='https://www.instagram.com/astrocrew.bacau'>Instagram</a>",
                "<a href='mailto:astrocrewbacau@gmail.com'>Mail</a>"
            ],
            comp: "CONTACT"

        },
        {
            id: "arkgawirugar",
            order: 1,
            title: "Evenimente",
            dates: "Coming soon!",
            duties: [
                "Stay tuned!",
                "Urmeaza sa pregatim diverse elemente surpriza, la care va vom astepta cu drag.",
                "Ne puteti sugera astfel de evenimente in privat pe Facebook, Instagram sau pe adresa de mail"
            ],
            comp: "EVENTS"

        }

    ]
    const { comp, dates, duties, title } = astro_info[value]
    return (
        <section className="section">
            <div className="title">
                <h2>AstroCrew Bacau</h2>
                <div className="underline"></div>
            </div>
            <div className="jobs-center">
                {/* btn container */}
                <div className="btn-container">
                    {astro_info.map((item, index) => {
                        return (
                            <button
                                key={item.id}
                                onClick={() => setValue(index)}
                                className={`job-btn ${index === value && 'active-btn'}`}
                            >
                                {item.comp}
                            </button>
                        )
                    })}
                </div>
                {/* job info */}
                <article className="job-info">
                    <h3>{title}</h3>
                    <h4>{comp}</h4>
                    <p className="job-date">{dates}</p>
                    {duties.map((duty, index) => {

                        return (
                            <div key={index} className="job-desc">
                                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                                <div dangerouslySetInnerHTML={{__html:duty}}></div>
                            </div>
                        )
                    })}
                </article>
            </div>
        </section>
    )
}

export default App
