export interface Skill {
  name: string;
  level: number;
  isSoft?: boolean;
}

export const technicalSkills: Skill[] = [
  { name: 'HTML5', level: 5 },
  { name: 'CSS3', level: 5 },
  { name: 'JavaScript', level: 5 },
  { name: 'TypeScript', level: 5 },
  { name: 'React', level: 4 },
  { name: 'Angular', level: 5 },
  { name: 'Node.js', level: 3 },
  { name: 'Tailwind CSS', level: 3 },
  { name: 'Responsive Design', level: 4 },
  { name: 'RESTful APIs', level: 4 },
  { name: 'Git', level: 5 },
  { name: 'C#', level: 5 },
  { name: '.NET', level: 4 },
  { name: 'SQL', level: 3 },
  { name: 'MongoDB', level: 3 },
  { name: 'Docker', level: 2 },
  { name: 'Python', level: 2 },
];

export const softSkills: Skill[] = [
  { name: 'Comunicação', level: 4, isSoft: true },
  { name: 'Trabalho em Equipe', level: 5, isSoft: true },
  { name: 'Resolução de Problemas', level: 5, isSoft: true },
  { name: 'Gerenciamento de Tempo', level: 4, isSoft: true },
  { name: 'Adaptabilidade', level: 4, isSoft: true },
  { name: 'Atenção aos Detalhes', level: 4, isSoft: true },
];