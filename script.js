const langEs = {
    title: "¿Quieres aprender a programar en 1 hora?",
    button: "Empezemos!",
    click_on_button_desktop: "Oops! Server is too full. Ha habido un error intentalo mas tarde",
    arenga_1:"Vamos , que casi has pasado la primera prueba",
    arenga_2:"Parce que ya lo has intentado mas de 50 veces ... Sigue así...",
    omg_1:"A ver.. te estamos troleando... Deja de hacer el tonto las cosas requiren esfuerzo, los atajos son los padres.",
    omg_2:"Ahora en serio, te recomiendo empezar por un curso Javascript. Aqui encontrarás mas información ",
}

const langEn = {
    title: "Do you want to learn programming in just 1 hour?",
    button: "Ok, lets go !",
    click_on_button_desktop: "Oops! Server is too full.",
    arenga_1:"Com on, almost there",
    arenga_2:"Looks like you already tried more than 50 times ... Keep rocking ...",
    omg_1:"Ehmmm , how to say .. we are trolling... Actually, stop fooling thing requires effor, shorcats does does not exists.",
    omg_2:"Seriously, start I would recommend you start with Javascript. You can find more information on this ",
}

var tries = 0;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function mobileAndTabletcheck() {
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};


function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function showconsole(msg) {
    document.getElementById('console').innerHTML = msg
    document.getElementById('console').classList.add("animated")
    document.getElementById('console').classList.add("pulse")
    setTimeout(function(){
        document.getElementById('console').classList.remove("animated")
        document.getElementById('console').classList.remove("pulse")

    }, 1000)
}

function resolveLang() {
    var userLang = navigator.language || navigator.userLanguage;

    let langResolved = langEn
    if(userLang === "es" || userLang === "ES" || userLang === "es-ES") {
        langResolved = langEs
    }

    if(getParameterByName('lang')){
        if(getParameterByName('lang') === 'es' || getParameterByName('lang') === 'ES'){
            langResolved = langEs
        }

        if(getParameterByName('lang') === 'en' || getParameterByName('lang') === 'EN'){
            langResolved = langEn
        }

    }
    return langResolved
}

function click() {
    if(mobileAndTabletcheck()){
        move();
        return;
    }

    document.getElementById('console').innerHTML = resolveLang().click_on_button_desktop
}

function move() {
    let lang = resolveLang()

    tries++;

    if(tries === 16){
        showconsole(lang.arenga_1)
    }

    if(tries === 51) {
        showconsole(lang.arenga_2)
    }

    if(tries === 151) {
        showconsole(lang.omg_1 + "<br>" + lang.omg_2 + "<a href='https://codeburst.io/best-courses-to-learn-javascript-in-2017-fc3a254638cc'>link</a>")
    }

    var sizeW = window.innerWidth;
    var sizeH = window.innerHeight;

    var rect = document.getElementById("action").getBoundingClientRect();

    const multipliers = [1, -1, -1,1,1,1,-1,1,1, -1]

    var nextTop =  rect.top + (multipliers[Math.floor(Math.random()*multipliers.length)] * getRandomInt(10, 200))
    var nextLeft = rect.left + (multipliers[Math.floor(Math.random()*multipliers.length)] * getRandomInt(10, 200))

    if(nextTop > sizeH) {
        nextTop = nextTop - sizeH
    }

    if(nextLeft > sizeW){
        nextLeft = nextLeft + sizeW
    }


    if(nextTop < 0){
        nextTop = nextTop * -1;
    }

    if(nextLeft < 0) {
        nextLeft = nextLeft *-1
    }


    if(nextLeft > (sizeW - 150)) {
        nextLeft = 100
    }

    if(nextTop > (sizeH -150)){
        nextTop = 100
    }


    document.getElementById('action').style.top = nextTop
    document.getElementById('action').style.left = nextLeft
}

document.getElementById('title').innerHTML = resolveLang().title
document.getElementById('action').innerHTML = resolveLang().button
