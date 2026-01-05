/**
 * Base HTML layout template
 */
export function layout({ title, content, scripts = '', styles = '' }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} | Clean Energy from First Principles</title>
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="/styles/main.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-33N1YW8ZDR"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-33N1YW8ZDR');
  </script>
  ${styles}
  <script>
    (function() {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.setAttribute('data-theme', 'dark');
      }
    })();
  </script>
</head>
<body>
  <a href="#main" class="skip-link">Skip to content</a>

  <header class="site-header">
    <a href="/" class="site-title">Clean Energy from First Principles</a>
    <nav class="site-nav">
      <a href="/">All Technologies</a>
      <a href="/about.html">About</a>
      <button class="theme-toggle" id="theme-toggle" aria-label="Toggle dark mode">
        <svg class="icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
        <svg class="icon-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </button>
    </nav>
  </header>

  ${content}

  ${scripts}
  <script>
    (function() {
      const toggle = document.getElementById('theme-toggle');
      if (!toggle) return;

      function isDarkMode() {
        const attr = document.documentElement.getAttribute('data-theme');
        if (attr) return attr === 'dark';
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
      }

      toggle.addEventListener('click', function() {
        if (isDarkMode()) {
          document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
        } else {
          document.documentElement.setAttribute('data-theme', 'dark');
          localStorage.setItem('theme', 'dark');
        }
      });
    })();
  </script>
</body>
</html>`;
}
