/* =====================================================
   EDITE AQUI: todo o conteúdo do portfólio vive neste arquivo.
   Baseado no currículo de Lucas Storck Mendes.
   Itens marcados com TODO precisam do seu dado real.
   ===================================================== */
window.PORTFOLIO = {
  perfil: {
    nome: "Lucas Storck Mendes",
    curto: "Lucas Storck",
    github: "LucasStorck",
    email: "lucasstorck@icloud.com",
    linkedin: "https://www.linkedin.com/in/lucasstorck",
    cidade: "Niterói, Rio de Janeiro, Brasil",
    papeis: ["Desenvolvedor Backend", "Coordenador de TI", "Java & Spring Boot", "Arquiteto de APIs RESTful"],
    bio: "Desenvolvedor Backend e Coordenador de TI com experiência em arquitetura, desenvolvimento e documentação de APIs RESTful corporativas. Especialista no ecossistema Java e Spring Boot, com vivência em modelagem relacional e bancos de dados em grafos. Lidero equipes de desenvolvimento web, automatizo deploys e busco soluções eficientes, escaláveis e de alto impacto."
  },

  numeros: [
    { valor: 2,  sufixo: "",  rotulo: "experiências profissionais" },
    { valor: 2026, sufixo: "", rotulo: "ano do TCC em Sistemas de Informação" },
    { valor: 2,  sufixo: "",  rotulo: "bancos de dados: relacional e grafo" },
    { valor: 1,  sufixo: "",  rotulo: "equipe de dev liderada" }
  ],

  /* nivel: 3 = uso no dia a dia · 2 = já usei em projetos · 1 = explorando */
  habilidades: {
    "Backend": [
      { nome: "Java", nivel: 3, nota: "Linguagem principal" },
      { nome: "Spring Boot", nivel: 3, nota: "Serviços corporativos" },
      { nome: "APIs RESTful", nivel: 3, nota: "Projeto, implementação e docs" }
    ],
    "Dados": [
      { nome: "PostgreSQL", nivel: 3, nota: "Modelagem e consultas SQL" },
      { nome: "Neo4j", nivel: 2, nota: "Sandbox em nuvem, dados em grafos" }
    ],
    "DevOps": [
      { nome: "Docker", nivel: 2, nota: "Containers" },
      { nome: "CI/CD", nivel: 2, nota: "Automação de deploy" }
    ],
    "Documentação": [
      { nome: "Swagger / OpenAPI", nivel: 3, nota: "Contratos de API" },
      { nome: "Design de APIs", nivel: 3, nota: "Padrões REST" }
    ],
    "IA no dev": [
      { nome: "Claude Code", nivel: 3, nota: "Desenvolvimento assistido" },
      { nome: "Gemini Notebook", nivel: 2, nota: "Pesquisa e estudo" },
      { nome: "PicWish", nivel: 1, nota: "Processamento de imagem por IA" }
    ],
    "Liderança": [
      { nome: "Coordenação técnica", nivel: 3, nota: "Equipes de desenvolvimento web" },
      { nome: "Boas práticas", nivel: 3, nota: "Engenharia e colaboração ágil" }
    ]
  },

  projetos: [
    {
      id: "kadija",
      titulo: "Projeto Kadija",
      ano: "Destaque",
      categoria: "Destaque",
      emoji: "🛠️",
      resumo: "Sistema de gerenciamento de ordens de serviço.",
      problema: "Ordens de serviço precisam ser abertas, acompanhadas e concluídas com clareza, sem perder o histórico.",
      solucao: "Atuei na estruturação e no gerenciamento da base de código do sistema, organizando o projeto para evoluir com segurança.",
      stack: ["Java", "Spring Boot", "PostgreSQL"],            // TODO: confirme a stack
      arquitetura: ["Cliente", "API REST", "Regras de negócio", "Banco de dados"],
      destaques: ["Estruturação da base de código", "Gerenciamento e organização do repositório", "Foco em ordens de serviço"],
      fatos: [ { rotulo: "Domínio", valor: "Ordens de serviço" }, { rotulo: "Meu papel", valor: "Estruturação e gestão do código" } ],
      repo: null                                                // TODO: nome do repositório, se for público
    },
    {
      id: "observarnit",
      titulo: "ObservarNit",
      ano: "Destaque",
      categoria: "Destaque",
      emoji: "🏙️",
      resumo: "Software voltado ao ecossistema municipal de Niterói.",
      problema: "Uma base de código pública precisa continuar saudável e rastreável ao longo do tempo.",
      solucao: "Cuidei da manutenção, do arquivamento e do versionamento do código, mantendo o histórico organizado e recuperável.",
      stack: ["Java", "Git"],                                   // TODO: confirme a stack
      arquitetura: ["Código-fonte", "Versionamento", "Manutenção", "Arquivamento"],
      destaques: ["Manutenção contínua", "Versionamento organizado", "Arquivamento do projeto"],
      fatos: [ { rotulo: "Contexto", valor: "Ecossistema municipal" }, { rotulo: "Meu papel", valor: "Manutenção e versionamento" } ],
      repo: null
    },
    {
      id: "prefeitura-api",
      titulo: "APIs da Prefeitura de Niterói",
      ano: "Experiência",
      categoria: "Backend",
      emoji: "🏛️",
      resumo: "APIs RESTful corporativas para a administração pública municipal.",
      problema: "Sistemas da administração pública precisam conversar entre si de forma confiável.",
      solucao: "Projetei, desenvolvi e implementei APIs RESTful em Java com Spring Boot, otimizando a comunicação entre sistemas.",
      stack: ["Java", "Spring Boot", "REST", "Swagger"],
      arquitetura: ["Sistema cliente", "API REST", "Serviço Spring Boot", "Banco de dados"],
      destaques: ["APIs RESTful robustas", "Serviços de backend corporativos", "Comunicação otimizada entre sistemas"],
      fatos: [ { rotulo: "Onde", valor: "Prefeitura de Niterói" }, { rotulo: "Cargo", valor: "Desenvolvedor Backend" } ],
      repo: null
    },
    {
      id: "lab-url",
      titulo: "URL Shortener",
      ano: 2026,
      categoria: "Open source",
      emoji: "🔗",
      resumo: "Encurtador de URLs com métricas de cliques, cache em Redis e documentação Swagger.",
      problema: "Links longos são ruins de compartilhar e não dizem quantas pessoas clicaram.",
      solucao: "API que gera um código curto para qualquer URL http(s), com expiração opcional, redirect 302 e contagem de cliques. Os redirects ficam em cache no Redis (cache-aside), com fallback para o banco se o Redis cair.",
      stack: ["Java 25", "Spring Boot 4", "PostgreSQL", "Liquibase", "Redis", "Testcontainers", "Docker Compose", "TypeScript"],
      arquitetura: ["Cliente", "POST /api/urls", "Cache Redis", "PostgreSQL", "Redirect 302 + clique"],
      destaques: ["Cache-aside com TTL limitado pela expiração do link", "Fallback para o banco quando o Redis está fora", "Validação de entrada: só URLs http(s) com host", "Testes de integração com Testcontainers"],
      fatos: [ { rotulo: "Redirect", valor: "HTTP 302" }, { rotulo: "Expiração", valor: "1 a 3650 dias" }, { rotulo: "Docs", valor: "Swagger UI" }, { rotulo: "Licença", valor: "MIT" } ],
      repo: "url-shortener"
    },
    {
      id: "lab-ecommerce",
      titulo: "E-commerce Microservices",
      ano: 2026,
      categoria: "Open source",
      emoji: "🛒",
      resumo: "Backend de e-commerce em seis microsserviços com Spring Cloud, Kafka e bancos separados por serviço.",
      problema: "Entender na prática como as peças de uma arquitetura de microsserviços se encaixam.",
      solucao: "Seis serviços Spring Boot independentes, cada um com seus próprios dados, registrados no Eureka e expostos por um API Gateway. Os pedidos consultam o estoque e publicam eventos no Kafka para o serviço de notificação.",
      stack: ["Java 25", "Spring Boot 4", "Spring Cloud", "Eureka", "Gateway MVC", "Kafka", "Resilience4j", "PostgreSQL", "MongoDB", "Liquibase", "Docker"],
      arquitetura: ["Cliente", "API Gateway", "Order Service", "Inventory Service", "Kafka", "Notification Service"],
      destaques: ["Service discovery com Eureka", "Resiliência com Resilience4j", "Banco por serviço: PostgreSQL e MongoDB", "Mensageria assíncrona com Kafka"],
      fatos: [ { rotulo: "Serviços", valor: "6" }, { rotulo: "Bancos", valor: "PostgreSQL + MongoDB" }, { rotulo: "Mensageria", valor: "Kafka" }, { rotulo: "Discovery", valor: "Eureka" } ],
      repo: "ecommerce-microservices"
    },
    {
      id: "lab-auth",
      titulo: "Authentication Service",
      ano: 2025,
      categoria: "Open source",
      emoji: "🔐",
      resumo: "API de autenticação e autorização full-stack, com JWT assinado por RSA e front-end em React.",
      problema: "Autenticação feita sem cuidado é uma das maiores fontes de falha de segurança.",
      solucao: "API standalone que emite JWTs próprios assinados com par de chaves RSA, com access token curto e refresh token. A autorização é stateless via OAuth2 Resource Server, com controle por papel e por dono do recurso.",
      stack: ["Java 21", "Spring Boot 3.4", "Spring Security", "OAuth2 / JWT", "PostgreSQL", "Liquibase", "Swagger", "React", "Tailwind", "Docker Compose"],
      arquitetura: ["Cadastro (bcrypt)", "Login", "Access + Refresh token", "Resource Server (RSA)", "Rotas protegidas"],
      destaques: ["JWT assinado com RSA, sem provedor externo", "Fluxo de refresh token", "Papéis USER e SUPERUSER + checagem de dono", "Front-end React no estilo neobrutalista"],
      fatos: [ { rotulo: "Tokens", valor: "Access + Refresh" }, { rotulo: "Assinatura", valor: "RSA" }, { rotulo: "Papéis", valor: "USER · SUPERUSER" }, { rotulo: "Licença", valor: "MIT" } ],
      repo: "authentication-service"
    },
    {
      id: "lab-dsa",
      titulo: "Data Structures & Algorithms",
      ano: 2026,
      categoria: "Open source",
      emoji: "🧠",
      resumo: "List, Stack e Queue reimplementadas com duas estratégias de armazenamento, além de algoritmos de ordenação.",
      problema: "Entender o custo real de cada operação, que as bibliotecas escondem.",
      solucao: "Cada estrutura foi implementada duas vezes, com array redimensionável e com lista ligada, para comparar o comportamento na prática. A complexidade Big-O de cada operação está documentada no Javadoc.",
      stack: ["Java 25", "JUnit 5", "Maven"],
      arquitetura: ["Interface (contrato)", "Array redimensionável", "Lista ligada", "Ordenação", "Testes de contrato"],
      destaques: ["112 testes JUnit 5 de contrato", "Selection, merge e quick sort", "Big-O documentado por operação"],
      fatos: [ { rotulo: "Testes", valor: "112" }, { rotulo: "Estratégias", valor: "Array · Lista ligada" }, { rotulo: "Ordenações", valor: "3" } ],
      repo: "data-structures-algorithms"
    }
  ],

  /* Linha do tempo de carreira. Ajuste a ordem e os períodos conforme a realidade. */
  trajetoria: [
    { periodo: "Graduação", titulo: "Bacharelado em Sistemas de Informação", local: "Unilasalle-RJ", tipo: "Formação",
      texto: "Base acadêmica em engenharia de software, dados e sistemas. TCC concluído e apresentado em 2026.", pontos: ["TCC apresentado em 2026"] },
    { periodo: "Empresa Júnior", titulo: "Coordenador de TI", local: "Ânimo Consultoria", tipo: "Liderança",
      texto: "Liderança técnica de equipes de desenvolvimento web.", pontos: ["Alinhamento técnico e entrega de projetos", "Direcionamento de arquitetura das aplicações", "Boas práticas e colaboração ágil"] },
    { periodo: "Atual", titulo: "Desenvolvedor Backend", local: "Prefeitura de Niterói", tipo: "Profissional",
      texto: "Soluções de software para a administração pública municipal.", pontos: ["APIs RESTful em Java", "Serviços corporativos com Spring Boot", "Comunicação otimizada entre sistemas"] },
    { periodo: "2026", titulo: "TCC e próximos passos", local: "Unilasalle-RJ", tipo: "Marco",
      texto: "Fechamento da graduação e foco em arquiteturas escaláveis de alto impacto.", pontos: ["Conclusão da graduação", "Busca por desafios de arquitetura e backend"] }
  ]
};
