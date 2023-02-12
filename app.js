function lockedProfile() {
  Array.from(document.querySelectorAll(".profile button")).forEach((e) =>
    e.addEventListener("click", onClick)
  );

  function onClick(event) {
    const DISPLAY_BLOCK = "block";
    const SHOW_MORE = "Show more";
    const parent = event.target.parentElement;
    const unlockedCheck = parent.querySelector('input[value="unlock"]');
    if (unlockedCheck.checked) {
      const hiddenDiv = parent.querySelector("div");
      hiddenDiv.style.display === DISPLAY_BLOCK
      ? (hiddenDiv.style.display = "none")
      : (hiddenDiv.style.display = DISPLAY_BLOCK);
      event.target.textContent === SHOW_MORE
        ? (event.target.textContent = "Hide it")
        : (event.target.textContent = SHOW_MORE);

    }
  }
}

function getRandomAgent() {
  const image1 = document.querySelector("#userIcon")
  const test = document.getElementById('mybutton')
  
  var agents = [
    { name: "Astra", img: "images/astra.jpg" },
    { name: "Breach", img: "images/breach.jpg" },
    { name: "Brimstone", img: "images/brimstone.jpg" },
    { name: "Chamber", img: "images/chamber.jpg" },
    { name: "Cypher", img: "images/cypher.jpg" },
    { name: "Jett", img: "images/jett.jpg" },
    { name: "Kay/O", img: "images/kayo.png" },
    { name: "Killjoy", img: "images/killjoy.jpg" },
    { name: "Neon", img: "images/neon.jpg" },
    { name: "Omen", img: "images/omen.jpg" },
    { name: "Phoenix", img: "images/phoenix.jpg" },
    { name: "Raze", img: "images/raze.jpg" },
    { name: "Reyna", img: "images/reyna.jpg" },
    { name: "Sage", img: "images/sage.jpg" },
    { name: "Skye", img: "images/skye.jpg" },
    { name: "Sova", img: "images/sova.jpg" },
    { name: "Viper", img: "images/viper.jpg" },
    { name: "Yoru", img: "images/yoru.jpg" },
  ];

  // let agent = agents[Math.floor(Math.random() * agents.length)];
  // $(image1).attr("src", agent.img);
  // $("#agent-name").html(agent.name);

  document.getElementById("myImageId").src="images/skye.jpg";
  test.addEventListener('click', getRandomAgent)
}
