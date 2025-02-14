// script.js
document.querySelector('.envelope').addEventListener('click', function() {
    this.classList.toggle('open');
    if (this.classList.contains('open')) {
        createHearts();
    }
});

function createHearts() {
    const container = document.getElementById('hearts-container');
    let heartCount = 0;
    const maxHearts = 200;
    

    container.innerHTML = '';

    function createHeart() {
        if (heartCount >= maxHearts) return;
        
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        const size = 20 + Math.random() * 20;
        heart.style.fontSize = size + 'px';
      
        heart.style.animationDuration = 2 + Math.random() * 2 + 's';
        container.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 3000);
        
        heartCount++;
        
    
        if (heartCount < maxHearts) {
            setTimeout(createHeart, 50); 
        }
    }
    
    createHeart();
}