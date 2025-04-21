const carouselSlides = [
  {
    id: 1,
    txt: "Role-based access and secure management.",
  },
  {
    id: 2,
    txt: "Track your leaves, submit requests, and stay updated with ease.",
  },
  {
    id: 3,
    txt: "Stay connected with HR and manage your work-life balance.",
  },
  {
    id: 4,
    txt: "Seamless employee management.",
  },
];

const loadingCarousel = [
  {
    id: 1,
    txt: "Connecting to server...",
  },
  {
    id: 2,
    txt: "Loading Data...",
  },
  {
    id: 3,
    txt: "Almost there...",
  },
  {
    id: 4,
    txt: "Setting things up...",
  },
  {
    id: 5,
    txt: "Just a few more seconds...",
  },
  {
    id: 6,
    txt: "Magic is happening...",
  },
];

const adminSidebarOptions = [
  {
    id: 1,
    option: "Dashboard",
    icon: "HomeOutlinedIcon",
  },

  {
    id: 2,
    option: "Analytics",
    icon: "DataUsageIcon",
  },
  {
    id: 3,
    option: "Employees",
    icon: "GroupsIcon",
  },
];

const empSidebarOptions = [
  {
    id: 1,
    option: "Dashboard",
    icon: "HomeOutlinedIcon",
  },

  {
    id: 2,
    option: "Apply Leave",
    icon: "OutputIcon",
  },
  {
    id: 3,
    option: "Relocation",
    icon: "PlaceIcon",
  },
  {
    id: 4,
    option: "Resignation",
    icon: "DescriptionIcon",
  },
];

const departments = ["Finance", "IT", "Marketing", "Operations"];

const locations = ["Bengaluru", "Gurgaon", "Hyderabad", "Mumbai", "Pune"];

const leaveTypes = ["Sick Leave", "Casual Leave", "Earned Leave"];

const guestAdmin = {
  username: "admin",
  password: "admin",
};

const guestEmployee = {
  username: "John Wick",
  password: "password",
};

const resignSteps = [
  {
    id: 1,
    step: "Select Last Working Day",
    desc: "Please choose your preferred last working day. This is a tentative date till which you will be available before your resignation takes effect. Make sure to check your notice period and discuss with your manager if needed. The selected date may be modified by HR upon review.",
  },
  {
    id: 2,
    step: "Fill Questionnaire",
    desc: "Help us improve by sharing your experience! Please answer a few quick questions about your time here. Your feedback is valuable and will be kept confidential.",
  },
  {
    id: 3,
    step: "Review & Submit",
    desc: "Almost done! Review your details to ensure everything is correct. Once submitted, your resignation request will be sent to HR for processing.",
  },
];

const relocationSteps = [
  {
    id: 1,
    step: "Select Work Location",
    desc: "Please pick your preferred work location. Make sure to check with your manager to confirm feasibility of transfer.",
  },
  {
    id: 2,
    step: "Relocation Justification",
    desc: "Please provide a clear justification for your request to change your work location.",
  },
  {
    id: 3,
    step: "Review & Submit",
    desc: "Almost done! Review your details to ensure everything is correct. Once submitted, your relocation request will be sent to HR for processing.",
  },
];

const leaveSteps = [
  {
    id: 1,
    step: "Select Leave Type",
    desc: "Please specify the type of leave you want to apply for.",
  },
  {
    id: 2,
    step: "Select Leave Duration",
    desc: "Please provide a duration of leave.",
  },
  {
    id: 3,
    step: "Review & Submit",
    desc: "Almost done! Review your details to ensure everything is correct. Once submitted, your leave request will be sent to HR for processing.",
  },
];

const reqHistoryPills = [
  {
    id: 1,
    label: "Leaves",
  },
  {
    id: 2,
    label: "Relocations",
  },
  {
    id: 3,
    label: "Resignations",
  },
];

const skills = {
  about: `Hi, I’m Bhargav — a full-stack developer passionate about building
          meaningful web applications. I love combining the fundamentals of
          JavaScript with React, Node.js, Express, and MongoDB to bring ideas to
          life. My problem-solving approach is rooted in experimentation;
          whether it's at work or in my free time, I’m constantly building,
          tinkering, and learning something new with every project.`,
  frontEnd: [
    { id: 1, label: "Javascript" },
    { id: 2, label: "React" },
    { id: 3, label: "MUI" },
    { id: 4, label: "Bootstrap" },
    { id: 5, label: "HTML5" },
    { id: 6, label: "CSS3" },
  ],
  backEnd: [
    { id: 1, label: "Node.js" },
    {
      id: 2,
      label: "Express.js",
    },
    { id: 3, label: "MongoDB" },
    { id: 4, label: "Mongoose" },
    { id: 5, label: "REST API" },
    { id: 6, label: "JWT Auth" },
    { id: 7, label: "SQL" },
  ],
  languages: [
    { id: 1, label: "Javascript" },
    { id: 2, label: "Java" },
    { id: 3, label: "SQL" },
  ],
  tools: [
    { id: 1, label: "Git" },
    { id: 2, label: "Postman" },
    { id: 3, label: "CORS" },
    { id: 4, label: "Chrome Dev Tools" },
    { id: 5, label: "VS Code" },
  ],
  projects: [
    {
      id: 1,
      label: "AuthHR",
      tag:"Full-stack",
      about:"Full-stack, role based access control, JWT Authentication based HRM application.",
      website:"",
      code:"https://github.com/bhargav-parashar/auth-HR",
      skills: [
        { id: 1, label: "React.js" },
        { id: 2, label: "MUI" },
        { id: 3, label: "Node.js" },
        { id: 4, label: "Express" },
        { id: 5, label: "Middlewares" },
        { id: 6, label: "MongoDB" },
        { id: 7, label: "Mongoose" },
        { id: 8, label: "Parcel" },
        { id: 9, label: "Lazy loading" },
        { id: 10, label: "JWT Auth" },
        { id: 11, label: "RBAC" },
        { id: 12, label: "Password Hashing" },
        { id: 13, label: "Vercel" },
        { id: 14, label: "Render" }
      ],
    },
    {
      id: 2,
      label: "QKart",
      tag:"Frontend",
      about:"Cart based E-Commerce Platform.",
      website:"https://qkart-frontend-fxws968e5-bhargav-parashars-projects.vercel.app/",
      code:"https://github.com/bhargav-parashar/bhargavparashar99-ME_QKART_FRONTEND_V2",
      skills: [
        { id: 1, label: "React.js" },
        { id: 2, label: "MUI" },
        { id: 3, label: "REST" },
        { id: 3, label: "CRA" },
        { id: 4, label: "Vercel" },
        { id: 5, label: "Render" }
      ],
    },
    {
      id: 3,
      label: "Medify",
      tag:"Frontend",
      about:"Doctor's appointment booking application.",
      website:"https://medify-bice-ten.vercel.app/",
      code:"https://github.com/bhargav-parashar/medify",
      skills: [
        { id: 1, label: "React.js" },
        { id: 2, label: "MUI" },
        { id: 3, label: "Swiper" },
        { id: 4, label: "REST" },
        { id: 5, label: "CRA" },
        { id: 6, label: "Vercel" },
        { id: 7, label: "Render" }
      ],
    },
    {
      id: 4,
      label: "Expense Tracker",
      tag:"Frontend",
      about:"A personal expense tracker application.",
      website:"https://expense-tracker-rose-nine.vercel.app/",
      code:"https://github.com/bhargav-parashar/expense-tracker",
      skills: [
        { id: 1, label: "React.js" },
        { id: 2, label: "MUI" },
        { id: 3, label: "REST" },
        { id: 3, label: "CRA" },
        { id: 4, label: "Vercel" },
        { id: 5, label: "Render" }
      ],
    },
    {
      id: 5,
      label: "Swift Exit",
      tag:"Full-stack",
      about:"JWT Auth enables RBAC application for submitting and reviewing resignations.",
      website:"https://swift-exit-frontend.vercel.app/",
      code:"https://github.com/bhargav-parashar/swift-exit-fullstack-app",
      skills: [
        { id: 1, label: "React.js" },
        { id: 2, label: "MUI" },
        { id: 3, label: "Node.js" },
        { id: 4, label: "Express" },
        { id: 5, label: "Middlewares" },
        { id: 6, label: "MongoDB" },
        { id: 7, label: "Mongoose" },
        { id: 8, label: "Vite" },
        { id: 9, label: "JWT Auth" },
        { id: 10, label: "RBAC" },
        { id: 11, label: "Vercel" },
        { id: 12, label: "Render" }
      ],
    },
    {
      id: 6,
      label: "QTify",
      tag:"Frontend",
      about:"UI Layout of a music streaming platform.",
      website:"https://qtify-seven-iota.vercel.app/",
      code:"https://github.com/bhargav-parashar/L-square-QTify",
      skills: [
        { id: 1, label: "React.js" },
        { id: 2, label: "Swiper" },
        { id: 3, label: "CRA" },
        { id: 4, label: "Vercel" },
        { id: 5, label: "Render" }
      ],
    },
    {
      id: 7,
      label: "Task Manager",
      tag:"Full-stack",
      about:"CRUD operations based full-stack task management platform.",
      website:"https://task-manager-frontend-green.vercel.app/",
      code:"https://github.com/bhargav-parashar/task-manager-fullstack",
      skills: [
        { id: 1, label: "React.js" },
        { id: 2, label: "MUI" },
        { id: 3, label: "Node.js" },
        { id: 4, label: "Express" },
        { id: 6, label: "MongoDB" },
        { id: 7, label: "Mongoose" },
        { id: 8, label: "CRA" },
        { id: 13, label: "Vercel" },
        { id: 14, label: "Render" },
      ],
    },
    {
      id: 8,
      label: "Weather App",
      tag:"Frontend",
      about:"Makes a live weather data API call and displays it for any chosen location around the world.",
      website:"https://weather-app-eight-swart-30.vercel.app/",
      code:"https://github.com/bhargav-parashar/weather-app",
      skills: [
        { id: 1, label: "React.js" },
        { id: 3, label: "REST" },
        { id: 3, label: "CRA" },
        { id: 4, label: "Vercel" },
        { id: 5, label: "Render" }
      ],
    },
    {
      id: 9,
      label: "BotAI",
      tag:"Frontend",
      about:"AI Chat Application UI Layout for static data.",
      website:"https://bot-ai-lime.vercel.app/",
      code:"https://github.com/bhargav-parashar/bot-ai",
      skills: [
        { id: 1, label: "React.js" },
        { id: 2, label: "MUI" },
        { id: 3, label: "CRA" },
        { id: 4, label: "Vercel" },
        { id: 5, label: "Render" }
      ],
    }
  ],
};

export {
  carouselSlides,
  adminSidebarOptions,
  empSidebarOptions,
  guestAdmin,
  guestEmployee,
  loadingCarousel,
  resignSteps,
  departments,
  locations,
  relocationSteps,
  leaveSteps,
  reqHistoryPills,
  leaveTypes,
  skills
};
