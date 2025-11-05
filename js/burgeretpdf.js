/*Clic burger*/       
document.addEventListener("DOMContentLoaded", function() {
    const burger = document.getElementById("burgerMenu");
    const nav = document.getElementById("navLinks");

    burger.addEventListener("click", function() {
        nav.classList.toggle("nav-active");
        burger.classList.toggle("active");
    });
});

// Script de téléchargement PDF amélioré
document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('download-btn');
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            e.preventDefault(); // Empêche le comportement par défaut du bouton
            
            const pdfUrl = 'CV_Mateo_Teixeira_2025.pdf';
            const fileName = 'CV_Mateo_Teixeira_2025.pdf';
            
            // Fonction pour télécharger le fichier
            function downloadFile(url, filename) {
                // Créer un élément <a> temporaire
                const link = document.createElement('a');
                link.href = url;
                link.download = filename;
                link.style.display = 'none';
                
                // Ajouter au DOM, cliquer, puis supprimer
                document.body.appendChild(link);
                link.click();
                
                // Nettoyer après un court délai
                setTimeout(() => {
                    document.body.removeChild(link);
                }, 100);
            }
            
            // Vérifier si le fichier existe avant de le télécharger
            fetch(pdfUrl, { method: 'HEAD' })
                .then(response => {
                    if (response.ok) {
                        // Le fichier existe, procéder au téléchargement
                        downloadFile(pdfUrl, fileName);
                        
                        // Feedback visuel optionnel
                        const originalText = downloadBtn.innerHTML;
                        downloadBtn.innerHTML = '<i class="fas fa-check"></i> Téléchargé !';
                        downloadBtn.style.backgroundColor = '#28a745';
                        
                        // Restaurer l'état original après 2 secondes
                        setTimeout(() => {
                            downloadBtn.innerHTML = originalText;
                            downloadBtn.style.backgroundColor = '';
                        }, 2000);
                        
                    } else {
                        throw new Error('Fichier non trouvé');
                    }
                })
                .catch(error => {
                    console.error('Erreur lors du téléchargement:', error);
                    
                    // Fallback : ouvrir dans un nouvel onglet
                    window.open(pdfUrl, '_blank');
                    
                    // Message d'erreur optionnel
                    alert('Le téléchargement automatique a échoué. Le CV s\'ouvre dans un nouvel onglet.');
                });
        });
    }
});

// Version alternative plus simple si vous préférez
function downloadPDF() {
    const pdfUrl = 'CV_Mateo_Teixeira_2025.pdf';
    const fileName = 'CV_Mateo_Teixeira_2025.pdf';
    
    try {
        // Méthode moderne avec fetch
        fetch(pdfUrl)
            .then(response => {
                if (!response.ok) throw new Error('Fichier non accessible');
                return response.blob();
            })
            .then(blob => {
                // Créer une URL temporaire pour le blob
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
    link.target = '_blank'; // Ouvre dans un nouvel onglet si le téléchargement échoue
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Si vous voulez utiliser la fonction directement dans le HTML
// <button onclick="downloadPDF()">Télécharger CV</button>