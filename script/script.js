document.addEventListener('DOMContentLoaded', () => {
  const button = document.createElement('button');
  button.id = 'backToTop';
  button.textContent = '↑';
  button.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #4a7c59;
    color: white;
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    font-size: 18px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.15);
    z-index: 90;
  `;

  document.body.appendChild(button);

  window.addEventListener('scroll', () => {
    button.style.display = window.scrollY > 300 ? 'block' : 'none';
  });

  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});