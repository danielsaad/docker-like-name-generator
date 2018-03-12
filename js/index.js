function getRandomName(retry, noSpace) {
    if (noSpace === void 0) { noSpace = false; }
    var left = ["admiring", "adoring", "agitated", "amazing", "angry", "awesome", "backstabbing", "berserk", "big", "boring", "clever", "cocky", "compassionate", "condescending", "cranky", "desperate", "determined", "distracted", "dreamy", "drunk", "ecstatic", "elated", "elegant", "evil", "fervent", "focused", "furious", "gigantic", "gloomy", "goofy", "grave", "happy", "high", "hopeful", "hungry", "insane", "jolly", "jovial", "kickass", "lonely", "loving", "mad", "modest", "naughty", "nauseous", "nostalgic", "pedantic", "pensive", "prickly", "reverent", "romantic", "sad", "serene", "sharp", "sick", "silly", "sleepy", "small", "stoic", "stupefied", "suspicious", "tender", "thirsty", "tiny", "trusting"];
    var right = ["bachman", "backus","dijkstra","floyd","hamming","mccarthy","minksy","newell","perlis", "rabin","scott" ,"simon", "wilkes", "wilkinson"];

    var li = Math.floor(Math.random() * left.length);
    var ri = Math.floor(Math.random() * right.length);
    var retrySuffix = Math.floor(Math.random() * 10);
    var lv = left[li];
    var rv = right[ri];
    if (lv === "boring" && rv === "wozniak") {
        return getRandomName(retry, noSpace);
    }
    if (retry > 0 && noSpace) {
        rv += retrySuffix;
    }
    if (noSpace) {
        return lv + "_" + rv;
    }
    return lv + " " + rv;
}
function getRandomNameView() {
    var randomName = document.querySelector("#random-name");
    randomName.className = "";
    randomName.innerHTML = getRandomName();
    randomName.className = "show-name";
}
function setupListeners() {
    document.addEventListener('click', function (ev) {
        getRandomNameView();
    });
}
function init() {
    setupListeners();
    getRandomNameView();
}
init();