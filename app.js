const root = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');
const postInput = document.getElementById('post-input');
const postBtn = document.getElementById('post-btn');
const posts = document.getElementById('posts');
const aiBtn = document.getElementById('ai-btn');
const aiOutput = document.getElementById('ai-output');

const aiIdeas = [
  '🚀 Shipping our beta today. Drop feedback and we will build in public! #BuildInPublic',
  '🎉 We hit 10K users this week — thanks for being part of this community. What should we launch next?',
  '📣 Creator tip: repurpose one long video into 5 short reels to boost reach by 3x.'
];

themeToggle.addEventListener('click', () => {
  root.classList.toggle('light');
  themeToggle.textContent = root.classList.contains('light') ? '☀️' : '🌙';
});

postBtn.addEventListener('click', () => {
  const message = postInput.value.trim();
  if (!message) return;

  const article = document.createElement('article');
  article.className = 'post glass';
  article.innerHTML = `
    <header>
      <strong>You</strong>
      <span>• now</span>
    </header>
    <p>${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
    <footer>
      <button class="react-btn">👍 Like <span>0</span></button>
      <button class="react-btn">💬 Comment <span>0</span></button>
      <button class="react-btn">↗ Share <span>0</span></button>
    </footer>
  `;

  posts.prepend(article);
  postInput.value = '';
});

aiBtn.addEventListener('click', () => {
  const text = aiIdeas[Math.floor(Math.random() * aiIdeas.length)];
  aiOutput.textContent = text;
});
