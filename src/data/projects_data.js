import git from "../images/progects_prew/github.png";
import goat from "../images/goat.png";
import animated_profile from "../images/animated/profile.gif";
import animated_bleistift from "../images/animated/bleistift.gif";

// id:1
import garten_layout_prew from "../images/progects_prew/id_1/layout_img.svg";
import garten_web_prew from "../images/progects_prew/id_1/website_from_layout_img.png";
import example from "../images/progects_prew/id_1/example.png";
// id:2
import blog_route_lay from "../images/progects_prew/id_2/id_2_layout.png";
import blog_route_web from "../images/progects_prew/id_2/id_2_web_prew.png";
// id:3
import todos_web from "../images/progects_prew/id_3/todo.png";
//id:4
import bee from "../images/animated/bee.gif";
import morher_layout from "../images/progects_prew/id_4/layout.jpg";
import morher_web from "../images/progects_prew/id_4/web.jpg";
//2 ==========================general info===================
const projects_links = {
    //===================== garten
    garten_shop: {
        id: 1,
        isShow: true,
        // links
        link_web: "https://valetronika.github.io/Gartenshop_wBE",
        link_maket:
            "https://www.figma.com/file/7Cjqx7M5xJao9wwjeq48iu/Garden-(Copy)?type=design&node-id=4771-314&mode=design",
        link_git: "https://github.com/valetronika/Gartenshop_wBE",

        // imgs
        layout_img: garten_layout_prew,
        website_from_layout_img: garten_web_prew,
        git_hub_img: git,
        image: goat,
        //  якщо is_jumping_image: true  то у ProjectPage jumping img буде стрибати з інтервалом
        // 4с і матиме клас  s.project__title_img_jumping інакше s.project__title_img
        is_jumping_image: true,
        // stack
        stack: [
            "React",
            "Redux",
            "React Router DOM",
            "sass",
            "@reduxjs/toolkit",
            "hamburger-react",
            "gh-pages",
        ],
    },
    //===================== blog
    blog_route: {
        id: 2,
        isShow: true,
        // links
        link_web: "https://valetronika.github.io/BLOG_ROUTE",
        link_git: "https://github.com/valetronika/BLOG_ROUTE",
        link_maket:
            "https://www.figma.com/file/ZKw7pJXIbltn9jLqxVLOcA/John-%2B-(Copy)?type=design&node-id=0-1&mode=design&t=NrJpiWpP3i7S7jXD-0",
        // imgs
        layout_img: blog_route_lay,
        website_from_layout_img: blog_route_web,
        git_hub_img: git,
        image: animated_profile,
        is_jumping_image: false,

        // stack
        stack: [
            "HTML",
            "SCSS (Sass)",
            "JavaScript ",
            "React",
            "React Router DOM",
            "Hamburger React",
        ],
    },
    //===================== here "todo"

    todos: {
        id: 3,
        isShow: true,
        // links
        link_web: "https://valetronika.github.io/todo_red/",
        link_git: "https://github.com/valetronika/todo_red",
        link_maket: "none",
        // imgs
        layout_img: example,
        website_from_layout_img: todos_web,
        git_hub_img: git,
        image: animated_bleistift,
        //  якщо is_jumping_image: true  то у ProjectPage jumping img буде стрибати з інтервалом
        // 4с і матиме клас  s.project__title_img_jumping інакше s.project__title_img

        is_jumping_image: false,

        // stack
        stack: ["Javascript", "SASS", "React", "Redux/toolkit"],
    },
    //===================== mother_earth

    mother_earth: {
        id: 4,
        isShow: true,
        // links
        link_web: "https://valetronika.github.io/Mother-Earth/",
        link_git: "https://github.com/valetronika/Mother-Earth",
        link_maket:
            "https://www.figma.com/file/z0skYXZw5VsHjsvPZ8BVsV/MaxGraph-Youtube-marathon-1.0-(Copy)?type=design&node-id=0-2&mode=design&t=bb0v8msW6hRVgq0I-0",
        // imgs
        layout_img: morher_layout,
        website_from_layout_img: morher_web,
        git_hub_img: git,
        image: bee,
        is_jumping_image: true,

        // stack
        stack: ["HTML", "JavaScript ", "CSS"],
    },

    // ----------------DON`T CHANGE general:
    example: {
        id: Infinity,
        isShow: false,
        // links
        link_web: "link",
        link_git: "link",
        link_maket: "link",
        // imgs
        layout_img: example,
        website_from_layout_img: example,
        git_hub_img: git,
        image: "",
        //  якщо is_jumping_image: true  то у ProjectPage jumping img буде стрибати з інтервалом
        // 4с і матиме клас  s.project__title_img_jumping інакше s.project__title_img
        is_jumping_image: false,

        // stack
        stack: ["-", "--", "---"],
    },
};

// ==========================  INFO BY LENGV    ====================

export const projects_data = {
    en: [
        //== garten en
        {
            general_info: projects_links.garten_shop,
            title: "garten shop",
            technical_specification: {
                title: "technical specification",
                technical_task: [
                    "compliance with the layout",
                    "when clicking on SALE - scroll to the corresponding section",
                    "when clicking on Get a discount - simulate a POST request",
                    "when clicking on Order - simulate a POST request and clear the cart",
                    "Back to the store - go one step back",
                ],
                requirements: [
                    "* The project was created as part of the graduation project",
                ],
                problems: [
                    {
                        problem_title: "~ What were the challenges :",
                        problem:
                            "The layout turned out to be quite uneven, varying distances between elements like 'nav' and images that should be in the grid, and so on",
                        solution: "Selected average approximate sizes",
                        solution_title: "How they were solved :",
                    },
                    {
                        problem_title: "~ Backend Issue :",
                        problem:
                            "The backend for this project was locally hosted, which wasn't suitable for demonstration purposes.",
                        solution:
                            "Host the backend on an online hosting platform. However, this method has its drawbacks: products are not rendered immediately upon the first load, and you have to wait for them to appear.",
                        solution_title: "Issue Resolved :",
                    },

                    // { problem_title: "What were the challenges", problem: "", solution: "" },
                ],
            },
            layout_img: garten_layout_prew,
            website_from_layout_img: garten_web_prew,
            descrition: [],

            buttons: {
                result_demo: "view result",
                read_more: "more information",
            },
        },
        //== blog en
        {
            general_info: projects_links.blog_route,
            title: "BLOG",
            technical_specification: {
                title: "Technical Specification",
                technical_task: [
                    "layout in accordance with the layout",
                    "responsive or adaptive design",
                ],
                requirements: [
                    "* as part of learning",
                    "practice React, React Router DOM",
                ],
                // "problems": [
                // 	{
                // 		"problem_title": "What challenges were there:",
                // 		"problem": "---problem description",
                // 		"solution_title": "How they were resolved:",
                // 		"solution": "---solution description"
                // 	},
                // ]
            },
            // description: [
            //   { text: "This is an example project description 1", img: example },
            //   { text: "This is an example project description 2", img: example },
            // ],
            buttons: {
                result_demo: "view result",
                read_more: "more information",
            },
        },
        //=== todo en
        {
            general_info: projects_links.todos,
            title: "TODOS",
            technical_specification: {
                title: "Technical Specification",
                technical_task: [
                    "Using Redux/Toolkit",
                    "Using LocalStorage to store tasks in the browser",
                ],
                requirements: ["Practicing React, Redux/Toolkit"],
                // problems: [
                //     {
                //         problem_title: "Які були складнощі :",
                //         problem: "---опис проблеми",
                //         solution_title: "Як вони були вирішені :",
                //         solution: " ---опис рішення",
                //     },
                //     // { problem_title: "", problem: "", solution: "" },
                // ],
            },
            // description: ['це приклад опису проэкту 1',' це приклад опису проэкту 2'],
            // description: [
            // { text: "це приклад опису проэкту 1",
            // img: example
            // },
            //   { text: " це приклад опису проэкту 2", img: example },
            // ],

            buttons: {
                result_demo: "view result",
                read_more: "more information",
            },
        },
        //=== mother_earth en
        {
            general_info: projects_links.mother_earth,
            // -------
            title: "mother earth",
            technical_specification: {
                title: "technical specification",
                technical_task: ["Matching with the layout","Using pure JavaScript and CSS","Adaptive or responsive design"],
                requirements: ["Pure JavaScript"],
                problems: [
                    {
                        problem_title: "What were the challenges :",
                        problem: "Lack of a layout for the mobile version",
                        // solution_title: "How they were solved :",
                        solution: "In general, the absence of a layout takes quite a bit of time, and it would be nice to spend this time solving tasks in JavaScript or CSS, but what can you do, sometimes you have to create something from yourself :-)",
                    },
                    // {
                    //     problem_title: "What were the challenges :",
                    //     problem: "",
                    //     solution_title: "How they were solved :",
                    //     solution: "",
                    // },
                ],
            },
            website_from_layout_img: example,

            description: [
                // {
                //     text: "This is an example project description 1",
                //     img: example,
                // },
                // {
                //     text: "This is an example project description 2",
                //     img: example,
                // },
            ],

            buttons: {
                result_demo: "result demo",
                read_more: " read more",
            },
        },

        // ----------------DONT CHANGE en :
        {
            general_info: projects_links.example,
            // -------
            title: "title",
            technical_specification: {
                title: "technical specification",
                technical_task: ["example"],
                requirements: ["* example"],
                problems: [
                    {
                        problem_title: "What were the challenges :",
                        problem: "example",
                        solution_title: "How they were solved :",
                        solution: "example",
                    },
                    // {
                    //     problem_title: "What were the challenges :",
                    //     problem: "",
                    //     solution_title: "How they were solved :",
                    //     solution: "",
                    // },
                ],
            },
            website_from_layout_img: example,

            description: [
                {
                    text: "This is an example project description 1",
                    img: example,
                },
                {
                    text: "This is an example project description 2",
                    img: example,
                },
            ],

            buttons: {
                result_demo: "result demo",
                read_more: " read more",
            },
        },
    ],
    de: [
        //=== garten de
        {
            general_info: projects_links.garten_shop,

            title: "Gartengeschäft",
            technical_specification: {
                title: "technische Spezifikation",
                technical_task: [
                    "Übereinstimmung mit dem Layout",
                    "Beim Klicken auf SALE - Scrollen zum entsprechenden Abschnitt",
                    "Beim Klicken auf Get a discount - Simulieren einer POST-Anfrage",
                    "Beim Klicken auf Order - Simulieren einer POST-Anfrage und Löschen des Warenkorbs",
                    "Zurück zum Geschäft - einen Schritt zurück gehen",
                ],
                requirements: [
                    "* Das Projekt wurde im Rahmen des Abschlussprojekts erstellt",
                ],
                problems: [
                    {
                        problem_title: "~ Welche Herausforderungen gab es :",
                        problem:
                            "Das Layout erwies sich als ziemlich ungleichmäßig, unterschiedliche Abstände zwischen Elementen wie 'nav' und Bildern, die im Raster sein sollten, und so weiter",
                        solution_title: "Wie sie gelöst wurden :",
                        solution:
                            "Wählte durchschnittliche ungefähre Größen aus",
                    },
                    {
                        problem_title: "~ Backend-Problem :",
                        problem:
                            "Der Backend für dieses Projekt war lokal gehostet und war für Demonstrationszwecke nicht geeignet.",
                        solution:
                            "Hosten Sie das Backend auf einer Online-Plattform. Allerdings hat diese Methode ihre Nachteile: Produkte werden nicht sofort beim ersten Laden gerendert, man muss warten, bis sie erscheinen.",
                        solution_title: "Problem gelöst :",
                    },

                    // { problem_title: "", problem: "", solution: "",solution_title: '' },
                ],
                descrition: [],
            },
            buttons: {
                result_demo: "ergebnis ansehen",
                read_more: "mehr Informationen",
            },
        },
        //=== blog de
        {
            general_info: projects_links.blog_route,
            title: "BLOG",
            technical_specification: {
                title: "Technische Spezifikation",
                technical_task: [
                    "Layout entsprechend dem Design",
                    "Responsive oder adaptive Gestaltung",
                ],
                requirements: [
                    "* Im Rahmen des Lernens",
                    "Praxis React, React Router DOM",
                ],
                // "problems": [
                // 	{
                // 		"problem_title": "Welche Herausforderungen gab es:",
                // 		"problem": "---Beschreibung des Problems",
                // 		"solution_title": "Wie wurden sie gelöst:",
                // 		"solution": "---Beschreibung der Lösung"
                // 	},
                // ]
            },

            // description: [
            //   { text: "Dies ist ein Beispielprojektbeschreibung 1", img: example },
            //   { text: "Dies ist ein Beispielprojektbeschreibung 2", img: example },
            // ],
            buttons: {
                result_demo: "ergebnis ansehen",
                read_more: "mehr Informationen",
            },
        },
        //=== todos de

        {
            general_info: projects_links.todos,
            title: "TODOS",
            technical_specification: {
                title: "Technische Spezifikation",
                technical_task: [
                    "Verwendung von Redux/Toolkit",
                    "Verwendung von LocalStorage zur Speicherung von Aufgaben im Browser",
                ],
                requirements: ["Praxis mit React, Redux/Toolkit"],
                // problems: [
                //     {
                //         problem_title: "Які були складнощі :",
                //         problem: "---опис проблеми",
                //         solution_title: "Як вони були вирішені :",
                //         solution: " ---опис рішення",
                //     },
                //     // { problem_title: "", problem: "", solution: "" },
                // ],
            },
            // description: ['це приклад опису проэкту 1',' це приклад опису проэкту 2'],
            // description: [
            // { text: "це приклад опису проэкту 1",
            // img: example
            // },
            //   { text: " це приклад опису проэкту 2", img: example },
            // ],

            buttons: {
                result_demo: "ergebnis ansehen",
                read_more: "mehr Informationen",
            },
        },
        //=== mother_earth de
        {
            general_info: projects_links.mother_earth,

            title: "mother earth",
            technical_specification: {
                title: "technische Spezifikation",
                technical_task: ["Verwendung von reinem JavaScript und CSS", "Adaptives oder responsives Design","Übereinstimmung mit dem Layout"],
                requirements: ["Reines JavaScript"],
                problems: [
                    {
                        problem_title: "Welche Herausforderungen gab es :",
                        problem: "Fehlen eines Layouts für die mobile Version",

                        // solution_title: "Wie sie gelöst wurden :",
                        solution: "Allgemeinen nimmt das Fehlen eines Layouts ziemlich viel Zeit in Anspruch, und es wäre schön, diese Zeit für die Lösung von Aufgaben in JavaScript oder CSS zu verwenden, aber was soll man machen, manchmal muss man etwas aus sich selbst heraus erstellen :-)mple",
                    },
                    // { problem_title: "", problem: "", solution: "",solution_title: '' },
                ],
            },

            description: [
                // {
                //     text: "Dies ist ein Beispielprojektbeschreibung 1",
                //     img: example,
                // },
                // {
                //     text: "Dies ist ein Beispielprojektbeschreibung 2",
                //     img: example,
                // },
            ],

            buttons: {
                result_demo: "ergebnis ansehen",
                read_more: "mehr Informationen",
            },
        },
        // --------------DONT CHANGE de :
        {
            general_info: projects_links.example,

            title: "example",
            technical_specification: {
                title: "technische Spezifikation",
                technical_task: ["example", "example"],
                requirements: ["* example"],
                problems: [
                    {
                        problem_title: "Welche Herausforderungen gab es :",
                        problem: "example",

                        solution_title: "Wie sie gelöst wurden :",
                        solution: "example",
                    },
                    // { problem_title: "", problem: "", solution: "",solution_title: '' },
                ],
            },

            description: [
                {
                    text: "Dies ist ein Beispielprojektbeschreibung 1",
                    img: example,
                },
                {
                    text: "Dies ist ein Beispielprojektbeschreibung 2",
                    img: example,
                },
            ],

            buttons: {
                result_demo: "ergebnis ansehen",
                read_more: "mehr Informationen",
            },
        },
    ],
    ukr: [
        //=============== garten ukr
        {
            general_info: projects_links.garten_shop,
            title: "магазин садових товарів",
            technical_specification: {
                title: "технічне завдання",
                technical_task: [
                    "відповідність із макетом",
                    "при кліку на SALE - скрол до розділу",
                    "при кліку на Get a discount - симуляція пост запиту",
                    "при кліку на Order - симуляція пост запиту і очищення кошика",
                    "Back to the store - робить крок назад",
                ],
                requirements: [
                    "* Проєкт створювався у рамках  випускного проєкту ",
                ],
                problems: [
                    {
                        problem_title: "~ Які були складнощі :",
                        problem:
                            "Макет виявився досить нерівномірним, різна відстань між елементами типу 'nav' та зображеннями які повинні бути у сітці і тому подібне",
                        solution: " Вибирала середні приблизні розміри",
                        solution_title: "Як вони були вирішені :",
                    },
                    {
                        problem_title: "~ Проблема з backend :",
                        problem:
                            "backend до цього проекту був локаний і для демонстрації такий варіант не підходив, ",
                        solution:
                            "Залити backend на онлайн хостинг, але у цього методу є й мінуси: при першому завантаженні товари рендеряться не одразу, доводиться чекати коли вони з'являться",
                        solution_title: "Було вирішено :",
                    },
                ],
            },
            descrition: [],

            buttons: {
                result_demo: "дивитись результат",
                read_more: "більше інформації",
            },
        },
        //================ blog ukr
        {
            general_info: projects_links.blog_route,
            title: "BLOG",
            technical_specification: {
                title: "Технічне завдання",
                technical_task: [
                    " верстка з відповідністю з макетом",
                    "адаптивний чи респонсивний дизайн",
                ],
                requirements: [
                    "* у рамках навчання",
                    " практика React, React Router DOM",
                ],
                // problems: [
                //     {
                //         problem_title: "Які були складнощі :",
                //         problem: "---опис проблеми",
                //         solution_title: "Як вони були вирішені :",
                //         solution: " ---опис рішення",
                //     },
                //     // { problem_title: "", problem: "", solution: "" },
                // ],
            },
            // description: ['це приклад опису проэкту 1',' це приклад опису проэкту 2'],
            // description: [
            //   { text: "це приклад опису проэкту 1", img: example },
            //   { text: " це приклад опису проэкту 2", img: example },
            // ],

            buttons: {
                result_demo: "дивитись результат",
                read_more: "більше інформації",
            },
        },
        //================ todos ukr
        {
            general_info: projects_links.todos,
            title: "TODOS",
            technical_specification: {
                title: "Технічне завдання",
                technical_task: [
                    "використання Redux/toolkit",
                    "використання LocalStorage для зберігання tasks у браузері",
                ],
                requirements: [" практика React, Redux/toolkit"],
                // problems: [
                //     {
                //         problem_title: "Які були складнощі :",
                //         problem: "---опис проблеми",
                //         solution_title: "Як вони були вирішені :",
                //         solution: " ---опис рішення",
                //     },
                //     // { problem_title: "", problem: "", solution: "" },
                // ],
            },
            // description: ['це приклад опису проэкту 1',' це приклад опису проэкту 2'],
            // description: [
            // { text: "це приклад опису проэкту 1",
            // img: example
            // },
            //   { text: " це приклад опису проэкту 2", img: example },
            // ],

            buttons: {
                result_demo: "дивитись результат",
                read_more: "більше інформації",
            },
        },
        //=== mother_earth ukr
{
            general_info: projects_links.mother_earth,
            title: "mother earth",
            technical_specification: {
                title: "технічне завдання",
                technical_task: ["співпадіння з макетом", "використовувати чистий javascript та css","адаптавний чи респонсивний дизайн"],
                requirements: ["чистий JS"],
                problems: [
                    {
                        problem_title: "Які були складнощі :",
                        problem: "відсутність макету мобільної версії",
                        // solution_title: "Як вони були вирішені :",
                        solution: " Взагалі відсутній макет забирає досить часу, й хотілося би цей час витрачати на вирішення завдання у js або css, але що поробиш, треба іноді щось від себе верстати  :-)",
                    },
                    // { problem_title: "", problem: "", solution: "" },
                ],
            },
            description: [
                // { text: "це приклад опису проэкту 1", img: example },
                // { text: " це приклад опису проэкту 2", img: example },
            ],

            buttons: {
                result_demo: "дивитись результат",
                read_more: "більше інформації",
            },
        },
        //------------------DONT CHANGE ukr :
        {
            general_info: projects_links.example,
            title: "---Приклад",
            technical_specification: {
                title: "технічне завдання",
                technical_task: ["----"],
                requirements: ["коментар курсивом"],
                problems: [
                    {
                        problem_title: "Які були складнощі :",
                        problem: "---опис проблеми",
                        solution_title: "Як вони були вирішені :",
                        solution: " ---опис рішення",
                    },
                    // { problem_title: "", problem: "", solution: "" },
                ],
            },
            description: [
                { text: "це приклад опису проэкту 1", img: example },
                { text: " це приклад опису проэкту 2", img: example },
            ],

            buttons: {
                result_demo: "дивитись результат",
                read_more: "більше інформації",
            },
        },
    ],
};
