function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const msg = document.getElementById('success-msg');
  form.style.display = 'none';
  msg.style.display = 'block';
  window.scrollTo({ top: msg.offsetTop - 80, behavior: 'smooth' });
}
