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
    icon: "DataUsageIcon",
  },
  {
    id: 3,
    option: "Request Relocation",
    icon: "GroupsIcon",
  },
  {
    id: 4,
    option: "Submit Resignation",
    icon: "GroupsIcon",
  },
];

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
    desc: "Please choose your preferred last working day. This is a tentative date till which you will be available before your resignation takes effect. Make sure to check your notice period and discuss with your manager if needed. The selected date may be modified by HR upon review."
  },
  {
    id: 2,
    step: "Fill Questionnaire",
    desc: "Help us improve by sharing your experience! Please answer a few quick questions about your time here. Your feedback is valuable and will be kept confidential."
  },
  {
    id: 3,
    step: "Review & Submit",
    desc:"Almost done! Review your details to ensure everything is correct. Once submitted, your resignation request will be sent to HR for processing. You won’t be able to edit it afterward."
  },
];

export {
  carouselSlides,
  adminSidebarOptions,
  empSidebarOptions,
  guestAdmin,
  guestEmployee,
  loadingCarousel,
  resignSteps,
};
