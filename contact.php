<div id="contact" class="div-pair">
    <h1>Contact</h1>
        <form action="#contact" method="post">
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
                echo "<p>Message envoyé !</p>";
                $_POST['name'] = '';
                $_POST['objet'] = '';
                $_POST['email'] = '';
                $_POST['message'] = '';
            }
        ?>

</div>