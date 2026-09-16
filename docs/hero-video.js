(() => {
  const video=document.querySelector('#hero-video');
  const button=document.querySelector('#hero-replay');
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  let started=false;
  video.controls=false;
  button.hidden=false;
  const label=()=>{
    button.textContent=video.ended?'↻ Volver a reproducir':!video.paused?'Ⅱ Pausar vídeo':started?'▶ Continuar vídeo':'▶ Reproducir vídeo';
  };
  video.addEventListener('playing',()=>{started=true;label();});
  video.addEventListener('pause',label);
  video.addEventListener('ended',label);
  video.addEventListener('error',()=>{button.textContent='Vídeo no disponible';button.disabled=true;});
  button.addEventListener('click',()=>{
    if(!video.paused&&!video.ended){video.pause();return;}
    if(video.ended)video.currentTime=0;
    video.play().catch(label);
  });
  reduced.addEventListener('change',()=>{if(reduced.matches)video.pause();});
  label();
  if(!reduced.matches&&!navigator.connection?.saveData)video.play().catch(label);
})();
