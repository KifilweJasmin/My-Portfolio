function watch() {
    let enjoy = prompt("Do you enjoy watching anime?");
    let name = prompt("What is your name?");
    let email = prompt("What is your email addresss?");
    if (enjoy === "yes")
      alert(
        "Enjoy watching" +
          " " +
          name +
          "😃! We'll send you more anime recomandations, meanwhile enjoy watching Kuroko's Basketball.🏀 "
      );
    else {
      alert(
        "If you'd love to try watching" +
          " " +
          name +
          "🙂, click yes on" +
          " " +
          "the first question"
      );
    }
  }

  let watchButton = document.querySelector("button");
  watchButton.addEventListener("click", watch);