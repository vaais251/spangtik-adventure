// Register service worker for PWA functionality
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js')
      .then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch(error => {
        console.error('Service Worker registration failed:', error);
      });
  });
}

// Add to home screen functionality
let deferredPrompt;
const installButtonSelector = '#install-app-button';

// Show install button when PWA can be installed
window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  
  // Stash the event so it can be triggered later
  deferredPrompt = e;
  
  // Show the install button in the footer
  const installButton = document.querySelector(installButtonSelector);
  if (installButton) {
    installButton.classList.add('available', 'pulse');
    installButton.style.display = 'inline-flex';
  }
});

// Handle install button click
document.addEventListener('DOMContentLoaded', () => {
  const installButton = document.querySelector(installButtonSelector);
  
  if (installButton) {
    installButton.addEventListener('click', async (e) => {
      e.preventDefault();
      
      if (deferredPrompt) {
        // Show the install prompt if available
        deferredPrompt.prompt();
        
        // Wait for the user to respond to the prompt
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`User response to the install prompt: ${outcome}`);
        
        // We've used the prompt, and can't use it again
        deferredPrompt = null;
        
        // Hide the install button
        installButton.style.display = 'none';
        installButton.classList.remove('available', 'pulse');
      } else {
        // For development/testing: Show instructions modal
        showInstallInstructions();
      }
    });
  }
});

// Function to display installation instructions for development/testing
function showInstallInstructions() {
  // Create modal container
  const modal = document.createElement('div');
  modal.className = 'pwa-install-modal';
  modal.style.position = 'fixed';
  modal.style.top = '0';
  modal.style.left = '0';
  modal.style.width = '100%';
  modal.style.height = '100%';
  modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  modal.style.zIndex = '9999';
  modal.style.display = 'flex';
  modal.style.justifyContent = 'center';
  modal.style.alignItems = 'center';
  
  // Create modal content
  const modalContent = document.createElement('div');
  modalContent.style.backgroundColor = '#fff';
  modalContent.style.padding = '30px';
  modalContent.style.borderRadius = '8px';
  modalContent.style.maxWidth = '500px';
  modalContent.style.textAlign = 'center';
  
  // Modal title
  const modalTitle = document.createElement('h3');
  modalTitle.textContent = 'Install Spantik Adventure App';
  modalTitle.style.color = '#4CAF50';
  modalTitle.style.marginBottom = '20px';
  
  // Modal instructions
  const modalText = document.createElement('p');
  modalText.innerHTML = 'To install this app on your device:<br><br>' +
                        '<strong>On Android:</strong><br>' +
                        '1. Open in Chrome<br>' +
                        '2. Tap the menu (⋮)<br>' +
                        '3. Tap "Add to Home screen"<br><br>' +
                        '<strong>On iOS:</strong><br>' +
                        '1. Open in Safari<br>' +
                        '2. Tap the share icon<br>' +
                        '3. Scroll down and tap "Add to Home Screen"<br><br>' +
                        '<strong>On Desktop:</strong><br>' +
                        '1. Look for the install icon in the address bar';
  modalText.style.lineHeight = '1.5';
  modalText.style.marginBottom = '20px';
  
  // Close button
  const closeButton = document.createElement('button');
  closeButton.textContent = 'Close';
  closeButton.style.backgroundColor = '#4CAF50';
  closeButton.style.color = 'white';
  closeButton.style.border = 'none';
  closeButton.style.padding = '10px 20px';
  closeButton.style.borderRadius = '4px';
  closeButton.style.cursor = 'pointer';
  closeButton.style.fontWeight = 'bold';
  
  closeButton.addEventListener('click', () => {
    document.body.removeChild(modal);
  });
  
  // Assemble modal
  modalContent.appendChild(modalTitle);
  modalContent.appendChild(modalText);
  modalContent.appendChild(closeButton);
  modal.appendChild(modalContent);
  
  // Add to body
  document.body.appendChild(modal);
}

// Hide the install button when the app is installed
window.addEventListener('appinstalled', (evt) => {
  console.log('App was installed to the home screen');
  const installButton = document.querySelector(installButtonSelector);
  if (installButton) {
    installButton.style.display = 'none';
    installButton.classList.remove('available', 'pulse');
  }
});

// Add offline detection
window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);

function updateOnlineStatus() {
  const statusElement = document.createElement('div');
  statusElement.id = 'connection-status';
  statusElement.style.position = 'fixed';
  statusElement.style.bottom = '20px';
  statusElement.style.right = '20px';
  statusElement.style.padding = '10px 15px';
  statusElement.style.borderRadius = '5px';
  statusElement.style.zIndex = '1000';
  statusElement.style.fontWeight = 'bold';
  
  if (navigator.onLine) {
    statusElement.textContent = 'You are back online!';
    statusElement.style.backgroundColor = '#4CAF50';
    statusElement.style.color = 'white';
    setTimeout(() => {
      if (statusElement.parentNode) {
        statusElement.parentNode.removeChild(statusElement);
      }
    }, 3000);
  } else {
    statusElement.textContent = 'You are offline. Some features may be limited.';
    statusElement.style.backgroundColor = '#f44336';
    statusElement.style.color = 'white';
  }
  
  // Remove any existing status element
  const existingStatus = document.getElementById('connection-status');
  if (existingStatus) {
    existingStatus.parentNode.removeChild(existingStatus);
  }
  
  document.body.appendChild(statusElement);
}
