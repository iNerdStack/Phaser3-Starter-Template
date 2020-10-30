class SceneTwo extends Phaser.Scene {
  constructor() {
    super("SceneTwo");
  }

  //Preload assets
  preload() {
    //
  }

  create() {
    this.mainText = this.add.text(98, 26, "First Scene");
    this.mainText.setStroke("#3a230a", 3);
  }
  //update function
  update() {}
}
