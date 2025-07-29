import { pedirCarta ,valorCarta,crearCartaHtml} from "./";


/**
 * turno de la computadora
 * @param {number} puntosMinimos puntos minimos para que la computadora gane
 * @param {HTMLElement} puntosHTML HTML pra mostrar los puntos 
 * @param {HTMLElement} divCartasComputadora HTML pra mostrar las cartas  
 * @param {Array<string>} deck arreglo de cartas de la baraja 
 */
export const turnoComputadora = ( puntosMinimos,puntosHTML, divCartasComputadora,deck = [] ) => {
    if (!puntosMinimos) throw new Error('puntos minimos son necesarios');
    if (!puntosHTML) throw new Error('Argumento puntosHTML es necesario');
    
        let puntosComputadora = 0;

        do {
        const carta = pedirCarta(deck); 

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML[1].innerText = puntosComputadora;
            
        const imgCarta = crearCartaHtml(carta)    
        divCartasComputadora.append( imgCarta );
        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}