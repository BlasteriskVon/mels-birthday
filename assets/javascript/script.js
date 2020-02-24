var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d");
var altColors = ["orange", "yellow"];
var candles = [];
var bigCandles = [];
var delay = 0;
var lightTime = false;
var candleLocations = [{x:51, y:22}, {x:55, y:50}, {x:51, y:72}, {x:49, y:94}, {x:48, y:124}, {x:69, y:77}, {x:91, y:77}, {x:108, y:77}, {x:121, y:16}, {x:125, y:44}, {x:128, y:63}, {x:129, y:84}, {x:130, y:105}, {x:137, y:130}, {x:183, y:136}, {x:190, y:109}, {x:195, y:83}, {x:197, y:63}, {x:207, y:36}, {x:223, y:13}, {x:250, y:29}, {x:258, y:46}, {x:266, y:62}, {x:272, y:84}, {x:278, y:102}, {x:280, y:121}, {x:290, y:134}, {x:230, y:90}, {x:211, y:88}, {x:250, y:87}, {x:335, y:141}, {x:338, y:113}, {x:334, y:81}, {x:343, y:53}, {x:341, y:18}, {x:370, y:12}, {x:392, y:21}, {x:417, y:41}, {x:413, y:66}, {x:384, y:76}, {x:360, y:78}, {x:339, y:95}, {x:342, y:30}, {x:447, y:156}, {x:450, y:129}, {x:457, y:103}, {x:457, y:77}, {x:467, y:48}, {x:470, y:18}, {x:497, y:13}, {x:517, y:24}, {x:530, y:46}, {x:528, y:69}, {x:516, y:81}, {x:489, y:87}, {x:474, y:92}, {x:574, y:15}, {x:587, y:39}, {x:600, y:54}, {x:606, y:68}, {x:618, y:92}, {x:592, y:165}, {x:605, y:151}, {x:620, y:136}, {x:636, y:109}, {x:647, y:90}, {x:660, y:70}, {x:674, y:45}, {x:682, y:15}, {x:633, y:125}, {x:12, y:179}, {x:11, y:205}, {x:11, y:234}, {x:8, y:255}, {x:7, y:284}, {x:11, y:320}, {x:33, y:184}, {x:53, y:182}, {x:70, y:209}, {x:57, y:222}, {x:65, y:196}, {x:33, y:237}, {x:48, y:246}, {x:68, y:262}, {x:91, y:276}, {x:101, y:303}, {x:81, y:322}, {x:53, y:328}, {x:32, y:341}, {x:8, y:306}, {x:7, y:340}, {x:143, y:218}, {x:165, y:219}, {x:165, y:219}, {x:192, y:219}, {x:169, y:237}, {x:165, y:249}, {x:167, y:270}, {x:167, y:287}, {x:165, y:312}, {x:165, y:327}, {x:137, y:339}, {x:184, y:338}, {x:159, y:344}, {x:238, y:344}, {x:245, y:318}, {x:251, y:296}, {x:252, y:272}, {x:252, y:246}, {x:253, y:222}, {x:258, y:190}, {x:277, y:192}, {x:305, y:207}, {x:314, y:223}, {x:315, y:244}, {x:298, y:260}, {x:274, y:266}, {x:283, y:286}, {x:306, y:310}, {x:318, y:323}, {x:318, y:323}, {x:339, y:357}, {x:284, y:290}, {x:327, y:343}, {x:292, y:197}, {x:258, y:205}, {x:382, y:208}, {x:401, y:210}, {x:416, y:210}, {x:433, y:208}, {x:449, y:208}, {x:468, y:215}, {x:487, y:215}, {x:503, y:212}, {x:443, y:224}, {x:442, y:241}, {x:435, y:268}, {x:435, y:282}, {x:435, y:304}, {x:434, y:329}, {x:432, y:360}, {x:434, y:345}, {x:540, y:364}, {x:543, y:344}, {x:542, y:326}, {x:547, y:303}, {x:548, y:278}, {x:552, y:253}, {x:559, y:218}, {x:555, y:232}, {x:558, y:296}, {x:578, y:301}, {x:598, y:299}, {x:619, y:305}, {x:634, y:306}, {x:637, y:287}, {x:641, y:265}, {x:642, y:244}, {x:642, y:214}, {x:638, y:328}, {x:638, y:344}, {x:634, y:359}, {x:634, y:376}, {x:705, y:385}, {x:706, y:367}, {x:704, y:347}, {x:703, y:320}, {x:701, y:299}, {x:699, y:276}, {x:692, y:243}, {x:696, y:259}, {x:699, y:213}, {x:719, y:214}, {x:742, y:221}, {x:767, y:232}, {x:773, y:253}, {x:792, y:279}, {x:792, y:299}, {x:785, y:325}, {x:772, y:354}, {x:755, y:377}, {x:729, y:396}, {x:715, y:399}, {x:781, y:259}, {x:819, y:409}, {x:830, y:388}, {x:837, y:370}, {x:845, y:350}, {x:851, y:324}, {x:861, y:300}, {x:866, y:284}, {x:875, y:260}, {x:876, y:239}, {x:886, y:219}, {x:899, y:236}, {x:915, y:256}, {x:922, y:267}, {x:925, y:278}, {x:934, y:290}, {x:941, y:310}, {x:945, y:319}, {x:953, y:334}, {x:960, y:351}, {x:964, y:375}, {x:969, y:404}, {x:985, y:421}, {x:972, y:390}, {x:878, y:331}, {x:897, y:335}, {x:917, y:332}, {x:934, y:333}, {x:865, y:327}, {x:986, y:208}, {x:1001, y:234}, {x:1015, y:248}, {x:1023, y:266}, {x:1032, y:275}, {x:1044, y:292}, {x:1044, y:429}, {x:1050, y:410}, {x:1054, y:390}, {x:1057, y:367}, {x:1056, y:344}, {x:1057, y:323}, {x:1055, y:299}, {x:1072, y:269}, {x:1061, y:278}, {x:1090, y:248}, {x:1100, y:231}, {x:1112, y:223}, {x:1122, y:214}, {x:1136, y:188}, {x:18, y:654}, {x:27, y:629}, {x:31, y:606}, {x:33, y:584}, {x:41, y:565}, {x:43, y:539}, {x:51, y:525}, {x:61, y:501}, {x:71, y:479}, {x:77, y:456}, {x:83, y:438}, {x:102, y:420}, {x:105, y:431}, {x:109, y:451}, {x:114, y:467}, {x:121, y:485}, {x:124, y:505}, {x:132, y:525}, {x:141, y:542}, {x:155, y:532}, {x:162, y:519}, {x:166, y:505}, {x:176, y:490}, {x:180, y:474}, {x:189, y:463}, {x:200, y:443}, {x:212, y:422}, {x:214, y:434}, {x:227, y:452}, {x:230, y:472}, {x:234, y:485}, {x:241, y:509}, {x:241, y:510}, {x:247, y:530}, {x:247, y:550}, {x:248, y:551}, {x:251, y:570}, {x:259, y:592}, {x:261, y:605}, {x:263, y:621}, {x:268, y:642}, {x:273, y:659}, {x:448, y:655}, {x:415, y:655}, {x:383, y:647}, {x:356, y:638}, {x:337, y:623}, {x:323, y:604}, {x:318, y:584}, {x:310, y:552}, {x:309, y:532}, {x:309, y:514}, {x:309, y:492}, {x:312, y:474}, {x:331, y:469}, {x:348, y:459}, {x:393, y:460}, {x:368, y:457}, {x:408, y:462}, {x:427, y:473}, {x:445, y:488}, {x:464, y:498}, {x:469, y:512}, {x:449, y:521}, {x:434, y:530}, {x:403, y:542}, {x:377, y:545}, {x:350, y:553}, {x:332, y:556}, {x:310, y:569}, {x:471, y:648}, {x:431, y:653}, {x:389, y:654}, {x:539, y:434}, {x:542, y:453}, {x:541, y:471}, {x:541, y:483}, {x:541, y:497}, {x:541, y:515}, {x:541, y:529}, {x:541, y:551}, {x:541, y:567}, {x:541, y:582}, {x:540, y:605}, {x:540, y:622}, {x:539, y:650}, {x:558, y:660}, {x:585, y:658}, {x:603, y:658}, {x:616, y:658}, {x:632, y:663}]  
function Candle(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 15;
    this.color = "yellow";
    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        c.strokeStyle = "yellow";
        c.stroke();
        c.fillStyle = "yellow";
        c.fill();
    }
}

function shuffle(array){
    var currentIndex = array.length;
    var temporaryValue;
    var randomIndex;
    var newArray = array;
    while(0 !== currentIndex){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = newArray[currentIndex];
        newArray[currentIndex] = newArray[randomIndex];
        newArray[randomIndex] = temporaryValue;
    }

    return newArray;
}

var shuffleLocations = shuffle(candleLocations);
var shuffleIndex = 0;
var baby = setInterval(function() {
    if(shuffleIndex < shuffleLocations.length){
        var newCandle = new Candle(shuffleLocations[shuffleIndex].x, shuffleLocations[shuffleIndex].y);
        candles.push(newCandle);
        var newBigCandle = new BigCandle(shuffleLocations[shuffleIndex].x, shuffleLocations[shuffleIndex].y);
        bigCandles.push(newBigCandle);
        shuffleIndex++;
    } else {
        clearInterval(baby);
    }
}, 50)

function BigCandle(x ,y) {
    this.x = x;
    this.y = y;
    this.radius = 25;
    this.color = "orange";
    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, 25, 0, Math.PI*2, false);
        c.strokeStyle = "orange";
        c.stroke();
        c.fillStyle = "orange";
        c.fill();
    }
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);
    c.fillStyle = "black";
    c.fillRect(0, 0, canvas.width, canvas.height);
    for(var i = 0;i < candles.length;i++){
        // if(!this.lightTime){
        //     this.delay++;
        //     if(this.delay > 10){
        //         this.lightTime = true;
        //     }
        // } else {
        //     this.delay--;
        //     if(this.delay <= 0){
        //         this.lightTime = false;
        //     }
        // }
        if(lightTime){
            bigCandles[i].draw();
        }
        candles[i].draw();
    }
    if(!lightTime){
        delay++;
        if(delay > 10){
            lightTime = true;
        }
    } else {
        delay--;
        if(delay <= 0){
            lightTime = false;
        }
    }
}

animate();

canvas.addEventListener("click", function(spot) {
    var newCandle = new Candle(spot.x, spot.y);
    console.log(newCandle);
    candles.push(newCandle);
    var newBigCandle = new BigCandle(spot.x, spot.y);
    bigCandles.push(newBigCandle);
});

window.addEventListener("keydown", function(event){
    event.preventDefault();
    if(event.key === "Backspace"){
        if(event.shiftKey){
            candles = [];
            bigCandles = [];
        } else {
            candles.pop();
            bigCandles.pop();
        }
    }
    if(event.key === "Enter"){
        var spots = "";
        for(var i = 0;i < candles.length;i++){
            spots += candles[i].x + "-" + candles[i].y
            if(i + 1 < candles.length){
                spots += ", ";
            }
        }
        console.log(spots);
    }
})