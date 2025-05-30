export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'OrçaFácil',
    description: 'Uma plataforma para geração de orçamentos com informações personalizadas do prestador de serviços e com dados do cliente.',
    image: '/logo-site.png',
    tags: ['React', 'HTML', 'Node', 'Firebase', 'TypeScript', 'JavaScript', 'Git'],
    githubUrl: 'https://github.com/jezielsilva/gerador-orcamento-padrao',
    liveUrl: 'https://orca-facil.netlify.app'
  },
];