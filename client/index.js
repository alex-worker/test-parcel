import Phaser, { Game } from 'phaser';
import { WIDTH, HEIGHT } from './config';
import Init from './scenes/Init';

const config = {
    type: Phaser.AUTO,
    width: WIDTH,
    height: HEIGHT,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false,
        },
    },
    // scene: [Init, Town, House_1, House_2],
    scene: [Init],
}

const game = new Game(config)