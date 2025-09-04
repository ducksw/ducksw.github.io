function aea() {
  const msg = "En proceso...";
  alert(msg);
}

function theme() {
  let activiy = false;

  const body = document.body;
  const btn = document.getElementById("btn");
  const image = document.getElementById("image");
  const links = document.querySelectorAll("a");

  function setLinksColor(c) {
    links.forEach(a => a.style.color = c);
  }

  btn.onclick = () => {
    console.log("osi");
    activiy = !activiy;

    if (activiy) {
      body.style.backgroundColor = "black";
      body.style.color = "white";
      image.src = "image/titleWhite.svg";
      btn.style.backgroundImage = "url('https://i.pinimg.com/736x/ff/8e/d3/ff8ed36732187366817f888356f32735.jpg')";
      setLinksColor("red");

      localStorage.setItem("theme", JSON.stringify({
        bg: "black",
        color: "white",
        img: "image/titleWhite.svg",
        btn: "https://i.pinimg.com/736x/ff/8e/d3/ff8ed36732187366817f888356f32735.jpg",
        linkColor: "red"
      }));
    } else {
      body.style.backgroundColor = "white";
      body.style.color = "black";
      image.src = "image/title.svg";
      btn.style.backgroundImage = "";
      setLinksColor("blue");

      localStorage.removeItem("theme");
    }
  };

  const saved = localStorage.getItem("theme");
  if (saved) {
    const { bg, color, img, btn: btnUrl, linkColor } = JSON.parse(saved);
    body.style.backgroundColor = bg;
    body.style.color = color;
    image.src = img;
    btn.style.backgroundImage = `url('${btnUrl}')`;
    setLinksColor(linkColor);
    activiy = true;
  }

  console.log("activiy", activiy);
}

theme();
