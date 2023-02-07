var heroes = [0,0];
function arrow_left1() {
    if (heroes[0]==1) {
        let hero = document.getElementById("hero-up");
        hero.style.backgroundImage = "url('microsoft/Highlight-M365-Icon-Bounce-Word-Merch_VP5-1920x600.webp')";
        heroes[0]=0;
        document.getElementById("circle1").innerHTML="&#9679;";
        document.getElementById("circle2").innerHTML="&#9702;";
        document.getElementById("hero1").style.display = "block";
        document.getElementById("hero2").style.display = "none";
    }
}
function arrow_right1() {
    if (heroes[0]==0) {
        let hero = document.getElementById("hero-up");
        hero.style.backgroundImage = "url('microsoft/gldn-XSS-Hero-Xbox-Series-S_VP5-1920x600.jfif')";
        heroes[0]=1;
        document.getElementById("circle1").innerHTML="&#9702;";
        document.getElementById("circle2").innerHTML="&#9679;";
        document.getElementById("hero2").style.display = "block";
        document.getElementById("hero1").style.display = "none";
    }
}
function arrow_left2() {
    if (heroes[1]==1) {
        let hero = document.getElementById("hero-down");
        hero.style.backgroundImage = "url('microsoft/Highlight-Black-History-Month-Inclusion-is-Innovation-FY23_VP5-1596x600.webp')";
        heroes[1]=0;
        document.getElementById("circle3").innerHTML="&#9679;";
        document.getElementById("circle4").innerHTML="&#9702;";
        document.getElementById("hero3").style.display = "block";
        document.getElementById("hero4").style.display = "none";
    }
}
function arrow_right2() {
    if (heroes[1]==0) {
        let hero = document.getElementById("hero-down");
        hero.style.backgroundImage = "url('microsoft/Highlight-Education-Apps-Reflect-Feelings-Monster_VP5-1596x600.webp')";
        heroes[1]=1;
        document.getElementById("circle3").innerHTML="&#9702;";
        document.getElementById("circle4").innerHTML="&#9679;";
        document.getElementById("hero4").style.display = "block";
        document.getElementById("hero3").style.display = "none";
    }
}