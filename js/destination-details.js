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
    },
    'trango': {
        title: 'Trango Tower (6,286m)',
        image: 'images/destinations/trango.jpg',
        height: '6,286 meters (20,623 ft)',
        temp: '-10°C to -25°C',
        duration: '22 Days',
        location: 'Baltoro Glacier, Karakoram',
        difficulty: 'Highly Technical Rock Climbing',
        description: 'The Trango Towers are a family of rock towers situated on the north side of the Baltoro Glacier. They offer some of the largest cliffs and most challenging rock climbing in the world. The Great Trango Tower is the highest point, but the Nameless Tower is the most iconic spire.',
        highlights: [
            'World\'s tallest vertical rock face',
            'Ultimate challenge for technical rock climbers',
            'Spectacular granite spires rising from the glacier',
            'Stunning views of the Baltoro region'
        ]
    },
    'rakaposhi': {
        title: 'Rakaposhi (7,788m)',
        image: 'images/destinations/Rakaposhi.jpg',
        height: '7,788 meters (25,551 ft)',
        temp: '-20°C to -35°C',
        duration: '35 Days',
        location: 'Nagar Valley, Karakoram',
        difficulty: 'Extreme / Technical climbing',
        description: 'Rakaposhi is one of the most stunning mountains in the world, rising dramatically from the Hunza and Nagar valleys. Its name means "Snow Covered" in the local language. It is famous for its massive vertical rise and the longest unbroken slope in the world from base to summit.',
        highlights: [
            'Spectacular 6,000m vertical rise from Hunza Valley',
            'One of the most aesthetic peaks in the Karakoram',
            'Challenging approach through beautiful Nagar Valley',
            'Incredible views of the Hunza valley from the ranks'
        ]
    },
    'nanga': {
        title: 'Nanga Parbat (8,126m)',
        image: 'images/destinations/nanga-parbat.jpg',
        height: '8,126 meters (26,660 ft)',
        temp: '-25°C to -45°C',
        duration: '45 Days',
        location: 'Diamir / Rupal Face',
        difficulty: 'Extreme / Killer Mountain',
        description: 'Nanga Parbat, the "Killer Mountain," is the ninth highest mountain in the world and the western anchor of the Himalayas. Its massive Rupal Face is world-renowned as the highest mountain face on Earth, rising over 4,600m directly from its base. It is a peak of extreme technical challenge and legendary mountaineering history.',
        highlights: [
            'Ninth highest peak in the world',
            'World\'s highest mountain face (Rupal Face)',
            'Legendary mountaineering history',
            'Pristine fairy-tale meadows at its base'
        ]
    },
    'passu': {
        title: 'Passu Glacier Trek',
        image: 'images/destinations/passu-glacier.jpg',
        height: '3,200 meters (Average)',
        temp: '5°C to -10°C',
        duration: '12 Days',
        location: 'Passu, Gojal Hunza',
        difficulty: 'Moderate Trekking',
        description: 'The Passu Glacier trek offers some of the most dramatic glacial scenery in the Karakoram. Walking alongside the massive river of ice while the iconic Passu Cones (Tupopdan) tower overhead is an unforgettable experience. The trek provides a close-up look at the raw power of moving glaciers in the spectacular Gojal region.',
        highlights: [
            'Close-up views of the iconic Passu Cones',
            'Dramatic walk across the moving glacier ice',
            'Cultural immersion in the hospitable Gojal valley',
            'Proximity to the famous Passu suspension bridges'
        ]
    },
    'deosai': {
        title: 'Deosai National Park',
        image: 'images/destinations/deosai.jpg',
        height: '4,114 meters (Average)',
        temp: '5°C to -10°C',
        duration: '3-5 Days',
        location: 'Skardu, Baltistan',
        difficulty: 'Easy / Sightseeing',
        description: 'Deosai, known as the "Land of Giants," is the second-highest plateau in the world. It is a vast, high-altitude alpine plain that turns into a sea of wildflowers in the summer. It is home to the Himalayan Brown Bear and offers stunning views of the surrounding Himalayan peaks.',
        highlights: [
            'Explore the world\'s second-highest plateau',
            'Spot the rare Himalayan Brown Bear',
            'Visit the crystal-clear Sheosar Lake',
            'Unforgettable camping under the stars'
        ]
    },
    'khaplu': {
        title: 'Khaplu Fort (Yabgo Khar)',
        image: 'images/destinations/khaplu.jpg',
        height: '2,600 meters (Altitude)',
        temp: '10°C to 25°C (Summer)',
        duration: '1-2 Days',
        location: 'Khaplu Valley, Ghanche',
        difficulty: 'Cultural / Heritage',
        description: 'The Khaplu Fort is a 19th-century royal palace that has been beautifully restored into a heritage hotel. It is a masterpiece of architectural fusion, blending Tibetan, Balti, and Islamic styles. The fort offers a deep dive into the royal history of the Ghanche district.',
        highlights: [
            'Stay in a restored 19th-century royal palace',
            'Award-winning architectural restoration',
            'Breathtaking views of the Masherbrum range',
            'Explore the ancient streets of Khaplu'
        ]
    },
    'thalle': {
        title: 'Thalle La Trek',
        image: 'images/destinations/thalle.jpg',
        height: '4,572 meters (Pass Height)',
        temp: '5°C to -5°C',
        duration: '7 Days',
        location: 'Shigar to Khaplu',
        difficulty: 'Moderate Trekking',
        description: 'The Thalle La trek is a beautiful journey connecting the Shigar and Khaplu valleys. It is known for its lush green meadows, stone-built shepherd huts, and vibrant wildflowers. It offers a perfect blend of natural beauty and cultural interaction with the local Balti people.',
        highlights: [
            'Cross the scenic 4,572m Thalle La pass',
            'Trek through lush, flower-filled alpine meadows',
            'Interact with local nomadic shepherds',
            'Panoramic views of the Karakoram giants'
        ]
    },
    'shigar': {
        title: 'Shigar Palace (Fong-Khar)',
        image: 'images/destinations/shigar.jpg',
        height: '2,500 meters (Altitude)',
        temp: '10°C to 30°C (Summer)',
        duration: '1-2 Days',
        location: 'Shigar Valley',
        difficulty: 'Cultural / Heritage',
        description: 'The Shigar Palace, or "The Palace on the Rock," is a beautiful 17th-century fort that has been restored with great care. It stands at the base of a massive rock cliff and is surrounded by fertile orchards. It serves as a perfect base for exploring the gateway to the Karakoram high peaks.',
        highlights: [
            'Historic "Palace on the Rock" architecture',
            'Gateway to K2 and the Baltoro glacier',
            'Beautifully restored gardens and orchards',
            'Museum showcasing Balti history and culture'
        ]
    },
    'shimshal-pass': {
        title: 'Shimshal Pass Trek',
        image: 'images/destinations/shimshal-pass.jpg',
        height: '4,735 meters (Pass)',
        temp: '5°C to -15°C',
        duration: '12 Days',
        location: 'Shimshal Valley, Gojal',
        difficulty: 'Strenuous / Remote',
        description: 'The Shimshal Pass trek is one of the most culturally rich and scenically diverse treks in the Karakoram. It takes you through the remote Shimshal valley to the high-altitude Shimshal Pass, where yaks graze in vast alpine meadows. It is a journey into the heart of the Wakhi culture.',
        highlights: [
            'Experience the unique Wakhi culture of Shimshal',
            'Trek through the world\'s highest grazing grounds',
            'Panoramic views of Distaghil Sar and other peaks',
            'Cross the iconic Shimshal Pass'
        ]
    },
    'kilik-pass': {
        title: 'Kilik Pass (Border Trek)',
        image: 'images/destinations/kilik-pass.jpg',
        height: '4,827 meters (Pass)',
        temp: '0°C to -10°C',
        duration: '10 Days',
        location: 'Misgar Valley, Gojal',
        difficulty: 'Moderate / Historic',
        description: 'Kilik Pass is a historic mountain pass on the border between Pakistan and China. It was once a key route on the ancient Silk Road. The trek offers a journey through the remote Misgar valley, featuring rugged landscapes and a sense of ancient history.',
        highlights: [
            'Walk the ancient Silk Road route',
            'Stand on the historic border of Pakistan and China',
            'Remote and untouched mountain wilderness',
            'Traditional hospitality of Misgar valley'
        ]
    },
    'shimshal-lake': {
        title: 'Shimshal Lake (Kushruth)',
        image: 'images/destinations/shimshal-lake.jpg',
        height: '4,200 meters (Lake)',
        temp: '5°C to -10°C',
        duration: '14 Days (Combined)',
        location: 'Shimshal Valley',
        difficulty: 'Strenuous Trekking',
        description: 'Shimshal Lake, also known as Kushruth Lake, is a hidden turquoise gem located near the Shimshal Pass. The lake perfectly reflects the surrounding snow-capped giants and provides a serene sanctuary in the high-altitude wilderness.',
        highlights: [
            'Stunning turquoise high-altitude lake',
            'Perfect mirror reflection of the Karakoram peaks',
            'Remote camping in pristine nature',
            'Incredible photography opportunities'
        ]
    },
    'sarfaranga': {
        title: 'Sarfaranga Cold Desert',
        image: 'images/destinations/sarfaranga.jpg',
        height: '2,226 meters (Altitude)',
        temp: '15°C to 30°C (Day)',
        duration: '1 Day',
        location: 'Skardu, Baltistan',
        difficulty: 'Easy / Sightseeing',
        description: 'The Sarfaranga Cold Desert is one of the highest deserts in the world. It features massive golden sand dunes that sit directly at the base of dark, towering, snow-dusted mountains. It is a surreal and unique landscape shaped by the extreme climate of Baltistan.',
        highlights: [
            'Explore one of the world\'s highest cold deserts',
            'Dramatic contrast of sand dunes and snow peaks',
            'Famous for the annual Sarfaranga Jeep Rally',
            'Unreal desert photography at sunset'
        ]
    },
    'kachura': {
        title: 'Kachura Lakes (Shangrila)',
        image: 'images/destinations/kachura.jpg',
        height: '2,500 meters (Altitude)',
        temp: '10°C to 25°C (Summer)',
        duration: '1-2 Days',
        location: 'Skardu, Baltistan',
        difficulty: 'Easy / Recreational',
        description: 'The Kachura Lakes consists of the famous Shangrila Lake (Lower Kachura) and the pristine Upper Kachura Lake. Shangrila is world-renowned for its iconic red-roofed cottages and heart-shaped lake, while Upper Kachura offers a quieter, wilder experience with deep blue waters.',
        highlights: [
            'Visit the iconic Shangrila Resort lake',
            'Boat rides on the crystal-clear Upper Kachura Lake',
            'Surrounded by lush fruit orchards and mountains',
            'Perfect family-friendly destination in Skardu'
        ]
    },
    'gondogoro': {
        title: 'Gondogoro La Pass (5,585m)',
        image: 'images/destinations/gondogoro.jpg',
        height: '5,585 meters (Pass)',
        temp: '-10°C to -25°C',
        duration: '22 Days (BC Trek)',
        location: 'Baltoro Glacier',
        difficulty: 'Extremely Technical Trek',
        description: 'The Gondogoro La pass is the ultimate climax of the K2 Base Camp trek. Reaching the summit of this 5,585m pass offers what many consider the greatest mountain panorama on Earth: an unobstructed view of four 8,000m peaks including K2.',
        highlights: [
            'World\'s greatest mountain panorama from the summit',
            'Highest point reached on the K2 Concordia trek',
            'Technical climb using fixed ropes and crampons',
            'Descend into the beautiful Hushe Valley'
        ]
    },
    'haramosh': {
        title: 'Haramosh La Trek',
        image: 'images/destinations/haramosh.jpg',
        height: '4,800 meters (Pass)',
        temp: '0°C to -15°C',
        duration: '15 Days',
        location: 'Haramosh Valley',
        difficulty: 'Strenuous / Technical',
        description: 'The Haramosh La trek is a challenging and wild adventure through the remote Haramosh valley. The route features stunning views of the massive Haramosh peak and the beautiful Kutwal Lake. Crossing the pass requires good stamina and basic mountaineering skills.',
        highlights: [
            'Explore the wild and remote Haramosh valley',
            'Camp at the stunning Kutwal Lake',
            'Spectacular views of Haramosh and Laila peaks',
            'A true off-the-beaten-path trekking experience'
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
