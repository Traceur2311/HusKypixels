function createNavigationBox() {
    // Create the container element
    const container = document.createElement("div");
    container.classList.add("container");
  
    // Create the inner container element
    const innerContainer = document.createElement("div");
    innerContainer.classList.add("inner-container");
  
    // Create the invisible box element
    const invisibleBox = document.createElement("div");
    invisibleBox.classList.add("invisible-box");
  
    const divSellBuy = document.createElement("div");
    divSellBuy.classList.add("divSellBuy")
    // Create the token label element
    const tokenLabel = document.createElement("p");
    tokenLabel.classList.add("mx-10", "unselectable");
    tokenLabel.textContent = "Move";
  
    // Create the input element
    const txtLand = document.createElement("input");
    txtLand.id = "txtLand";
    txtLand.type = "text";
    txtLand.spellcheck = false;
    txtLand.placeholder = "Enter Land";
    const toggleBtn = document.createElement('button');
  
    toggleBtn.id = 'myToggleBtn';
    
    const img = document.createElement('img');
    img.src = '/favicon/android-icon-36x36.png';
    img.alt = 'Toggle Button';
    document.body.appendChild(toggleBtn);
    toggleBtn.appendChild(img);
    // Create the buttons
    let isVisible = false;
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
      isVisible = !isVisible;
  
      if (isVisible) {
          container.classList.remove('hidden');
      } else {
          container.classList.add('hidden');
      }
  });
    }
    // Create the buttons
  //   const buttons = [
  //     "Move To Land",
  //     "Terravilla",
  //     "HQ",
  //     "Cave HQ",
  //     "Carnival",
  //     "Home Mission",
  //     "Post Office",
  //     "Space Walk",
  //     "BarneysFarm",
  //  ].map((buttonText) => {
  //     const button = document.createElement("button");
  //     button.id = `btn${buttonText.replace(/\s+/g, "")}`; // Generate unique IDs
  //     button.classList.add("unselectable", "btn");
  //     if (buttonText == "Move To Land") {
  //       button.classList.add("unselectable", "btn");
  //     }
  //     button.textContent = buttonText;
  //     return button;
  //   });
  
  const buttonSelectors = [
      "#btnMoveToLand",
      "#btnSauna",
      "#btnHQ", // Assuming this is the ID for btnCHinterior
      "#btnKongzIsland",
      "#btnCarnival",
      "#btnHomeYGG",
      "#btnPostOffice",
      "#btnDrunkenGoose",
      "#btnTerravillaPier",
      "#btnGeneralStore",
      "#btnSell",
      "#btnBuy",
    ];
  
    function createOrUpdateButton(selector) {
      const existingButton = document.querySelector(selector);
    
      // Declare the button variable (even before checking for element)
      let buttonElement = null;
    
      if (existingButton) {
        // Element exists, remove it
        existingButton.parentNode.removeChild(existingButton);
      }
      // Create a new button element (replace with your actual button creation logic)
      buttonElement = document.createElement("button");
      buttonElement.id = selector; // Generate unique IDs
      buttonElement.classList.add("unselectable", "btn");
      const regex = /#btn(.+)/;
      const match = regex.exec(selector);
  
      if (selector == "#btnSell") {
        buttonElement.classList.add("btnSell");
      }
      if (selector == "#btnBuy") {
        buttonElement.classList.add("btnBuy");
      }
      buttonElement.textContent = match[1];
      // Append the new button to the document (replace with your desired location)
      return buttonElement; // Return the created button element
    }
    const btnMoveToLand = createOrUpdateButton(buttonSelectors[0]);
    const btnSauna = createOrUpdateButton(buttonSelectors[1]);
    const btnHQ = createOrUpdateButton(buttonSelectors[2]);
    const btnKongzIsland = createOrUpdateButton(buttonSelectors[3]);
    const btnCarnival = createOrUpdateButton(buttonSelectors[4]);
    const btnHomeYGG = createOrUpdateButton(buttonSelectors[5]);
    const btnPostOffice = createOrUpdateButton(buttonSelectors[6]);
    const btnDrunkenGoose = createOrUpdateButton(buttonSelectors[7]);
    const btnTerravillaPier = createOrUpdateButton(buttonSelectors[8]);
    const btnGeneralStore = createOrUpdateButton(buttonSelectors[9]);
    const btnSell = createOrUpdateButton(buttonSelectors[10]);
    const btnBuy = createOrUpdateButton(buttonSelectors[11]);
    // Add elements to the invisible box
    invisibleBox.appendChild(tokenLabel);
    invisibleBox.appendChild(txtLand);
  
  
    
    invisibleBox.appendChild(btnMoveToLand);
    invisibleBox.appendChild(btnSauna);
    invisibleBox.appendChild(btnHQ);
    invisibleBox.appendChild(btnKongzIsland);
    invisibleBox.appendChild(btnCarnival);
    invisibleBox.appendChild(btnHomeYGG);
    invisibleBox.appendChild(btnPostOffice);
    invisibleBox.appendChild(btnDrunkenGoose);
    invisibleBox.appendChild(btnTerravillaPier);
    invisibleBox.appendChild(btnGeneralStore);
    divSellBuy.appendChild(btnSell);
    divSellBuy.appendChild(btnBuy);
    invisibleBox.appendChild(divSellBuy);
    // Add invisible box to inner container
    innerContainer.appendChild(invisibleBox);
  
    // Add inner container to containerlabel
    container.appendChild(innerContainer);
    if (btnSauna) {
      btnSauna.addEventListener("click", () => {
        localStorage.setItem('mapIDS', 'SaunaInterior');
        clickTelevila();
      });
    }
    
    if (btnHQ) {
      btnHQ.addEventListener("click", () => {
        localStorage.setItem('mapIDS', 'CHinterior');
        clickTelevila();
      });
    }
    
    if (btnKongzIsland) {
      btnKongzIsland.addEventListener("click", () => {
        localStorage.setItem('mapIDS', 'KongzIsland');
        clickTelevila();
      });
    }
    
    if (btnCarnival) {
      btnCarnival.addEventListener("click", () => {
        localStorage.setItem('mapIDS', 'carnival');
        clickTelevila();
      });
    }
    if (btnHomeYGG) {
      btnHomeYGG.addEventListener("click", () => {
        localStorage.setItem('mapIDS', 'guildhallinterior');
        clickTelevila();
      });
    }
    
    if (btnPostOffice) {
      btnPostOffice.addEventListener("click", () => {
        localStorage.setItem('mapIDS', 'PostOfficeInterior');
        clickTelevila();
      });
    }
    
    if (btnDrunkenGoose) {
      btnDrunkenGoose.addEventListener("click", () => {
        localStorage.setItem('mapIDS', 'DrunkenGooseInterior');
        clickTelevila();
      });
    }
    
    if (btnTerravillaPier) {
      btnTerravillaPier.addEventListener("click", () => {
        localStorage.setItem('mapIDS', 'TerravillaPier');
        clickTelevila();
      });
    }
    if (btnMoveToLand) {
      btnMoveToLand.addEventListener("click", () => {
        land = document.querySelector("#txtLand").value;
        if (land != "") {
          localStorage.setItem('mapIDS', 'pixelsNFTFarm-'+land);
          clickTelevila();
        }
      });
    }
  
    if (btnGeneralStore) {
      btnGeneralStore.addEventListener("click", () => {
        localStorage.setItem('mapIDS', 'terravilla');
        clickTelevila();
        setTimeout(()=>{
          localStorage.setItem('mapIDS', 'generalStore');
          clickTelevila();
      }, 13000);
      });
    }
   
    function clickTelevila() {
      document.querySelector("#__next > div > div.room-layout > div > div:nth-child(1) > div > div.Hud_top__nZRRz.Hud_left__mQoqW > div > button:nth-child(4)").click();
      setTimeout(()=>{
          document.querySelector("#__next > div > div.room-layout > div > div.LandAndTravel_container__WCM6U.commons_uikit__Nmsxg > div.LandAndTravel_customHeader__goUPo > button").click();
      }, 300);
    }
    // Add styles to the document (alternative approach)
    const styleElement = document.createElement("style");
    styleElement.textContent = `
     .container {
      color: white;
      height: 385px;
      width: 200px;
      bottom: 0%;
      left: 0%;
      position: absolute;
      z-index: 999;
      opacity: 85%;
  
  }
  
  .inner-container {
      background-color: #36393e;
      border-radius: 25px;
      display: flex;
      height: 385px;
      width: 200px;
  }
  
  .invisible-box {
      display: flex;
      flex-direction: column;
      height: 150px;
      margin-left: 15px;
      width: 170px
  }
  
  .label {
      color: #b9bbbd;
      font-family: 'Secular One', sans-serif;
      font-size: 15px;
  }
  
  .unselectable {
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none
  }
  
  .btn {
      background-color: #8eeed1;
      border: none;
      border-radius: 4px;
      color: #a768a7;
      font-family: 'Lato', sans-serif;
      font-size: 13px;
      height: 35px;
      margin-top: 5px;
      transition: all .1s ease-in
  }
  .mb-15{
      margin-bottom: 15 !important; 
  }
  .mx-10{
      margin-top: 10 !important; 
      margin-bottom: 10 !important; 
  }
  
  #myToggleBtn {
      position: absolute; 
      bottom: 10%; 
      right: 0px; /
      transform: translateX(-10%); 
      opacity: 80% !important;
      border: none; 
      background-color: transparent; 
      cursor: pointer; 
  }
  #myToggleBtn img {
      width: 100%; 
      height: 100%;
      opacity: 80% !important;
  }
  .btnSell {
      color: white !important;
      background-color: red !important;
      width: 45% !important;
  }
  .btnBuy {
      color: white !important;
      background-color: green !important;
      width: 45% !important;
  }
  .divSellBuy {
      display: flex;
      justify-content: space-around !important;
  }
  .hidden {
      display: none;
  }
      /* ... other styles omitted for brevity ... */
    `;
    document.head.appendChild(styleElement);
  
    // You can return the container element if needed for further manipulation
    return container;
  }
