interface LifeTimeProps {
  title: string;
  description: string;
  year: number;
}

export const getYears = () => {
  const years = lifetime.map((time) => time.year).sort((a, b) => a - b);
  return years.filter((year, i) => years.indexOf(year) === i);
};

export const lifetime: Array<LifeTimeProps> = [
  {
    year: 2009,
    title: 'Je suis née',
    description: 'Le 24 mars 2009, je suis venu au monde.',
  },
  {
    year: 2024,
    title: 'Eden School',
    description: 'Je rejoins Eden School en 2024 pour apprendre le developpement web.',
  },
];
