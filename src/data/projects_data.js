import git from "../images/progects_prew/github.png";
import goat from "../images/goat.png";
import animated_profile from "../images/animated/profile.gif";

// id:1
import garten_layout_prew from "../images/progects_prew/id_1/layout_img.svg";
import garten_web_prew from "../images/progects_prew/id_1/website_from_layout_img.png";
import example from "../images/progects_prew/id_1/example.png";
// id:2
import blog_route_lay from "../images/progects_prew/id_2/id_2_layout.png";
import blog_route_web from "../images/progects_prew/id_2/id_2_web_prew.png";

//2 ==========================general info===================
const projects_links = {
  // garten
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
  // blog
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

  // ----------------DONT CHANGE general:
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
    // garten en
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
            problem_title: "What were the challenges :",
            problem:
              "The layout turned out to be quite uneven, varying distances between elements like 'nav' and images that should be in the grid, and so on",
            solution: "Selected average approximate sizes",
            solution_title: "How they were solved :",
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
    // blog en
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
        { text: "This is an example project description 1", img: example },
        { text: "This is an example project description 2", img: example },
      ],

      buttons: {
        result_demo: "result demo",
        read_more: " read more",
      },
    },
  ],
  de: [
    // garten de
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
            problem_title: "Welche Herausforderungen gab es :",
            problem:
              "Das Layout erwies sich als ziemlich ungleichmäßig, unterschiedliche Abstände zwischen Elementen wie 'nav' und Bildern, die im Raster sein sollten, und so weiter",
            solution_title: "Wie sie gelöst wurden :",
            solution: "Wählte durchschnittliche ungefähre Größen aus",
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
    // blog de
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
        { text: "Dies ist ein Beispielprojektbeschreibung 1", img: example },
        { text: "Dies ist ein Beispielprojektbeschreibung 2", img: example },
      ],

      buttons: {
        result_demo: "ergebnis ansehen",
        read_more: "mehr Informationen",
      },
    },
  ],
  ukr: [
    // garten ukr
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
        requirements: ["* Проєкт створювався у рамках  випускного проєкту "],
        problems: [
          {
            problem_title: "Які були складнощі :",
            problem:
              "Макет виявився досить нерівномірним, різна відстань між елементами типу 'nav' та зображеннями які повинні бути у сітці і тому подібне",
            solution: " Вибирала середні приблизні розміри",
            solution_title: "Як вони були вирішені :",
          },
          // { problem_title: "", problem: "", solution: "" },
        ],
      },
      descrition: [],

      buttons: {
        result_demo: "дивитись результат",
        read_more: "більше інформації",
      },
    },
    // blog ukr
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
