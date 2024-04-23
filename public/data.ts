import Logo1 from '@/public/Google.svg'
import Logo2 from '@/public/Atlassian.svg'
import Logo3 from '@/public/Canon.svg'
import Logo4 from '@/public/Walmart.svg'
import Logo5 from '@/public/Amazon.svg'

import Icon1 from '@/public/icon1.svg'
import Icon2 from '@/public/icon2.svg'
import Icon3 from '@/public/icon3.svg'

import Perk1 from '@/public/perk1.svg'
import Perk2 from '@/public/perk2.svg'
import Perk3 from '@/public/perk3.svg'

import Integration1 from '@/public/logo1.svg'
import Integration2 from '@/public/logo2.svg'
import Integration3 from '@/public/logo3.svg'
import Integration4 from '@/public/logo4.svg'
import Integration5 from '@/public/logo5.svg'
import Integration6 from '@/public/logo6.svg'
import Integration7 from '@/public/logo7.svg'
import Integration8 from '@/public/logo8.svg'
import Integration9 from '@/public/logo9.svg'
import Integration10 from '@/public/logo10.svg'

import News1 from '@/public/news1.png'
import News2 from '@/public/news2.png'

import Avatar1 from '@/public/user1.png'
import Avatar2 from '@/public/user2.png'
import Avatar3 from '@/public/user3.png'
import Avatar4 from '@/public/user4.png'
import Avatar5 from '@/public/user5.png'

export const partnersData = [Logo1, Logo2, Logo3, Logo4, Logo5]

export const benefitsData = [
  {
    icon: Icon1,
    title: 'Lead customers to happiness',
    content:
      'Roooby Support helps you provide personalized support when and where customers need it, so customers stay happy.',
  },
  {
    icon: Icon2,
    title: 'Support your support',
    content:
      'Productive agents are happy agents. Give them all the support tools and information they need to best serve your customers.',
  },
  {
    icon: Icon3,
    title: 'Grow without growing pains',
    content:
      'Our software is powerful enough to handle the most complex business, yet flexible enough to scale with you as you grow.',
  },
]

export const perksData = [
  {
    tag: 'sales',
    title: 'Increase company revenue up to 65%',
    image: Perk1,
    content: {
      main: 'Automate your sales, marketing, and service in one platform. Avoid data leaks and enable consistent messaging.',
      checks: [
        'Close more deals with single-page contact management',
        'Enjoy one-click calling, call scripts and voicemail automation',
        'Track stages and milestones of your deals to keep the sales process on track',
      ],
    },
  },
  {
    tag: 'marketing',
    title: 'Marketing',
    image: Perk2,
    content: {
      main: "Market like the most successful companies in the world with Agile CRM's marketing automation software.",
      checks: [
        'Resolve every issue in the shortest possible time with powerful ticketing features',
        'Categorize tickets according to the issue and route them to the appropriate group (e.g. sales or support)',
        'Enjoy at-a-glance views of important data—such as ticket priority—on your dashboard',
      ],
    },
  },
  {
    tag: 'service',
    title: 'Help Desk Software',
    image: Perk3,
    content: {
      main: 'Great customer support separates decent companies from excellent companies. A positive customer support experience is a crucially important piece of the customer journey. ',
      checks: [
        'Close more deals with single-page contact management',
        'Enjoy one-click calling, call scripts and voicemail automation',
        'Track stages and milestones of your deals to keep the sales process on track',
      ],
    },
  },
]

export const integrationsData = [
  {
    logo: Integration1,
    span: 1,
  },
  {
    logo: Integration2,
    span: 3,
  },
  {
    logo: Integration3,
    span: 3,
  },
  {
    logo: Integration4,
    span: 1,
  },
  {
    logo: Integration5,
    span: 3,
  },

  //////////
  {
    logo: Integration6,
    span: 4,
  },
  {
    logo: Integration7,
    span: 1,
  },
  {
    logo: Integration8,
    span: 1,
  },
  {
    logo: Integration9,
    span: 4,
  },
  {
    logo: Integration10,
    span: 1,
  },
]

export const newsData = [
  {
    tag: 'service',
    title: 'How To Deliver a Successful Product Launch',
    date: '2024-09-05',
    publisher: 'Joshua Nash',
    image: News1,
  },
  {
    tag: 'service',
    title: 'What Makes an Authentic Employee Profile, and Why Does It Matter?',
    date: '2024-09-07',
    publisher: 'Ivan Neshev',
    image: News2,
  },
]

export const resultsData = [
  {
    statement:
      'Using Кирилица CRM is one of the best decisions we’ve ever made. We’ve seen our annual revenue explode, and the outlook just keeps getting sunnier.',
    growth: {
      value: '$2.5 M',
      type: 'Geneate sale',
    },
    publisher: {
      name: 'Nellie Foster',
      position: 'Founder & CEO, Foster Business Strategies',
      avatar: Avatar1,
    },
  },
  {
    statement:
      'Yoora is created for sales people. It’s the kind of software that just works. I don’t have to try to make it work. It already does. It’s just perfect.',
    growth: {
      value: '45%',
      type: 'Grew revenue',
    },
    publisher: {
      name: 'Lawrence Gibbs',
      position: 'Marketing Director',
      avatar: Avatar2,
    },
  },
]

export const reviewsData = [
  {
    statement:
      'The best thing we love about Yoora is it does two-way sync with Google Apps. It has helped us to better organize and keep everything on track.',
    publisher: {
      name: 'Lola Ross',
      position: 'Marketing Director',
      avatar: Avatar3,
    },
  },
  {
    statement:
      'It has made our sales department more effective and efficient. It’s easy to use and it’s constantly updated. It’s easy to use and it’s constantly updated.',
    publisher: {
      name: 'Daisy Phelps',
      position: 'Speaker and Author, Lifeiseasy',
      avatar: Avatar4,
    },
  },
  {
    statement:
      'Easy to use, reasonably priced, and ensures I don’t drop the ball on following up with my leads!',
    publisher: {
      name: 'Andrew Wilkins',
      position: 'Managing Director, Nirma Studio',
      avatar: Avatar5,
    },
  },
]