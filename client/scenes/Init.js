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

        const level = [
            [  66,  966,  966,  966,  966,  966,  966,  966,  966,  96 ],
            [  66,  966,  966,  966,  966,  966,  966,  966,  966,  96 ],
            [  66,  966,  966,  966,  966,  966,  966,  966,  966,  96 ],
            [  66,  966,  966,  966,  966,  966,  966,  966,  966,  96 ],
            [  66,  966,  966,  966,  966,  966,  966,  966,  966,  96 ],
            [  66,  966,  966,  966,  966,  966,  966,  966,  966,  96 ],
            [  66,  966,  966,  966,  966,  966,  966,  966,  966,  96 ],
            [  66,  966,  966,  966,  966,  966,  966,  966,  966,  96 ],
            [  66,  966,  966,  966,  966,  966,  966,  966,  966,  96 ],
            [  66,  966,  966,  966,  966,  966,  966,  966,  966,  96 ],
            [  66,  966,  966,  966,  966,  966,  966,  966,  966,  96 ]
          ];
        
          const map = this.make.tilemap({ data: level, tileWidth: 32, tileHeight: 32 });
          const tiles = map.addTilesetImage("tiles");
          const layer = map.createDynamicLayer(0, tiles, 0, 0);

    }

    update(time,delta){
        // console.log(delta)
    }

}

export default Init;