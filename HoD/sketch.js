
var material = ["SAND", "DUST", "LEAVES", "PAPER", "TIN", "ROOTS", "BRICK", "STONE", "DISCARDED CLOTHING", "GLASS", "STEEL", "PLASTIC", "MUD", "BROKEN DISHES", "WOOD", "STRAW", "WEEDS"]
var light_source = ["CANDLES", "ALL AVAILABLE LIGHTING", "ELECTRICITY", "NATURAL LIGHT"]
var inhabitants = ["PEOPLE WHO SLEEP VERY LITTLE", "VEGETARIANS", "HORSES AND BIRDS", "PEOPLE SPEAKING MANY LANGUAGES WEARING LITTLE OR NO CLOTHING", "ALL RACES OF MEN REPRESENTED WEARING PREDOMINANTLY RED CLOTHING", "CHILDREN AND OLD PEOPLE", "VARIOUS BIRDS AND FISH", "LOVERS", "PEOPLE WHO ENJOY EATING TOGETHER", "PEOPLE WHO EAT A GREAT DEAL", "COLLECTORS OF ALL TYPES", "FRIENDS AND ENEMIES", "PEOPLE WHO SLEEP ALMOST ALL THE TIME", "VERY TALL PEOPLE", "AMERICAN INDIANS", "LITTLE BOYS", "PEOPLE FROM MANY WALKS OF LIFE", "NEGROS WEARING ALL COLORS", "FRIENDS", "FRENCH AND GERMAN SPEAKING PEOPLE", "FISHERMEN AND FAMILIES", "PEOPLE WHO LOVE TO READ"]
var loca = ["IN A GREEN, MOSSY TERRAIN", "IN AN OVERPOPULATED AREA", "BY THE SEA", "BY AN ABANDONED LAKE", "IN A DESERTED FACTORY", "IN DENSE WOODS", "IN JAPAN", "AMONG SMALL HILLS", "IN SOUTHERN FRANCE", "AMONG HIGH MOUNTAINS", "ON AN ISLAND", "IN A COLD, WINDY CLIMATE", "IN A PLACE WITH BOTH HEAVY RAIN AND BRIGHT SUN", "IN A DESERTED AIRPORT", "IN A HOT CLIMATE", "INSIDE A MOUNTAIN", "ON THE SEA", "IN MICHIGAN", "IN HEAVY JUNGLE UNDERGROWTH", "BY A RIVER", "AMONG OTHER HOUSES", "IN A DESERTED CHURCH", "IN A METROPOLIS", "UNDERWATER"]

var tout = ""
var button;

function setup() {
	createCanvas(windowWidth, windowHeight);

    background(0);
    button = createButton('click me');
    button.position(width/2, height/2);
    button.mousePressed(changeBG);  
}

function changeBG() {

    tout = ""
    
    for (var i = 0; i < 100; i++) {
        
        tout += "A HOUSE OF " + choice(material) + "\n"
        tout += "      " + choice(loca) + "\n"
        tout += "            USING " + choice(light_source) + "\n"
        tout += "                  INHABITED BY " + choice(inhabitants) + "\n\n\n"
    }

    var blob = new Blob([tout],
        { type: "text/plain;charset=utf-8" });
    saveAs(blob, "test.txt");
  }

choice = (somelist) => {
    var i = Math.floor(Math.random() * somelist.length);
    return somelist[i];
};
