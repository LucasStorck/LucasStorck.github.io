# Portfólio · Lucas Storck Mendes

Site estático em estilo neobrutalista (branco + verde, IBM Plex), organizado como uma **linha do tempo em rotas**:
o cabeçalho mostra as rotas e, logo abaixo, um trilho com paradas e um pin que acompanha o progresso.

**Stack:** HTML, CSS, JavaScript, Bootstrap 5.3 (modal, abas), GSAP + ScrollTrigger (animações), Bootstrap Icons.
Não precisa de build: é só publicar os arquivos.

## Editar o conteúdo
Todo o conteúdo fica em **`data.js`**: perfil, números, habilidades, projetos e trajetória.
Procure por `TODO` para encontrar o que falta preencher (usuário do GitHub, LinkedIn, stacks a confirmar e repositórios).

## Publicar no GitHub Pages
1. Crie um repositório chamado `LucasStorck.github.io`. Com esse nome, o site fica em `https://LucasStorck.github.io`.
2. Envie os arquivos:
   ```bash
   git init
   git add .
   git commit -m "Portfólio"
   git branch -M main
   git remote add origin https://github.com/LucasStorck/LucasStorck.github.io.git
   git push -u origin main
   ```
3. No GitHub, abra **Settings → Pages → Source: Deploy from a branch → main / (root)**.

## Rodar localmente
```bash
python -m http.server 5500
```
Depois, abra http://localhost:5500.

## Interações
- Rotas no topo, trilho clicável e atalhos **J/K** ou setas para avançar e voltar de rota.
- Botão **Tour**: percorre todas as rotas sozinho.
- Terminal no hero: aceita os comandos `help`, `whoami`, `skills`, `projetos`, `contato`, `tour` e `clear`.
- Projetos com filtro e modal de quatro abas: visão geral, arquitetura animada, stack e fatos.
