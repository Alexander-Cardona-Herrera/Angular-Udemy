/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor ={
    volumen: 90,
    segundo: 36,
    cancion: 'Shape of you',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2016
    }
}
const autor = 'fulano'

const {volumen, segundo, cancion, detalles} = reproductor;
const {autor: autorDetalles, anio} = detalles;

// console.log(' El volumen actual es:', volumen);
// console.log(' El segundo actual es:', segundo);
// console.log(' La cancion actual es:', cancion);
// console.log(' El autor es:', autorDetalles);

const dbz: string[] = ['Goku', 'Vegueta', 'Gohan'];
const [p1, , p3] = dbz

console.log('Personaje 1:', p1);
console.log('Personaje 3:', p3);
