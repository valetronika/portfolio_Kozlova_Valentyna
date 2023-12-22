import robot from "../images/artificial-intelligence.png";
import github from "../images/github.png";
import linedin1 from "../images/linkedin (1).png";
import linedin2 from "../images/linkedin.png";
import fb1 from "../images/facebook (1).png";
import fb2 from "../images/facebook.png";
import discord1 from "../images/discord (1).png";
import discord2 from "../images/discord.png";
import insta2 from "../images/instagram (1).png";
import insta1 from "../images/instagram.png";
import cv_de from '../assets/CV_Kozlova_DE.pdf'
// import email_gif from '../images/animated/email.gif'


export const general_info = {
    cv:cv_de,
    skills: [
        "JavaScript",
        "HTML",
        "CASS",
        "React",
        "Rudux/toolkit",
        "Responsive Design",
        "Version Control (Git)",
        
    ],
    email: "valetronika@gmail.com",
    subject:"letter from portfolio",


}
export const contacts_data = {
    email: "valetronika@gmail.com",
    telegram:"@valetronika",
    watsapp:''
    // email_image:email_gif,

}
export const icons = [
    {
        name: "github",
        icon1: github,
        icon2: robot,
        url: "https://github.com/valetronika",
    },
    {
        name: "linkedin",
        icon1: linedin1,
        icon2: linedin2,
        url: "https://www.linkedin.com/in/valentyna-kozlova-b42187257/",
    },
    {
        name: "discord",
        icon1: discord1,
        icon2: discord2,
        url: "https://discordapp.com/users/234598112558186496/",
    },
    {
        name: "instagram",
        icon1: insta1,
        icon2: insta2,
        url: "https://www.instagram.com/valka_ua/",
    },
    {
        name: "facebook",
        icon1: fb1,
        icon2: fb2,
        url: "https://www.facebook.com/valetroni/",
    },
];

export const personal_data = {
    en: {
        name: "Valentyna Kozlova",
        position: "Frontend Developer",
        education: "Master's in Management",
        skills: general_info.skills,
        greeting: ["Hello,", "I'm Valentyna!"],
        hobbies: [
            "Drawing",
            "Sewing",
            "Programming",
            "Polymer Clay Modeling",
            "Favorite games : World of Warcraft, Baldur's Gate 3, Fallout 4",
        ],
        translation: {
            home: "HOME",
            about: "ABOUT ME",
            works: "MY PROJECTS",
            contacts: "CONTACTS",
        },
        country:"Ukraine",
        location: "Mariupol",
        birthDate: "July 1, 1989",
        graduationDate: "Movember 18, 2023",
        aboutMe: [
            "Hello everyone! My name is Valentyna, and I'm from Ukraine.",
            "I was born and raised in Mariupol until March 2022. After that, I moved to Germany, where I began my journey into the IT field.",
            "I am ",
            "years old. I have a master's degree in non-production management.",
            "I graduated from TelRan school as a front-end developer, where I studied: ",
            "I have many hobbies: ",
            "I also love to learn new things ♥.",
        ],
        cv_text:"Download CV",
        cv_link:general_info.cv,
        contacts: {
            write_me_massage: "Contact me via E-mail:",
            email: general_info.email,
            alternative_message: " or fill out this form"
          },
    },

    de: {
        name: "Valentyna Kozlova",
        position: "Frontend Entwickler",
        education: "Master in Management",
        skills: general_info.skills,

        greeting: ["Hallo,", "ich bin Valentyna!"],
        hobbies: [
            "Zeichnen",
            "Nähen",
            "Programmieren",
            "Modellieren mit Polymer Clay",
            "Lieblingsspiele: World of Warcraft, Baldur's Gate 3, Fallout 4",
        ],
        translation: {
            home: "STARTSEITE",
            about: "ÜBER MICH",
            works: "MEIN PROJECTS",
            contacts: "KONTAKTE",
        },
        country:"Ukraine",

        location: "Mariupol",
        birthDate: "1. Juli 1989",
        graduationDate: "18. November 2023",
        aboutMe: [
            "Hallo zusammen! Mein Name ist Valentyna, ich komme aus der Ukraine.",
            "Ich bin in Mariupol geboren und aufgewachsen, bis März 2022. Danach bin ich nach Deutschland gezogen, wo ich meine Reise in die IT-Branche begann.",
            "Ich bin ",
            " Jahre alt. Ich habe einen Master-Abschluss im nicht-produzierenden Management.",
            "Ich habe die TelRan-Schule als Frontend-Entwicklerin abgeschlossen, wo ich folgende Fähigkeiten erlernt habe: ",
            "Ich habe viele Hobbys: ",
            " Ich liebe es auch, neue Dinge zu lernen ♥.",
        ],
        cv_text:"Lebenslauf herunterladen",
        cv_link:general_info.cv,
        contacts: {
            write_me_massage: "Kontaktieren Sie mich per E-Mail:",
            email: general_info.email,
            alternative_message: " oder füllen Sie dieses Formular aus"
          },
          
    },
    ukr: {
        name: "Валентина Козлова",
        position: "Frontend  розробник",
        education: "Магістр управління",
        skills: general_info.skills,
        greeting: ["Привіт,", "я Валентина!"],
        hobbies: [
            "Малювання",
            "Шиття",
            "Програмування",
            "Моделювання з полімерної глини",
            "Улюблені ігри: World of Warcraft, Baldur's Gate 3, Fallout 4",
        ],
        translation: {
            home: "ГОЛОВНА",
            about: "ПРО МЕНЕ",
            works: "МОЇ РОБОТИ",
            contacts: "КОНТАКТИ",
        },
        country:"Україна",

        location: "Маріуполь",
        birthDate: "1 липня 1989 року",
        graduationDate: "1 листопада 2023 року",
        aboutMe: [
            "Привіт усім! Мене звати Валентина, я з України.",
            "Я народилася і виросла в Маріуполі до березня 2022 року. Після цього я переїхала до Німеччини, де розпочала свою подорож у сферу ІТ.",
            "Мені",
            " роки. Маю освіту магістра менеджменту невиробничої сфери.",
            "Закінчила школу TelRan за спеціальністю фронтенд-розробник, де вивчила: ",
            "  У мене багато хобі: ",
            " А також обожнюю вчитися чомусь новому ♥.",
        ],
        
        cv_text:"скачати резюме",
        cv_link:general_info.cv,
        contacts:{
            write_me_massage:"Зв'яжіться зі мною по E-mail :",
            email:general_info.email,
            alternative_message:" або заповніть цю форму"
        },

    },
};

// export const portfolio = [
//     {
//         title: "Portfolio Project 1",
//         github: "https://github.com/valetronika/BLOG_ROUTE",
//         url: "https://valetronika.github.io/BLOG_ROUTE",

//         // url: {
//         //     en: "https://valetronika.github.io/BLOG_ROUTE",
//         //     de: "https://example.de/projekt1",
//         //     uk: "https://example.ua/проект1",
//         // },
//     },
//     {
//         title: "Portfolio Project 2",
//         url: {
//             en: "https://example.com/project2",
//             de: "https://example.de/projekt2",
//             uk: "https://example.ua/проект2",
//         },
//     },
// ];
