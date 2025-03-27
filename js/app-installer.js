// Enhanced app installation script for Spantik Adventure
document.addEventListener('DOMContentLoaded', function() {
    const installButton = document.getElementById('install-app-button');
    
    // Track if we have a native install prompt available
    let nativeInstallPrompt = null;
    
    // Capture the native install prompt if available
    window.addEventListener('beforeinstallprompt', function(e) {
        e.preventDefault();
        nativeInstallPrompt = e;
        
        if (installButton) {
            installButton.classList.add('pulse');
        }
    });
    
    // Handle installation button click
    if (installButton) {
        installButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // If native installation is available, use it
            if (nativeInstallPrompt) {
                nativeInstallPrompt.prompt();
                
                nativeInstallPrompt.userChoice.then(function(result) {
                    if (result.outcome === 'accepted') {
                        console.log('App was installed via native prompt');
                        installButton.classList.remove('pulse');
                    }
                    nativeInstallPrompt = null;
                });
            } else {
                // If native installation is not available, show download options
                showInstallOptions();
            }
        });
    }
    
    // Function to show installation options
    function showInstallOptions() {
        // Create modal
        const modal = document.createElement('div');
        modal.className = 'install-modal';
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
        modal.style.zIndex = '10000';
        modal.style.display = 'flex';
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';
        
        // Modal content
        const content = document.createElement('div');
        content.style.backgroundColor = 'white';
        content.style.borderRadius = '10px';
        content.style.padding = '30px';
        content.style.maxWidth = '90%';
        content.style.width = '500px';
        content.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.3)';
        content.style.position = 'relative';
        
        // Close button
        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '&times;';
        closeBtn.style.position = 'absolute';
        closeBtn.style.top = '15px';
        closeBtn.style.right = '15px';
        closeBtn.style.background = 'none';
        closeBtn.style.border = 'none';
        closeBtn.style.fontSize = '24px';
        closeBtn.style.cursor = 'pointer';
        closeBtn.style.color = '#666';
        closeBtn.style.zIndex = '2';
        
        closeBtn.addEventListener('click', function() {
            document.body.removeChild(modal);
        });
        
        // Title
        const title = document.createElement('h3');
        title.textContent = 'Install Spantik Adventure App';
        title.style.textAlign = 'center';
        title.style.color = '#4CAF50';
        title.style.marginTop = '0';
        title.style.marginBottom = '20px';
        title.style.fontSize = '22px';
        
        // Options container
        const optionsContainer = document.createElement('div');
        optionsContainer.style.display = 'flex';
        optionsContainer.style.flexDirection = 'column';
        optionsContainer.style.gap = '15px';
        
        // Option 1: Quick Install
        const quickInstallOption = document.createElement('div');
        quickInstallOption.className = 'install-option';
        quickInstallOption.style.padding = '15px';
        quickInstallOption.style.borderRadius = '8px';
        quickInstallOption.style.border = '2px solid #4CAF50';
        quickInstallOption.style.cursor = 'pointer';
        quickInstallOption.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease';
        
        quickInstallOption.innerHTML = `
            <h4 style="margin-top: 0; margin-bottom: 10px; color: #4CAF50; display: flex; align-items: center;">
                <i class="fas fa-bolt" style="margin-right: 10px;"></i> Quick Install
            </h4>
            <p style="margin: 0 0 10px 0;">The fastest way to add Spantik Adventure to your device.</p>
        `;
        
        quickInstallOption.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 5px 15px rgba(76, 175, 80, 0.3)';
        });
        
        quickInstallOption.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
        
        quickInstallOption.addEventListener('click', function() {
            // Try to determine browser and platform
            const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
            const isChrome = /Chrome/.test(navigator.userAgent) && !/Edge/.test(navigator.userAgent);
            const isSafari = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
            
            // Replace with specific instructions
            optionsContainer.innerHTML = '';
            
            if (isIOS && isSafari) {
                // iOS Safari instructions
                optionsContainer.innerHTML = `
                    <div style="text-align: center; margin-bottom: 20px;">
                        <img src="images/install-guide-ios.png" alt="iOS Installation Guide" style="max-width: 100%; border-radius: 5px; border: 1px solid #ddd;">
                    </div>
                    <h4 style="color: #4CAF50; margin: 0 0 10px 0;">Install on iOS</h4>
                    <ol style="margin: 0 0 20px 0; padding-left: 25px; line-height: 1.5;">
                        <li>Tap the <strong>Share</strong> button at the bottom of your screen</li>
                        <li>Scroll down and tap <strong>Add to Home Screen</strong></li>
                        <li>Tap <strong>Add</strong> in the top right corner</li>
                    </ol>
                    <p style="margin: 0;">The app will appear on your home screen!</p>
                `;
            } else if (isMobile && isChrome) {
                // Android Chrome instructions
                optionsContainer.innerHTML = `
                    <div style="text-align: center; margin-bottom: 20px;">
                        <img src="images/install-guide-android.png" alt="Android Installation Guide" style="max-width: 100%; border-radius: 5px; border: 1px solid #ddd;">
                    </div>
                    <h4 style="color: #4CAF50; margin: 0 0 10px 0;">Install on Android</h4>
                    <ol style="margin: 0 0 20px 0; padding-left: 25px; line-height: 1.5;">
                        <li>Tap the menu button (<strong>⋮</strong>) in the top right</li>
                        <li>Tap <strong>Install app</strong> or <strong>Add to Home screen</strong></li>
                        <li>Tap <strong>Install</strong> in the prompt</li>
                    </ol>
                    <p style="margin: 0;">The app will appear on your home screen!</p>
                `;
            } else {
                // Desktop instructions
                optionsContainer.innerHTML = `
                    <div style="text-align: center; margin-bottom: 20px;">
                        <img src="images/install-guide-desktop.png" alt="Desktop Installation Guide" style="max-width: 100%; border-radius: 5px; border: 1px solid #ddd;">
                    </div>
                    <h4 style="color: #4CAF50; margin: 0 0 10px 0;">Install on Desktop</h4>
                    <ol style="margin: 0 0 20px 0; padding-left: 25px; line-height: 1.5;">
                        <li>Look for the install icon (<strong>+</strong>) in the address bar</li>
                        <li>Click the icon and select <strong>Install</strong></li>
                        <li>Click <strong>Install</strong> in the prompt</li>
                    </ol>
                    <p style="margin: 0;">The app will appear on your desktop or start menu!</p>
                `;
            }
            
            // Add "I don't see these options" button
            const fallbackButton = document.createElement('button');
            fallbackButton.textContent = "I don't see these options";
            fallbackButton.style.backgroundColor = '#f5f5f5';
            fallbackButton.style.color = '#333';
            fallbackButton.style.border = '1px solid #ddd';
            fallbackButton.style.padding = '10px 15px';
            fallbackButton.style.borderRadius = '4px';
            fallbackButton.style.marginTop = '20px';
            fallbackButton.style.cursor = 'pointer';
            fallbackButton.style.width = '100%';
            
            fallbackButton.addEventListener('click', function() {
                showOfflinePackageOption();
            });
            
            optionsContainer.appendChild(fallbackButton);
        });
        
        // Option 2: Download Offline Package
        const offlinePackageOption = document.createElement('div');
        offlinePackageOption.className = 'install-option';
        offlinePackageOption.style.padding = '15px';
        offlinePackageOption.style.borderRadius = '8px';
        offlinePackageOption.style.border = '2px solid #2196F3';
        offlinePackageOption.style.cursor = 'pointer';
        offlinePackageOption.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease';
        
        offlinePackageOption.innerHTML = `
            <h4 style="margin-top: 0; margin-bottom: 10px; color: #2196F3; display: flex; align-items: center;">
                <i class="fas fa-download" style="margin-right: 10px;"></i> Download Offline Package
            </h4>
            <p style="margin: 0 0 10px 0;">Download a package to access Spantik Adventure offline.</p>
        `;
        
        offlinePackageOption.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 5px 15px rgba(33, 150, 243, 0.3)';
        });
        
        offlinePackageOption.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
        
        offlinePackageOption.addEventListener('click', function() {
            showOfflinePackageOption();
        });
        
        // Function to show offline package option
        function showOfflinePackageOption() {
            optionsContainer.innerHTML = '';
            
            const offlineContent = document.createElement('div');
            offlineContent.innerHTML = `
                <h4 style="color: #2196F3; margin: 0 0 15px 0; display: flex; align-items: center;">
                    <i class="fas fa-download" style="margin-right: 10px;"></i> Download Offline Package
                </h4>
                <p style="margin: 0 0 20px 0; line-height: 1.5;">
                    Download the Spantik Adventure website package to access it offline or add to your device:
                </p>
                <div style="text-align: center; margin-bottom: 20px;">
                    <a href="downloads/spantik-adventure.zip" download="spantik-adventure.zip" id="download-button" style="display: inline-block; background-color: #2196F3; color: white; padding: 12px 25px; text-decoration: none; border-radius: 4px; font-weight: bold;">
                        <i class="fas fa-cloud-download-alt" style="margin-right: 8px;"></i> Download Package (2.5MB)
                    </a>
                </div>
                <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 15px;">
                    <h5 style="margin: 0 0 10px 0; color: #333;">After downloading:</h5>
                    <ol style="margin: 0; padding-left: 25px;">
                        <li style="margin-bottom: 8px;">Extract the ZIP file to a location on your device</li>
                        <li style="margin-bottom: 8px;">Open the extracted folder</li>
                        <li style="margin-bottom: 0;">Double-click on <strong>index.html</strong> to launch the app</li>
                    </ol>
                </div>
            `;
            
            optionsContainer.appendChild(offlineContent);
            
            // Track download attempt
            const downloadButton = offlineContent.querySelector('#download-button');
            if (downloadButton) {
                downloadButton.addEventListener('click', function() {
                    console.log('User downloaded offline package');
                    // Could add analytics tracking here
                });
            }
        }
        
        // Assemble the modal
        optionsContainer.appendChild(quickInstallOption);
        optionsContainer.appendChild(offlinePackageOption);
        
        content.appendChild(closeBtn);
        content.appendChild(title);
        content.appendChild(optionsContainer);
        modal.appendChild(content);
        document.body.appendChild(modal);
    }
});
