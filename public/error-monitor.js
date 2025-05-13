// This script monitors and reports JavaScript errors during loading
// Include this in your production build for better error reporting

(function() {
  // Store original console methods
  const originalConsoleError = console.error;
  const originalConsoleWarn = console.warn;
  
  // Store errors and warnings
  const errors = [];
  const warnings = [];
  
  // Override console.error to capture errors
  console.error = function() {
    errors.push(Array.from(arguments).join(' '));
    originalConsoleError.apply(console, arguments);
  };
  
  // Override console.warn to capture warnings
  console.warn = function() {
    warnings.push(Array.from(arguments).join(' '));
    originalConsoleWarn.apply(console, arguments);
  };
  
  // Listen for window errors
  window.addEventListener('error', function(event) {
    errors.push(`Error: ${event.message} at ${event.filename}:${event.lineno}:${event.colno}`);
  });
  
  // Listen for unhandled promise rejections
  window.addEventListener('unhandledrejection', function(event) {
    errors.push(`Unhandled Promise Rejection: ${event.reason}`);
  });
  
  // Report errors after everything has loaded
  window.addEventListener('load', function() {
    setTimeout(function() {
      if (errors.length > 0 || warnings.length > 0) {
        const errorLog = document.createElement('div');
        errorLog.style.position = 'fixed';
        errorLog.style.bottom = '0';
        errorLog.style.left = '0';
        errorLog.style.right = '0';
        errorLog.style.backgroundColor = 'rgba(255, 220, 220, 0.95)';
        errorLog.style.padding = '10px';
        errorLog.style.zIndex = '9999';
        errorLog.style.maxHeight = '200px';
        errorLog.style.overflowY = 'auto';
        errorLog.style.fontSize = '12px';
        errorLog.style.fontFamily = 'monospace';
        errorLog.style.boxShadow = '0 -2px 10px rgba(0, 0, 0, 0.2)';
        
        let content = '';
        
        if (errors.length > 0) {
          content += '<strong>Errors:</strong><br>';
          errors.forEach(function(error) {
            content += `${error}<br>`;
          });
        }
        
        if (warnings.length > 0) {
          content += '<strong>Warnings:</strong><br>';
          warnings.forEach(function(warning) {
            content += `${warning}<br>`;
          });
        }
        
        errorLog.innerHTML = content;
        document.body.appendChild(errorLog);
      }
    }, 2000);
  });
})();
