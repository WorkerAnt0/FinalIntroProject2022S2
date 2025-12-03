kaboom({
  background: [0, 0, 0],
  width: 1500,
  height: 1000,
  tiled: true,
  stretch: true,
  letterbox: true,
});

//Images
loadSprite("Space ship", "ship5-Sheet.png", {
  sliceX: 3,
  sliceY: 0,
  anims: {
    run: {
      from: 0,
      to: 2,
      speed: 10,
      loop: true,
    },
  },
});
loadSprite("Communication", "AlienCom1.png", {
  sliceX: 3,
  sliceY: 0,
  anims: {
    run: {
      from: 0,
      to: 100,
      speed: 10,
    },
  },
});
loadSprite("Fireball", "Fireball-Sheet.png", {
  sliceX: 27,
  sliceY: 0,
  anims: {
    run: {
      from: 4,
      to: 9,
      speed: 10,
      loop: true,
      lifespan: 1,
      fade: 0.5,
    },
  },
});
loadSprite("BurntEarth", "BurntEarth.png", {
  width: 50,
  height: 50,
  sliceX: 50,
  anims: {
    run: {
      from: 0,
      to: 49,
      speed: 12,
      loop: true,
    },
  },
});
loadSprite("Earth", "Earth.png", {
  width: 50,
  height: 50,
  sliceX: 50,
  anims: {
    run: {
      from: 0,
      to: 49,
      speed: 10,
      loop: true,
    },
  },
});
loadSprite("Alien enemy", "SpriteSheets/alien_ss.png", {
  sliceX: 4,
  sliceY: 0,
  anims: {
    run: {
      from: 0,
      to: 3,
      speed: 10,
      loop: true,
    },
  },
});
loadSprite("shield", "SpriteSheets/SpaceShooterAssetPack_Miscellaneous.png", {
  sliceX: 6,
  sliceY: 4,
  anims: {
    run: {
      from: 16,
      to: 17,
      speed: 2,
      loop: true,
    },
  },
});
loadSprite("textbox", "SpriteSheets/AlienCom1.png", {
  sliceX: 5,
  sliceY: 30,
  anims: {
    run: {
      from: 0,
      to: 140,
      speed: 30,
    },
  },
});
loadSprite("characters","SpriteSheets/SpaceShooterAssetPack_Characters (1).png", {
    sliceX: 5,
    sliceY: 10.99,
    anims: {
      allycom: {
        from: 10,
        to: 14,
        speed: 3,
      },
      aliencom: {
        from: 15,
        to: 18,
        speed: 7,
      },
    },
  }
);
loadSprite("Hearts", "SpriteSheets/Heart.png", {
  sliceX: 7,
  anims: {
    run1: {
      from: 0,
      to: 1,
      speed: 10,
    },
    run2: {
      from: 1,
      to: 2,
      speed: 10,
    },
    run3: {
      from: 2,
      to: 3,
      speed: 10,
    },
    run4: {
      from: 3,
      to: 4,
      speed: 10,
    },
    run5: {
      from: 4,
      to: 5,
      speed: 10,
    },
    run6: {
      from: 5,
      to: 6,
      speed: 10,
    },
  },
});
loadSprite("settingsicon", "SpriteSheets/settings.png", {
  sliceX: 5,
  sliceY: 6,
  anims: {
    run: {
      from: 0,
      to: 27,
      speed: 50,
      loop: true,
    },
  },
});
loadSprite("Laser", "Sprites/laser.png");
loadSprite("Bomb", "Sprites/bomb.png");
loadSprite("SpaceBackGround", "Sprites/SpaceBackGround.jpg");
loadSprite("RedSpace", "Sprites/RedSpace.png");

//Fonts
loadFont("GOR", "Fonts/god-of-war.ttf", 6, 8);
loadFont("KH", "Fonts/Kingdom_Hearts_Font.ttf", 6, 8);

//Sounds
loadSound("Explosion", "Soundeffects/explosion.wav");
loadSound("Shooting", "Soundeffects/laser-gun-19sf.mp3");
loadSound("menumusic", "Music/Beyond Fate.ogg");
loadSound("Victorymusic", "Music/Victory Tune.ogg");
loadSound("Losemusic", "Where My Home Is.mp3");
loadSound("Gamemusic", "Music/Komiku - Battle of Pogs.mp3");
loadSound("Buttonsound", "Soundeffects/Buttonsound.wav");

onLoad(() => {
  let MCanbeHeard = add([{ value: 2 }]);
  let SCanbeHeard = add([{ value: 2 }]);
  let Difficultymode = add([{ value: 2 }]);
  let Wavenum = 0
  
  let menumusic = play("menumusic", {
    volume: 0.7,
    loop: true,
  });

  let Losemusic = play("Losemusic", {
    volume: 1,
    loop: true,
  });

  let Victorymusic = play("Victorymusic", {
    volume: 1,
    loop: true,
  });

  let Gamemusic = play("Gamemusic", {
    volume: 0.8,
    loop: true,
  });
  
//Start menu
  //Menu music
  scene("Menu", () => {
    if (MCanbeHeard.value % 2 == 0) {
      Losemusic.stop();
      Victorymusic.stop();
      Gamemusic.stop();
      menumusic.play();
    }
  //Background
    add([
      sprite("SpaceBackGround"), scale(0.5), z(1)
    ]);
    add([
      "Defend Earth !",
      text("         Defend Earth", {
        font: "KH",
        size: 110,
      }),
      rotate(30, 60),
      pos(width() / 100, height() / 3),
      color(154, 205, 50),
      z(2),
    ]);
    add([
      sprite("Earth", { anim: "run" }),
      scale(3.5),
      opacity(0.98),
      pos(width() / 100, height() / 1.7),
      z(2),
    ]);
	  add([
      sprite("Communication", { anim: "run" }),
      scale(3.5),
      opacity(0.98),
      pos(width() / 100, height() / 1.7),
    ]);
    add([
      text("Space Invaders", {
        font: "KH",
        size: 180,
      }),
      pos(width() / 1.9, height() / 2.5),
      color(154, 205, 50),
      z(2),
      origin("center"),
    ]);
    //Buttons
    const NewGamebtn = add([
      "Button",
      "NewGame",
      text("New Game", {
        font: "GOR",
        size: 90,
      }),
      pos(width() / 2.77, height() / 2.33),
      area(),
      z(2),
    ]);
    NewGamebtn.onUpdate(() => {
      if (NewGamebtn.isHovering()) {
        NewGamebtn.color = rgb(255, 215, 0);
        NewGamebtn.scale = vec2(1.2);
        cursor("pointer");
      } else {
        NewGamebtn.scale = vec2(1);
        NewGamebtn.color = rgb(255, 215, 0);
        cursor("default");
      }
    });
    onClick("NewGame", () => {
      go("game");
    });
   /* const continuebtn = add([
      "Button",
      "continue",
      text("Continue", {
        font: "GOR",
        size: 90,
      }),
      pos(width() / 2.77, height() / 1.95),
      area(),
      z(2),
    ]);
    continuebtn.onUpdate(() => {
      if (continuebtn.isHovering()) {
        continuebtn.color = rgb(255, 215, 0);
        continuebtn.scale = vec2(1.2);
        cursor("pointer");
      } else {
        continuebtn.scale = vec2(1);
        continuebtn.color = rgb(255, 215, 0);
      }
    });
    onClick("continue", () => {
      Wavenum = localStorage.getItem("level") || 0
      go("game");
    });
    */
    const settingsbtn = add([
      "SettingsButton",
      "Button",
      sprite("settingsicon"),
      pos(),
      area({
        width: 100,
        height: 110,
      }),
      origin("topleft"),
      z(2),
    ]);
    settingsbtn.play("run");
    onClick("SettingsButton", () => {
      go("Settingsmenu");
    });
    settingsbtn.onUpdate(() => {
      if (settingsbtn.isHovering()) {
        settingsbtn.scale = vec2(1.6);
        cursor("pointer");
      } else {
        settingsbtn.scale = vec2(1.3);
      }
    });
    onClick("Button", () => {
      if (SCanbeHeard.value % 2 == 0) {
        play("Buttonsound", {
          volume: 1,
        });
      }
    });
	add([
      sprite("textbox", { anim: "run" }),
      scale(1.5),
      pos(width() / 2.4, height() / 1500),
      z(2),
    ]);
    /*
    //Dialogue
    add([
      sprite("characters", { anim: "allycom" }),
      scale(15),
      pos(width() / 2.2, height() / 20),
      z(3),
    ]);
    onDraw(() => {
      add([
        drawTriangle({
          p1: vec2(190, 190),
          p2: vec2(180, 215),
          p3: vec2(200, 215),
          pos: vec2(width() / 0.92, height() / 2.8),
          color: rgb(0, 0, 255),
          outline: { width: 2, color: rgb(0, 0, 0) },
          angle: 180,
        }),
        z(4),
      ]);
    });
    */
  });
  
  
//Settings
  scene("Settingsmenu", () => {
    add([sprite("SpaceBackGround"), scale(0.5), z(1)]);
    //Settings music
    onUpdate(() => {
      if (MCanbeHeard.value % 2 == 0) {
        menumusic.play();
        Losemusic.pause();
      } else if (MCanbeHeard.value % 2 == 1) {
        menumusic.pause();
        Losemusic.pause();
      }
    });
    //Button
    const backbtn = add([
      "back",
      text("Back", {
        font: "GOR",
        size: 90,
      }),
      "Button",
      pos(0, 1000),
      area({
        width: 230,
        height: 190,
      }),
      origin("botleft"),
      z(2),
    ]);
    backbtn.onUpdate(() => {
      if (backbtn.isHovering()) {
        backbtn.color = rgb(255, 215, 0);
        backbtn.scale = vec2(1.2);
        cursor("pointer");
      } else {
        backbtn.scale = vec2(1);
        backbtn.color = rgb(255, 215, 0);
        cursor("default");
      }
    });
    onClick("back", () => {
      go("Menu");
    });
    const SFXbtn = add([
      "SFX",
      text("SFX: OFF", {
        font: "GOR",
        size: 90,
      }),
      pos(width() / 2.5, height() / 5),
      area(),
      z(2),
      "Button",
    ]);
    onClick("SFX", () => {
      SCanbeHeard.value += 5;
      if (SCanbeHeard.value % 2 == 1) {
        play("Buttonsound", {
          volume: 1,
        });
      }
    });
    SFXbtn.onUpdate(() => {
      if (SFXbtn.isHovering()) {
        SFXbtn.color = rgb(255, 215, 0);
        SFXbtn.scale = vec2(1.2);
        cursor("pointer");
      } else {
        SFXbtn.scale = vec2(1);
        SFXbtn.color = rgb(255, 215, 0);
      }
    });
    const Musicbtn = add([
      "Music",
      text("Music: OFF", {
        font: "GOR",
        size: 90,
      }),
      pos(width() / 3, height() / 3.3),
      area(),
      "Button",
      z(2),
    ]);
    Musicbtn.onUpdate(() => {
      if (Musicbtn.isHovering()) {
        Musicbtn.color = rgb(255, 215, 0);
        Musicbtn.scale = vec2(1.2);
        cursor("pointer");
      } else {
        Musicbtn.scale = vec2(1);
        Musicbtn.color = rgb(255, 215, 0);
      }
    });
    onClick("Music", () => {
      MCanbeHeard.value += 5;
      if (SCanbeHeard.value % 2 == 0) {
        play("Buttonsound", {
          volume: 0.4,
        });
      }
    });
    const Fullscreenbtn = add([
      "Fullscreen",
      "Button",
      text("Fullscreen: OFF", {
        font: "GOR",
        size: 90,
      }),
      pos(width() / 6.5, height() / 2.5),
      area(),
      z(2),
    ]);
    Fullscreenbtn.onUpdate(() => {
      if (Fullscreenbtn.isHovering()) {
        Fullscreenbtn.color = rgb(255, 215, 0);
        Fullscreenbtn.scale = vec2(1.2);
        cursor("pointer");
      } else {
        Fullscreenbtn.scale = vec2(1);
        Fullscreenbtn.color = rgb(255, 215, 0);
      }
    });
    const difficultybtn = add([
      "difficulty",
      text("Difficulty: Normal", {
        font: "GOR",
        size: 90,
      }),
      pos(width() / 8, height() / 2),
      area(),
      z(2),
      "Button",
    ]);
    difficultybtn.onUpdate(() => {
      if (difficultybtn.isHovering()) {
        difficultybtn.color = rgb(255, 215, 0);
        difficultybtn.scale = vec2(1.2);
        cursor("pointer");
      } else {
        difficultybtn.scale = vec2(1);
        difficultybtn.color = rgb(255, 215, 0);
      }
    });
    onClick("difficulty", () => {
      Difficultymode.value += 1;
    });
    function updateText() {
      Fullscreenbtn.text = `
  ${isFullscreen() ? "Fullscreen: ON" : "Fullscreen: OFF"}
`.trim();
      Musicbtn.text = `
  ${MCanbeHeard.value % 2 == 0 ? "Music: ON" : "Music: OFF"}
`.trim();
      SFXbtn.text = `
  ${SCanbeHeard.value % 2 == 0 ? "SFX: ON" : "SFX: OFF"}
`.trim();
      difficultybtn.text = `
  ${Difficultymode.value % 2 == 0 ? "Difficulty: Normal" : "Difficulty: Hard"}
`.trim();
    }
    onUpdate(updateText);
    onClick("Fullscreen", () => {
      fullscreen(!isFullscreen());
    });
    onClick("Button", () => {
      if (SCanbeHeard.value % 2 == 0) {
        play("Buttonsound", {
          volume: 1,
        });
      }
    });
  });
  
//Lose menu
  scene("Lose", () => {
    //Defeat music
    if (MCanbeHeard.value % 2 == 0) {
      menumusic.stop();
      Victorymusic.stop();
      Gamemusic.stop();
    }
    wait(0.3, () => {
      if (Losemusic.isStopped() && MCanbeHeard.value % 2 == 0) {
        Losemusic.play();
      }
    });
    //Background
    add([
      sprite("RedSpace"), scale(3, 2), pos(), z(1)
        ]);
    add([
      sprite("BurntEarth", { anim: "run" }),
      scale(3.5),
      pos(width() / 10, height() / 1.7),
      z(2),
    ]);
    //Buttons
    const Retrybtn = add([
      text("Retry", {
        font: "GOR",
        size: 90,
      }),
      "RetryButton",
      "Button",
      pos(width() / 2, height() / 2),
      color(255, 215, 0),
      area(),
      z(2),
    ]);
    Retrybtn.onUpdate(() => {
      if (Retrybtn.isHovering()) {
        Retrybtn.color = rgb(255, 215, 0);
        Retrybtn.scale = vec2(1.2);
        cursor("pointer");
      } else {
        Retrybtn.scale = vec2(1);
        Retrybtn.color = rgb(255, 215, 0);
        cursor("default");
      }
    });
    const Menubtn = add([
      "Menu",
      text("Menu", {
        font: "GOR",
        size: 90,
      }),
      "Button",
      pos(),
      area(),
      origin("topleft"),
      z(2),
    ]);
    onClick("Menu", () => {
      go("Menu");
    });
    Menubtn.onUpdate(() => {
      if (Menubtn.isHovering()) {
        Menubtn.color = rgb(255, 215, 0);
        Menubtn.scale = vec2(1.2);
        cursor("pointer");
      } else {
        Menubtn.scale = vec2(1);
        Menubtn.color = rgb(255, 215, 0);
      }
    });
    onClick("RetryButton", () => {
      go("game");
    });
    onClick("Button", () => {
      if (SCanbeHeard.value % 2 == 0) {
        play("Buttonsound", {
          volume: 1,
        });
      }
    });
  });
  
//Win Menu
     //Victory music
  scene("Win", () => {
    if (MCanbeHeard.value % 2 == 0) {
      menumusic.stop();
      Losemusic.stop();
      Gamemusic.stop();
      Victorymusic.play();
    }
    //Background
    add([
      sprite("SpaceBackGround"), scale(0.5), z(1)
        ]);
    add([text("You Win !"), color(GREEN), z(2)]);
    onClick("Button", () => {
      if (SCanbeHeard.value == 0) {
        play("Buttonsound", {
          volume: 1,
        });
      }
    });
    //Buttons
     const Retrybtn = add([
      text("Retry", {
        font: "GOR",
        size: 90,
      }),
      "RetryButton",
      "Button",
      pos(width() / 2.5, height() / 2),
      color(255, 215, 0),
      area(),
      z(2),
    ]);
    Retrybtn.onUpdate(() => {
      if (Retrybtn.isHovering()) {
        Retrybtn.color = rgb(104,173,105);
        Retrybtn.scale = vec2(1.2);
        cursor("pointer");
      } else {
        Retrybtn.scale = vec2(1);
        Retrybtn.color = rgb(104,173,105);
        cursor("default");
      }
    });
    onClick("RetryButton", () => {
      go("game");
    });
    const Menubtn = add([
      "Menu",
      text("Menu", {
        font: "GOR",
        size: 90,
      }),
      "Button",
      pos(width() / 2.5, height() / 2.5),
      area(),
      z(2),
    ]);
    onClick("Menu", () => {
      go("Menu");
    });
    Menubtn.onUpdate(() => {
      if (Menubtn.isHovering()) {
        Menubtn.color = rgb(104,173,105);
        Menubtn.scale = vec2(1.2);
        cursor("pointer");
      } else {
        Menubtn.scale = vec2(1);
        Menubtn.color = rgb(104,173,105);
      }
    });
    onClick("Button", () => {
      if (SCanbeHeard.value % 2 == 0) {
        play("Buttonsound", {
          volume: 1,
        });
      }
    });
  });

//Game
    //Battle music
   scene("game", () => {
     Wavenum = localStorage.getItem("scene")
    if (MCanbeHeard.value % 2 == 0) {
      Losemusic.stop();
      Victorymusic.stop();
      menumusic.stop();
    }
    wait(0.5, () => {
      if (Gamemusic.isStopped() && MCanbeHeard.value % 2 == 0) {
        Gamemusic.play();
      }
    });
    //Background
    add([sprite("SpaceBackGround"), scale(0.5), z(1)]);
    const Hearts = add([
    sprite("Hearts"),
    pos(width() / 1500, height() / 1.1),
    scale(6),
    z(2),
    ]);
    cursor("default");
  //Player ship
    const player = add([
      sprite("Space ship"), 
      scale(0.2, 0.2),
      pos(width() / 2, height() - 50), 
      area(), 
      health(6),
      origin("center"),
      z(2),
      {
        immunity: false,
      },
    ]);
    player.play("run");
    //Player HP
     let Hp = add([{ value: 6 }]);
    player.onCollide("alien", (a) => {
      if (player.immunity == false) {
        player.hurt(1);
        destroy(a);
        score.value += 5;
        score.text = "Score:" + score.value;
      }
    });
     player.onCollide("bomb", (b) => {
      if (player.immunity == false) {
        player.hurt(1);
        destroy(b);
      }
    });
    //Player damage
    player.on("hurt", () => {
      Hp.value -= 1;
      add([
        sprite("Fireball", { anim: "run" }),
        lifespan(0.5, { fade: 0.18 }),
        pos(player.pos.x - 60, player.pos.y - 50),
        z(3),
      ]);
      if (SCanbeHeard.value % 2 == 0) {
        play("Explosion", {
          volume: 0.6,
        });
      }
      if (Hp.value == 5) {
        Hearts.play("run1");
      } else if (Hp.value == 4) {
        Hearts.play("run2");
      } else if (Hp.value == 3) {
        Hearts.play("run3");
      } else if (Hp.value == 2) {
        Hearts.play("run4");
      } else if (Hp.value == 1) {
        Hearts.play("run5");
      } else if (Hp.value == 0) {
        Hearts.play("run6");
      }
      player.immunity = true;
      wait(1, () => {
        player.immunity = false;
        player.hidden = false;
      });
    });
    player.on("death", () => {
      destroy(player);
      shake();
      wait(0.5, () => {
        go("Lose");
      });
    });
    //Player immunity
    //Player laser
    function laser() {
      onKeyPress("space", () => {
        if (SCanbeHeard.value % 2 == 0) {
          play("Shooting", {
            volume: 0.7,
          });
        }
        add([
          "laser",
          sprite("Laser"),
          scale(0.32, 0.32),
          color(255, 0, 255),
          area(),
          pos(player.pos.x - 10, player.pos.y),
          move(UP, 1200),
          cleanup(),
          z(2),
        ]);
      });
    }
    laser();
    //Player movement
    const SPEED = 350;
    onKeyDown("up", () => {
      if (player.pos.y > 0 + 28) {
        player.move(0, -SPEED);
      }
    });
    onKeyDown("right", () => {
      if (player.pos.x < width() - 30) {
        player.move(SPEED, 0);
      }
    });

    onKeyDown("left", () => {
      if (player.pos.x > 0 + 30) {
        player.move(-SPEED, 0);
      }
    });

    onKeyDown("down", () => {
      if (player.pos.y < height() - 28) {
        player.move(0, SPEED);
      }
    });
    //Score
    const score = add([
      text("Score:", {
        font: "GOR",
        size: 90,
      }),
      color(165, 42, 42),
      pos(10, 10),
      { value: 0 },
      z(3),
    ]);
  //Aliens 
     if(Difficultymode.value % 2 == 0)
     onUpdate("alien", (a) => {
      if (Math.random() < 0.002) {
        const bPos = a.pos.add(0, a.height / 2);
        add([
          color(189, 183, 107),
          "bomb",
          pos(bPos),
          sprite("Bomb"),
          scale(1.5, 1),
          area(),
          move(DOWN, 525),
          cleanup(),
          z(2),
        ]);
      }
    });
   else if(Difficultymode.value % 2 == 1)
     onUpdate("alien", (a) => {
      if (Math.random() < 0.003) {
        const bPos = a.pos.add(0, a.height / 2);
        add([
          color(189, 183, 107),
          "bomb",
          pos(bPos),
          sprite("Bomb"),
          scale(1.5, 1),
          area(),
          move(DOWN, 525),
          cleanup(),
          z(2),
        ]);
      }
    });
        onCollide("laser", "alien", (l, a) => {
    destroy(a);
    destroy(l);
    score.value += 5;
    score.text = "Score:" + score.value;
  });
    //Alien movement
    function createAlien(x, y) {
      // const tx = x;
      const out = add([
       "alien",
       sprite("Alien enemy", {
        anim: "run",
        width: 60,
        height: 60,
        }),
        pos((x += 30), (y += 30)),
        area(),
        z(2),
        origin("center"),
      ]);
      return out;
    }
    onUpdate("alien", (a) => {
      if (a.pos.y > height()) {
        go("Lose");
      }
    });
    add([
      "col-left",
      // rect(10, height()),
      // outline(),
      area({ width: 0, height: height() }),
      pos(-10, 0),
    ]);

    add([
      "col-right",
      // rect(width(), height()),
      // outline(),
      area({ width: width(), height: height() }),
      pos(width() + 10, 0),
    ]);

     if(Difficultymode.value % 2 == 0 ) {
    const aliens = [];
  for (let i = 0; i < 18; i++) {
    for (let j = 0; j < 3; j++) {
      aliens.push(createAlien(i * 75, j * 75));
      }
    }
     }
     else if (Difficultymode.value % 2 == 1 ) {
    const aliens = [];
  for (let i = 0; i < 18; i++) {
    for (let j = 0; j < 4; j++) {
      aliens.push(createAlien(i * 75, j * 75));
      }
    }
     }
     
    var dir = 3;
    var didLeft = true;
    var y = 10;
    onUpdate("alien", (alien) => {
      alien.pos.x += dir;
    });
    
    onCollide("col-left", "alien", () => {
      if (!didLeft) {
        dir = -dir;
        every("alien", (e) => (e.pos.y += y));
        didLeft = true;
      }
    });

    onCollide("col-right", "alien", () => {
      if (didLeft) {
        dir = -dir;
        every("alien", (e) => (e.pos.y += y));
        didLeft = false;
      }
    });
     onUpdate(() => {
      if (score.value == 270) {
        go("Boss");
      }
    });
  }); //Closing game
  
//Boss
     scene("Boss", () => {
       Wavenum ++
       localStorage.setItem("scene",Wavenum)
           if (MCanbeHeard.value % 2 == 0) {
      Losemusic.stop();
      Victorymusic.stop();
      menumusic.stop();
    }
    wait(0.5, () => {
      if (Gamemusic.isStopped() && MCanbeHeard.value % 2 == 0) {
        Gamemusic.play();
      }
    });
    //Background
    add([sprite("SpaceBackGround"), scale(0.5), z(1)]);
    const Hearts = add([
    sprite("Hearts"),
    pos(width() / 1500, height() / 1.1),
    scale(6),
    z(2),
    ]);
    cursor("default");
  //Player ship
    const player = add([
      sprite("Space ship"), 
      scale(0.2, 0.2),
      pos(width() / 2, height() - 50), 
      area(), 
      health(6),
      origin("center"),
      z(2),
      {
        immunity: false,
      },
    ]);
    player.play("run");
    //Player HP
     let Hp = add([{ value: 6 }]);
    player.onCollide("alien", (a) => {
      if (player.immunity == false) {
        player.hurt(1);
        destroy(a);
      }
    });
     player.onCollide("bomb", (b) => {
      if (player.immunity == false) {
        player.hurt(1);
        destroy(b);
      }
    });
       onCollide("laser", "alien", (l, a) => {
    a.hurt(5);
    destroy(l);
  });
    //Player damage
    player.on("hurt", () => {
      Hp.value -= 1;
      add([
        sprite("Fireball", { anim: "run" }),
        lifespan(0.5, { fade: 0.18 }),
        pos(player.pos.x - 60, player.pos.y - 50),
        z(3),
      ]);
      if (SCanbeHeard.value % 2 == 0) {
        play("Explosion", {
          volume: 0.6,
        });
      }
      if (Hp.value == 5) {
        Hearts.play("run1");
      } else if (Hp.value == 4) {
        Hearts.play("run2");
      } else if (Hp.value == 3) {
        Hearts.play("run3");
      } else if (Hp.value == 2) {
        Hearts.play("run4");
      } else if (Hp.value == 1) {
        Hearts.play("run5");
      } else if (Hp.value == 0) {
        Hearts.play("run6");
      }
      player.immunity = true;
      wait(1, () => {
        player.immunity = false;
        player.hidden = false;
      });
    });
    player.on("death", () => {
      destroy(player);
      shake();
      wait(0.5, () => {
        go("Lose");
      });
    });
    //Player immunity
    //Player laser
    function laser() {
      onKeyPress("space", () => {
        if (SCanbeHeard.value % 2 == 0) {
          play("Shooting", {
            volume: 0.7,
          });
        }
        add([
          "laser",
          sprite("Laser"),
          scale(0.32, 0.32),
          color(255, 0, 255),
          area(),
          pos(player.pos.x - 10, player.pos.y),
          move(UP, 1200),
          cleanup(),
          z(2),
        ]);
      });
    }
    laser();
    //Player movement
    const SPEED = 350;
    onKeyDown("up", () => {
      if (player.pos.y > 0 + 28) {
        player.move(0, -SPEED);
      }
    });
    onKeyDown("right", () => {
      if (player.pos.x < width() - 30) {
        player.move(SPEED, 0);
      }
    });
    onKeyDown("left", () => {
      if (player.pos.x > 0 + 30) {
        player.move(-SPEED, 0);
      }
    });

    onKeyDown("down", () => {
      if (player.pos.y < height() - 28) {
        player.move(0, SPEED);
      }
    });
   
       let bosshealth = 200
       
       const boss = add([
		sprite("Alien enemy",{
               anim: "run"
               }),
		area(),
		pos(width() / 100, 60),
		health(bosshealth),
         z(3),
		scale(4),
		"alien",
	])
      add([
      "col-left",
      // rect(10, height()),
      // outline(),
      area({ width: 0, height: height() }),
      pos(-10, 0),
    ]);

    add([
      "col-right",
      // rect(width(), height()),
      // outline(),
      area({ width: width(), height: height() }),
      pos(width() + 10, 0),
    ]);
 
    var dir = 6;
    var didLeft = true;
    var y = 20;
    onUpdate("alien", (alien) => {
      alien.pos.x += dir;
    });
    
    onCollide("col-left", "alien", () => {
      if (!didLeft) {
        dir = -dir;
        every("alien", (e) => (e.pos.y += y));
        didLeft = true;
      }
    });

    onCollide("col-right", "alien", () => {
      if (didLeft) {
        dir = -dir;
        every("alien", (e) => (e.pos.y += y));
        didLeft = false;
      }
    });
       
       if(Difficultymode.value % 2 == 0) {
       onUpdate("alien", (a) => {
      if (Math.random() < 0.04) {
        const bPos = a.pos.add(0, a.height / 2);
        add([
          color(189, 183, 107),
          "bomb",
          pos(bPos),
          sprite("Bomb"),
          scale(1.5, 1),
          area(),
          move(DOWN, 525),
          cleanup(),
          z(2),
        ]);
      }
    })
       }
       if(Difficultymode.value % 2 == 1) {
       onUpdate("alien", (a) => {
      if (Math.random() < 0.06) {
        const bPos = a.pos.add(0, a.height / 2);
        add([
          color(189, 183, 107),
          "bomb",
          pos(bPos),
          sprite("Bomb"),
          scale(1.5, 1),
          area(),
          move(DOWN, 525),
          cleanup(),
          z(2),
        ]);
      }
    })
       }
	boss.onHurt(() => {
		healthbar.set(boss.hp())
	})

	boss.onDeath(() => {
		go("Win")
	})
	const healthbar = add([
		rect(width(), 40),
		pos(0, 0),
		color(127, 255, 127),
      z(3),
		{
			max: bosshealth,
			set(hp) {
				this.width = width() * hp / this.max
				this.flash = true
			},
		},
	])
	healthbar.onUpdate(() => {
		if (healthbar.flash) {
			healthbar.color = rgb(255, 255, 255)
			healthbar.flash = false
		} else {
			healthbar.color = rgb(127, 255, 127)
		}
	})
      if(Difficultymode.value % 2 == 1) {
        bosshealth += 200
        dir += 2
        }
})
    go("Menu");
  }); //Closing onload
