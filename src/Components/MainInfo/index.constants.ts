import { IconType } from 'react-icons';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';

interface Social {
  name: string;
  href: string;
  icon: IconType;
}

export const whoIAm: string = "Hello, I'm Romain Brival";
export const whatIAm: string = "I'm a French Front-End Develloper";
export const whoIWannaBe: Array<string> = [
// 'Graduated in Computer Science',
  'Studying to become a FullStack Developer',
  'Studying to become a Better Person',
  'Studying to become a Better Professional',
];
export const whoIWannaBeTimes: Array<number> = [1500, 1500, 1500, 5000];

export const socials: Array<Social> = [
  { name: 'github', href: 'https://github.com/Najaxx123', icon: BsGithub },
  {
    name: 'linkedin',
    href: 'https://www.linkedin.com/in/romain-brival-933532352/',
    icon: BsLinkedin,
  },
  {
    name: 'instagram',
    href: 'https://www.instagram.com/romain_brvl/',
    icon: BsInstagram,
  },
  {
    name: 'email',
    href: 'mailto:romain.brival@gmail.com?subject=Contact depuis le portfolio de Romain Brival&body=Votre message',
    icon: FiMail,
  },
];
