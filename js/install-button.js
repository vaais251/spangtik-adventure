// Simple script to make the Install Button work
document.addEventListener('DOMContentLoaded', function() {
    const installButton = document.getElementById('install-app-button');
    
    // Variable to track if the browser has an install prompt available
    let installPrompt = null;
    
    // Listen for the beforeinstallprompt event
    window.addEventListener('beforeinstallprompt', function(e) {
        // Prevent Chrome 76+ from automatically showing the prompt
        e.preventDefault();
        
        // Save the event so it can be triggered later
        installPrompt = e;
        
        // If the button is showing, make it pulse to indicate it's ready
        if (installButton) {
            installButton.classList.add('pulse');
        }
    });
    
    if (installButton) {
        installButton.addEventListener('click', function(e) {
            // Prevent default anchor behavior (scrolling to top)
            e.preventDefault();
            
            // If we have an install prompt saved, use it to trigger installation
            if (installPrompt) {
                // Show the native browser install prompt
                installPrompt.prompt();
                
                // Wait for the user to respond to the prompt
                installPrompt.userChoice.then(function(choiceResult) {
                    if (choiceResult.outcome === 'accepted') {
                        console.log('User accepted the install prompt');
                        // Stop the button from pulsing once installed
                        installButton.classList.remove('pulse');
                    } else {
                        console.log('User dismissed the install prompt');
                    }
                    
                    // Clear the saved prompt - it can only be used once
                    installPrompt = null;
                });
            } else {
                // If no install prompt is available, show instructions
                showInstallInstructions();
            }
        });
    }
    
    // Function to display installation instructions
    function showInstallInstructions() {
        // Create modal container
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        modal.style.zIndex = '10000';
        modal.style.display = 'flex';
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';
        
        // Create modal content
        const modalContent = document.createElement('div');
        modalContent.style.backgroundColor = '#fff';
        modalContent.style.padding = '30px';
        modalContent.style.borderRadius = '8px';
        modalContent.style.maxWidth = '90%';
        modalContent.style.width = '500px';
        modalContent.style.position = 'relative';
        modalContent.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
        
        // Add close button
        const closeButton = document.createElement('button');
        closeButton.innerHTML = '&times;';
        closeButton.style.position = 'absolute';
        closeButton.style.top = '10px';
        closeButton.style.right = '10px';
        closeButton.style.background = 'none';
        closeButton.style.border = 'none';
        closeButton.style.fontSize = '24px';
        closeButton.style.cursor = 'pointer';
        closeButton.style.color = '#666';
        closeButton.onclick = function() {
            document.body.removeChild(modal);
        };
        
        // Add title
        const title = document.createElement('h3');
        title.textContent = 'Install Spantik Adventure App';
        title.style.color = '#4CAF50';
        title.style.marginTop = '0';
        title.style.marginBottom = '20px';
        title.style.textAlign = 'center';
        
        // Add installation instructions
        const instructions = document.createElement('div');
        instructions.innerHTML = `
            <p style="margin-bottom: 20px; text-align: center;">Due to browser security, websites cannot install apps directly. Please follow these steps:</p>
            
            <div style="margin-bottom: 20px; text-align: left;">
                <h4 style="color: #4CAF50; margin-bottom: 10px;">On Android</h4>
                <ol style="padding-left: 20px; margin: 0;">
                    <li>Open this website in Chrome</li>
                    <li>Tap the menu button (⋮)</li>
                    <li>Select "Install app" or "Add to Home screen"</li>
                </ol>
            </div>
            
            <div style="margin-bottom: 20px; text-align: left;">
                <h4 style="color: #4CAF50; margin-bottom: 10px;">On iPhone/iPad</h4>
                <ol style="padding-left: 20px; margin: 0;">
                    <li>Open this website in Safari</li>
                    <li>Tap the Share button (rectangle with arrow)</li>
                    <li>Scroll down and select "Add to Home Screen"</li>
                </ol>
            </div>
            
            <div style="text-align: left;">
                <h4 style="color: #4CAF50; margin-bottom: 10px;">On Desktop</h4>
                <ol style="padding-left: 20px; margin: 0;">
                    <li>Open this website in Chrome, Edge, or other supported browser</li>
                    <li>Look for the install icon in the address bar</li>
                    <li>Click "Install"</li>
                </ol>
            </div>
        `;
        
        // Add continue button
        const continueButton = document.createElement('button');
        continueButton.textContent = 'Got it!';
        continueButton.style.backgroundColor = '#4CAF50';
        continueButton.style.color = 'white';
        continueButton.style.border = 'none';
        continueButton.style.padding = '10px 20px';
        continueButton.style.borderRadius = '4px';
        continueButton.style.fontSize = '16px';
        continueButton.style.cursor = 'pointer';
        continueButton.style.marginTop = '25px';
        continueButton.style.fontWeight = 'bold';
        continueButton.style.display = 'block';
        continueButton.style.margin = '25px auto 0';
        continueButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        continueButton.onclick = function() {
            document.body.removeChild(modal);
        };
        
        // Assemble and add to document
        modalContent.appendChild(closeButton);
        modalContent.appendChild(title);
        modalContent.appendChild(instructions);
        modalContent.appendChild(continueButton);
        modal.appendChild(modalContent);
        document.body.appendChild(modal);
    }
});
