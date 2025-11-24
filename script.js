/**
 * Minimal JS enhancements: theme toggle + live file search
 */
document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle
    const htmlEl = document.documentElement;
    const themeToggle = document.getElementById('theme-toggle');
    const saved = localStorage.getItem('site-theme') || 'light';
    htmlEl.setAttribute('data-theme', saved);
    if (themeToggle) themeToggle.setAttribute('aria-pressed', saved === 'dark');

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const current = htmlEl.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            htmlEl.setAttribute('data-theme', current);
            localStorage.setItem('site-theme', current);
            themeToggle.setAttribute('aria-pressed', current === 'dark');
        });
    }

    // Live file search (filter items by title or file type)
    const searchInput = document.getElementById('search');
    const fileList = document.querySelectorAll('.file-list .file');
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const q = searchInput.value.trim().toLowerCase();
            fileList.forEach(li => {
                const title = (li.dataset.title || li.textContent || '').toLowerCase();
                const type = (li.dataset.type || '').toLowerCase();
                if (!q || title.includes(q) || type.includes(q)) {
                    li.style.display = '';
                } else {
                    li.style.display = 'none';
                }
            });
        });
    }
});
