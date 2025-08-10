let secaoAtual = 0;
    const secoes = ["inicio", "recado1", "recado2", "recado3", "galeria", "final"];
    let audio;

    function iniciarViagem() {
        // Trocar "musica.mp3" pelo arquivo da sua música
        // Coloque o arquivo na mesma pasta ou um link válido
        audio = new Audio("musica.mp3"); // <-- COMENTE ESSA LINHA SE NÃO TIVER MÚSICA
        // audio.play(); // Descomente para tocar
        proximaSecao();
    }

    function proximaSecao() {
        document.getElementById(secoes[secaoAtual]).style.display = "none";
        secaoAtual++;
        if (secaoAtual < secoes.length) {
            document.getElementById(secoes[secaoAtual]).style.display = "flex";
        }
    }

    // Avança ao clicar na tela (exceto na inicial)
    document.body.addEventListener("click", function() {
        if (secaoAtual > 0 && secaoAtual < secoes.length - 1) {
            proximaSecao();
        }
    });