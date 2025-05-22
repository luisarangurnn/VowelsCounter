function findVocal() {
    const inputLetra = document.getElementById("arrayVocales").value.toLowerCase().match(/[aeiouáéíóú]/g);
     let conteo = 0;
     if (inputLetra) {
        conteo = inputLetra.length;
     }

    document.getElementById("vocalLen").innerText = `Las cantidad de vocales son ${conteo}`;
}