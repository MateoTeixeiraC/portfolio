// ===========================
// BURGER MENU
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('navLinks');

    // Toggle menu burger
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Fermer le menu quand on clique sur un lien
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Fermer le menu si on clique en dehors
    document.addEventListener('click', (e) => {
        if (!burger.contains(e.target) && !navLinks.contains(e.target)) {
            burger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
});

// ===========================
// SCROLL TO TOP BUTTON
// ===========================

window.addEventListener('DOMContentLoaded', function() {
    const scrollTop = document.getElementById('scrollTop');

    if (scrollTop) {
        // Afficher/masquer le bouton selon le scroll
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollTop.classList.add('show');
            } else {
                scrollTop.classList.remove('show');
            }
        });

        // Scroll vers le haut au clic
        scrollTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// ===========================
// TÉLÉCHARGEMENT CV
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('downloadBtn');
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const pdfUrl = 'CV_Mateo_Teixeira_2025.pdf';
            const fileName = 'CV_Mateo_Teixeira_2025.pdf';
            
            // Créer un lien temporaire pour le téléchargement
            const link = document.createElement('a');
            link.href = pdfUrl;
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Feedback visuel
            const originalHTML = downloadBtn.innerHTML;
            downloadBtn.innerHTML = '<i class="fas fa-check"></i> Téléchargé !';
            downloadBtn.style.background = '#48bb78';
            
            // Restaurer l'état original après 2 secondes
            setTimeout(() => {
                downloadBtn.innerHTML = originalHTML;
                downloadBtn.style.background = '';
            }, 2000);
        });
    }
});

// ===========================
// SMOOTH SCROLL POUR LES ANCRES
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll pour tous les liens commençant par #
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// ===========================
// FONCTION DE TÉLÉCHARGEMENT ALTERNATIVE (FALLBACK)
// ===========================

function downloadPDF() {
    const pdfUrl = 'CV_Mateo_Teixeira_2025.pdf';
    const fileName = 'CV_Mateo_Teixeira_2025.pdf';
    
    try {
        // Méthode avec fetch pour télécharger en tant que blob
        fetch(pdfUrl)
            .then(response => {
                if (!response.ok) throw new Error('Fichier non accessible');
                return response.blob();
            })
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = fileName;
                
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                
                // Nettoyer l'URL temporaire
                window.URL.revokeObjectURL(url);
            })
            .catch(error => {
                console.error('Erreur fetch:', error);
                // Fallback vers la méthode simple
                simplePDFDownload(pdfUrl, fileName);
            });
    } catch (error) {
        console.error('Erreur générale:', error);
        simplePDFDownload(pdfUrl, fileName);
    }
}

// Méthode fallback simple
function simplePDFDownload(url, filename) {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.target = '_blank';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}