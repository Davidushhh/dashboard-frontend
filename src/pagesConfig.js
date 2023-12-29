import {
  Dvr,
  Apartment,
  MedicalServices,
  School,
  Assessment,
  Home,
  MeetingRoom,
  AttachMoney,
  QueryStats,
  MailOutline,
  BackupTable,
  RequestQuoteOutlined,
  TrendingUp,
} from "@mui/icons-material";

export const mainPages = [
  {
    id: "analytics",
    title: "Аналітика",
    menuTitle: "Аналітика",
    url: "/analytics/home/all",
    type: "noCollapse",
    icon: <QueryStats />,
    color: "#FF6931",
  },
];
export const mainPagesCabinet = [
  {
    id: "analytics",
    title: "Аналітика",
    menuTitle: "Аналітика",
    url: "/cabinet/analytics/home/all",
    type: "noCollapse",
    icon: <QueryStats />,
    color: "#FF6931",
    access: ["deputy", "council"],
  },
];

export const metricaPages = [
  {
    id: "home",
    title: "Головна",
    menuTitle: "Головна",
    type: "noCollapse",
    icon: <Home />,
    color: "#FF6931",

    children: [
      {
        id: "all",
        title: "Головна",
        menuTitle: "Головна",
        type: "item",
        url: "/analytics/home/all",
        target: true,

        chartsGroups: [],
      },
    ],
  },
  {
    id: "digitalization",
    title: "Цифровізація",
    menuTitle: "Цифровізація",
    type: "collapse",
    icon: <Dvr />,
    color: "#55A5B7",

    children: [
      {
        id: "cnap",
        title: "ЦНАП",
        menuTitle: "ЦНАП",
        type: "item",
        url: "/analytics/digitalization/cnap",
        target: true,
        children: [
          {
            id: "net",
            title: "Мережа",
            menuTitle: "Мережа",
            type: "item",
            url: "cnap/net",
            target: true,
            chartsGroups: [],
          },
          {
            id: "inclusive",
            title: "Інклюзивність",
            menuTitle: "Інклюзивність",
            type: "item",
            url: "cnap/inclusive",
            target: true,
            chartsGroups: [],
          },
          {
            id: "barrier-free",
            title: "Безбар'єрність",
            menuTitle: "Безбар'єрність",
            type: "item",
            url: "cnap/barrier-free",
            target: true,

            chartsGroups: [],
          },
        ],
      },
    ],
  },

  {
    id: "education",
    title: "Освіта",
    menuTitle: "Освіта",
    type: "collapse",
    icon: <School />,
    color: "#AAE3E3",

    children: [
      {
        id: "e-document",
        title: "Є-документи",
        menuTitle: "Є-документи",
        type: "item",
        url: "/analytics/education/e-document",
        target: true,
        chartsGroups: [],
      },
    ],
  },

  {
    id: "shelters",
    title: "Укриття",
    menuTitle: "Укриття",
    type: "collapse",
    icon: <MeetingRoom />,
    color: "#F2C3DB",

    children: [
      {
        id: "suitability",
        title: "Придатність укриттів",
        menuTitle: "Придатність укриттів",
        type: "item",
        url: "/analytics/shelters/suitability",
        target: true,

        chartsGroups: [],
      },
    ],
  },
  {
    id: "finances",
    title: "Фінанси",
    menuTitle: "Фінанси",
    type: "collapse",
    icon: <AttachMoney />,
    color: "#FCDD3A",

    children: [
      {
        id: "budget",
        title: "Бюджет",
        menuTitle: "Бюджет",
        type: "item",
        url: "/analytics/finances/budget",
        target: true,
      },
    ],
  },
  {
    id: "infrastructure",
    title: "Інфраструктура",
    menuTitle: "Інфраструктура",
    type: "collapse",
    icon: <Apartment />,
    color: "#82B2EF",

    children: [
      {
        id: "zhkh",
        title: "ЖКГ",
        menuTitle: "ЖКГ",
        type: "item",
        url: "/analytics/infrastructure/zhkh",
        target: true,
      },
    ],
  },
  {
    id: "healthcare",
    title: "Охорона здоров'я",
    menuTitle: "Охорона здоров'я",
    type: "noCollapse",
    icon: <MedicalServices />,
    color: "#55B78E",

    children: [
      {
        id: "all",
        title: "Охорона здоров'я - загальна",
        menuTitle: "Загальна",
        type: "item",
        url: "/analytics/healthcare/all",
        target: true,
      },
    ],
  },
  {
    id: "economy",
    title: "Економіка",
    menuTitle: "Економіка",
    type: "noCollapse",
    icon: <Assessment />,
    color: "#AAE3E3",

    children: [
      {
        id: "all",
        title: "Економіка - загальна",
        menuTitle: "Загальна",
        type: "item",
        url: "/analytics/economy/all",
        target: true,
      },
    ],
  },
  {
    id: "rating",
    title: "Рейтинг",
    menuTitle: "Рейтинг",
    type: "rating",
    icon: <TrendingUp />,
    color: "#FCDD3A",

    children: [
      {
        id: "heads-rating",
        title: "Рейтинг голів громад",
        menuTitle: "Рейтинг голів громад",
        type: "item",
        url: "/analytics/rating/heads-rating",
        target: true,
      },
    ],
  },
];

export const metricaPagesCabinet = [
  {
    id: "home",
    title: "Головна",
    menuTitle: "Головна",
    type: "noCollapse",
    icon: <Home />,
    color: "#FF6931",

    children: [
      {
        id: "all",
        title: "Головна",
        menuTitle: "Головна",
        type: "item",
        url: "/cabinet/analytics/home/all",
        target: true,

        chartsGroups: [],
      },
    ],
  },
  {
    id: "digitalization",
    title: "Цифровізація",
    menuTitle: "Цифровізація",
    type: "collapse",
    icon: <Dvr />,
    color: "#55A5B7",

    children: [
      {
        id: "cnap",
        title: "ЦНАП",
        menuTitle: "ЦНАП",
        type: "item",
        url: "/cabinet/analytics/digitalization/cnap",
        target: true,
        children: [
          {
            id: "net",
            title: "Мережа",
            menuTitle: "Мережа",
            type: "item",
            url: "cnap/net",
            target: true,
            chartsGroups: [],
          },
          {
            id: "inclusive",
            title: "Інклюзивність",
            menuTitle: "Інклюзивність",
            type: "item",
            url: "cnap/inclusive",
            target: true,
            chartsGroups: [],
          },
          {
            id: "barrier-free",
            title: "Безбар'єрність",
            menuTitle: "Безбар'єрність",
            type: "item",
            url: "cnap/barrier-free",
            target: true,

            chartsGroups: [],
          },
        ],
      },
    ],
  },

  {
    id: "education",
    title: "Освіта",
    menuTitle: "Освіта",
    type: "collapse",
    icon: <School />,
    color: "#AAE3E3",

    children: [
      {
        id: "e-document",
        title: "Є-документи",
        menuTitle: "Є-документи",
        type: "item",
        url: "/cabinet/analytics/education/e-document",
        target: true,
        chartsGroups: [],
      },
    ],
  },

  {
    id: "shelters",
    title: "Укриття",
    menuTitle: "Укриття",
    type: "collapse",
    icon: <MeetingRoom />,
    color: "#F2C3DB",

    children: [
      {
        id: "suitability",
        title: "Придатність укриттів",
        menuTitle: "Придатність укриттів",
        type: "item",
        url: "/cabinet/analytics/shelters/suitability",
        target: true,

        chartsGroups: [],
      },
    ],
  },
  {
    id: "finances",
    title: "Фінанси",
    menuTitle: "Фінанси",
    type: "collapse",
    icon: <AttachMoney />,
    color: "#FCDD3A",

    children: [
      {
        id: "budget",
        title: "Бюджет",
        menuTitle: "Бюджет",
        type: "item",
        url: "/cabinet/analytics/finances/budget",
        target: true,
      },
    ],
  },
  {
    id: "infrastructure",
    title: "Інфраструктура",
    menuTitle: "Інфраструктурa",
    type: "collapse",
    icon: <Apartment />,
    color: "#82B2EF",

    children: [
      {
        id: "zhkh",
        title: "ЖКГ",
        menuTitle: "ЖКГ",
        type: "item",
        url: "/cabinet/analytics/infrastructure/zhkh",
        target: true,
      },
    ],
  },
  {
    id: "healthcare",
    title: "Охорона здоров'я",
    menuTitle: "Охорона здоров'я",
    type: "noCollapse",
    icon: <MedicalServices />,
    color: "#55B78E",

    children: [
      {
        id: "all",
        title: "Охорона здоров'я - загальна",
        menuTitle: "Загальна",
        type: "item",
        url: "/cabinet/analytics/healthcare/all",
        target: true,
      },
    ],
  },
  {
    id: "economy",
    title: "Економіка",
    menuTitle: "Економіка",
    type: "noCollapse",
    icon: <Assessment />,
    color: "#AAE3E3",

    children: [
      {
        id: "all",
        title: "Економіка - загальна",
        menuTitle: "Загальна",
        type: "item",
        url: "/cabinet/analytics/economy/all",
        target: true,
      },
    ],
  },
  {
    id: "rating",
    title: "Рейтинг",
    menuTitle: "Рейтинг",
    type: "rating",
    icon: <TrendingUp />,
    color: "#FCDD3A",

    children: [
      {
        id: "heads-rating",
        title: "Рейтинг голів громад",
        menuTitle: "Рейтинг голів громад",
        type: "item",
        url: "/cabinet/analytics/rating/heads-rating",
        target: true,
      },
    ],
  },
];

export const cabinetPages = [
  {
    id: "messages",
    title: "єЗвернення",
    menuTitle: "єЗвернення",
    type: "noCollapse",
    icon: <MailOutline />,
    color: "#FF6931",
    access: ["deputy", "council"],

    children: [
      {
        id: "e-appeal",
        title: "єЗвернення",
        menuTitle: "єЗвернення",
        type: "item",
        url: "/cabinet/profile/messages/e-appeal",
        target: true,
      },
    ],
  },
  {
    id: "budget",
    title: "Бюджет",
    menuTitle: "Бюджет",
    type: "noCollapse",
    icon: <RequestQuoteOutlined />,
    color: "#FF6931",
    access: ["deputy", "council"],

    children: [
      {
        id: "own-budget",
        title: "Бюджет",
        menuTitle: "Бюджет",
        type: "item",
        url: "/cabinet/profile/budget/own-budget",
        target: true,
      },
    ],
  },
  {
    id: "tables",
    title: "Таблиці",
    menuTitle: "Таблиці",
    type: "noCollapse",
    icon: <BackupTable />,
    color: "#55a5b7",
    access: [],

    children: [
      {
        id: "all",
        title: "Таблиці",
        menuTitle: "Таблиці",
        type: "item",
        url: "/cabinet/profile/tables/all",
        target: true,
      },
    ],
  },
  // {
  //   id: "solicitations",
  //   title: "єКлопотання",
  //   menuTitle: "єКлопотання",
  //   type: "noCollapsecollapse",
  //   icon: <Subject />,
  //   color: "#55A5B7",

  //   children: [
  //     {
  //       id: "all",
  //       title: "єКлопотання",
  //       menuTitle: "єКлопотання",
  //       type: "item",
  //       url: "/cabinet/profile/solicitations/all",
  //       target: true,
  //       children: [],
  //     },
  //   ],
  // },

  // {
  //   id: "petitions",
  //   title: "єПетиція",
  //   menuTitle: "єПетиція",
  //   type: "noCollapse",
  //   icon: <HowToVote />,
  //   color: "#AAE3E3",

  //   children: [
  //     {
  //       id: "all",
  //       title: "єПетиція",
  //       menuTitle: "єПетиція",
  //       type: "item",
  //       url: "/cabinet/profile/petitions/all",
  //       target: true,
  //     },
  //   ],
  // },
];
