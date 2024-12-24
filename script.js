const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");

function openMenu(){
    sideMenu.style.transform = 'translateX(-16rem)';
}

function closeMenu(){
    sideMenu.style.transform = 'translateX(16rem)';
}

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) { // Corrected scrolly to window.scrollY
    navBar.classList.add(
      'bg-white', 
      'bg-opacity-50', 
      'backdrop-blur-lg', 
      'shadow-sm',
      'dark:bg-darkTheme',
      'dark:shadow-white/20'
    );
    navLinks.classList.remove('bg-white','shadow-sm',
      'bg-opacity-50', 'dark:border','dark:border-white/50','dark:bg-transparent');
  } else {
    navBar.classList.remove(
      'bg-white', 
      'bg-opacity-50', 
      'backdrop-blur-lg', 
      'shadow-sm',
      'dark:bg-darkTheme',
      'dark:shadow-white/20'
    );
    navLinks.classList.add('bg-white','shadow-sm',
      'bg-opacity-50', 'dark:border','dark:border-white/50','dark:bg-transparent');
  }
});



const button = document.getElementById('showMoreBtn');

// Add a mousemove event listener
document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const bounds = button.getBoundingClientRect();
  const buttonX = bounds.left + bounds.width / 2;
  const buttonY = bounds.top + bounds.height / 2;

  const distance = Math.sqrt(
    (mouseX - buttonX) ** 2 + (mouseY - buttonY) ** 2
  );

  // Check if the cursor is close enough to "hide" the button
  if (distance < 50) { // Threshold distance
    const offsetX = mouseX > buttonX ? 10 : -10;
    const offsetY = mouseY > buttonY ? 10 : -10;

    button.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  } else {
    // Reset position when the cursor moves away
    button.style.transform = `translate(0, 0)`;
  }
});

