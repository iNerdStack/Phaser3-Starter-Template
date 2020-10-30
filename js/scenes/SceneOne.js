class SceneOne extends Phaser.Scene {
  constructor() {
    super("SceneOne");
  }

  //Preload assets
  preload() {
    //
  }

  create() {
    this.mainText = this.add.text(190, 320, "First Scene");
    this.mainText.setStroke("#3a230a", 5);
  }
  //update function
  update() {}
}
