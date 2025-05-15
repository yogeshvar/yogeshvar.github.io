// Theme and Typography Controls
function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', newTheme);
  
  // Update theme icon
  const themeIcon = document.querySelector('.theme-icon');
  themeIcon.textContent = newTheme === 'light' ? '☀️' : '🌙';
  
  // Store preference
  localStorage.setItem('theme', newTheme);
}

function adjustFontSize(direction) {
  const sizes = ['small', 'medium', 'large', 'xlarge'];
  const html = document.documentElement;
  const currentSize = html.getAttribute('data-size');
  let currentIndex = sizes.indexOf(currentSize);
  
  if (direction === 'up' && currentIndex < sizes.length - 1) {
    currentIndex++;
  } else if (direction === 'down' && currentIndex > 0) {
    currentIndex--;
  }
  
  html.setAttribute('data-size', sizes[currentIndex]);
  localStorage.setItem('fontSize', sizes[currentIndex]);
}

function adjustSpacing() {
  const spacings = ['tight', 'normal', 'loose'];
  const html = document.documentElement;
  const currentSpacing = html.getAttribute('data-spacing');
  let currentIndex = spacings.indexOf(currentSpacing);
  
  currentIndex = (currentIndex + 1) % spacings.length;
  html.setAttribute('data-spacing', spacings[currentIndex]);
  localStorage.setItem('lineSpacing', spacings[currentIndex]);
}

// Scroll Progress Tracking
function updateReadingProgress() {
  const content = document.querySelector('.content');
  const contentBox = content.getBoundingClientRect();
  const contentHeight = contentBox.height;
  const scrolled = window.scrollY;
  const windowHeight = window.innerHeight;
  const totalHeight = contentHeight - windowHeight;
  
  const progress = Math.min((scrolled / totalHeight) * 100, 100);
  const progressBar = document.querySelector('.progress-indicator');
  const progressText = document.querySelector('.progress-percentage');
  
  progressBar.style.width = `${progress}%`;
  progressText.textContent = `${Math.round(progress)}%`;
}

// Load saved preferences and initialize
document.addEventListener('DOMContentLoaded', () => {
  const html = document.documentElement;
  
  // Load theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    html.setAttribute('data-theme', savedTheme);
    const themeIcon = document.querySelector('.theme-icon');
    themeIcon.textContent = savedTheme === 'light' ? '☀️' : '🌙';
  }
  
  // Load font size preference
  const savedFontSize = localStorage.getItem('fontSize');
  if (savedFontSize) {
    html.setAttribute('data-size', savedFontSize);
  }
  
  // Load line spacing preference
  const savedLineSpacing = localStorage.getItem('lineSpacing');
  if (savedLineSpacing) {
    html.setAttribute('data-spacing', savedLineSpacing);
  }

  // Initialize scroll progress
  updateReadingProgress();
});

// Update reading progress on scroll
window.addEventListener('scroll', () => {
  updateReadingProgress();
});

// Newsletter form handling
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.newsletter form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = form.querySelector('input[type="email"]').value;
      // Here you would typically send this to your backend
      console.log('Newsletter signup:', email);
      alert('Thanks for signing up! We\'ll be in touch soon.');
      form.reset();
    });
  }
});

// Add styles for search overlay
const style = document.createElement('style');
style.textContent = `
  .search-overlay {
    position: fixed;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    background: var(--bg);
    padding: 0.5rem 1rem;
    border: 1px solid var(--border);
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    z-index: 1000;
    font-family: monospace;
    font-size: 1rem;
  }
  .search-container {
    display: flex;
    gap: 0.25rem;
  }
  .search-prefix {
    color: var(--muted);
  }
  .search-input {
    color: var(--text);
    min-width: 1ch;
  }
`;
document.head.appendChild(style);

// Update event listeners
document.addEventListener('keydown', handleVimControlKeys);
document.addEventListener('keypress', handleVimNavigation);
document.addEventListener('scroll', updateReadingProgress);
window.addEventListener('resize', updateReadingProgress);

// Markdown handling
async function loadAllPosts() {
  try {
    const response = await fetch('posts.json');
    const data = await response.json();
    return data.posts;
  } catch (error) {
    console.error('Error loading posts:', error);
    return [];
  }
}

function renderPost(post) {
  const postElement = document.createElement('article');
  postElement.className = 'blog-post';
  postElement.innerHTML = marked.parse(post.content);
  return postElement;
}

function getPostCategory(filename) {
  const match = filename.match(/^(\w+)-/);
  return match ? match[1] : 'uncategorized';
}

function renderPostCard(post) {
  return `
    <div class="post-card" data-category="${post.category}">
      <h2>${post.title}</h2>
      <div class="post-meta">
        <span class="post-date">${post.date}</span>
        <span class="post-category">${post.category}</span>
      </div>
      <p>${post.excerpt}</p>
      <a href="${post.url}" class="read-more">Read More</a>
    </div>
  `;
}

async function loadPost(filepath) {
  try {
    const response = await fetch(filepath);
    const content = await response.text();
    return content;
  } catch (error) {
    console.error('Error loading post:', error);
    return null;
  }
}

function filterPosts(category) {
  // Update active tab
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    // Remove active class from all tabs
    tab.classList.remove('active');
    
    // Check which tab should be active
    if (category === 'all' && tab.textContent.includes('All Posts')) {
      tab.classList.add('active');
    } else if (category === 'ai' && tab.textContent.includes('ScholarSynth')) {
      tab.classList.add('active');
    } else if (category === 'blogs' && tab.textContent.includes('Notes')) {
      tab.classList.add('active');
    }
  });

  // Render filtered posts (starting from page 1)
  renderPosts(category, 1);
}

async function initializeBlog() {
  try {
    const response = await fetch('posts.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    
    // Store posts data globally for filtering
    window.allPosts = data.posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // Create pagination container if it doesn't exist
    let paginationContainer = document.querySelector('.pagination');
    if (!paginationContainer) {
      paginationContainer = document.createElement('div');
      paginationContainer.className = 'pagination';
      const postsContainer = document.getElementById('posts-container');
      postsContainer.parentNode.insertBefore(paginationContainer, postsContainer.nextSibling);
    }
    
    // Initial render with all posts
    renderPosts('all');

  } catch (error) {
    console.error('Error initializing blog:', error);
    console.error(error.stack);
  }
}

function renderPosts(category, page = 1) {
  const postsContainer = document.getElementById('posts-container');
  const paginationContainer = document.querySelector('.pagination');
  
  // Filter posts based on category
  const filteredPosts = window.allPosts.filter(post => {
    if (category === 'all') return true;
    if (category === 'ai') return post.filepath.includes('/ai/');
    if (category === 'blogs') return !post.filepath.includes('/ai/');
    return false;
  });

  // Show no posts message if no posts match
  if (filteredPosts.length === 0) {
    postsContainer.innerHTML = `
      <div class="no-posts">
        <p>No posts available in this category.</p>
      </div>
    `;
    paginationContainer.style.display = 'none';
    return;
  }

  // Calculate pagination
  const postsPerPage = 8;
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Clear container
  postsContainer.innerHTML = '';

  // Calculate start and end indices
  const start = (page - 1) * postsPerPage;
  const end = Math.min(start + postsPerPage, filteredPosts.length);
  
  // Render posts
  for (let i = start; i < end; i++) {
    const post = filteredPosts[i];
    const date = new Date(post.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const postCard = document.createElement('div');
    postCard.className = 'blog-card';
    postCard.classList.add(post.filepath.includes('/ai/') ? 'ai' : 'personal');
    
    postCard.innerHTML = `
      <div class="card-date">${date}</div>
      <h3 class="card-title">${post.title}</h3>
      <p class="card-excerpt">${post.excerpt}</p>
      <div class="card-meta">
        <span class="card-category">${post.filepath.includes('/ai/') ? 'ScholarSynth 🤖' : 'Personal ✍️'}</span>
        <span class="card-bullet">•</span>
        <span class="reading-time">${post.readingTime} min read</span>
      </div>
    `;

    postCard.addEventListener('click', () => showPost(post, date));
    postsContainer.appendChild(postCard);
  }

  // Always update pagination UI
  paginationContainer.style.display = totalPages > 1 ? 'flex' : 'none';
  if (totalPages > 1) {
    paginationContainer.innerHTML = `
      <button class="pagination-btn" ${page === 1 ? 'disabled' : ''} onclick="handlePageChange(${page - 1}, '${category}')">Previous</button>
      <span class="page-info">${page} of ${totalPages}</span>
      <button class="pagination-btn" ${page === totalPages ? 'disabled' : ''} onclick="handlePageChange(${page + 1}, '${category}')">Next</button>
    `;
  }
}

// Global page change handler
window.handlePageChange = function(newPage, category) {
  renderPosts(category, newPage);
  // document.getElementById('posts-container').scrollIntoView({ behavior: 'smooth' });
};

function showPost(post, date) {
  const postsContainer = document.getElementById('posts-container');
  const mainContent = document.querySelector('.home-intro');
  const sectionHeader = document.querySelector('.section-header');
  const tabs = document.querySelector('.tabs');
  const pagination = document.querySelector('.pagination');
  
  // Hide grid view elements
  postsContainer.style.display = 'none';
  if (sectionHeader) sectionHeader.style.display = 'none';
  if (tabs) tabs.style.display = 'none';
  if (pagination) pagination.style.display = 'none';
  if (mainContent) mainContent.style.display = 'none';
  
  // Create or get post content container
  let postContent = document.getElementById('post-content');
  if (!postContent) {
    postContent = document.createElement('div');
    postContent.id = 'post-content';
    postContent.className = 'post-content';
    postsContainer.parentNode.insertBefore(postContent, postsContainer);
  }
  
  // Show post content
  postContent.innerHTML = `
    <article class="blog-post">
      <div class="post-header">
        <a href="#" class="back-link" onclick="return showBlogList()">← Back to posts</a>
        <h1 class="post-title">${post.title}</h1>
        <div class="post-meta">
          <span class="post-date">${date}</span>
          <span class="card-bullet">•</span>
          <span class="reading-time">${post.readingTime} min read</span>
          <span class="card-bullet">•</span>
          <span class="post-category">${post.filepath.includes('/ai/') ? 'ScholarSynth 🤖' : 'Personal ✍️'}</span>
        </div>
      </div>
      <div class="post-body">
        ${marked.parse(post.content)}
      </div>
    </article>
  `;
  postContent.style.display = 'block';
  
  // Update URL
  history.pushState({}, '', `#${encodeURIComponent(post.filepath)}`);
}

function showBlogList() {
  const postsContainer = document.getElementById('posts-container');
  const postContent = document.getElementById('post-content');
  const mainContent = document.querySelector('.home-intro');
  const sectionHeader = document.querySelector('.section-header');
  const tabs = document.querySelector('.tabs');
  const pagination = document.querySelector('.pagination');
  
  // Show grid view elements
  if (postsContainer) postsContainer.style.display = 'grid';
  if (postContent) postContent.style.display = 'none';
  if (mainContent) mainContent.style.display = 'block';
  if (sectionHeader) sectionHeader.style.display = 'flex';
  if (tabs) tabs.style.display = 'flex';
  if (pagination && window.allPosts.length > 8) pagination.style.display = 'flex';
  
  // Update URL
  history.pushState({}, '', window.location.pathname);
  
  return false;
}

// Handle browser back/forward
window.addEventListener('popstate', () => {
  if (!window.location.hash) {
    showBlogList();
  }
});

// Initialize blog when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Load preferences
  const html = document.documentElement;
  
  // Load theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    html.setAttribute('data-theme', savedTheme);
    const themeIcon = document.querySelector('.theme-icon');
    themeIcon.textContent = savedTheme === 'light' ? '☀️' : '🌙';
  }
  
  // Load font size preference
  const savedFontSize = localStorage.getItem('fontSize');
  if (savedFontSize) {
    html.setAttribute('data-size', savedFontSize);
  }
  
  // Load line spacing preference
  const savedLineSpacing = localStorage.getItem('lineSpacing');
  if (savedLineSpacing) {
    html.setAttribute('data-spacing', savedLineSpacing);
  }

  // Initialize blog
  initializeBlog();

  // Add dialog close on escape and click outside
  const dialog = document.getElementById('newsletter-dialog');
  if (dialog) {
    dialog.addEventListener('click', (e) => {
      const dialogDimensions = dialog.getBoundingClientRect();
      if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
      ) {
        dialog.close();
      }
    });
  }
});

function initializeBlogView(view) {
  const postsContainer = document.getElementById('posts-container');
  const viewControls = document.querySelectorAll('.view-control');
  
  if (!postsContainer) return;
  
  // Update control buttons
  viewControls.forEach(control => {
    const isActive = control.getAttribute('aria-label').toLowerCase().includes(view);
    control.classList.toggle('active', isActive);
  });

  // Set container class based on view
  if (view === 'list') {
    postsContainer.className = 'posts-list';
    renderListView(postsContainer);
  } else {
    postsContainer.className = 'blog-grid';
    postsContainer.setAttribute('data-view', 'grid');
    renderGridView(postsContainer);
  }
}

function toggleView(view) {
  // Store preference first
  localStorage.setItem('blogView', view);
  // Initialize view
  initializeBlogView(view);
}

// Newsletter form handling
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.newsletter form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = form.querySelector('input[type="email"]').value;
      // Here you would typically send this to your backend
      console.log('Newsletter signup:', email);
      alert('Thanks for signing up! We\'ll be in touch soon.');
      form.reset();
    });
  }
});

// Global variables for search functionality
let searchPalette = null;
let allPosts = [];

// Fuzzy Search
function fuzzyMatch(pattern, str) {
  pattern = pattern.toLowerCase();
  str = str.toLowerCase();
  
  let patternIdx = 0;
  let strIdx = 0;
  const matches = [];

  while (patternIdx < pattern.length && strIdx < str.length) {
    if (pattern[patternIdx] === str[strIdx]) {
      matches.push(strIdx);
      patternIdx++;
    }
    strIdx++;
  }

  return patternIdx === pattern.length ? matches : null;
}

function highlightMatches(text, matches) {
  if (!matches) return text;
  
  let result = '';
  let lastIdx = 0;
  
  matches.forEach(idx => {
    result += text.slice(lastIdx, idx);
    result += `<span class="highlight">${text[idx]}</span>`;
    lastIdx = idx + 1;
  });
  
  result += text.slice(lastIdx);
  return result;
}

async function showFuzzyFinder() {
  if (searchPalette) return;
  
  // Create search palette
  searchPalette = document.createElement('div');
  searchPalette.className = 'search-palette';
  
  // Fix for Safari: ensure backdrop-filter works
  searchPalette.style.webkitBackdropFilter = 'blur(4px)';
  searchPalette.style.backdropFilter = 'blur(4px)';
  
  searchPalette.innerHTML = `
    <div class="search-palette-content">
      <div class="search-input-wrapper">
        <span class="search-icon">ff</span>
        <input type="text" class="search-input" placeholder="Search posts..." autofocus>
      </div>
      <div class="search-results"></div>
    </div>
  `;
  
  document.body.appendChild(searchPalette);
  const input = searchPalette.querySelector('.search-input');
  const results = searchPalette.querySelector('.search-results');
  
  // Load posts if not already loaded
  if (allPosts.length === 0) {
    allPosts = await loadAllPosts();
  }
  
  // Handle input
  input.addEventListener('input', () => {
    const query = input.value.trim();
    if (!query) {
      results.innerHTML = `
        <div class="no-results">
          Start typing to search posts...
        </div>
      `;
      return;
    }
    
    // Search through posts
    const matches = allPosts
      .map(post => {
        const titleMatch = fuzzyMatch(query, post.title);
        if (titleMatch) {
          return {
            post,
            matches: titleMatch,
            score: titleMatch.length,
            matchType: 'title'
          };
        }
        
        // Search in content if no title match
        const contentMatch = fuzzyMatch(query, post.content.replace(/<[^>]*>/g, ''));
        if (contentMatch) {
          return {
            post,
            matches: contentMatch,
            score: contentMatch.length * 0.5, // Lower score for content matches
            matchType: 'content'
          };
        }
        
        return null;
      })
      .filter(Boolean)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5); // Show top 5 results
    
    if (matches.length === 0) {
      results.innerHTML = `
        <div class="no-results">
          No matching posts found
        </div>
      `;
      return;
    }
    
    results.innerHTML = matches
      .map(({ post, matches, matchType }) => `
        <a href="#${encodeURIComponent(post.filepath)}" 
           class="search-result" 
           onclick="loadPost('${encodeURIComponent(post.filepath)}'); closeFuzzyFinder();">
          <div class="result-title">
            ${matchType === 'title' 
              ? highlightMatches(post.title, matches)
              : post.title}
          </div>
          <div class="result-meta">
            ${post.date} • ${post.readingTime} min read
          </div>
        </a>
      `)
      .join('');
  });
  
  // Handle keyboard navigation
  input.addEventListener('keydown', (e) => {
    const results = searchPalette.querySelectorAll('.search-result');
    const current = searchPalette.querySelector('.search-result.selected');
    let next;
    
    switch (e.key) {
      case 'ArrowDown':
      case 'j':
        e.preventDefault();
        if (!current) {
          next = results[0];
        } else {
          const index = Array.from(results).indexOf(current);
          next = results[index + 1] || results[0];
        }
        break;
        
      case 'ArrowUp':
      case 'k':
        e.preventDefault();
        if (!current) {
          next = results[results.length - 1];
        } else {
          const index = Array.from(results).indexOf(current);
          next = results[index - 1] || results[results.length - 1];
        }
        break;
        
      case 'Enter':
        if (current) {
          e.preventDefault();
          current.click();
        }
        break;
        
      case 'Escape':
        e.preventDefault();
        closeFuzzyFinder();
        break;
    }
    
    if (next) {
      current?.classList.remove('selected');
      next.classList.add('selected');
      next.scrollIntoView({ block: 'nearest' });
    }
  });
  
  // Focus input
  input.focus();
  
  // Close on click outside
  searchPalette.addEventListener('click', (e) => {
    if (e.target === searchPalette) {
      closeFuzzyFinder();
    }
  });
}

function closeFuzzyFinder() {
  if (searchPalette) {
    searchPalette.remove();
    searchPalette = null;
  }
}

// Project Dialog Functions
function showProjectDialog(dialogId) {
  const dialog = document.getElementById(dialogId);
  dialog.showModal();
  
  // Add escape key listener
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeProjectDialog(dialogId);
    }
  });
  
  // Add click outside listener
  dialog.addEventListener('click', function(e) {
    const dialogDimensions = dialog.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      closeProjectDialog(dialogId);
    }
  });
}

function closeProjectDialog(dialogId) {
  const dialog = document.getElementById(dialogId);
  dialog.close();
}

// Vim-style navigation
let vimBuffer = '';
let vimNumberBuffer = '';
const VIM_TIMEOUT = 1000; // Reset buffer after 1 second
const SCROLL_AMOUNT = 50; // Pixels to scroll for j/k
let searchMode = false;
let searchInput = '';

function clearVimBuffers() {
  vimBuffer = '';
  vimNumberBuffer = '';
}

function getScrollMultiplier() {
  return vimNumberBuffer ? parseInt(vimNumberBuffer) : 1;
}

function handleSearch(e) {
  if (!searchMode) return;
  
  if (e.key === 'Enter') {
    e.preventDefault();
    const searchText = searchInput.toLowerCase();
    const content = document.querySelector('.content').textContent.toLowerCase();
    const searchIndex = content.indexOf(searchText);
    
    if (searchIndex !== -1) {
      // Create a range to find the position
      const range = document.createRange();
      const textNodes = [];
      const walker = document.createTreeWalker(
        document.querySelector('.content'),
        NodeFilter.SHOW_TEXT,
        null,
        false
      );
      
      let node;
      while (node = walker.nextNode()) {
        textNodes.push(node);
      }
      
      let charCount = 0;
      let targetNode = null;
      let offset = 0;
      
      for (let node of textNodes) {
        if (charCount + node.length > searchIndex) {
          targetNode = node;
          offset = searchIndex - charCount;
          break;
        }
        charCount += node.length;
      }
      
      if (targetNode) {
        range.setStart(targetNode, offset);
        range.setEnd(targetNode, offset + searchText.length);
        
        // Scroll the range into view
        range.getBoundingClientRect().top;
        window.scrollTo({
          top: window.scrollY + range.getBoundingClientRect().top - 100,
          behavior: 'smooth'
        });
        
        // Highlight the text temporarily
        const highlight = document.createElement('span');
        highlight.style.backgroundColor = 'var(--text)';
        highlight.style.color = 'var(--bg)';
        range.surroundContents(highlight);
        
        setTimeout(() => {
          // Remove highlight after 2 seconds
          const parent = highlight.parentNode;
          while (highlight.firstChild) {
            parent.insertBefore(highlight.firstChild, highlight);
          }
          parent.removeChild(highlight);
        }, 2000);
      }
    }
    
    // Exit search mode
    searchMode = false;
    searchInput = '';
    document.querySelector('.search-overlay')?.remove();
  } else if (e.key === 'Escape') {
    searchMode = false;
    searchInput = '';
    document.querySelector('.search-overlay')?.remove();
  } else if (e.key.length === 1) {
    searchInput += e.key;
    document.querySelector('.search-input').textContent = searchInput;
  } else if (e.key === 'Backspace') {
    searchInput = searchInput.slice(0, -1);
    document.querySelector('.search-input').textContent = searchInput;
  }
}

function createSearchOverlay() {
  const overlay = document.createElement('div');
  overlay.className = 'search-overlay';
  overlay.innerHTML = `
    <div class="search-container">
      <span class="search-prefix">/</span>
      <span class="search-input"></span>
    </div>
  `;
  document.body.appendChild(overlay);
}

function handleVimNavigation(e) {
  // Handle search mode separately
  if (searchMode) {
    handleSearch(e);
    return;
  }

  // Only handle when not in input fields
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
    return;
  }

  // Handle numbers
  if (!isNaN(e.key) && e.key !== ' ') {
    vimNumberBuffer += e.key;
    return;
  }

  // Handle search activation
  if (e.key === '/' && !searchMode) {
    e.preventDefault();
    searchMode = true;
    createSearchOverlay();
    return;
  }

  vimBuffer += e.key;
  
  setTimeout(clearVimBuffers, VIM_TIMEOUT);

  const multiplier = getScrollMultiplier();

  // Handle navigation commands
  switch (vimBuffer) {
    case 'gg':
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      clearVimBuffers();
      break;
    
    case 'GG':
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      });
      clearVimBuffers();
      break;
    
    case 'j':
      window.scrollBy({
        top: SCROLL_AMOUNT * multiplier,
        behavior: 'smooth'
      });
      clearVimBuffers();
      break;
    
    case 'k':
      window.scrollBy({
        top: -SCROLL_AMOUNT * multiplier,
        behavior: 'smooth'
      });
      clearVimBuffers();
      break;

    case 'ff':
      showFuzzyFinder();
      clearVimBuffers();
      break;
  }
}

function handleVimControlKeys(e) {
  // Only handle when not in input fields
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
    return;
  }

  const multiplier = getScrollMultiplier();
  
  if (e.ctrlKey) {
    switch (e.key) {
      case 'd':
        e.preventDefault();
        window.scrollBy({
          top: window.innerHeight * 0.5 * multiplier,
          behavior: 'smooth'
        });
        clearVimBuffers();
        break;
      
      case 'u':
        e.preventDefault();
        window.scrollBy({
          top: -window.innerHeight * 0.5 * multiplier,
          behavior: 'smooth'
        });
        clearVimBuffers();
        break;
    }
  }
}

async function renderListView(container) {
  try {
    const response = await fetch('posts.json');
    const data = await response.json();
    
    // Sort posts by date in descending order
    const sortedPosts = data.posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    sortedPosts.forEach(post => {
      const date = new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      
      const listItem = document.createElement('div');
      listItem.className = 'post-list-item';
      listItem.innerHTML = `
        <div class="post-date">${date}</div>
        <div class="post-title">${post.title}</div>
        <div class="post-category">${post.filepath.includes('/ai/') ? 'ScholarSynth 🤖' : 'Notes ✍️'}</div>
      `;
      
      // Add click handler
      listItem.addEventListener('click', () => showPost(post, date));
      
      container.appendChild(listItem);
    });
  } catch (error) {
    console.error('Error rendering list view:', error);
  }
}

async function renderGridView(container) {
  try {
    const response = await fetch('posts.json');
    const data = await response.json();
    
    // Sort posts by date in descending order
    const sortedPosts = data.posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    sortedPosts.forEach(post => {
      const date = new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      
      const postCard = document.createElement('div');
      postCard.className = 'blog-card';
      postCard.classList.add(post.filepath.includes('/ai/') ? 'ai' : 'personal');
      
      postCard.innerHTML = `
        <div class="card-date">${date}</div>
        <h3 class="card-title">${post.title}</h3>
        <p class="card-excerpt">${post.excerpt}</p>
        <div class="card-meta">
          <span class="card-category">${post.filepath.includes('/ai/') ? 'ScholarSynth 🤖' : 'Personal ✍️'}</span>
          <span class="card-bullet">•</span>
          <span class="reading-time">${post.readingTime} min read</span>
        </div>
      `;
      
      // Add click handler
      postCard.addEventListener('click', () => showPost(post, date));
      
      container.appendChild(postCard);
    });
  } catch (error) {
    console.error('Error rendering grid view:', error);
  }
}

// Newsletter Dialog Functions
function showNewsletterDialog() {
  const dialog = document.getElementById('newsletter-dialog');
  dialog.showModal();
}

function closeNewsletterDialog() {
  const dialog = document.getElementById('newsletter-dialog');
  dialog.close();
}

// Add close function for the first visit dialog
function closeFirstVisitDialog() {
  const dialog = document.querySelector('.first-visit-dialog');
  if (dialog) {
    dialog.close();
    dialog.remove();
  }
}

// Add click outside to close
document.addEventListener('click', (e) => {
  const dialog = document.querySelector('.first-visit-dialog');
  if (dialog && e.target === dialog) {
    closeFirstVisitDialog();
  }
}); 