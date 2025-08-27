/*Bouton Remonter*/
const scrollTopBtn = document.getElementById("scrollTop"); 

        window.addEventListener("scroll", function () {
            if (window.scrollY > 200) {
                scrollTopBtn.classList.add("show");
            } else {
                scrollTopBtn.classList.remove("show");
            }
        });

        scrollTopBtn.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });

/*Modale*/
$(document).ready(function() {
    $('.custom-image').click(function() {
        var imgSrc = $(this).attr('src');  // Récupère l'URL de l'image cliquée
        $('#modalImage').attr('src', imgSrc); // Modifie l'image du modale
    });
});