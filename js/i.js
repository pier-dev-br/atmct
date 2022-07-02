let watchingNow = randomIntFromInterval(400,700)

if( document.readyState !== 'loading' ) {
    execute();
} else {
    document.addEventListener('DOMContentLoaded', function (e) {
      execute();
    });
}

function execute() {

  const cb = document.querySelector('#checkbox1');
  cb.addEventListener('change', (e) => {
    e.preventDefault();
    document.querySelectorAll('.corte').forEach(el => {
      el.classList.toggle('d-none');
    });
    document.querySelectorAll('.economia').forEach(el => {
      el.classList.toggle('d-none');
    });
    if (cb.hasAttribute('checked')) {
      cb.removeAttribute('checked');
      document.querySelector('.desconto').innerText = 'Você removeu o desconto de 50%.';
      document.querySelector('.desconto').style.color = '#d00';
      document.querySelectorAll('del').forEach(el => {
        if (el.innerText === 'R$97,00') el.innerText = 'R$47,00';
        if (el.innerText === 'R$49,75') el.innerText = 'R$97,00';
        if (el.innerText === 'R$99,75') el.innerText = 'R$197,00';
      });
      document.querySelectorAll('.new-price').forEach(el => {
        if (el.innerText === 'R$24,75') el.innerText = 'R$47,00';
        if (el.innerText === 'R$49,75') el.innerText = 'R$97,00';
        if (el.innerText === 'R$99,75') el.innerText = 'R$197,00';
      });
      document.querySelectorAll('.p_d').forEach((el, i) => {
        el.innerText = 'Até 100 domínios';
        if (i===0) el.innerText = 'Até 30 domínios';
      });
      document.querySelectorAll('.p_p').forEach((el, i) => {
        el.innerText = 'Até 300 páginas';
        if (i===0) el.innerText = 'Até 100 páginas';
      });
    } else {
      cb.setAttribute('checked', '');
      document.querySelector('.desconto').innerText = 'Você ativou o desconto de 50%.'
      document.querySelector('.desconto').style.color = '#0d0';
      document.querySelectorAll('.new-price').forEach(el => {
        if (el.innerText === 'R$47,00') el.innerText = 'R$24,75';
        if (el.innerText === 'R$97,00') el.innerText = 'R$49,75';
        if (el.innerText === 'R$197,00') el.innerText = 'R$99,75';
      });
      document.querySelectorAll('.p_d').forEach((el, i) => {
        el.innerText = 'Até 200 domínios';
        if (i===0) el.innerText = 'Até 100 domínios';
      });
      document.querySelectorAll('.p_p').forEach((el, i) => {
        el.innerText = 'Páginas ilimitadas';
      });
    }
  });

  var request = new XMLHttpRequest();
  request.open('GET', 'https://wtfismyip.com/json', true);

  request.onload = function() {
    if (this.status >= 200 && this.status < 400) {
      var data = JSON.parse(this.response);
      let output = data.YourFuckingLocation.replace(/\,.+/g, "$'");
      Array.prototype.forEach.call(document.getElementsByClassName('city'), el => {
        el.innerHTML = output
      })
    } else {}
  };

  request.onerror = function() {};
  request.send();

  setInterval(() => {
    let newViewer = randomIntFromInterval(-1, 2);
    watchingNow += newViewer
    document.getElementById('watching-counter').innerText = watchingNow
  }, 1000);

}

function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function showNotification() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar")

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
