// Check if we're on the index page
if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
    // Check if they've seen the manifesto
    const hasSeenManifesto = localStorage.getItem('hasSeenManifesto');
    
    // If they haven't seen it and we're not already on the manifesto page
    if (!hasSeenManifesto && !window.location.pathname.includes('manifesto.html')) {
        // Redirect to manifesto
        window.location.href = '/manifesto.html';
    }
} 