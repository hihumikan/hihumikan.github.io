let flagTmp1 = 10;

let changeC = function (a) {
    if (a == 1) {
        $('#1').removeClass().addClass("btn btn-outline-secondary uk-margin-small-right  active");
        $('#2').removeClass().addClass("btn btn-outline-secondary uk-margin-small-right");
        $('#3').removeClass().addClass("btn btn-outline-secondary uk-margin-small-right");
        $('#4').removeClass().addClass("btn btn-outline-secondary uk-margin-small-right");
        $('#xt').removeClass().addClass("btn btn-outline-secondary uk-margin-small-right");
        flagTmp1 = 6;
    } else if (a == 2) {
        $('#1').removeClass().addClass("btn btn-outline-secondary uk-margin-small-right");
        $('#2').removeClass().addClass("btn btn-outline-secondary uk-margin-small-right  active");
        $('#3').removeClass().addClass("btn btn-outline-secondary uk-margin-small-right");
        $('#4').removeClass().addClass("btn btn-outline-secondary uk-margin-small-right");
        flagTmp1 = 10;
    } else if (a == 3) {
        $('#1').removeClass().addClass("btn btn-outline-secondary uk-margin-small-right");
        $('#2').removeClass().addClass("btn btn-outline-secondary uk-margin-small-right");
        $('#3').removeClass().addClass("btn btn-outline-secondary uk-margin-small-right  active");
        $('#4').removeClass().addClass("btn btn-outline-secondary uk-margin-small-right");
        flagTmp1 = 14;
    } else if (a == 4) {
        $('#1').removeClass().addClass("btn btn-outline-secondary uk-margin-small-right");
        $('#2').removeClass().addClass("btn btn-outline-secondary uk-margin-small-right");
        $('#3').removeClass().addClass("btn btn-outline-secondary uk-margin-small-right");
        $('#4').removeClass().addClass("btn btn-outline-secondary uk-margin-small-right  active");
        flagTmp1 = 20;
    } else {
        $('#1').removeClass().addClass("btn btn-outline-secondary uk-margin-small-right");
        $('#2').removeClass().addClass("btn btn-outline-secondary uk-margin-small-right");
        $('#3').removeClass().addClass("btn btn-outline-secondary uk-margin-small-right");
        $('#4').removeClass().addClass("btn btn-outline-secondary uk-margin-small-right");
        $('#xt').removeClass().addClass("btn btn-outline-secondary uk-margin-small-right active");
        flagTmp1 = 20;
    }
}

let tmpText1 = 0, tmpText2 = 0, tmpText3 = 0, tmpText4 = 0, tmpText5 = 0;
let changeText = function (a) {
    if (a == 1) {
        tmpText1++;
        $('#5').removeClass().addClass("btn btn-outline-secondary uk-margin-small-right  active");
        if (tmpText1 % 2 == 0) {
            $('#5').removeClass().addClass("btn btn-outline-secondary uk-margin-small-right");
        }
    } else if (a == 2) {
        tmpText2++;
        $('#6').removeClass().addClass("btn btn-outline-secondary uk-margin-small-right  active");
        if (tmpText2 % 2 == 0) {
            $('#6').removeClass().addClass("btn btn-outline-secondary uk-margin-small-right");
        }
    } else if (a == 3) {
        tmpText3++;
        $('#7').removeClass().addClass("btn btn-outline-secondary uk-margin-small-right  active");
        if (tmpText3 % 2 == 0) {
            $('#7').removeClass().addClass("btn btn-outline-secondary uk-margin-small-right");
        }
    } else if (a == 4) {
        tmpText4++;
        $('#8').removeClass().addClass("btn btn-outline-secondary uk-margin-small-right  active");
        if (tmpText4 % 2 == 0) {
            $('#8').removeClass().addClass("btn btn-outline-secondary uk-margin-small-right");
        }
    } else {
        tmpText5++;
        $('#9').removeClass().addClass("btn btn-outline-secondary uk-margin-small-right  active");
        if (tmpText5 % 2 == 0) {
            $('#9').removeClass().addClass("btn btn-outline-secondary uk-margin-small-right");
        }
    }
}
function randomShuffle(a, get) {
    //使用文字の定義
    var str = get;
    var len = a;
    var password = "";
    for (var i = 0; i < len; i++) {
        password += str.charAt(Math.floor(Math.random() * str.length));
    }
    console.log(password);
    UIkit.notification({
        message: '生成しました！',
        status: 'success',
        pos: 'top-right',
        timeout: 5000
    });
    document.getElementById('completePass').value = password;
}
const OhMoji = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const KhMoji = "abcdefghijklmnopqrstuvwxyz";
const Suji = "0123456789";
const Kigoh = "!#$%&=~/*-+";
const UnderBar = "_";


let strTmp = "";
let passWordGenerate = function () {
    strTmp = "";
    if (tmpText1 % 2 == 0 && tmpText2 % 2 == 0 && tmpText3 % 2 == 0 && tmpText4 % 2 == 0 && tmpText5 % 2 == 0) {
        UIkit.notification({
            message: '文字の設定を行ってください！',
            status: 'danger',
            pos: 'top-center',
            timeout: 3000
        });
    } else {
        if (tmpText1 % 2 != 0) {
            strTmp += OhMoji;
        }
        if (tmpText2 % 2 != 0) {
            strTmp += KhMoji;
        }
        if (tmpText3 % 2 != 0) {
            strTmp += Suji;
        }
        if (tmpText4 % 2 != 0) {
            strTmp += Kigoh;
        }
        if (tmpText5 % 2 != 0) {
            strTmp += UnderBar;
        }
        randomShuffle(flagTmp1, strTmp);
    }
}

function CopyToClipboard() {
    var copyTarget = document.getElementById("completePass");
    copyTarget.select();
    document.execCommand("Copy");
}



function jump() {
    var password = " ";
    password = document.getElementById("completePass").value;
    var uu = `パスワード生成しました！%0aPW:`;
    var kk = "%0a"
    var template = "http://twitter.com/share?url=http://127.0.0.1:5500/&text=" + uu + password + kk + "&hashtags=パスワードつくるやつ";
    //console.log(template);
    //console.log(password);
    location.href = template;
}

function addDarkmodeWidget() {
    new Darkmode().showWidget();
}
window.addEventListener('load', addDarkmodeWidget);