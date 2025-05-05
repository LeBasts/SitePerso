<div id="contact" class="div-pair">
    <h1>Contact</h1>
        <?php 
            if(array_key_exists('send', $_POST)) {
                @$name = htmlspecialchars($_POST['name']);
                @$objet = htmlspecialchars($_POST['objet']);
                @$email = htmlspecialchars($_POST['email']);
                @$message = htmlspecialchars($_POST['message']);
                $champs = ["nom" => $name,"objet" => $objet,"message" => $message, "email" => $email];
                $errormessage = '';
                $errornom ='';
                $erroremail ='';
                $errorobjet ='';
                $state = '';
                if (filter_var($email, FILTER_VALIDATE_EMAIL)){
                    $validMail = true;
                } else {
                    $validMail = false;
                    $erroremail = "Mail invalide";
                }
                foreach($champs as $nom => $champ){
                    if(empty($champ)){
                        ${"valid$nom"} = false;
                        ${"error$nom"} = "Champ ".$nom." vide";
                    } else {
                        ${"valid$nom"} = true;
                    }
                }

            }
            if (isset($message) && $validMail && $validnom && $validobjet && $validmessage)
            {   
                $messageMail = "Message envoyé depuis le site perso 
                De : ".$name."
                Email : ".$email."
                Message : ".$message;
                mail("antoine.bastel@gmail.com",$objet,$messageMail,"From:contact@antoinebastelica.fr\r\nReply-to:".$email);
                $state = "<p>Message envoyé !</p>";
            }
        ?>
        <form action="#contact" method="post">
            <div>
                <input type="text" name="name" placeholder="Nom, Prénom" value="<?= @$name?>">
                <p><?= @$errornom?></p>
            </div>
            <div>
                <input type="text" name="objet" placeholder="Objet" value="<?= @$objet?>">
                <p><?= @$errorobjet?></p>
            </div>
            <div>
                <input type="text" name="email" placeholder="Email" value="<?= @$email?>">
                <p><?= @$erroremail?></p>
            </div>
            <div>
                <textarea id="message" name="message" placeholder="Message"></textarea>
                <p><?= @$errormessage?></p>
                <p><?= @$state?></p>
            </div>
            <div>
                <button type="submit" name="send">Envoyer</button>
            </div>
        </form>
        <?php

        ?>
        

</div>