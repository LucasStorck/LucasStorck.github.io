/* =====================================================
   EDITE AQUI: todo o conteúdo do portfólio vive neste arquivo.
   Baseado no currículo de Lucas Storck Mendes.
   Projetos: os repositórios públicos do GitHub, mais os sistemas da Prefeitura
   (código privado, por isso repo: null e sem botão de repositório).
   icone: nome de um ícone do Bootstrap Icons (https://icons.getbootstrap.com), sem o prefixo "bi-".
   ===================================================== */
window.PORTFOLIO = {
  perfil: {
    nome: "Lucas Storck Mendes",
    curto: "Lucas Storck",
    github: "LucasStorck",
    email: "lucasstorck@icloud.com",
    linkedin: "https://www.linkedin.com/in/lucasstorck",
    cidade: "Niterói, Rio de Janeiro, Brasil",
    titulo: "Desenvolvedor Back-End | Java e Spring Boot",
    /* completam a frase "Eu construo ..." do hero */
    papeis: ["APIs RESTful em Java", "serviços com Spring Boot", "mensageria com RabbitMQ", "pipelines de CI/CD"],
    bio: "Desenvolvedor back-end em início de carreira. Na Prefeitura de Niterói, construo APIs RESTful em Java com Spring Boot, PostgreSQL e Docker. Entre as entregas estão a digitalização de uma ficha de notificação com foco em LGPD e uma automação de mensageria com RabbitMQ que organizou mais de 1000 contatos."
  },

  numeros: [
    { valor: 1000, sufixo: "+", rotulo: "contatos organizados com mensageria RabbitMQ" },
    { valor: 10, sufixo: " min", rotulo: "para preencher a ficha do Sinan Digital" },
    { valor: 2, sufixo: "", rotulo: "estágios em desenvolvimento: front e back" },
    { valor: 6, sufixo: "", rotulo: "projetos open source no GitHub" }
  ],

  /* nivel: 3 = uso no dia a dia · 2 = já usei em projetos · 1 = explorando */
  habilidades: {
    "Backend": [
      { nome: "Java", nivel: 3, nota: "Linguagem principal, na Prefeitura e nos projetos" },
      { nome: "Spring Boot", nivel: 3, nota: "Com Spring JPA e Spring Security, na Prefeitura" },
      { nome: "APIs RESTful", nivel: 3, nota: "Serviços back-end da Prefeitura de Niterói" },
      { nome: "Swagger / OpenAPI", nivel: 2, nota: "Documentação das APIs nos projetos pessoais" }
    ],
    "Dados e mensageria": [
      { nome: "PostgreSQL", nivel: 3, nota: "Banco principal na Prefeitura e nos projetos" },
      { nome: "Redis", nivel: 3, nota: "Cache, na Prefeitura e no URL Shortener" },
      { nome: "RabbitMQ", nivel: 2, nota: "Mensageria da plataforma de Comunicação Internacional" },
      { nome: "Liquibase", nivel: 3, nota: "Versionamento de schemas de banco" }
    ],
    "DevOps e ferramentas": [
      { nome: "Git", nivel: 3, nota: "Versionamento de código" },
      { nome: "Docker", nivel: 3, nota: "Conteinerização dos serviços" },
      { nome: "CI/CD", nivel: 3, nota: "Pipelines que estruturo na Prefeitura" },
      { nome: "Microsoft Azure", nivel: 2, nota: "Deploy em VM" },
      { nome: "Postman", nivel: 3, nota: "Testes manuais de API" }
    ],
    "Front-end": [
      { nome: "HTML, CSS e JavaScript", nivel: 2, nota: "Componentes e páginas, no estágio na Ânimo" },
      { nome: "Figma para código", nivel: 2, nota: "Protótipos convertidos em páginas responsivas" },
      { nome: "Mobile-first", nivel: 2, nota: "Layouts para desktop, tablet e celular" }
    ],
    "IA aplicada": [
      { nome: "Claude Code", nivel: 3, nota: "Desenvolvimento assistido por IA" },
      { nome: "Spec-Driven Development", nivel: 2, nota: "Especificação antes do código" }
    ],
    "Métodos ágeis": [
      { nome: "Scrum", nivel: 3, nota: "Dailies, planejamentos, refinamentos e retrospectivas" },
      { nome: "Kanban", nivel: 3, nota: "Fluxo de trabalho na Prefeitura" }
    ]
  },

  projetos: [
    {
      id: "pmn-sinan",
      titulo: "Sinan Digital",
      ano: 2026,
      categoria: "Prefeitura",
      icone: "clipboard2-pulse-fill",
      resumo: "Digitalização da Ficha de Notificação de Violência do SUS (SINAN) na Prefeitura de Niterói, com foco na LGPD.",
      problema: "Profissionais de saúde preenchiam a ficha de notificação de violência em papel: um processo lento, sujeito a erro e difícil de virar dado epidemiológico, com dados sensíveis protegidos pela LGPD.",
      solucao: "Aplicação full-stack com formulário em 8 etapas, PDF gerado a partir do modelo oficial, criptografia de campos sensíveis, modo offline com sincronização automática e login único com Azure AD. O preenchimento caiu para cerca de 10 minutos.",
      stack: ["Java 25", "Spring Boot 4", "Spring Security", "PostgreSQL", "Redis", "Apache PDFBox", "Azure AD", "Next.js", "Docker"],
      arquitetura: ["Formulário em 8 etapas", "API Spring Boot", "Campos criptografados", "PostgreSQL + Redis", "PDF oficial / CSV"],
      destaques: [
        "Exportação de relatórios epidemiológicos em CSV, anonimizados conforme a LGPD",
        "Fim da duplicidade de pacientes com hash HMAC-SHA256 do Cartão SUS criptografado",
        "Contador de caracteres com alerta de limite no campo de observações",
        "Projeto em equipe; o código é da Prefeitura e não é público"
      ],
      fatos: [ { rotulo: "Preenchimento", valor: "~10 min" }, { rotulo: "Domínio", valor: "Saúde pública · SUS" }, { rotulo: "Dados", valor: "Sensíveis (LGPD)" }, { rotulo: "Equipe", valor: "3 devs" } ],
      repo: null
    },
    {
      id: "pmn-mensageria",
      titulo: "Comunicação Internacional",
      ano: 2026,
      categoria: "Prefeitura",
      icone: "envelope-paper-fill",
      resumo: "Mensageria da Prefeitura de Niterói com a rede Mercocidades: contatos das cidades parceiras e envio de e-mails institucionais em massa.",
      problema: "A comunicação com as cidades parceiras da América Latina dependia de disparo manual a partir de planilhas, sem rastreio e sujeito aos limites de envio do Microsoft 365.",
      solucao: "API Spring Boot com front Next.js. O envio entra numa fila no RabbitMQ, com retentativas e dead-letter queue, e sai pela Microsoft Graph API respeitando um limite de envio. Login por senha ou Azure AD, e auditoria de todas as ações.",
      stack: ["Java 21", "Spring Boot 3.4", "RabbitMQ", "Microsoft Graph API", "Azure AD", "PostgreSQL", "Liquibase", "JWT", "Swagger", "Next.js", "Docker"],
      arquitetura: ["Front Next.js", "API Spring Boot", "Fila RabbitMQ", "Microsoft Graph", "Cidades parceiras"],
      destaques: [
        "Participei desde a estrutura inicial do projeto",
        "Fila no RabbitMQ para envio de e-mails em lote, com dead-letter queue",
        "Migração do envio para a Microsoft Graph API, com envio em massa e anexos",
        "Autenticação com JWT, refresh token e fluxo de senha temporária",
        "Projeto em equipe; o código é da Prefeitura e não é público"
      ],
      fatos: [ { rotulo: "Contatos", valor: "1000+" }, { rotulo: "Rede", valor: "Mercocidades" }, { rotulo: "Antes", valor: "Disparo manual por planilha" }, { rotulo: "Equipe", valor: "3 devs" } ],
      repo: null
    },
    {
      id: "lab-url",
      titulo: "URL Shortener",
      ano: 2026,
      categoria: "Backend",
      icone: "link-45deg",
      resumo: "Encurtador de URLs com métricas de cliques, cache em Redis e documentação Swagger.",
      problema: "Links longos são ruins de compartilhar e não dizem quantas pessoas clicaram.",
      solucao: "API que gera um código curto para qualquer URL http(s), com expiração opcional, redirect 302 e contagem de cliques. Os redirects ficam em cache no Redis (cache-aside), com fallback para o banco se o Redis cair.",
      stack: ["Java 25", "Spring Boot 4", "PostgreSQL", "Liquibase", "Redis", "Testcontainers", "Docker Compose", "TypeScript"],
      arquitetura: ["Cliente", "POST /api/urls", "Cache Redis", "PostgreSQL", "Redirect 302 + clique"],
      destaques: ["Cache-aside com TTL limitado pela expiração do link", "Fallback para o banco quando o Redis está fora", "Validação de entrada: só URLs http(s) com host", "Testes de integração com Testcontainers"],
      fatos: [ { rotulo: "Redirect", valor: "HTTP 302" }, { rotulo: "Expiração", valor: "1 a 3650 dias" }, { rotulo: "Docs", valor: "Swagger UI" } ],
      repo: "url-shortener"
    },
    {
      id: "lab-ecommerce",
      titulo: "E-commerce Microservices",
      ano: 2026,
      categoria: "Backend",
      icone: "cart3",
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
      id: "lab-summa",
      titulo: "Summa",
      ano: 2026,
      categoria: "Em andamento",
      icone: "newspaper",
      resumo: "Briefing diário de notícias que agrupa as matérias de vários veículos em um único acontecimento. Em desenvolvimento.",
      problema: "O mesmo fato aparece em dez portais diferentes, e ler todos para entender o que aconteceu toma tempo.",
      solucao: "Pipeline em etapas ligadas por estado no banco: coleta por RSS, normalização, agrupamento por acontecimento e resumo por IA. A primeira fase, de coleta e normalização, já está pronta, com URLs canônicas para deduplicar as matérias e registro de cada coleta.",
      stack: ["TypeScript", "Node.js", "SQLite", "better-sqlite3", "rss-parser", "GitHub Actions"],
      arquitetura: ["Feeds RSS", "Coleta", "Normalização", "Agrupamento", "Resumo por IA", "Briefing"],
      destaques: ["Canonicalização de URL com testes, para deduplicar matérias", "Migrações próprias com registro em _migrations", "CI com build e testes em todo pull request", "Proposta de produto e arquitetura documentada antes do código"],
      fatos: [ { rotulo: "Status", valor: "Fase 0: coleta" }, { rotulo: "Fontes iniciais", valor: "4 feeds RSS" }, { rotulo: "Banco", valor: "SQLite" }, { rotulo: "Licença", valor: "MIT" } ],
      repo: "summa"
    },
    {
      id: "lab-auth",
      titulo: "Authentication Service",
      ano: 2025,
      categoria: "Backend",
      icone: "shield-lock-fill",
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
      categoria: "Fundamentos",
      icone: "diagram-3-fill",
      resumo: "List, Stack e Queue reimplementadas com duas estratégias de armazenamento, além de algoritmos de ordenação.",
      problema: "Entender o custo real de cada operação, que as bibliotecas escondem.",
      solucao: "Cada estrutura foi implementada duas vezes, com array redimensionável e com lista ligada, para comparar o comportamento na prática. A complexidade Big-O de cada operação está documentada no Javadoc.",
      stack: ["Java 25", "JUnit 5", "Maven"],
      arquitetura: ["Interface (contrato)", "Array redimensionável", "Lista ligada", "Ordenação", "Testes de contrato"],
      destaques: ["112 testes JUnit 5 de contrato", "Selection, merge e quick sort", "Big-O documentado por operação"],
      fatos: [ { rotulo: "Testes", valor: "112" }, { rotulo: "Estratégias", valor: "Array · Lista ligada" }, { rotulo: "Ordenações", valor: "3" } ],
      repo: "data-structures-algorithms"
    },
    {
      id: "lab-oop",
      titulo: "Object-Oriented Programming",
      ano: 2026,
      categoria: "Fundamentos",
      icone: "boxes",
      resumo: "Sistema de cadastro de usuários em JavaFX para praticar herança, encapsulamento e arquitetura em camadas.",
      problema: "Praticar orientação a objetos num caso concreto, em que regras de validação e persistência precisam conviver sem se misturar.",
      solucao: "App desktop com formulário JavaFX e camadas separadas: models, DAOs, services e controllers. A validação fica nos próprios models, que lançam ModelException em dado inválido, então nunca existe um objeto inválido.",
      stack: ["Java 21", "JavaFX", "Maven"],
      arquitetura: ["View (FXML)", "Controller", "Service (interfaces DAO)", "DAO genérico", "Arquivo serializado"],
      destaques: ["Herança: User com subclasses Student e Professor", "Validação nos setters, com exceção própria", "DAO genérico Dao<T> com persistência em arquivo", "Projeto de estudo, sem uso em produção"],
      fatos: [ { rotulo: "Interface", valor: "JavaFX" }, { rotulo: "Camadas", valor: "4" }, { rotulo: "Persistência", valor: "Serialização Java" } ],
      repo: "object-oriented-programming"
    }
  ],

  /* Linha do tempo de carreira, da mais recente para a mais antiga. */
  trajetoria: [
    { periodo: "Jun/2025 – hoje", titulo: "Desenvolvedor Back-End", local: "Prefeitura Municipal de Niterói · Niterói, RJ", tipo: "Estágio",
      texto: "APIs RESTful em Java com Spring Boot, Spring JPA e Spring Security, PostgreSQL e Redis, em times ágeis com Scrum e Kanban.",
      pontos: ["Sinan Digital: back-end da plataforma que digitalizou a Ficha de Notificação de Violência, com foco na LGPD. O preenchimento caiu para cerca de 10 minutos", "Comunicação Internacional: mensageria entre cidades com RabbitMQ, que substituiu o disparo manual por planilhas e organizou mais de 1000 contatos", "Pipelines de CI/CD, Docker, Git e Liquibase, com deploy em VM na Microsoft Azure"] },
    { periodo: "Jan/2024 – Jun/2025", titulo: "Desenvolvedor Front-End", local: "Ânimo Consultoria · Niterói, RJ", tipo: "Estágio",
      texto: "Criação e manutenção de componentes, formulários e páginas web em HTML, CSS e JavaScript.",
      pontos: ["Protótipos do Figma convertidos em código funcional e responsivo, junto com a equipe de Design", "Layouts mobile-first para desktop, tablet e celular", "Equipe ágil com Scrum: dailies, planejamentos, refinamentos e retrospectivas"] },
    { periodo: "Jun/2022 – hoje", titulo: "Bacharelado em Sistemas de Informação", local: "Universidade La Salle", tipo: "Formação",
      texto: "Graduação em andamento.", pontos: ["Conclusão prevista para 2027.1"] }
  ]
};
