import { Scene } from 'phaser';

class Init extends Scene {

    constructor() {
        super({ key: 'Init' });
        this.progressBar = null;
        this.progressCompleteRect = null;
        this.progressRect = null;

    }

    preload() {
        this.load.image('tiles', 'tiles.png');
    }

    create ()
    {
        this.add.image(400, 300, 'tiles');
    }

}

export default Init;