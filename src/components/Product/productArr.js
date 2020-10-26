import React from "react";
import { Link, animateScroll as scroll } from 'react-scroll';
import { LinkA, LinkScroll } from '../reusable/styled';

const productArr = [ 
    {
        title: "Komunita",
        info: <>ReactGirls je komunita lidí, které spojuje láska k technologiím a programování. Pomáháme ženám, které se chtějí stát programátorkami za vedení profesionálních lektorů a mentorů. Zapojte se do naší komunity na Slacku a ostatních sociálních sítích.</>,
        hideButton: false,
        buttonText: "Zjistit více",
        img: "images/products/community.jpg",
        imgStart: false,
        lightBlue: false,
        link: '/about',
        id: "community"
    },
    {
        title: "Workshopy",
        info: 
            <>Pořádáme pravidelné workshopy plné programování a přednášek na nejen technická témata. Naučíme vás základy HTML, CSS, Javascriptu a Reactu. Další workshop momentálně připravujeme, pro bližší informace sledujte naše sociální sítě nebo odebírejte náš  <LinkScroll 
                    to="newsletterHero"
                    smooth={true}
                    duration='700'
                    spy={true}
                    exact='true'
                    offset={-80}
                    >Newsletter</LinkScroll>.
            </>,
        hideButton: true,
        img: "images/products/workshop.jpg",
        imgStart: true,
        lightBlue: true,
        id: "workshop"
    },
    {
        title: "Webináře",
        info: <>Pořádáme webináře související s programováním v Reactu, soft tématy o práci a rekvalifikaci v IT. Některé z webinářů je možné shlédnout na našem <LinkA href="https://www.youtube.com/channel/UCO8WGBzS6J00zlXroeTf90g" target="blank">Youtube</LinkA>. O dalších se dozvíte v <LinkScroll 
        to="newsletterHero"
        smooth={true}
        duration='700'
        spy={true}
        exact='true'
        offset={-80}
        >Newsletteru </LinkScroll> 
        a na ostatních sociálních sítích.</>,
        hideButton: true,
        img: "images/products/webinar.jpg",
        imgStart: false,
        lightBlue: false,
        id: "webinar"
    },
    {
        title: "Mentoring",

        
        info: "Vyzkoušejte si náš jedinečný mentoringový program. Mentor vede mentee během tří měsíců k tvorbě komplexního webového projektu zvoleného podle cílu mentee a předává ji tak užitečné know-how. Na konci je mentee připravena sama zvládnout tvorbu dalších projektů v Reactu.",
        hideButton: false,
        buttonText: "Zjistit více",
        img: "images/products/mentoring.jpg",
        imgStart: true,
        lightBlue: true,
        link: '/mentoring',
        id: "mentoring"
    },
    {
        title: "Akademie",
        info: "ReactGirls Akademie je program určený pro začátečnice, které se chtějí seznámit s komplexním frontendovým programováním. Od kódování webové aplikace v HTML a CSS, přes seznámení se s principy programování v JavaScriptu, až po první krůčky s Reactem.",
        hideButton: false,
        buttonText: "Zjistit více",
        img: "images/products/academy.jpg",
        imgStart: false,
        lightBlue: false,
        link: '/academy',
        id: "academy"
    },
    {
        title: "Meetupy",
        info: "Pořádáme pro Vás pravidelné ReactGirls meetupy pod názvem ReactGirls Beer. Na meetupech se kromě seznámení se s komunitou můžete také těšit na zajímavé přednášky jak ze světa technologií, tak i na mnoho dalších aktuálních témat.",
        hideButton: true,
        img: "images/products/meetup.jpg",
        imgStart: true,
        lightBlue: true,
        id: "meetup"
    }
]

export default productArr;


