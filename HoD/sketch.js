var tout = ""
var button
var data
function preload() {
	data = loadJSON("data.json");
}

function setup() {
	createCanvas(windowWidth, windowHeight);

    background(0);
    button = createButton('click me');
    button.position(width/2, height/2);
    button.mousePressed(changeBG);  
}

function changeBG() {

    tout = ""
    
    for (var i = 0; i < 1000; i++) {
        
        tout += "A HOUSE OF " + choice(data.material) + "\n"
        tout += "      " + choice(data.loca) + "\n"
        tout += "            USING " + choice(data.light_source) + "\n"
        tout += "                  INHABITED BY " + choice(data.inhabitants) + "\n\n\n"
    }

    // print(tout)

    var blob = new Blob([tout],
        { type: "text/plain;charset=utf-8" });
    saveAs(blob, "test.txt");
  }

choice = (somelist) => {
    var i = Math.floor(Math.random() * somelist.length);
    return somelist[i];
};
