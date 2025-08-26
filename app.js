
(function(){
  const views = Array.from(document.querySelectorAll('.view'));
  function show(view){
    views.forEach(v=>v.classList.add('hidden'));
    document.getElementById('view-'+view).classList.remove('hidden');
    const title = document.querySelector(`[data-view="${view}"]`);
    if (title) document.getElementById('viewTitle').textContent = title.textContent.replace(/^[^\w]+/,'').trim();
    document.querySelectorAll('.menu a').forEach(a=>a.classList.toggle('active', a.dataset.view===view));
    if (location.hash !== '#'+view) location.hash = '#'+view;
  }
  function fromHash(){
    const h = (location.hash||'#dashboard').replace('#','');
    const ok = document.getElementById('view-'+h);
    show(ok ? h : 'dashboard');
  }
  // Bind menu
  document.getElementById('menu').addEventListener('click', (e)=>{
    const a = e.target.closest('a[data-view]');
    if(!a) return;
    e.preventDefault();
    show(a.dataset.view);
  });
  window.addEventListener('hashchange', fromHash);
  // Backup buttons (no-op demo)
  document.getElementById('backupBtn').onclick = ()=>alert('Exportar respaldo (demo v3.1)');
  document.getElementById('restoreBtn').onclick = ()=>alert('Importar respaldo (demo v3.1)');
  // Start
  fromHash();
  // expose for debug
  window.Debug = {show};
})();
