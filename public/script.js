document.addEventListener("DOMContentLoaded", function() {
    const text = "_CONFIRA OUTRAS INFORMAÇÕES"; // Texto a ser escrito
    const speed = 100; // Velocidade de digitação em milissegundos
    const loopDelay = 2000; // Tempo de espera entre loops em milissegundos

    let i = 0;
    let isLooping = false;

    function typeWriter() {
        if (!isLooping) {
            isLooping = true;
            setTimeout(() => {
                writeText();
            }, speed);
        }
    }

    function writeText() {
        if (i < text.length) {
            document.getElementById("typing-effect").innerHTML += text.charAt(i);
            i++;
            setTimeout(writeText, speed);
        } else {
            reset();
        }
    }

    function reset() {
        setTimeout(() => {
            document.getElementById("typing-effect").innerHTML = "";
            i = 0;
            isLooping = false;
            typeWriter();
        }, loopDelay);
    }

    typeWriter();
});
