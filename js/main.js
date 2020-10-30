var game;

window.onload = function () {
  //On Page Load
  var config = {
    type: Phaser.AUTO,
    width: 480,
    height: 640,
    parent: "LoadGame",
    scene: [BootScene, SceneOne, SceneTwo],
    audio: {
      disableWebAudio: true,
    },
  };

  game = new Phaser.Game(config);
};
