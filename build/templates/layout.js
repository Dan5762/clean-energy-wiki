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
</head>
<body>
  <a href="#main" class="skip-link">Skip to content</a>

  <header class="site-header">
    <a href="/" class="site-title">Clean Energy from First Principles</a>
    <nav class="site-nav">
      <a href="/">All Technologies</a>
      <a href="/about.html">About</a>
    </nav>
  </header>

  ${content}

  ${scripts}
</body>
</html>`;
}
