/*
    ===== Código de TypeScript =====
*/

let habilidades: string[] = ['Dash', 'Counter', 'Healing'];

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

const personaje: Personaje = {
    nombre: 'Alexander',
    hp: 100,
    habilidades: ['Dash', 'Counter', 'Healing']
}

personaje.puebloNatal = 'Alexandria';

console.table( personaje );