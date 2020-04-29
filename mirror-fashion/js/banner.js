var banners = ["img/destaque-home.png", "img/destaque-home-2.png"];
var bannerAtual = 0;

function trocarBanner(){
    bannerAtual = (bannerAtual + 1) % 2;
    document.querySelector('.banner-destaques img').src = banners[bannerAtual];
}

var timer = setInterval(trocarBanner, 3000);
