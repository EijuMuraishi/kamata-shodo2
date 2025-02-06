document.addEventListener('DOMContentLoaded', () => {
    // ナビゲーションリンクのスムーススクロール
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });

            // モバイル表示時にメニューを閉じる
            if (window.innerWidth <= 768) {
                document.getElementById('nav-links').classList.remove('active');
            }
        });
    });

    // スクロール時のヘッダー背景変更
    const header = document.querySelector('.site-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
            header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        }
    });

    // モーダル関連
    const courseCards = document.querySelectorAll('.course-card');
    const modal = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close-modal');

    courseCards.forEach(card => {
        card.addEventListener('click', () => {
            const modalId = card.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            modal.style.display = 'block';
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            modal.style.display = 'none';
        });
    });

    // モーダル外をクリックで閉じる
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });

    // ハンバーガーメニュー
    const hamburger = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // メニュー外やメニュー項目をクリックしたときにメニューを閉じる
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && 
            !navMenu.contains(e.target) && 
            window.innerWidth <= 768) {
            navMenu.classList.remove('active');
        }
    });

    // ウィンドウサイズが変更されたときの処理
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navMenu.classList.remove('active');
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    // 作品画像のモーダル処理
    const workImages = document.querySelectorAll('.works-image');
    const imageModal = document.createElement('div');
    imageModal.classList.add('image-modal');
    document.body.appendChild(imageModal);

    // モーダル用のスタイル
    imageModal.style.cssText = `
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 1000;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    `;

    const modalImage = document.createElement('img');
    modalImage.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        object-fit: contain;
    `;
    imageModal.appendChild(modalImage);

    // 各作品画像にクリックイベントを追加
    workImages.forEach(image => {
        image.addEventListener('click', () => {
            modalImage.src = image.src;
            imageModal.style.display = 'flex';
        });
    });

    // モーダル外をクリックで閉じる
    imageModal.addEventListener('click', (e) => {
        if (e.target === imageModal) {
            imageModal.style.display = 'none';
        }
    });

    // Escキーでも閉じられるようにする
    document.addEventListener('keydown', (e) => {
        const imageModal = document.querySelector('.image-modal');
        if (e.key === 'Escape' && imageModal.style.display === 'flex') {
            imageModal.style.display = 'none';
        }
    });
});