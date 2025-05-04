<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8" >
        <title>Bastelica Antoine</title>
        <link rel="stylesheet" href="style/style.css">
        <script src="main.js" defer></script>
        <link rel="shortcut icon" href="Ressources/skipc.png">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    </head>
    <body>
        <?php
        require 'header.php';
        ?>
        <main>
        <?php
        include 'profil.php';
        include 'portefolio.php';
        include 'competences.php';
        include 'contact.php';
        include 'formations.php';
        ?>
        </main>
        <footer>
            <!-- A vérifier -->
            <p>© 2025 <em>BASTELICA Antoine</em> | Tous droits réservés</p>
        </footer>
    </body>
</html>