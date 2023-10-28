// Place any global data in this file.

import type { CardProps } from './components/Card/Card';

// You can import this data from anywhere in your site by using the `import` keyword.
export const SITE_TITLE = 'Nicole Portfolio';
export const SITE_DESCRIPTION = 'Welcome to my website!';

// Cards for homepage
export const SITE_CARDS: CardProps[] = [
  {
    link: '#',
    image: { filename: 'image1', alt: 'gaming consoles' },
    title: 'Test 1',
    description: 'Lorem ipsum blah blah',
  },
  {
    link: '#',
    image: { filename: 'image2', alt: 'macbook' },
    title: 'Test 2',
    description: 'Lorem ipsum blah blah',
  },
  {
    link: '#',
    image: { filename: 'image3', alt: 'notebook' },
    title: 'Test 3',
    description: 'Lorem ipsum blah blah',
  },
  {
    link: '#',
    image: { filename: 'image4', alt: 'iphone' },
    title: 'Test 4',
    description: 'Lorem ipsum blah blah',
  },
];
