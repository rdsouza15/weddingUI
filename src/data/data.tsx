import {
  // AcademicCapIcon,
  ArrowDownTrayIcon,
  // BuildingOffice2Icon,
  // /CalendarIcon,
  // FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

// import heroImage from '../images/header-background.webp';
import heroImage from '../../public/images/background.png';
import profilepic from '../../public/images/e1.png';
// import p2 from '../../public/images/e2.png';
// import testimonialImage from '../../public/images/testimonial.webp';
import florals from '../../public/images/florals.png'
// import italy from '../../public/images/portfolio/Italy.jpg';
// import p1 from '../../public/images/portfolio/p1.jpg';
// import p3 from '../../public/images/portfolio/p3.jpg';
// import p4 from '../../public/images/portfolio/p4.jpg';
// import p5 from '../../public/images/portfolio/p5.jpg';
// import p6 from '../../public/images/portfolio/p6.jpg';
// import p7 from '../../public/images/portfolio/p7.jpg';
// import p8 from '../../public/images/portfolio/p8.jpg';
// import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
// import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
// import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
// import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
// import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
// import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
// import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../../public/images/portfolio/portfolio-11.jpg';
import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'Home',
  Contact: 'RSVP',
  Portfolio: 'Memories',
  Resume: 'Schedule',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'Venue',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Insiya & Ryan`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        <strong className="text-stone-100">We're getting married! </strong>,
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Calendar',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'RSVP',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  
  profileImageSrc: profilepic,
  imageSrc: florals,
  description: `We look forward to sharing this special day with you and all our other loved ones.`,
  aboutItems: [
    {label: 'Location', text: 'Toronto,ON', Icon: MapIcon},
    {label: 'Date', text: 'Oct 4th 2025', Icon: SparklesIcon},
    {label: 'Time', text: '5pm', Icon: SparklesIcon},
    // {label: 'Age', text: '29', Icon: CalendarIcon},
    // {label: 'Nationality', text: 'Canadian / Irish', Icon: FlagIcon},
    // {label: 'Interests', text: 'Motorcycles, Muay Thai, Banjos', Icon: SparklesIcon},
    // {label: 'Study', text: 'University of Victoria', Icon: AcademicCapIcon},
    // {label: 'Employment', text: 'Instant Domains, inc.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Favourite Songs',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Bollywood',
        level: 4,
      },
      {
        name: 'Everything Else',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: florals,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: florals,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: florals,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: florals,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: florals,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: florals,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: florals,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: florals,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: florals,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: florals,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: florals,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Oct 2025',
    location: 'Mississauga',
    title: 'Mehndi',
    content: <p>Private ceremony with Insiya's family</p>,
  },
  {
    date: 'Oct 2025',
    location: 'Brampton/Toronto',
    title: 'Roce',
    content: <p>Private ceremony with Ryan's family</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Oct 4th 2025 5pm sharp',
    location: 'Toronto',
    title: 'Storys Wedding Ceremony',
    content: (
      <p>
         Join us as we tie the knot.
      </p>
    ),
  },
  {
    date: 'Oct 5 6pm',
    location: 'Toronto',
    title: 'Storys Wedding Reception',
    content: (
      <p>
        Let's celebrate
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: florals,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'RSVP',
  description: 'Please RSVP with any dietary restrictions. Also let us know your favourite song to get you moving on the dancefloor',
  items: [
    {
      type: ContactType.Email,
      text: 'insiyaryan@gmail.com',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Instagram,
      text: '@insiyaryan',
      href: 'https://www.instagram.com/tbakerx/',
    },
    {
      type: ContactType.Github,
      text: 'insiyaryan',
      href: 'https://github.com/tbakerx',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
