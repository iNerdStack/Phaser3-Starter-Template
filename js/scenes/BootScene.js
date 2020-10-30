class BootScene extends Phaser.Scene {
  constructor() {
    super("BootScene");
  }

  preload() {
    this.load.json("assets", "assets/json/assets.json");
  }
  create() {
    this.scene.start("SceneOne");
  }
}
