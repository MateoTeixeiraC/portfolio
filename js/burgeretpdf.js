/*Clic burger*/       
document.addEventListener("DOMContentLoaded", function() {
    const burger = document.getElementById("burgerMenu");
    const nav = document.getElementById("navLinks");

    burger.addEventListener("click", function() {
        nav.classList.toggle("nav-active");
        burger.classList.toggle("active");
    });
});

//Download le PDF
            document.getElementById('download-btn').addEventListener('click', function() {
            // Ouvrir le PDF dans un nouvel onglet
            var pdfUrl = 'CVMateoTeixeira2025.pdf'; 
            var newTab = window.open(pdfUrl, '_blank'); 

           
            var link = document.createElement('a');
            link.href = pdfUrl; 
            link.download = 'CVMateoTeixeira2025.pdf'; 
            document.body.appendChild(link);
            link.click(); 
            document.body.removeChild(link);
        });