<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    $to = "mateo.teixeira.mt.pro@gmail.com";  // Remplace par ton adresse e-mail
    $subject = "Nouveau message de $name";
    $headers = "From: $email" . "\r\n" . "Reply-To: $email";

    $body = "Nom: $name\n";
    $body .= "Email: $email\n";
    $body .= "Message:\n$message\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "Votre message a bien été envoyé.";
    } else {
        echo "Erreur lors de l'envoi du message.";
    }
} else {
    echo "Accès non autorisé.";
}
?>
