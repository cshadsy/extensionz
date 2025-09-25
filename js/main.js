document.getElementById('q').addEventListener('input', e=>{
  const q = e.target.value.toLowerCase();
  document.querySelectorAll('.card').forEach(card=>{
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(q) ? '' : 'none';
  });
});

document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', e => {
        if (btn.classList.contains('ghost')) {
            const name = btn.dataset.name;
            alert('show details for: ' + name);
        } else {
            const link = btn.dataset.link || btn.closest('.card')?.dataset.link;
            if (link) {
                navigator.clipboard.writeText(link)
                    .then(() => {
                        btn.innerText = 'copied!';
                        setTimeout(() => btn.innerText = 'copy link', 1200);
                    })
                    .catch(() => {
                        alert('failed to copy link');
                    });
            }
        }
    });
});


document.querySelectorAll('.chip').forEach(chip=>{
  chip.addEventListener('click', e=>{
    const tag = chip.innerText.toLowerCase();
    document.querySelectorAll('.card').forEach(card=>{
      if(tag === 'all') card.style.display='';
      else card.style.display = card.innerText.toLowerCase().includes(tag) ? '' : 'none';
    });
  });
});
