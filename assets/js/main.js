// Main JavaScript for Personal Blog & Landing Page

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // 2. Dark / Light Mode Toggle
  const themeToggleBtn = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;

  // Check saved theme or system preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    htmlElement.classList.add('dark');
  } else {
    htmlElement.classList.remove('dark');
  }

  // Re-render icons if needed
  if (typeof lucide !== 'undefined') lucide.createIcons();

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      htmlElement.classList.toggle('dark');
      const isDark = htmlElement.classList.contains('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      
      // Refresh icons for new DOM state
      if (typeof lucide !== 'undefined') {
        setTimeout(() => lucide.createIcons(), 50);
      }
    });
  }

  // 3. Mobile Navigation Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Close menu when clicking any link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // 4. Dynamic Year in Footer
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 5. Copy Email to Clipboard
  const copyBtn = document.getElementById('copy-email-btn');
  const emailSpan = document.getElementById('contact-email');

  if (copyBtn && emailSpan) {
    copyBtn.addEventListener('click', async () => {
      const emailText = emailSpan.textContent.trim();
      try {
        await navigator.clipboard.writeText(emailText);
        
        // Visual feedback
        const originalHTML = copyBtn.innerHTML;
        copyBtn.innerHTML = '<span class="text-[10px] font-bold text-blue-600 dark:text-blue-400">¡Copiado!</span>';
        
        setTimeout(() => {
          copyBtn.innerHTML = originalHTML;
          if (typeof lucide !== 'undefined') lucide.createIcons();
        }, 2000);
      } catch (err) {
        console.error('Error al copiar correo:', err);
      }
    });
  }

  // 6. Blog Category Filter (for blog.html)
  const categoryButtons = document.querySelectorAll('.category-filter');
  const postItems = document.querySelectorAll('.post-item');

  if (categoryButtons.length > 0 && postItems.length > 0) {
    categoryButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const category = btn.getAttribute('data-category');

        // Update button styles to match Professional Blue theme
        categoryButtons.forEach(b => {
          b.classList.remove('bg-blue-600', 'text-white');
          b.classList.add('bg-white', 'dark:bg-slate-900', 'text-slate-600', 'dark:text-slate-300');
        });

        btn.classList.add('bg-blue-600', 'text-white');
        btn.classList.remove('bg-white', 'dark:bg-slate-900', 'text-slate-600', 'dark:text-slate-300');

        // Filter posts
        postItems.forEach(post => {
          const postCategory = post.getAttribute('data-category');
          if (category === 'all' || postCategory === category) {
            post.style.display = 'block';
          } else {
            post.style.display = 'none';
          }
        });
      });
    });
  }
});
