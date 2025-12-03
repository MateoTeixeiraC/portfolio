// ===========================
// EMAIL PROTECTION
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    // Protection anti-spam pour l'email
    const user = "mateo.teixeira.mt.pro";
    const domain = "gmail.com";
    const emailLink = document.getElementById("email-link");
    
    if (emailLink) {
        emailLink.href = `mailto:${user}@${domain}`;
        emailLink.textContent = `${user}@${domain}`;
    }
});

// ===========================
// BOUTON TÉLÉCHARGEMENT CV (PAGE CONTACT)
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    const downloadBtnContact = document.getElementById('downloadBtnContact');
    
    if (downloadBtnContact) {
        downloadBtnContact.addEventListener('click', function(e) {
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
            const originalHTML = downloadBtnContact.innerHTML;
            downloadBtnContact.innerHTML = '<i class="fas fa-check"></i> Téléchargé !';
            downloadBtnContact.style.background = '#48bb78';
            
            // Restaurer l'état original après 2 secondes
            setTimeout(() => {
                downloadBtnContact.innerHTML = originalHTML;
                downloadBtnContact.style.background = '';
            }, 2000);
        });
    }
});

// ===========================
// BOUTON SCROLL TOP
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    const scrollTopBtn = document.getElementById("scrollTop");
    
    if (scrollTopBtn) {
        // Afficher/masquer le bouton selon le scroll
        window.addEventListener("scroll", function () {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add("show");
            } else {
                scrollTopBtn.classList.remove("show");
            }
        });

        // Remonter en haut au clic
        scrollTopBtn.addEventListener("click", function () {
            window.scrollTo({ 
                top: 0, 
                behavior: "smooth" 
            });
        });
    }
});