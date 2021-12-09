let bouton = document.getElementById('button');
let boutonInterval = document.getElementById('interval-start');
let intervalDiv = document.getElementById('interval-div');
let intervalStop = document.getElementById('interval-stop');
let decompte = 600;


let timeoutPersonnal = function () {
    boutonInterval.addEventListener('click', () => {
        let inter = setInterval(function () {
            if (decompte > 0) {
                intervalDiv.innerHTML = "Décompte : " + decompte;
                decompte--;
            }
        }, 1000);
        intervalStop.addEventListener('click', function () {
            clearInterval(inter);
        })
    })
};

bouton.addEventListener('click', timeoutPersonnal);
