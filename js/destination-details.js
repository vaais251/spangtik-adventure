const destinationData = {
    'spantik': {
        title: 'Spantik Peak (7,027m)',
        image: 'images/destinations/spantik.jpg',
        height: '7,027 meters (23,054 ft)',
        temp: '-15°C to -25°C at higher camps',
        duration: '25 Days',
        location: 'Shigar Valley, Karakoram',
        difficulty: 'Tactical climbing / PD+',
        description: 'Spantik, also known as Golden Peak, is one of the most aesthetic mountains in the Karakoram range. It is famous for its massive golden-colored south face that glows brilliantly at sunrise and sunset. It is considered an ideal first 7,000m peak for climbers looking to transition to 8,000m giants. The climb offers moderate technical challenges on snow and ice ridges.',
        highlights: [
            'Magnificent views of K2 and Broad Peak from the summit',
            'Relatively safe and accessible 7,000m peak',
            'Perfect for altitude acclimatization',
            'Experienced local base camp support'
        ]
    },
    'laila': {
        title: 'Laila Peak (6,096m)',
        image: 'images/destinations/laila.jpg',
        height: '6,096 meters (20,000 ft)',
        temp: '-10°C to -20°C',
        duration: '20 Days',
        location: 'Hushe Valley, Karakoram',
        difficulty: 'Technical / Sharp Spear Peak',
        description: 'Laila Peak is widely considered the most beautiful mountain in the world due to its perfect spear-like shape. Located in the Gondogoro glacier region of Hushe Valley, its sharp needle-like summit is a dream for technical climbers. The mountain has a distinct 45-degree slope on its northwest face.',
        highlights: [
            'World\'s most iconic spear-shaped peak',
            'Technical climbing on steep snow and granite',
            'Proximity to K2 and Concordia regions',
            'Pristine Hushe Valley culture'
        ]
    },
    'broad': {
        title: 'Broad Peak (8,051m)',
        image: 'images/destinations/broad.jpg',
        height: '8,051 meters (26,414 ft)',
        temp: '-25°C to -40°C near summit',
        duration: '45 Days',
        location: 'Baltoro Region, Karakoram',
        difficulty: 'Extreme / 8000er',
        description: 'Broad Peak, the 12th highest mountain on Earth, stands just across the Godwin-Austen Glacier from K2. Its name comes from the immense width of its summit ridge. This is an expedition for serious high-altitude mountaineers looking to join the elite group of 8,000m summiters.',
        highlights: [
            'One of the world\'s fourteen 8,000m peaks',
            'Incredible views directly facing K2',
            'Challenging high-altitude environment',
            'Shared base camp experience with K2 expeditions'
        ]
    },
    'snowlake': {
        title: 'Snow Lake / Hispar La',
        image: 'images/destinations/snowlake.jpg',
        height: '5,150 meters (Pass Height)',
        temp: '-5°C to -15°C (Night)',
        duration: '18 Days',
        location: 'Biafo-Hispar Glaciers',
        difficulty: 'Strenuous Glacial Trek',
        description: 'Snow Lake (Lukpe Lawo) is a high-altitude glacial basin located at the head of the Biafo and Hispar glaciers. This is one of the world\'s most remote and beautiful wilderness areas. It is a vast white corridor of ice surrounded by nameless granite towers and jagged peaks.',
        highlights: [
            'Trekking across the world\'s longest glacial system outside poles',
            'Camping on the mysterious "Snow Lake"',
            'Spectacular views of the Ogre and Latok peaks',
            'Crossing the challenging Hispar La pass'
        ]
    },
    'masherbrum': {
        title: 'Masherbrum (K1)',
        image: 'images/destinations/masherbrum.jpg',
        height: '7,821 meters (25,659 ft)',
        temp: '-20°C to -35°C',
        duration: '40 Days',
        location: 'Ghanche District, Karakoram',
        difficulty: 'Highly Technical / Extreme',
        description: 'Masherbrum, originally designated K1, is one of the most imposing and technically difficult peaks in the world. Its massive north face is a vertical wall of ice and rock that has seen very few successful ascents. For mountaineers, it is a peak that commands immense respect.',
        highlights: [
            'The legendary "Queen of Peaks"',
            'One of the most difficult mountains to climb globally',
            'Stunning views from the Hushe side',
            'True wilderness expedition experience'
        ]
    },
    'concordia': {
        title: 'K2 Base Camp & Concordia',
        image: 'images/destinations/concordia.jpg',
        height: '4,600 meters (Concordia)',
        temp: '0°C to -10°C (Summer nights)',
        duration: '21 Days',
        location: 'Baltoro Glacier',
        difficulty: 'Strenuous Trekking',
        description: 'The trek to Concordia, the meeting point of the Baltoro and Godwin-Austen glaciers, is widely regarded as the best trek in the world. Often called the "Throne Room of the Mountain Gods," Concordia offers a 360-degree panorama of four 8,000m peaks and dozens of other giants.',
        highlights: [
            'Walk among the world\'s highest concentration of high peaks',
            'Visit the base camps of K2 and Broad Peak',
            'Cross the iconic Gondogoro La pass (optional)',
            'Experience the sheer scale of the Baltoro Glacier'
        ]
    },
    'gasherbrum': {
        title: 'Gasherbrum I & II',
        image: 'images/destinations/gasherbrum.jpg',
        height: '8,080m (GI) / 8,035m (GII)',
        temp: '-25°C to -40°C',
        duration: '45 Days',
        location: 'Gasherbrum Massif',
        difficulty: 'Extreme Altitude',
        description: 'The Gasherbrum massif contains two of the world\'s 8,000m peaks. Gasherbrum II is often considered one of the most "attainable" 8,000m peaks, while GI (Hidden Peak) is more remote and challenging. These peaks offer a classic Karakoram high-altitude experience.',
        highlights: [
            'Climb two 8,000m peaks in one expedition area',
            'Beautiful pyramid shape of GII',
            'Spectacular sunrises over the Karakoram giants',
            'Elite high-altitude mountaineering'
        ]
    },
    'khosa': {
        title: 'Khosa Gang (6,040m)',
        image: 'images/destinations/khosa.jpg',
        height: '6,040 meters (19,816 ft)',
        temp: '-10°C to -20°C',
        duration: '15 Days',
        location: 'Shigar Valley',
        difficulty: 'Moderate Climbing',
        description: 'Khosa Gang is a fantastic 6,040m peak located in the Shigar Valley. It is an excellent choice for those looking for their first Himalayan climbing experience. The peak provides stunning views of the central Karakoram and is relatively accessible from Skardu.',
        highlights: [
            'Ideal introductory 6,000m peak',
            'Stunning panorama of the Shigar peaks',
            'Short approach and fixed camping',
            'Great for technical snow training'
        ]
    },
    'mazeno': {
        title: 'Mazeno Pass (Nanga Parbat)',
        image: 'images/destinations/mazeno.jpg',
        height: '5,377 meters (Pass)',
        temp: '-5°C to -15°C',
        duration: '18 Days',
        location: 'Diamir / Rupal Face',
        difficulty: 'Strenuous High Pass',
        description: 'The Mazeno Pass trek circles the Rupal and Diamir faces of Nanga Parbat, the "Killer Mountain." Crossing the Mazeno Pass is the most difficult part of this circuit, requiring basic climbing skills and good stamina, but rewarding trekkers with the closest possible views of the massive Mazeno Ridge.',
        highlights: [
            'Circumnavigate Nanga Parbat, the 9th highest mountain',
            'Incredible views of the world\'s largest mountain face (Rupal)',
            'Challenging crossing of the 5,377m Mazeno Pass',
            'Diverse cultural experience between the valleys'
        ]
    },
    'pastore': {
        title: 'Pastore Peak (5,602m)',
        image: 'images/destinations/pastore.jpg',
        height: '5,602 meters (18,379 ft)',
        temp: '-5°C to -15°C',
        duration: '14 Days',
        location: 'Near Concordia / K2 BC',
        difficulty: 'Easy Peak Climbing',
        description: 'Pastore Peak is a beautiful trekking peak located right next to the K2 Base Camp area. It offers arguably the best view of K2\'s South Face without requiring extreme technical climbing. It is a perfect add-on for those visiting Concordia.',
        highlights: [
            'Best vantage point for K2 photography',
            'Accessible 5,000m+ summit',
            'Panoramic views of the Baltoro glacier giants',
            'Excellent acclimatization peak'
        ]
    }
};

(function () {
    console.log("Destination Details script initializing...");

    const initModal = () => {
        const modal = document.getElementById('destModal');
        if (!modal) {
            console.error("Critical: Modal element #destModal not found!");
            return;
        }

        const closeBtn = modal.querySelector('.close-modal');

        const openModal = (id) => {
            console.log("Attempting to open modal for:", id);
            const data = destinationData[id];
            if (!data) {
                console.warn("No data found for ID:", id);
                return;
            }

            try {
                // Update Modal Content
                const titleEl = modal.querySelector('#modalTitle');
                const imgEl = modal.querySelector('#modalImg');
                const heightEl = modal.querySelector('#modalHeight');
                const tempEl = modal.querySelector('#modalTemp');
                const durationEl = modal.querySelector('#modalDuration');
                const locationEl = modal.querySelector('#modalLocation');
                const difficultyEl = modal.querySelector('#modalDifficulty');
                const descEl = modal.querySelector('#modalDesc');
                const highlightsList = modal.querySelector('#modalHighlights');

                if (titleEl) titleEl.textContent = data.title;
                if (imgEl) imgEl.src = data.image;
                if (heightEl) heightEl.textContent = data.height;
                if (tempEl) tempEl.textContent = data.temp;
                if (durationEl) durationEl.textContent = data.duration;
                if (locationEl) locationEl.textContent = data.location;
                if (difficultyEl) difficultyEl.textContent = data.difficulty;
                if (descEl) descEl.textContent = data.description;

                if (highlightsList) {
                    highlightsList.innerHTML = '';
                    data.highlights.forEach(h => {
                        const li = document.createElement('li');
                        li.innerHTML = `<i class="fas fa-check-circle"></i> ${h}`;
                        highlightsList.appendChild(li);
                    });
                }

                // Copy Link Logic
                const copyBtn = modal.querySelector('#copyDestLink');
                const origin = window.location.origin === 'null' || window.location.origin === 'file://' ? 'https://spantikadventure.com' : window.location.origin;
                const shareLink = `${origin}/destinations/${id}.html`;

                if (copyBtn) {
                    copyBtn.onclick = (e) => {
                        e.preventDefault();
                        navigator.clipboard.writeText(shareLink).then(() => {
                            const originalText = copyBtn.innerHTML;
                            copyBtn.innerHTML = '<i class="fas fa-check"></i> Link Copied!';
                            copyBtn.classList.add('btn-success');
                            setTimeout(() => {
                                copyBtn.innerHTML = originalText;
                                copyBtn.classList.remove('btn-success');
                            }, 2000);
                        }).catch(err => {
                            console.error("Failed to copy link:", err);
                        });
                    };
                }

                // Whatsapp Share Link
                const waBtn = modal.querySelector('#waShareLink');
                if (waBtn) {
                    waBtn.href = `https://wa.me/?text=${encodeURIComponent('Check out this adventure with Spantik Adventure: ' + shareLink)}`;
                }

                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
                console.log("Modal opened successfully.");
            } catch (err) {
                console.error("Error updating modal content:", err);
            }
        };

        const closeModal = () => {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
            if (window.location.hash) {
                history.pushState("", document.title, window.location.pathname + window.location.search);
            }
        };

        if (closeBtn) closeBtn.addEventListener('click', closeModal);
        window.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });

        // Use document-level event delegation for maximum reliability
        document.addEventListener('click', (e) => {
            const card = e.target.closest('.destination-card');
            if (card) {
                console.log("Card click detected via delegation");
                // Stop the "Book Now" buttons from triggering the modal
                if (e.target.closest('.dest-btn')) {
                    console.log("Book Now button clicked, skipping modal");
                    return;
                }

                const id = card.getAttribute('data-dest-id');
                if (id) {
                    openModal(id);
                } else {
                    console.warn("Clicked card has no data-dest-id attribute");
                }
            }
        });

        // Deep Linking Support
        const checkHash = () => {
            const hash = window.location.hash.substring(1);
            if (hash && destinationData[hash]) {
                console.log("Found deep link hash:", hash);
                openModal(hash);
            }
        };

        checkHash();
        window.addEventListener('hashchange', checkHash);
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initModal);
    } else {
        initModal();
    }
})();
