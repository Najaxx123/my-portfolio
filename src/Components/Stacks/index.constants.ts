
export interface StackProps {
  name: string;
  goodAt: 'advanced' | 'intermediate' | 'beginner';
}

export const stacks: Array<StackProps> = [
  { name: 'Html', goodAt: 'advanced'},
  { name: 'Css', goodAt: 'advanced'},
  { name: 'Javascript', goodAt: 'advanced' },
  { name: 'PHP', goodAt: 'intermediate' },
  { name: 'SQL', goodAt: 'intermediate' },
  { name: 'React', goodAt: 'beginner' },
  { name: 'NodeJS', goodAt: 'beginner' },
  { name: 'Python', goodAt: 'beginner'}
];
