const fs = require('fs');
const path = require('path');

const destinationData = {
    'spantik': { title: 'Spantik Peak (7,027m) Expedition', image: 'spantik.jpg', desc: 'Join our expedition to the Golden Peak of Shigar Valley.' },
    'laila': { title: 'Laila Peak (6,096m) Spear Peak', image: 'laila.jpg', desc: 'Climb the most beautiful spear-shaped mountain in the world.' },
    'broad': { title: 'Broad Peak (8,051m) 8000er Expedition', image: 'broad.jpg', desc: 'Conquer the 12th highest peak in the world with our expert team.' },
    'snowlake': { title: 'Snow Lake & Hispar La Trek', image: 'snowlake.jpg', desc: 'Trek across the vast white wilderness of the Karakoram glaciers.' },
    'masherbrum': { title: 'Masherbrum (K1) Mountain Expedition', image: 'masherbrum.jpg', desc: 'Face the challenge of the legendary Queen of Peaks.' },
    'concordia': { title: 'K2 Base Camp & Concordia Trek', image: 'concordia.jpg', desc: 'Visit the Throne Room of the Mountain Gods at the heart of the Karakoram.' },
    'gasherbrum': { title: 'Gasherbrum I & II 8000er Expedition', image: 'gasherbrum.jpg', desc: 'Climb the majestic Gasherbrum massif with Spantik Adventure.' },
    'khosa': { title: 'Khosa Gang (6,040m) Peak Climbing', image: 'khosa.jpg', desc: 'An ideal introductory 6,000m peak in the beautiful Shigar Valley.' },
    'mazeno': { title: 'Mazeno Pass & Nanga Parbat Circuit', image: 'mazeno.jpg', desc: 'Cross the highest pass on the Nanga Parbat circuit for breathtaking views.' },
    'pastore': { title: 'Pastore Peak (5,602m) K2 View Peak', image: 'pastore.jpg', desc: 'The best vantage point for photography of K2\'s South Face.' }
};

const destDir = path.join(__dirname, 'destinations');
if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir);
}

Object.keys(destinationData).forEach(id => {
    const data = destinationData[id];
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.title} - Spantik Adventure</title>
    
    <!-- WhatsApp / Social Media Previews -->
    <meta property="og:title" content="${data.title}">
    <meta property="og:description" content="${data.desc}">
    <!-- Note: For social previews to work, the image URL should be absolute. 
         The site should be hosted on a domain. -->
    <meta property="og:image" content="https://spantikadventure.com/images/destinations/${data.image}">
    <meta property="og:url" content="https://spantikadventure.com/destinations/${id}.html">
    <meta property="og:type" content="website">
    
    <!-- Meta Refresh for Redirection -->
    <meta http-equiv="refresh" content="0; url=../index.html#${id}">
</head>
<body style="font-family: sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; background: #f1f5f9;">
    <div style="text-align: center;">
        <h2>Redirecting to ${data.title}...</h2>
        <p>If you are not redirected, <a href="../index.html#${id}">click here</a>.</p>
    </div>
    <script>
        // Smooth fast redirection
        window.location.href = "../index.html#${id}";
    </script>
</body>
</html>`;

    fs.writeFileSync(path.join(destDir, `${id}.html`), html);
});

console.log('Successfully generated 10 destination redirect files.');
