<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8" >
        <title>Bastelica Antoine</title>
        <link rel="stylesheet" href="style/style.css">
        <script src="/main.js" defer></script>
        <link rel="shortcut icon" href="Ressources/skipc.png">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    </head>
    <body>
        <header>
            <div id="photo">
                <img src="Ressources/profile.jpg" alt="Photo de profil">
            </div>
            <div id="lien-navigation" onclick="deroulerMenu()">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <nav>
                    <!-- Profil portefolio Cv projet Un peu plus sur moi ?-->
                     <a href="#profil">Profil</a>
                     <a href="#portefolio">Portfolio</a>
                     <a href="#Cv">Compétences</a>
                     <a href="#contact">Contact</a>
                     <a href="#formation">Formations</a>
                     <!-- <a href=""><img src="linkedin.jpg" alt="Linkedin"></a> -->
                </nav>
            </div>
        </header>
        <main>
            <!-- Une intro  -->
            <div id="profil" class="div-impair">
                <h1>Profil</h1>
                <p><em>Autodidacte</em> et <em>motivé</em>, je me forme au <em>développement web</em> avec <em>rigueur</em> et <em>passion</em>. Chaque jour, je consacre du temps à pratiquer, 
                    <em>apprendre</em> et <em>améliorer</em> mes compétences, que ce soit à travers des <em>projets</em> concrets ou de cours en ligne. J’aime <em>comprendre</em> comment les choses
                    fonctionnent et <em>trouver des solutions</em> efficaces aux problèmes rencontrés.<br>
                    Après plusieurs années dans des emplois saisonniers qui m’ont transmis des valeurs fortes comme <em>la rigueur</em>, <em>l’autonomie</em> et le <em>travail en 
                    équipe</em>, j’ai choisi de me <em>reconvertir</em> vers un métier qui a du <em>sens</em> pour moi. Le développement me permet de combiner <em>logique</em>, <em>créativité</em> 
                    et <em>apprentissage continu</em>, dans un environnement en constante évolution.<br>
                    En dehors du code, je suis <em>passionné</em> par les sports de plein air comme le <em>ski</em> et le <em>VTT</em>, et j’aime passer du temps avec mon <em>chien</em>, ce qui m’aide à 
                    garder un bon <em>équilibre</em> entre concentration et bien-être au quotidien.<br> Je suis actuellement à la 
                    recherche d’une <em>alternance</em> pour approfondir mes connaissances sur le <em>terrain</em>, apprendre aux côtés de <em>professionnels</em>, et 
                    participer à des <em>projets</em> qui ont du <em>sens</em>. <br>Mon <em>objectif</em> : devenir un <em>développeur impliqué, autonome</em> et <em>capable de s’adapter </em>
                    aux défis du numérique.</p>
            </div>
            <div id="portefolio" class="div-pair">
                <h1>Portfolio</h1>
                <p>Quelques projets sur lesquels j'ai pu me pencher ces dernières semaines</p>
                <div class="grid-projet">
                    <div class="description1">
                        <h2>La chabana - Onepage</h2>
                        <p>Un site statique simple onepage, <em>HTML/CSS</em> fait pour un restaurant dans lequel je travaillais, bien qu'ils aient pris une offre plus complète il a le mérite d'éxister !</p>
                        
                    </div>
                    <div  class="projet1">
                        <a href="/Projets/V1 onepage/index.html"><img src="Ressources/Site_Chabana.png" alt="Site Web la Chabana"></a>
                    </div>
                    <div class="description2">
                        <h2>La calculatrice</h2>
                        <p>Bien plus sobre, une idée simple pour pratiquer le placement avec <em>CSS</em> et <em>grid</em>, du <em>javascript</em> ainsi qu'un peu de <em>responsive</em>.</p>
                       
                    </div>
                    <div  class="projet2">
                        <a href="/Projets/Calculette/calc.html"><img src="Ressources/Calc.png" alt="Site Web la Chabana"></a>
                    </div>
                    <div class="description3">   
                        <h2>La chabana</h2>
                        <p>Le même site en version classique.</p>
                    </div>
                    <div  class="projet3">
                        <a href="/Projets/V1 classique/index.html"><img src="Ressources/Site_Chabana.png" alt="Site Web la Chabana"></a>
                    </div>
                </div>
            </div>
            <div id="Cv" class="div-impair">
                <h1>Compétences et qualités</h1>
                <div class="mesComp">
                    <div class="progress">Motivation<div class="back"><div class="frontMotiv"></div></div></div>
                    <div class="progress">Travail en équipe<div class="back"><div class="frontPro"></div></div></div>                    
                    <div class="progress">Rigeur<div class="back"><div class="frontPro"></div></div></div>
                    <div class="progress">Anglais<div class="back"><div class="frontAng"></div></div></div>
                    <div class="progress">HTML/CSS<div class="back"><div class="frontHtml" id="frontHtml"></div></div></div>                    
                    <div class="progress">Javascript<div class="back"><div class="frontJs"></div></div></div>
                    <div class="progress">Php<div class="back"><div class="frontPhp"></div></div></div>
                    <div class="progress">SQL<div class="back"><div class="frontSql"></div></div></div>
                    <a href="Ressources/CV Concepteur Développeur d’Application HumanBooster BASTELICA Antoine 2025.pdf" id="cv"><img src="Ressources/cv.png" alt="CV Bastelica Antoine"><br>Découvrez mon CV</a>
                    <a href="https://www.linkedin.com/in/antoinebastelica/" id="linkedIn"><img src="Ressources/LI-In-Bug.png" alt="Profil linkedIn"><br>Mon Profil linkedIn</a>
                </div>
                <!-- <embed src="Ressources/CV BASTELICA Antoine Alternance Dev Web OC.pdf" type="application/pdf"/> -->
            </div>
            <div id="contact" class="div-pair">
                <h1>Contact</h1>
                    <form method="post">
                        <div>
                            <input type="text" name="name" placeholder="Nom, Prénom" required>
                        </div>
                        <div>
                            <input type="text" name="objet" placeholder="Objet" required>
                        </div>
                        <div>
                            <input type="email" name="email" placeholder="Email" required>
                        </div>
                        <div>
                            <textarea id="message" name="message" placeholder="Message" required></textarea>
                        </div>
                        <div>
                            <button type="submit">Envoyer</button>
                        </div>
                    </form>
                    <?php 
                        if (isset($_POST['message']))
                        {
                            $message = "Message envoyé depuis le site perso 
                            De : ".htmlspecialchars($_POST['name'])."
                            Email : ".htmlspecialchars($_POST['email'])."
                            Message : ".htmlspecialchars($_POST['message']);
                            mail("antoine.bastel@gmail.com",htmlspecialchars($_POST['objet']),$message,"From:contact@antoinebastelica.fr\r\nReply-to:".htmlspecialchars($_POST['email']));
                        }
                    ?>

            </div>
            <div id="formation" class="div-impair">
                <h1>Formations</h1>
                <ul>
                    <li>
                        Alternance <em>Développeur Fullstack</em> + <em>Bootcamp</em> - <em>HumanBooster </em><br>Titre <em>RNCP</em> de <em>niveau 6 (Bac+3/4)</em> - Recherche en cours<br><a href="https://humanbooster.com/nos-programmes/developpeur-fullstack-java-angular/">En savoir plus sur la formation</a>
                    </li>
                    <li>
                        <em>Autoformation</em> et <em>projets</em> Développeur web - En cours<br>Html - CSS - SQL - Javascript - Php
                    </li>
                    <li>
                        Technicien vendeur option sport de glisse - <em>CNPC</em>
                    </li>
                    <li>
                        Baccalauréat technologique <em>STI2D</em> option <em>SIN</em> - <em>Lycée Paul Héroult</em>
                    </li>
                </ul>
            </div>
        </main>
        <footer>
            <!-- A vérifier -->
            <p>© 2025 <em>BASTELICA Antoine</em> | Tous droits réservés</p>
        </footer>
    </body>
</html>