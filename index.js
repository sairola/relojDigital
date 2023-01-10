setInterval(() => {
    var reloj = document.getElementsByClassName("reloj")[0];
    var currentTime = new Date();
    var hora = currentTime.getHours();
    if (hora < 10) {
        hora = `0${hora}`
    }
    var minuto = currentTime.getMinutes();
    if (minuto <10) {
        minuto= `0${minuto}`
    }
    var segundo = currentTime.getSeconds();
    if (segundo <10) {
        segundo = `0${segundo}`
    }

    reloj.innerHTML = `${ hora }:${ minuto }:${ segundo }`;


}, 1000);