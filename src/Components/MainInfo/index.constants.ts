import { IconType } from 'react-icons';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';

interface Social {
  name: string;
  href: string;
  icon: IconType;
}

export const whoIAm: string = "Bonjour, je m'appelle Romain Brival";
export const whatIAm: string = "Je suis un Devloppeur Front-End Français";
export const whoIWannaBe: Array<string> = [
// 'Graduated in Computer Science',
  "J'E'tudie pour devenir un Devloppeur FullStack",
  "J'Etudie pour devenir une personne meilleure",
  "J'Etudie pour devenir un meilleur pro",
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
