export const workExp = [
  {
    place: "Freelance, Legacy Learning Center",
    tenure: "Jun 2022 - Present",
    role: "Full Stack Developer",
    detail:
      "Hired to create & maintain a time/student tracking web application using React & Node.js",
  },
  {
    place: "Self-Employment",
    tenure: "Feb 2021 - Apr 2022",
    role: "Day Trader",
    detail:
      "Outperformed the market by 357,132% by using options trading at CBOE with a budget of less than $10k",
  },
  {
    place: "Best Western",
    tenure: "Jan 2019 - Apr 2022",
    role: "Photographer",
    detail:
      "Advertisement work for Best Western Featured in Coach & Entrepreneur Magazine",
  },
];

export const comments = [
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people2.png",
  }
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
