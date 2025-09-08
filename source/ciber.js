let dateToday = document.getElementById('res-naci');
const dt = new Date();

let day = dt.getDate().toString().padStart(2, '0');
let month = (dt.getMonth() + 1).toString().padStart(2, '0');
let year = dt.getFullYear();

let formattedDate = `${day}/${month}/${year}`;

dateToday.innerHTML = formattedDate;
console.log(formattedDate);

function randomNumber() {
  let code = document.getElementById("code");
  let r = Math.floor(Math.random() * 900000000) + 100000000;

  code.innerHTML = r;
}

function ext() {
  let name = document.getElementById('name').value;
  let codigo = document.getElementById('codigo').value;

  let nm = document.getElementById('nm');
  let firm = document.getElementById('firm');
  let cd = document.getElementById('code');

  nm.innerHTML = name;
  firm.innerHTML = name;

  nac();
  mostrar();

  if (!codigo) {
    cd.innerHTML = "";
    randomNumber();
    return 0;
  }

  cd.innerHTML = codigo;
}

function mostrar(){
  var archivo = document.getElementById("file").files[0];
  var reader = new FileReader();
  if (file) {
    reader.readAsDataURL(archivo );
    reader.onloadend = function () {
      document.getElementById("img").src = reader.result;
      console.log(reader.result);
    }
  }
}

function nac() {
  let dateInput = document.getElementById('date');
  let output = document.getElementById('res-naci');

  if (!dateInput.value) return 0;

  let dt = dateInput.value

  output.innerHTML = dt;
}

function capture() {
  let div = document.getElementById("box");
  let name = document.getElementById('name').value;

  html2canvas(div).then(canvas => {
    let imgURL = canvas.toDataURL("image/png");
    let link = document.createElement("a");
    link.href = imgURL;
    link.download = `${name}.png`;
    link.click();
  });
}

var link = location.href;
var texto = document.getElementById('txt').innerHTML = link;
const copiarContenido = async () => {
  try {
    await navigator.clipboard.writeText(texto);
    const msg = "El enlace ha sido copiado en su portapapeles. Ahora puede compartirlo!!";
    alert(msg);
  } catch (err) {
    console.error('Error al copiar: ', err);
  }
}

btn_add.onclick = () => {
  ext();
}

randomNumber();
