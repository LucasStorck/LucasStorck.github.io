(() => {
  const D = window.PORTFOLIO;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const pips = n => `<span class="d3-wrap">${[1, 2, 3].map(i => `<i class="pip ${i <= n ? 'f' : ''}"></i>`).join('')}</span>`;
  const ghUrl = r => `https://github.com/${D.perfil.github}/${r}`;

  /* ============ ROTAS (cabeçalho + trilho) ============ */
  const sections = $$('.route');
  const routes = sections.map((s, i) => ({ id: s.id, title: s.dataset.title, el: s, n: i + 1 }));

  $('#routes').innerHTML = routes.map(r =>
    `<a class="route-btn" href="#/${r.id}" data-route="${r.id}"><small>0${r.n}</small>${r.title}</a>`).join('');
  $('#trackStops').innerHTML = routes.map((r, i) =>
    `<button class="track-stop" data-route="${r.id}" style="left:${(i / (routes.length - 1)) * 100}%" aria-label="${r.title}"></button>`).join('');

  function go(id, smooth = true) {
    const r = routes.find(x => x.id === id) || routes[0];
    const y = r.el.getBoundingClientRect().top + scrollY - (parseInt(getComputedStyle(document.documentElement).getPropertyValue('--topbar')) - 4);
    scrollTo({ top: r.id === 'inicio' ? 0 : y, behavior: smooth && !reduce ? 'smooth' : 'instant' });
  }
  const fromHash = () => (location.hash.match(/^#\/(\w+)/) || [])[1];
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#/"], .track-stop');
    if (!a) return;
    e.preventDefault();
    const id = a.dataset.route || a.getAttribute('href').slice(2);
    history.pushState(null, '', `#/${id}`);
    go(id);
  });
  addEventListener('popstate', () => go(fromHash()));

  /* ============ Progresso + rota ativa ============ */
  const fill = $('#trackFill'), pin = $('#trackPin'), pct = $('#trackPct'), fab = $('#toTop');
  let current = null;
  function onScroll() {
    const max = document.documentElement.scrollHeight - innerHeight;
    const p = Math.min(1, Math.max(0, scrollY / max));
    fill.style.width = p * 100 + '%';
    pin.style.left = p * 100 + '%';
    pct.textContent = Math.round(p * 100) + '%';
    fab.classList.toggle('show', scrollY > 600);

    const line = innerHeight * 0.35;
    let act = routes[0];
    routes.forEach(r => { if (r.el.getBoundingClientRect().top <= line) act = r; });
    if (p > 0.995) act = routes[routes.length - 1];
    if (act.id !== current) {
      current = act.id;
      routes.forEach(r => r.el.classList.toggle('active', r.id === current));
      $$('[data-route]').forEach(b => b.classList.toggle('active', b.dataset.route === current && b.classList.contains('route-btn')));
      const idx = routes.findIndex(r => r.id === current);
      $$('.track-stop').forEach((s, i) => s.classList.toggle('done', i <= idx));
      history.replaceState(null, '', `#/${current}`);
      document.title = `${act.title} · ${D.perfil.curto}`;
      const btn = $(`.route-btn[data-route="${current}"]`);
      const nav = $('#routes');
      if (btn && nav.scrollWidth > nav.clientWidth)
        nav.scrollTo({ left: btn.offsetLeft - nav.clientWidth / 2 + btn.offsetWidth / 2, behavior: reduce ? 'auto' : 'smooth' });
    }
  }
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', onScroll);
  fab.onclick = () => go('inicio');

  /* ============ Tour automático ============ */
  let touring = false;
  $('#tour').onclick = async function () {
    if (touring) { touring = false; this.innerHTML = '<i class="bi bi-play-fill"></i> Tour'; return; }
    touring = true; this.innerHTML = '<i class="bi bi-stop-fill"></i> Parar';
    for (const r of routes) {
      if (!touring) break;
      go(r.id);
      await new Promise(res => setTimeout(res, 2600));
    }
    touring = false; this.innerHTML = '<i class="bi bi-play-fill"></i> Tour';
  };
  addEventListener('wheel', () => { touring = false; }, { passive: true });

  /* ============ Atalhos de teclado (J / K) ============ */
  addEventListener('keydown', e => {
    if (/input|textarea/i.test(e.target.tagName) || $('.modal.show')) return;
    const i = routes.findIndex(r => r.id === current);
    if (e.key === 'j' || e.key === 'ArrowRight') go(routes[Math.min(i + 1, routes.length - 1)].id);
    if (e.key === 'k' || e.key === 'ArrowLeft') go(routes[Math.max(i - 1, 0)].id);
  });

  /* ============ Hero ============ */
  $('#bio').textContent = D.perfil.bio;
  $('#year').textContent = new Date().getFullYear();

  // typed
  const typed = $('#typed'); let pi = 0, ci = 0, del = false;
  (function tick() {
    const w = D.perfil.papeis[pi];
    if (reduce) { typed.textContent = w; return; }
    typed.textContent = w.slice(0, ci);
    let t = del ? 35 : 80;
    if (!del && ci === w.length) { del = true; t = 1400; }
    else if (del && ci === 0) { del = false; pi = (pi + 1) % D.perfil.papeis.length; t = 300; }
    ci += del ? -1 : 1;
    setTimeout(tick, t);
  })();

  // números com contador
  $('#numeros').innerHTML = D.numeros.map(n =>
    `<div class="col-6 col-md-3"><div class="stat"><b data-to="${n.valor}" data-suf="${n.sufixo}">0</b><span>${esc(n.rotulo)}</span></div></div>`).join('');
  function countUp(el) {
    const to = +el.dataset.to, suf = el.dataset.suf || '';
    if (reduce) { el.textContent = to + suf; return; }
    gsap.fromTo({ v: 0 }, { v: 0 }, { v: to, duration: 1.4, ease: 'power2.out', onUpdate() { el.textContent = Math.round(this.targets()[0].v) + suf; } });
  }

  // marquee
  const words = ['JAVA', 'SPRING BOOT', 'REST APIs', 'POSTGRESQL', 'REDIS', 'RABBITMQ', 'DOCKER', 'CI/CD', 'AZURE', 'CLAUDE CODE'];
  const row = words.map(w => `<span>★ ${w}</span>`).join('');
  $('#marquee').innerHTML = row + row + row + row;

  // terminal interativo
  const out = $('#termOut'), inp = $('#termIn');
  const say = (t, cls = '') => { out.insertAdjacentHTML('beforeend', `<div class="${cls}">${t}</div>`); out.scrollTop = out.scrollHeight; };
  const cmds = {
    help: () => 'comandos: <b>whoami</b> · <b>skills</b> · <b>projetos</b> · <b>contato</b> · <b>tour</b> · <b>clear</b>',
    whoami: () => `${D.perfil.nome}\n${D.perfil.titulo}\n${D.perfil.cidade}`,
    skills: () => Object.entries(D.habilidades).map(([k, v]) => `${k}: ${v.map(s => s.nome).join(', ')}`).join('\n'),
    projetos: () => D.projetos.map(p => `${p.emoji} ${p.titulo}`).join('\n'),
    contato: () => `e-mail: ${D.perfil.email}\ngithub: github.com/${D.perfil.github}` + (hasLinkedin ? `\nlinkedin: ${D.perfil.linkedin}` : ''),
    tour: () => { $('#tour').click(); return 'embarcando... 🚀'; },
    clear: () => { out.innerHTML = ''; return null; },
    sudo: () => 'boa tentativa 😄'
  };
  say('Bem-vindo! Digite <b>help</b> para começar.');
  inp.addEventListener('keydown', e => {
    if (e.key !== 'Enter') return;
    const c = inp.value.trim().toLowerCase(); inp.value = '';
    if (!c) return;
    say(`$ ${esc(c)}`, 'cmd');
    const f = cmds[c.split(' ')[0]];
    const r = f ? f() : `comando não encontrado: ${esc(c)}. Tente <b>help</b>.`;
    if (r) say(r);
  });
  inp.addEventListener('keydown', e => e.stopPropagation());

  /* ============ Habilidades ============ */
  $$('.dots[data-n]').forEach(d => d.innerHTML = [1, 2, 3].map(i => `<i class="pip ${i <= +d.dataset.n ? 'f' : ''}"></i>`).join(''));
  const cats = Object.keys(D.habilidades);
  let cat = cats[0];
  $('#skillTabs').innerHTML = cats.map(c => `<button class="chip" data-c="${esc(c)}">${esc(c)}</button>`).join('');
  function renderSkills() {
    $$('#skillTabs .chip').forEach(b => b.classList.toggle('on', b.dataset.c === cat));
    $('#skillList').innerHTML = D.habilidades[cat].map((s, i) =>
      `<div class="skill" data-i="${i}"><b>${esc(s.nome)}</b>${pips(s.nivel)}</div>`).join('');
    const items = $$('#skillList .skill');
    if (!reduce) gsap.from(items, { x: -30, opacity: 0, stagger: .08, duration: .4, ease: 'power2.out' });
    items.forEach(el => {
      const show = () => {
        items.forEach(x => x.classList.remove('on')); el.classList.add('on');
        const s = D.habilidades[cat][+el.dataset.i];
        const lbl = ['', 'explorando', 'já usei em projetos', 'uso no dia a dia'][s.nivel];
        $('#skillNote').innerHTML = `<span class="big">${esc(s.nome)}</span>${esc(s.nota || '')}<br><small class="mono">nível: ${lbl}</small>`;
      };
      el.addEventListener('mouseenter', show); el.addEventListener('click', show);
    });
    items[0]?.click();
  }
  $('#skillTabs').addEventListener('click', e => { const b = e.target.closest('.chip'); if (b) { cat = b.dataset.c; renderSkills(); } });
  renderSkills();

  /* ============ Projetos ============ */
  const pcats = ['Todos', ...new Set(D.projetos.map(p => p.categoria))];
  $('#projFilters').innerHTML = pcats.map((c, i) => `<button class="chip ${i ? '' : 'on'}" data-c="${esc(c)}">${esc(c)}</button>`).join('');
  $('#projList').innerHTML = D.projetos.map(p => `
    <article class="stop reveal" data-cat="${esc(p.categoria)}">
      <span class="stop-year">${esc(p.ano)}</span>
      <div class="card-nb proj" data-id="${p.id}" tabindex="0" role="button" aria-label="Abrir ${esc(p.titulo)}">
        <span class="emoji">${p.emoji}</span>
        <h3>${esc(p.titulo)}</h3>
        <p class="mb-2">${esc(p.resumo)}</p>
        <div>${p.stack.map(s => `<span class="tag">${esc(s)}</span>`).join('')}</div>
        <div class="open-hint">abrir detalhes <i class="bi bi-arrow-right"></i></div>
      </div>
    </article>`).join('');
  $('#projFilters').addEventListener('click', e => {
    const b = e.target.closest('.chip'); if (!b) return;
    $$('#projFilters .chip').forEach(x => x.classList.toggle('on', x === b));
    const items = $$('#projList .stop');
    items.forEach(it => it.classList.toggle('hide', b.dataset.c !== 'Todos' && it.dataset.cat !== b.dataset.c));
    if (!reduce) gsap.fromTo(items.filter(i => !i.classList.contains('hide')), { opacity: 0, y: 20 }, { opacity: 1, y: 0, stagger: .07, duration: .35 });
    ScrollTrigger.refresh();
  });

  const modalEl = $('#projModal'), modal = new bootstrap.Modal(modalEl);
  function openProject(id) {
    const p = D.projetos.find(x => x.id === id); if (!p) return;
    $('#mCat').textContent = `${p.emoji} ${p.categoria}${String(p.ano) !== p.categoria ? ' · ' + p.ano : ''}`;
    $('#mTitle').textContent = p.titulo;
    $('#tVisao').innerHTML = `
      <div class="row g-3">
        <div class="col-md-6"><div class="card-nb p-3 h-100"><h4 class="h6 mono">// problema</h4><p class="mb-0">${esc(p.problema)}</p></div></div>
        <div class="col-md-6"><div class="card-nb card-green p-3 h-100"><h4 class="h6 mono">// solução</h4><p class="mb-0">${esc(p.solucao)}</p></div></div>
      </div>
      <h4 class="h6 mono mt-4">// destaques</h4>
      <ul class="hi-list">${p.destaques.map(d => `<li>${esc(d)}</li>`).join('')}</ul>`;
    $('#tArq').innerHTML = `<p class="mb-0">Fluxo simplificado do projeto:</p>
      <div class="flow">${p.arquitetura.map((a, i) => `${i ? '<span class="flow-arrow">→</span>' : ''}<span class="flow-step">${esc(a)}</span>`).join('')}</div>`;
    $('#tStack').innerHTML = `<div>${p.stack.map(s => `<span class="tag fs-6 px-3 py-1">${esc(s)}</span>`).join('')}</div>`;
    $('#tFatos').innerHTML = `<div class="row g-3">${(p.fatos || []).map(f => `<div class="col-sm-6"><div class="fact"><small class="mono">${esc(f.rotulo)}</small><b>${esc(f.valor)}</b></div></div>`).join('')}</div>`;
    $('#mFoot').innerHTML = p.repo
      ? `<a class="btn-nb" target="_blank" rel="noopener" href="${ghUrl(p.repo)}"><i class="bi bi-github"></i> Ver repositório</a>`
      : `<span class="mono small">Repositório privado ou institucional.</span>`;
    bootstrap.Tab.getOrCreateInstance($('.nb-tabs .nav-link')).show();
    modal.show();
  }
  $('#projList').addEventListener('click', e => { const c = e.target.closest('.proj'); if (c) openProject(c.dataset.id); });
  $('#projList').addEventListener('keydown', e => { if (e.key === 'Enter') { const c = e.target.closest('.proj'); if (c) openProject(c.dataset.id); } });
  $$('#projModal [data-bs-target="#tArq"]').forEach(b => b.addEventListener('shown.bs.tab', () => {
    if (reduce) return;
    gsap.fromTo('#tArq .flow-step', { opacity: 0, y: 14 }, { opacity: 1, y: 0, stagger: .18, duration: .4, ease: 'back.out(2)' });
    gsap.to('#tArq .flow-arrow', { opacity: 1, stagger: .18, delay: .1 });
  }));
  // sem animação, deixar visível
  $$('#projModal [data-bs-target="#tArq"]').forEach(b => b.addEventListener('shown.bs.tab', () => {
    if (reduce) $$('#tArq .flow-step, #tArq .flow-arrow').forEach(x => x.style.opacity = 1);
  }));

  /* ============ Trajetória ============ */
  $('#trajList').innerHTML = D.trajetoria.map(t => `
    <article class="stop reveal">
      <span class="stop-year">${esc(t.periodo)}</span> <span class="sticker">${esc(t.tipo)}</span>
      <div class="card-nb tl-card mt-2">
        <h3 class="h4">${esc(t.titulo)}</h3>
        <div class="mono small mb-2">${esc(t.local)}</div>
        <p class="mb-0">${esc(t.texto)}</p>
        <ul>${t.pontos.map(p => `<li>${esc(p)}</li>`).join('')}</ul>
      </div>
    </article>`).join('');

  /* ============ Contato ============ */
  const hasLinkedin = D.perfil.linkedin && !/SEU-PERFIL/.test(D.perfil.linkedin);
  $('#contactBtns').innerHTML = `
    <a class="btn-nb btn-nb-white" href="mailto:${D.perfil.email}"><i class="bi bi-envelope"></i> E-mail</a>
    ${hasLinkedin ? `<a class="btn-nb btn-nb-white" target="_blank" rel="noopener" href="${D.perfil.linkedin}"><i class="bi bi-linkedin"></i> LinkedIn</a>` : ''}
    <a class="btn-nb btn-nb-white" target="_blank" rel="noopener" href="https://github.com/${D.perfil.github}"><i class="bi bi-github"></i> GitHub</a>`;

  /* ============ Animações de entrada ============ */
  gsap.registerPlugin(ScrollTrigger);
  if (!reduce) {
    $$('.reveal').forEach(el => gsap.to(el, { opacity: 1, y: 0, duration: .6, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } }));
    gsap.from('.display-title, .hero-bio, .hero .btn-nb', { y: 30, opacity: 0, stagger: .12, duration: .7, ease: 'power3.out' });
    gsap.from('.terminal-wrap', { x: 60, opacity: 0, duration: .9, delay: .3, ease: 'power3.out' });
    $$('.route-head').forEach(h => gsap.from(h, { x: -40, opacity: 0, duration: .6, scrollTrigger: { trigger: h, start: 'top 85%', once: true } }));
    // parallax dos adesivos flutuantes com o mouse
    addEventListener('mousemove', e => {
      const x = (e.clientX / innerWidth - .5), y = (e.clientY / innerHeight - .5);
      gsap.to('.floaty', { x: x * 26, y: y * 26, duration: .6, overwrite: 'auto' });
    });
    // cursor
    const dot = $('.cursor-dot');
    addEventListener('mousemove', e => gsap.to(dot, { left: e.clientX, top: e.clientY, duration: .12 }));
    document.addEventListener('mouseover', e => {
      const big = e.target.closest('a,button,.proj,.chip,.skill');
      gsap.to(dot, { width: big ? 34 : 18, height: big ? 34 : 18, duration: .15 });
    });
  }
  ScrollTrigger.create({ trigger: '#numeros', start: 'top 95%', once: true, onEnter: () => $$('#numeros b').forEach(countUp) });

  /* ============ Inicialização ============ */
  const initial = fromHash();
  if (initial && initial !== 'inicio') {
    const land = () => { go(initial, false); onScroll(); ScrollTrigger.refresh(); };
    Promise.all([document.fonts.ready, new Promise(r => document.readyState === 'complete' ? r() : addEventListener('load', r))])
      .then(() => requestAnimationFrame(land));
  } else onScroll();
})();
