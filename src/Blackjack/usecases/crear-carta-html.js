/**
 * 
 * @param {string} carta 
 * @returns {HTMLImageElement} imagen de carta 
 */
export const crearCartaHtml = (carta)=> {

    if (!carta) throw new Error("la carta es necesaria");

    // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = document.createElement('img');
        imgCarta.src = `assest/cartas/${ carta }.png`; //3H, JD
        imgCarta.classList.add('carta');
    return imgCarta;
}