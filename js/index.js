function getRandomName(retry, noSpace) {
    if (noSpace === void 0) { noSpace = true; }
    var left = ["admiring", "adoring", "agitated", "amazing", "angry", "awesome", "backstabbing", "berserk", "big", "boring", "clever", "cocky", "compassionate", "condescending", "cranky", "desperate", "determined", "distracted", "dreamy", "drunk", "ecstatic", "elated", "elegant", "evil", "fervent", "focused", "furious", "gigantic", "gloomy", "goofy", "grave", "happy", "high", "hopeful", "hungry", "insane", "jolly", "jovial", "kickass", "lonely", "loving", "mad", "modest", "naughty", "nauseous", "nostalgic", "pedantic", "pensive", "prickly", "reverent", "romantic", "sad", "serene", "sharp", "sick", "silly", "sleepy", "small", "stoic", "stupefied", "suspicious", "tender", "thirsty", "tiny", "trusting"];
    // Turing award prizes until 2016
    var turing_award = ["adleman", "allen", "bachman", "backus", "berners-lee", "blum", "brooks",
        "cerf", "clarke", "cocke", "codd", "cook", "corbato", "dahl", "diffie", "dijkstra",
        "engelbart", "emerson", "feingenbaum", "floyd", "goldwasser", "gray", "hamming",
        "hartmanis", "hellman", "hoare", "hopcroft", "iverson", "kahan", "kahn",
        "karp", "kay", "lamport", "lampson", "liskov", "mccarthy", "micali", "milner", "minksy",
        "naur", "newell", "nygaard", "pearl", "perlis", "pnueli", "rabin", "reddy",
        "ritchie", "rivest", "scott", "sifakis", "simon", "shamir", "stearns", "stonebreaker",
        "sutherland", "tarjan", "thacker", "thompson", "valiant", "wilkes", "wilkinson", "wirth"];

    var li = Math.floor(Math.random() * left.length);
    var ri = Math.floor(Math.random() * turing_award.length);
    var retrySuffix = Math.floor(Math.random() * 10);
    var lv = left[li];
    var rv = turing_award[ri];
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