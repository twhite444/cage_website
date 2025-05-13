import React, { useEffect } from 'react';

const DebugComponent = () => {
  useEffect(() => {
    console.log('DebugComponent mounted');
    
    // Create a visible element directly in the DOM
    const debugEl = document.createElement('div');
    debugEl.id = 'react-debug-element';
    debugEl.style.position = 'fixed';
    debugEl.style.top = '10px';
    debugEl.style.right = '10px';
    debugEl.style.padding = '10px';
    debugEl.style.background = 'rgba(255,255,255,0.9)';
    debugEl.style.border = '1px solid #333';
    debugEl.style.zIndex = '9999';
    debugEl.style.borderRadius = '4px';
    debugEl.innerHTML = '<h3>React is rendering</h3><p>Time: ' + new Date().toISOString() + '</p>';
    
    document.body.appendChild(debugEl);
    
    return () => {
      // Clean up
      document.getElementById('react-debug-element')?.remove();
    };
  }, []);
  
  return (
    <div style={{
      position: 'fixed',
      bottom: '70px',
      right: '10px',
      background: 'rgba(200, 255, 200, 0.9)',
      padding: '15px',
      borderRadius: '4px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
      zIndex: 9998
    }}>
      <h3>Debug Component</h3>
      <p>If you see this, React components are rendering correctly.</p>
      <p>Window Location:</p>
      <pre style={{
        background: 'rgba(0,0,0,0.05)',
        padding: '8px',
        overflow: 'auto',
        maxWidth: '300px'
      }}>
        {JSON.stringify({
          pathname: window.location.pathname,
          hash: window.location.hash,
          href: window.location.href,
          baseURI: document.baseURI,
          base: import.meta.env.BASE_URL
        }, null, 2)}
      </pre>
    </div>
  );
};

export default DebugComponent;
