<html>

<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>AVGE</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css"
    integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
  <style>
    body {
      animation: fadeInAnimation ease 5s;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
      background-color: black;
    }

    .home-container-mobile {
      display: none;
    }

    @keyframes fadeInAnimation {
      0% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }

    @font-face {
      font-family: myFirstFont;
      src: url(../Press_Start_2P/PressStart2P-Regular.ttf);
    }

    div {
      font-family: myFirstFont;
    }

    .home-options-icon {
      max-height: 60px;
      max-width: 100px;
      cursor: pointer;
    }

    .home-options-text {
      font-family: myFirstFont;
      font-size: 1em;
      text-shadow: 1px 2px 0 rgb(82 80 80 / 50%);
      cursor: pointer;
    }

    .h3-icons {
      display: block;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
    }

    .home-options-item {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    button {
      border: 0;
      padding: 0;
      background: none;
      appearance: auto;
      writing-mode: horizontal-tb !important;
      letter-spacing: normal;
      word-spacing: normal;
      text-transform: none;
      text-indent: 0px;
      text-shadow: none;
      display: inline-block;
      text-align: center;
      align-items: flex-start;
      box-sizing: border-box;
    }

    .copyright {
      bottom: -10vh;
      left: 50%;
      transform: translateX(-50%);
      position: absolute;
    }

    h4 {
      display: block;
      margin-block-start: 1.33em;
      margin-block-end: 1.33em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
    }

    .awge-copyright-text {
      font-family: myFirstFont;
      font-weight: normal;
      color: white;
      font-size: 0.8em;
      line-height: 1.5em;
      width: 100vw;
      margin: 0;
    }

    .home-nav-vid {
      border-radius: 4px;
      height: 30vh;
      width: 355px;
      /* box-shadow: 3px 3px 10px rgb(0 0 0 / 46%); */
      transform: translateX(-50%) translateY(-50%);
      overflow: hidden;
      min-height: 130px;
    }

    .home-center-tab {
      z-index: 0px;
      width: 45vw;
      height: 47vh;
      background-color: #e6e2e2;
      border: 2px solid black;
      border-radius: 7px;
      position: relative;
      top: 85;
    }

    .background-screen {
      position: absolute;
      height: 80%;
      width: 100%;
    }

    #background-stage {
      width: 90%;
      height: 50%;
      bottom: 0;
      left: 5%;
    }

    #top-row {
      display: none;
    }

    @media screen and (max-width: 1300px) {
      .home-nav-vid {
        width: 250px;
        height: 25vh;
      }
    }

    @media screen and (max-width: 900px) {
      .home-nav-vid {
        width: 200px;
        height: 20vh;
      }

      .home-options-icon {
        height: 50px;
        width: 60px;
        cursor: pointer;
      }

      .home-options-text {
        font-family: myFirstFont;
        font-size: 0.8em;
        text-shadow: 1px 2px 0 rgb(82 80 80 / 50%);
        cursor: pointer;
      }
    }
    
    /* @media screen and (max-width: 800px) and (orientation: portrait) {
      .home-center-tab {
        width: 45vw;
        height: 47vh;
        top: 105;
      }
    } */

    /* orientation: portrait */
    @media screen and (max-width: 600px) {

      .background-screen {
        position: absolute;
        height: 100%;
        width: 100%;
      }

      .home-center-tab {
        width: 45vw;
        height: 57vh;
        top: 105;
      }

      .home-nav-vid {
        
        width: 150px;
        height: 13vh;
      }

      .home-options-icon {
        height: 40px;
        width: 50px;
        cursor: pointer;
      }

      .home-options-text {
        font-family: myFirstFont;
        font-size: 0.4em;
        text-shadow: 1px 2px 0 rgb(82 80 80 / 50%);
        cursor: pointer;
      }

      #upper-row-free-col {
        display: none;
      }

      /* .home-options-row {
        top: 50;
      } */

      #top-row {
        display: block;
      }
    }

    /* @media screen and (min-width: 480px) and (orientation: portrait),
    screen and (max-height: 480px) and (orientation: landscape) {
      .body-wrapper {
        display: none;
      }

      .home-content-mobile {
        display: block;
        height: 100%;
        width: 100%;
        background: #dbdbdb;
      }

      .home-navbar-mobile {
        display: block;
        top: inherit;
        border-radius: 0;
        border: none;
        box-shadow: 0 4px 4px 1px rgb(31 30 30 / 70%);
        text-align: center;
        padding: 13px 0;
      }

      .home-navbar {
        background: #d4cdcd;
        color: black;
        position: relative;
      }

      .home-container-mobile {
        width: 100%;
        display: flex;
        flex-direction: column;
        height: calc(100% - 60px);
      }

      .home-section-video-mobile {
        flex: 1;
        position: relative;
      }

      .home-video-ipad-mobile {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        height: 170px;
        width: 210px;
      }

      .home-video-wrapper-mobile {
        position: absolute;
        top: 50%;
        left: 50%;
        overflow: hidden;
        border-radius: 5px;
        transform: translateX(-50%) translateY(-50%) translateY(-7px);
        height: 124px;
        width: 180px;
      }

      button {
        border: 0;
        padding: 0;
        background: none;
        color: inherit;
        font: inherit;
        appearance: auto;
        writing-mode: horizontal-tb !important;
        text-rendering: auto;
        letter-spacing: normal;
        word-spacing: normal;
        text-transform: none;
        text-indent: 0px;
        text-shadow: none;
        display: inline-block;
        text-align: center;
        align-items: flex-start;
        cursor: default;
        box-sizing: border-box;
        margin: 0em;
      }

      .home-video-text {
        right: 0;
        top: 50%;
        padding-bottom: 7px;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        display: inline-table;
      }

      .home-video-text {
        font-family: 'Press Start 2P', monospace;
        font-weight: normal;
        color: white;
        -webkit-user-drag: none;
        -webkit-user-select: none;
        position: absolute;
        z-index: 2;
        font-size: 0.9em;
        cursor: pointer;
      }

      h1 {
        margin-block-start: 0.67em;
        margin-block-end: 0.67em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
      }

      .home-video-gif-mobile {
        height: 100%;
        width: 100%;
      }

      .home-section-button-mobile {
        flex: 0.5;
        display: flex;
        justify-content: center;
        align-items: flex-end;
      }

      .home-section-button-row-mobile {
        flex: 1;
      }

      .home-options-wrapper {
        display: inline-block;
      }

      .home-options-wrapper {
        -webkit-user-drag: none;
        -webkit-user-select: none;
        cursor: pointer;
      }

      .home-options-icon {
        max-height: 8.6vh;
        max-width: 32vw;
        cursor: pointer;
      }

      .home-options-text {
        font-size: 0.9em;
        font-family: 'Press Start 2P', monospace;
        font-weight: normal;
        text-shadow: 1px 2px 0 rgb(82 80 80 / 50%);
        cursor: pointer;
      }

      h3 {
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
      }

      .home-options-icon-image {
        margin-bottom: -5px;
      }

      .home-section-copyright-mobile {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 0.45;
      }

      .awge-copyright-text {
        line-height: 1.2em;
        font-family: 'Press Start 2P', monospace;
        font-weight: normal;
        color: white;
        font-size: 0.7em;
        width: 100vw;
        margin: 0;
      }
    } */
  </style>
</head>

<body>
  <div class="body">
    <img src="pics/stage-show.gif" class="background-screen" id="background-stage">
    <div class="body-wrapper">
      <img src="pics/home-background-2.gif" class="background-screen">
      <img src="pics/border-stretched-2.png" class="background-screen">

      <center>
        <div class="home-center-tab">

          <div class="home-nav"
            style="z-index: px; background-color: #d4cdcd; border: 3px solid #979797; text-align: left; color: black; position: relative; top: -4px; border-radius: 4px; padding: 7px 0 7px 5%;">
            <img src="pics/awge-header-logo.png" height="35px">
          </div>

          <div class="home-nav-vid-bar" style="position: relative; width: 0; height: 0; margin-left: 85%;">
            <!-- <div class="home-nav-vid-wrapper" style="z-index: 2px; position: absolute; top: 3vh; left: -2.2vw; border: 1px solid yellow; width: 100px; height: 200px;"> -->
              <div class="home-nav-vid">
                <img src="pics/vhs-camera.gif" style="z-index: 1px; position: absolute; right: 0; top: 0; width: 50%; ">
                <img src="pics/Rotating_earth_(large).gif">
                <button id="home-vid-text"
                  style="z-index: 2px; border: 0; padding: 0; background: none; font-weight: normal; font-family: myFirstFont; color: white; position: absolute; top: 44px; right: 33px; font-size: 0.9em;">MEDIA</button>
              </div>
            <!-- </div> -->
          </div>

          <div class="home-option-container" style="display: flex; height: calc(100% - 66px); position: relative;">
            <div class="home-options" style="width: 100%; display: flex; flex-direction: column;">
              <div class="home-options-row" style="display: flex; flex: 1; position: relative;">
                <div id="top-row" style="flex: 1;"></div>
              </div>
              <div class="home-options-row" style="display: flex; flex: 1; position: relative;">
                <div class="home-options-item"
                  style="flex: 1; display: flex; justify-content: center; align-items: center;">
                  <a href="../shop/tstng.co/store.html">
                    <button id="shop-button" style="border: 0; padding: 0; background: none;">
                      <img class="home-options-icon" src="pics/awgeXmercedes_icon.gif"
                        style="transform: scale(1.4) translateY(-5px);">
                      <h3 class="home-options-text h3-iocns" style="color: #fe3824;">SHOP</h3>
                    </button>
                  </a>
                </div>
                <div class="home-options-item">
                  <button id="dvd-button">
                    <img src="pics/rallyrace_icon.gif" class="home-options-icon" style="max-height: 8.5vh;">
                    <h3 class="home-options-text h3-icons" style="color: #21201e; ">VIP</h3>
                  </button>
                </div>
                <!-- <div style="flex: 1;"></div> -->
                <div id="upper-row-free-col" style="flex: 1;"></div>
              </div>
              <div class="home-options-row" style="display: flex; flex: 1; position: relative;">

                <div class="home-options-item"
                  style="flex: 1; display: flex; justify-content: center; align-items: center;">
                  <button id="forums-button" style="border: 0; padding: 0; background: none;">
                    <img class="home-options-icon" src="pics/awgeForum.gif">
                    <h3 class="home-options-text h3-iocns" style="color: #eb6917;">FORUM</h3>
                  </button>
                </div>
                <div class="home-options-item"
                  style="flex: 1; display: flex; justify-content: center; align-items: center;">
                  <button id="about-button" style="border: 0; padding: 0; background: none;">
                    <img class="home-options-icon" src="pics/question-block-red.gif">
                    <h3 class="home-options-text h3-iocns" style="color: #fe3824;">ABOUT</h3>
                  </button>
                </div>
                <div class="home-options-item"
                  style="flex: 1; display: flex; justify-content: center; align-items: center;">
                  <button id="contact-button" style="border: 0; padding: 0; background: none;">
                    <img class="home-options-icon" src="pics/pager.gif">
                    <h3 class="home-options-text h3-iocns" style="color: #39620a;">CONTACT</h3>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="copyright">
            <h4 class="awge-copyright-text">©&nbsp;&nbsp;2022&nbsp;&nbsp;AWGE<br>
              <span><button class="awge-copyright-text" style="cursor: pointer;">Terms and
                  Conditions</button></span><br>
              <span><button class="awge-copyright-text" style="cursor: pointer;">Privacy Policy</button></span><br>
            </h4>

          </div>

        </div>
      </center>

    </div>
  </div>

  <!-- <div class="home-content-mobile">
    <div class="home-navbar home-navbar-mobile">
      <img src="pics/awge-header-logo.png" width="130px" height="35px">

    </div>
    <div class="home-container-mobile" style="text-align: center;">
      <div class="home-section-video-mobile" style="display: block;">
        <img src="pics/download.svg" class="home-video-ipad-mobile">
        <button id="home-video-wrapper-mobile" class="home-video-wrapper-mobile">
          <h1 id="home-video-text" class="home-video-text">MEDIA</h1>
          <img src="pics/ingen-background.gif" class="home-video-gif-mobile">
        </button>
      </div>
      <div class="home-section-button-mobile">
        <div class="home-section-button-row-mobile" style="display: block;">
          <a href="../shop/tstng.co/store.html">
          <button id="shop-button" class="home-options-wrapper shop-button">
            <img src="pics/awgeXmercedes_icon.gif" style="transform: scale(1.4) translateY(0);"
              class="home-options-icon">
            <h3 class="home-options-text home-options-text-red" style="color: red;">SHOP</h3>
          </button>
        </a>
        </div>
        <div class="home-section-button-row-mobile">
          <button id="testing-button" class="home-options-wrapper rallyrace-button">
            <img src="pics/rallyrace_icon.gif" style="transform: scale(1.7) translateY(10px);"
              class="home-options-icon">
            <h3 class="home-options-text home-options-text-black" style="transform: translateY(10px);">VIP</h3>
          </button>
        </div>
      </div>
      <div class="home-section-button-mobile">
        <div class="home-section-button-row-mobile">
          <button class="home-options-wrapper forums-button" id="forums-button">
            <img src="pics/awgeForum.gif" style="max-height: 9vh;" class="home-options-icon">
            <h3 class="home-options-text home-options-text-forum">FORUM</h3>
          </button>
        </div>
        <div class="home-section-button-row-mobile">
          <button class="home-options-wrapper about-button" id="about-button">
            <img src="pics/question-block-red.gif" class="home-options-icon">
            <h3 class="home-options-text home-options-text-red">ABOUT</h3>
          </button>
        </div>
        <div class="home-section-button-row-mobile">
          <button class="home-options-wrapper contact-button" id="contact-button">
            <img src="pics/pager.gif" style="max-height: 8.5vh;" class="home-options-icon">
            <h3 class="home-options-text home-options-text-green">CONTACT</h3>
          </button>
        </div>
      </div>
      <div class="home-section-copyright-mobile">
        <h4 class="awge-copyright-text">©&nbsp;&nbsp;2022&nbsp;&nbsp;AWGE <br>
          <span class="awge-tc awge-terms" style="cursor: pointer;">
            <button>Terms and Conditions</button>
          </span><br>
          <span class="awge-tc awge-privacy" style="cursor: pointer;">
            <button>Privacy Policy</button>
          </span>
        </h4>
      </div>
    </div>
  </div> -->

  <!-- </span> -->
  <!-- </div> -->
</body>

</html>