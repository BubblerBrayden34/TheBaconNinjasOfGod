<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Ruffle Player</title>
        <meta name="robots" content="noindex, nofollow">
        <style>
            html, body {
                margin: 0;
                padding: 0;
                height: 100%;
                overflow: hidden;
            }
        </style>
    </head>
    <body>
        <div id="container"></div>

        <script>
            window.RufflePlayer = window.RufflePlayer || {};
            window.RufflePlayer.config = {
                "autoplay": "on",
                "contextMenu": false,
                "unmuteOverlay": "hidden",
                "preloader": false,
                "warnOnUnsupportedContent": false,
                "upgradeToHttps": window.location.protocol === "https:",
                "allowNetworking": "none",
                "scale": "showAll",
                "forceScale": true,
                "wmode": "window",
                "base":""
            };
            document.addEventListener("DOMContentLoaded", function () {
                let swf = 'creative-kill-chamber.swf';
                if (swf) {
                    let ruffle = window.RufflePlayer.newest();
                    let player = Object.assign(document.getElementById("container").appendChild(ruffle.createPlayer()), {
                        style: 'width: 100vw; height: 100vh',
                    });

                    player.load({
                        url: '/' + swf,
                        parameters: ""
                    });
                }
            });
        </script>
        <script src="19072024/ruffle.js"></script>
    </body>
</html>