
import { Module, Bonus } from './types';

export const courseData: Module[] = [
  {
    id: 'm1',
    title: 'Módulo 1: O Ponto de Virada',
    description: 'Nesta fase crucial, vamos parar de agir por impulso. O foco é entender a real raiz do problema e estabelecer a sua base emocional para o que vem a seguir.',
    lessons: [
      {
        id: '1.1',
        title: 'A Verdade Nua e Crua: Por Que o Relacionamento Chegou a Este Ponto?',
        description: 'Identifique os 3 erros fatais que você estava cometendo e entenda que o problema é o método, não você.',
        duration: '15:20',
        releaseDays: 0
      },
      {
        id: '1.2',
        title: 'O Diagnóstico Relatio: Seu Mapa da Crise',
        description: 'Use nosso questionário de autoavaliação para classificar o "Estágio da Crise" e saber exatamente onde concentrar seus esforços.',
        duration: '22:45',
        releaseDays: 0
      },
      {
        id: '1.3',
        title: 'O Protocolo de Distanciamento Estratégico (PDE)',
        description: 'Aprenda as regras claras de "Contato Zero" ou "Contato Mínimo" e como aplicá-las para criar espaço e valor sem parecer indiferente.',
        duration: '18:10',
        releaseDays: 2
      },
      {
        id: '1.4',
        title: 'A Lei do Espelho: O Foco em Você',
        description: 'O primeiro passo para a reversão é o resgate da sua autoestima. Exercícios práticos para começar a mudança interna.',
        duration: '25:00',
        releaseDays: 4
      }
    ]
  },
  {
    id: 'm2',
    title: 'Módulo 2: O Magnetismo Pessoal',
    description: 'Transforme-se na sua melhor versão. Vamos reverter a dinâmica de perseguição e fuga, tornando você uma pessoa atraente, segura e independente.',
    lessons: [
      {
        id: '2.1',
        title: 'O Resgate da Identidade Perdida',
        description: 'Reative seus hobbies e paixões. Descubra como a crise fez você se perder e como se reencontrar.',
        duration: '19:30',
        releaseDays: 0
      },
      {
        id: '2.2',
        title: 'O Fim da Dependência Emocional',
        description: 'Quebre os padrões de codependência. Gerencie a ansiedade e o medo da solidão para agir com clareza.',
        duration: '28:15',
        releaseDays: 0
      },
      {
        id: '2.3',
        title: 'A Linguagem da Atração Silenciosa',
        description: 'Aprenda a usar suas ações e redes sociais de forma estratégica para que seu parceiro(a) perceba a sua transformação.',
        duration: '21:05',
        releaseDays: 2
      },
      {
        id: '2.4',
        title: 'O Novo Você: A Versão Magnética',
        description: 'Crie um "Plano de Vida Pessoal" que te torna irresistível e atrai seu parceiro(a) de volta naturalmente.',
        duration: '32:40',
        releaseDays: 4
      }
    ]
  },
  {
    id: 'm3',
    title: 'Módulo 3: O Protocolo de Reaproximação',
    description: 'Hora de agir. Fornecemos as ferramentas de comunicação e gatilhos mentais para uma reconexão saudável, segura e duradoura.',
    lessons: [
      {
        id: '3.1',
        title: 'A Comunicação que Desarma (O Fim das Brigas)',
        description: 'Domine as técnicas de Comunicação Non-Violenta para desarmar discussões e criar um diálogo produtivo.',
        duration: '24:15',
        releaseDays: 0
      },
      {
        id: '3.2',
        title: 'Os 5 Gatilhos de Reconexão',
        description: 'Ações específicas e pontuais para reativar a memória afetiva e o desejo do seu parceiro(a).',
        duration: '17:50',
        releaseDays: 0
      },
      {
        id: '3.3',
        title: 'O Teste Final: É Hora de Voltar?',
        description: 'Critérios objetivos para avaliar se o parceiro(a) está pronto para investir na recuperação, evitando o "relacionamento iô-iô".',
        duration: '20:30',
        releaseDays: 2
      },
      {
        id: '3.4',
        title: 'Blindagem Contra Futuras Crises',
        description: 'Aprenda a transformar a crise superada em um ponto de força e crie regras de manutenção para a longevidade do relacionamento.',
        duration: '30:00',
        releaseDays: 4
      }
    ]
  },
  {
    id: 'm4',
    title: 'Módulo 4: Atualizações Semanais de Elite',
    description: 'Neste espaço, você receberá novos insights, estudos de caso e ferramentas práticas toda semana para garantir que o seu relacionamento nunca mais volte a cair na rotina ou na crise.',
    lessons: [
      {
        id: '4.1',
        title: 'Análise Semanal #1: Blindagem de Longo Prazo',
        description: 'Como manter o fogo aceso após os primeiros meses da reconciliação. Estratégias de manutenção contínua.',
        duration: '28:40',
        releaseDays: 7
      },
      {
        id: '4.2',
        title: 'Workshop ao Vivo: Respondendo às Maiores Dúvidas',
        description: 'Gravação da nossa mentoria coletiva abordando casos específicos de alunos da última semana.',
        duration: '54:10',
        releaseDays: 7
      }
    ]
  }
];

export const bonuses: Bonus[] = [
  {
    id: 'b1',
    title: 'Guia de Mensagens Estratégicas',
    description: 'Modelos prontos de mensagens para WhatsApp e SMS para diversas situações, garantindo que você diga a coisa certa na hora certa.',
    icon: 'message-circle',
    downloadUrl: '#' // Substitua pelo link real do PDF
  },
  {
    id: 'b2',
    title: 'Checklist de 30 Dias',
    description: 'Um calendário de ações diárias para manter o foco e a disciplina, transformando o método em um hábito.',
    icon: 'calendar',
    downloadUrl: '#' // Substitua pelo link real do PDF
  },
  {
    id: 'b3',
    title: 'Acesso à Comunidade Secreta',
    description: 'Grupo exclusivo para suporte, troca de experiências e networking com outros alunos que estão no mesmo processo.',
    icon: 'users',
    downloadUrl: 'https://whatsapp.com' // Link para o grupo
  },
  {
    id: 'b4',
    title: 'O Script Secreto da Reversão',
    description: 'Um documento confidencial com as palavras exatas para usar no primeiro encontro após o contato zero. Conteúdo restrito.',
    icon: 'file-text',
    requiresPassword: true,
    password: 'reversaosecreto!2',
    downloadUrl: '#' // Link para o arquivo protegido
  },
  {
    id: 'b5',
    title: 'Masterclass: Psicologia Proibida',
    description: 'Uma aula avançada sobre gatilhos mentais de escassez e urgência que nunca foram revelados publicamente.',
    icon: 'tv',
    requiresPassword: true,
    password: 'psicologia@12',
    downloadUrl: '#' // Link para assistir ou baixar a aula
  },
  {
    id: 'b6',
    title: 'Texto-Guia: Meditação do Desapego',
    description: 'Um manual prático detalhado para reprogramar seu subconsciente e eliminar a ansiedade de separação através da escrita terapêutica e visualização.',
    icon: 'file-text',
    requiresPassword: true,
    password: 'auladesapego!@3',
    downloadUrl: '#' // Link para o guia em PDF
  }
];
