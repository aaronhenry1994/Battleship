import { Gameboard } from '../src/gameboard.js';
import { Ship } from '../src/ship.js';
import { Player } from '../src/players.js';
import { Computer } from '../src/players.js';

const grid = document.getElementById('grid-container');

for (let x = 0; x < 10; x++) {
            for (let y = 0; y < 10; y++) {
                const boxDiv = document.createElement('div');
                boxDiv.style.width = '50px';
                boxDiv.style.height = '50px';
                boxDiv.style.backgroundColor = 'lightblue';
                boxDiv.style.border = '2px solid navy';
                boxDiv.style.margin = '1px';
                grid.appendChild(boxDiv);
            };
        };