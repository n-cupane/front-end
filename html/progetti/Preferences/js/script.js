let form = document.getElementById("form");
let container = document.getElementById('container');
let fotografie = document.querySelectorAll('img');

form.addEventListener('submit', function(event){
    event.preventDefault();

    let colore = document.getElementById('colore').value;
    let font = document.getElementById('font').value;
    let classeFoto = document.querySelector('input[name="foto"]:checked').value;
    let percorsoFoto;

    for (let f of fotografie) {
        if(f.className == classeFoto) {
            percorsoFoto = f.src;
            break;
        }
    }
    
    container.innerHTML = '<h1>Titolo</h1>'
                        + '<p>Descrizione col font selezionato</p>'
                        + '<img src="" id="immagine">';

    container.style.fontFamily = font;

    document.querySelector('body').style.backgroundColor = colore;

    document.getElementById("immagine").setAttribute('src', percorsoFoto);


})


function selezionaImmagine(r) {
    
    for (let f of fotografie) {
        if(f.className == r.className) {
            f.style.border = '3px solid black';
        } else {
            f.style.border = '0';
        }
    }
}