/* Change this file to get your personal Porfolio */
/*
`
    Hi! I'm Henry, a systems engineering student living in Quito, Ecuador.
    
    I'm a technology and programming enthusiast. I enjoy programming and creating web applications using and learning about the latest technology, libraries or frameworks. Lately my focus has been on data engineering, I am very interested in this field of data science and I would like to become a data engineer making use of cloud technologies.
    
    I am about to graduate from the Escuela Politecnica Nacional as a Systems Engineer, and not long ago I worked in the data engineering team at Ingelsi, where I worked on a variety of interesting and meaningful projects.
    
    Here are some of the technologies I've been working with recently:
    
    Python
    JavaScript
    React
    Azure
    
    "I want to be the best version of me."`
*/
// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Henry's Portfolio",
  description: "Hi! I'm Henry, a Systems Engineering student living in Quito, Ecuador. I'm a technology and programming enthusiast. I enjoy programming and creating web applications using and learning about the latest technology, libraries or frameworks.",
  og: {
    title: "Henry Aguilar Portfolio",
    type: "website",
    url: "https://henry-aguilar.com/",
  },
};

//Home Page
const greeting = {
  title: "Henry Aguilar",
  logo_name: "HenryA",
  nickname: "kaellyn",
  subTitle:
    "Hi! I'm Henry, a Systems Engineering student living in Quito, Ecuador. I'm a technology, programming and data engineering enthusiast. I enjoy programming and creating web applications using and learning about the latest technology, libraries or frameworks.",
  resumeLink: "https://rxresu.me/r/v26yv2",
  portfolio_repository: "https://github.com/Kaellyn",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/Kaellyn",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/henry-aguilar-618847217/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://www.youtube.com/channel/UC_amoXmmxSY9KusoDczDTXQ",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:henrysagq@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
  //   backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/layman_brother/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Text analysis and classification through natural language processing (NLP)",
        "⚡ Development of highly scalable production-ready models ",
        "⚡ Complex quantitative modeling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Spark",
          fontAwesomeClassname: "cib-apache-spark",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React-Redux",
        "⚡ Developing mobile applications using React Native",
        "⚡ Creating application backend in Node, Express, Flask & Django",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/henrysagq",
    },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    {
      siteName: "Microsoft Learn",
      iconifyClassname: "cib-microsoft",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://docs.microsoft.com/en-us/users/henryaguilar-2713/",
    },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/henryag",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "School of Systems Engineering EPN",
      subtitle: "Systems Engineer",
      logo_path: "iiitk_logo.png",
      alt_name: "EPN",
      duration: "2016 - Present",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Data Science, Cloud Computing and Back End Development.",
        "",
      ],
      website_link: "https://www.epn.edu.ec/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "HackerRank Profile",
      subtitle: "- HackerRank",
      logo_path: "hackerrank_logo.png",
      certificate_link:
        "https://www.hackerrank.com/henrysagq",
      alt_name: "HackerRank Profile",
      color_code: "#fff",
    },
    {
      title: "React (Basic) Certificate",
      subtitle: "- HackerRank",
      logo_path: "hackerrank_logo.png",
      certificate_link:
        "https://www.hackerrank.com/certificates/3ecf1db64364",
      alt_name: "HackerRank",
      color_code: "#fff",
    },
    {
      title: "Python (Basic) Certificate",
      subtitle: "- HackerRank",
      logo_path: "hackerrank_logo.png",
      certificate_link:
        "https://www.hackerrank.com/certificates/5796b2e752d9",
      alt_name: "HackerRank",
      color_code: "#fff",
    },
    {
      title: "Jisic 2019",
      subtitle: "- Escuela Politécnica Nacional",
      logo_path: "JISIC-2019-banner-tipo-epn2-FINAL.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1uI4fEvjDg5Uwfd3BIfdA6DlVnlKHJ2gq/view?usp=sharing",
      alt_name: "Jisic 2019",
      color_code: "#fff",
    },
    {
      title: "Data Analysis with R course",
      subtitle: "- Escuela Politécnica Nacional",
      logo_path: "EPN_logo_big.png",
      certificate_link:
        "https://drive.google.com/file/d/1unLmm5d4ibJgipuewvv_LMeLUv7-q0ZD/view?usp=sharing",
      alt_name: "Multidimencional Data Analysis with R course",
      color_code: "#fff",
    },
    {
      title: "Microsoft Learn Data and Cloud Student Profile",
      subtitle: "- Microsoft",
      logo_path: "microsoft_learn.jpg",
      certificate_link:
        "https://docs.microsoft.com/en-us/users/henryaguilar-2713",
      alt_name: "Microsoft Learn Profile",
      color_code: "#fff",
    },
    {
      title: "Jisic 2017",
      subtitle: "- Escuela Politécnica Nacional",
      logo_path: "EPN_logo_big.png",
      certificate_link:
        "https://drive.google.com/file/d/1L7pDzgqhtNjaQTan4Kda29sN39eR7t_8/view?usp=sharing",
      alt_name: "Jisic 2017",
      color_code: "#fff",
    },
    {
      title: "National Programming Contest",
      subtitle: "- Escuela Politécnica Nacional",
      logo_path: "EPN_logo_big.png",
      certificate_link:
        "https://drive.google.com/file/d/1K7d60qrn49HK5Rct68OQSjmpCokT1W0f/view?usp=sharing",
      alt_name: "Certificate of participation in the National Programming Contest organized by the Escuela Politecnica Nacional",
      color_code: "#fff",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "",
  header_image_path: "experience.svg",
  sections: [
    // {
    //   title: "Work",
    //   experiences: [
    //     {
    //       title: "Data Engineer Helper",
    //       company: "Ingelsi",
    //       company_url: "http://www.ingelsi.com.ec/",
    //       logo_path: "ingelsi.png",
    //       duration: "June 2020 - PRESENT",
    //       location: "Quito, Ecuador",
    //       description: "I am working on",
    //       color: "#0879bf",
    //     },
    //   ],
    // },
    // {
    //   title: "Internships",
    //   experiences: [
    //     {
    //       title: "Data Science Research Intern",
    //       company: "Ingelsi",
    //       company_url: "http://www.ingelsi.com.ec/",
    //       logo_path: "ingelsi.png",
    //       duration: "May 2019 - Sept 2019",
    //       location: "Quito, Ecuador",
    //       description:
    //         "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
    //       color: "#ee3c26",
    //     },
    //     {
    //       title: "Data Science Intern",
    //       company: "Schlumberger",
    //       company_url: "https://",
    //       logo_path: "schlumberger.png",
    //       duration: "Nov 2018 - Dec 2018",
    //       location: "Work From Home",
    //       description:
    //         "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
    //       color: "#0071C5",
    //     },
    //   ],
    // },
    {
      title: "Volunteerships",
      experiences: [
        // {
        //   title: "Google Explore ML Facilitator",
        //   company: "Google",
        //   company_url: "https://about.google/",
        //   logo_path: "google_logo.png",
        //   duration: "June 2019 - April 2020",
        //   location: "Hyderabad, Telangana",
        //   description:
        //     "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
        //   color: "#4285F4",
        // },
        // {
        //   title: "Microsoft Student Partner",
        //   company: "Microsoft",
        //   company_url: "https://www.microsoft.com/",
        //   logo_path: "microsoft_logo.png",
        //   duration: "Aug 2019 - May 2020",
        //   location: "Hyderabad, Telangana",
        //   description:
        //     "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
        //   color: "#D83B01",
        // },
        // {
        //   title: "Mozilla Campus Captain",
        //   company: "Mozilla",
        //   company_url: "https://www.mozilla.org/",
        //   logo_path: "mozilla_logo.png",
        //   duration: "Oct 2019 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
        //   color: "#000000",
        // },
        // {
        //   title: "Developer Students Club Member",
        //   company: "DSC IIITDM Kurnool",
        //   company_url:
        //     "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
        //   logo_path: "dsc_logo.png",
        //   duration: "Jan 2018 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
        //   color: "#0C9D58",
        // },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am contributing to many opensource projects. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Coming Soon.... ;)",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "Under Construction :)",
    link: "#",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Quito, Ecuador, Llano Grande Ciu. Alegria",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/K3crRHi1KD8qT8C69",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+593 995840974",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
