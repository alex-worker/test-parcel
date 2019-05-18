import Phaser, {Game} from 'phaser';
import { TILE_SIZE, SCREEN_TILES_WIDTH, SCREEN_TILES_HEIGHT } from './config';
import Init from './scenes/Init';

const config = {
    type: Phaser.AUTO,
    scale: {
        plugins: [ 'AnimatedTilesd' ],
        mode: Phaser.Scale.FIT,
        // parent: 'phaser-example',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: SCREEN_TILES_WIDTH*TILE_SIZE,
        height: SCREEN_TILES_HEIGHT*TILE_SIZE
    },
    pixelArt: true,
    scene: [Init],
}

const game = new Game(config)
