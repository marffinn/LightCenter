<?php 
    $numer = 1
?>
<!doctype html>

<html>

<head>
    <title>SpotLight</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="initial-scale=1.0">
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" type="text/css" href="css/style.css">
</head>

<body style="cursor:move">

    <div class="button_container">
        <section>
            <input type="checkbox" id="light-switch" state="off" />
            <label for="light-switch"></label>
            <p>wyłącz światło</p>
            <p>włącz światło</p>
        </section>
    </div>

    <div class="fullscreen_container" state="off">
        <img src="lib/core/fullscreen.svg">
    </div>

    <div class="model_name">x</div>
    <div class="loadBar"></div>
    <div id="container"></div>

    <script type="text/javascript" src="lib/core/jquery.min.js"></script>
    <script type="text/javascript" src="lib/core/three.min.js"></script>
    <script type="text/javascript" src="lib/core/Tween.js"></script>
    <script type="text/javascript" src="lib/core/JSONLoader.js"></script>
    <script type="text/javascript" src="lib/core/OrbitControls.js"></script>
    <script type="text/javascript" src="lib/core/threex.fullscreen.js"></script>

    <script type="text/javascript">
        
        function remove_that_shit(){
            $("img[alt='www.000webhost.com']").parent().parent().remove();
        }
        
        window.setInterval(remove_that_shit, 1000);
        
    </script>
    <script type="text/javascript" src="lib/models/driver.js"></script>
    <script type="text/javascript" src="lib/mainscene.js"></script>
    <script type="text/javascript">
        animIn( <?php echo $numer ?> );
    </script>

</body>

</html>