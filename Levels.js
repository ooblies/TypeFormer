
   
   var width = 800,
        height = 800;

var levels = [];

        levels.push({
            level:0,
            text1:"Type 'start' to begin.", text1X:150, text1Y:200, text1Color:"white",
            text2:null, text2X:130, text2Y:440, text2Color:"black",
            text3:null, text3X:130, text3Y:440, text3Color:"black",
            x:390, y:390, //spawn point
            levelColor:"black", timerColor:"black",deathColor:"black",scoreColor:"black"
            
        });
        levels.push({
            level:1,
            text1:"Type 'right' to run right.", text1X:110, text1Y:height/5, text1Color:"black",
            text2:"Type 'left' to run left.", text2X:145, text2Y:440, text2Color:"black",
            text3:null, text3X:80, text3Y:700, text3Color:"black",
            x:width/6, y:height/4, //spawn point
            levelColor:"black", timerColor:"black",deathColor:"black",scoreColor:"black"
            
        });
        
        levels.push({
            level:2,
            text1:"Don't touch the red!", text1X:175, text1Y:175, text1Color:"black",
            text2:null, text2X:0, text2Y:0, text2Color:"black",
            text3:null, text3X:0, text3Y:0, text3Color:"black",
            x:350, y:350,
            levelColor:"black", timerColor:"black",deathColor:"white",scoreColor:"white"
        });
        levels.push({
            level:3,
            text1:null, text1X:110, text1Y:height/5, text1Color:"black",
            text2:null, text2X:130, text2Y:440, text2Color:"black",
            text3:null, text3X:0, text3Y:0, text3Color:"black",
            x:300, y: 100,
            levelColor:"black", timerColor:"black",deathColor:"white",scoreColor:"white"
        });
        levels.push({
            level:4,
            text1:null, text1X:100, text1Y:height/5, text1Color:"black",
            text2:null, text2X:130, text2Y:440, text2Color:"black",
            text3:null, text3X:0, text3Y:0, text3Color:"black",
            x: width/2 - 10, y: 85,
            levelColor:"black", timerColor:"black",deathColor:"white",scoreColor:"white"
        });
        levels.push({
            level:5,
            text1:"Type 'jump' to jump", text1X:175, text1Y:height/5, text1Color:"black",
            text2:null, text2X:130, text2Y:440, text2Color:"black",
            text3:null, text3X:0, text3Y:0, text3Color:"black",
            x: 45, y: 600,
            levelColor:"black", timerColor:"black",deathColor:"white",scoreColor:"white"
        });
        levels.push({
            level:6,
            text1:null, text1X:100, text1Y:height/5, text1Color:"black",
            text2:null, text2X:130, text2Y:440, text2Color:"black",
            text3:null, text3X:0, text3Y:0, text3Color:"black",
            x: width/8 - 10, y: height/2 - 25,
            levelColor:"black", timerColor:"black",deathColor:"white",scoreColor:"white"
        });
        levels.push({
            level:7,
            text1:null, text1X:170, text1Y:height/5 - 15, text1Color:"white",
            text2:null, text2X:130, text2Y:440, text2Color:"black",
            text3:null, text3X:0, text3Y:0, text3Color:"black",
            x: width/2 - 10, y: height - 25,
            levelColor:"white", timerColor:"white",deathColor:"black",scoreColor:"black"
        });
        levels.push({
            level:8,
            text1:null, text1X:200, text1Y:200, text1Color:"white",
            text2:null, text2X:130, text2Y:440, text2Color:"black",
            text3:null, text3X:0, text3Y:0, text3Color:"black",
            x: 390, y: 390,
            levelColor:"black", timerColor:"black",deathColor:"black",scoreColor:"black"
        });
        levels.push({
            level:9,
            text1:"Type 'stop' to stop.", text1X:190, text1Y:height/5 - 15, text1Color:"white",
            text2:null, text2X:130, text2Y:440, text2Color:"black",
            text3:null, text3X:0, text3Y:0, text3Color:"black",
            x: 150, y: 399,
            levelColor:"white", timerColor:"white",deathColor:"black",scoreColor:"black"
        });
        levels.push({
            level:10,
            text1:null, text1X:190, text1Y:height/5 - 15, text1Color:"white",
            text2:null, text2X:130, text2Y:440, text2Color:"black",
            text3:null, text3X:0, text3Y:0, text3Color:"black",
            x: 150, y: 99,
            levelColor:"black", timerColor:"black",deathColor:"black",scoreColor:"white"
        });
        levels.push({
            level:11,
            text1:null, text1X:190, text1Y:height/5 - 15, text1Color:"white",
            text2:null, text2X:130, text2Y:440, text2Color:"black",
            text3:null, text3X:0, text3Y:0, text3Color:"black",
            x: 50, y: 50,
            levelColor:"black", timerColor:"black",deathColor:"white",scoreColor:"white"
        });
        levels.push({
            level:12,
            text1:null, text1X:190, text1Y:height/5 - 15, text1Color:"white",
            text2:null, text2X:130, text2Y:440, text2Color:"black",
            text3:null, text3X:0, text3Y:0, text3Color:"black",
            x: 50, y: 650,
            levelColor:"black", timerColor:"black",deathColor:"white",scoreColor:"white"
        });
        levels.push({
            level:13,
            text1:"Type 'invert'", text1X:250, text1Y:height/3, text1Color:"black",
            text2:"to invert gravity.", text2X:200, text2Y:height/3*2, text2Color:"black",
            text3:null, text3X:0, text3Y:0, text3Color:"black",
            x: 50, y: 300,
            levelColor:"white", timerColor:"white",deathColor:"white",scoreColor:"white"
        });
        levels.push({
            level:14,
            text1:null, text1X:250, text1Y:height/3, text1Color:"black",
            text2:null, text2X:200, text2Y:height/3*2, text2Color:"black",
            text3:null, text3X:0, text3Y:0, text3Color:"black",
            x: 50, y: 125,
            levelColor:"white", timerColor:"white",deathColor:"white",scoreColor:"white"
        });
        levels.push({
            level:15,
            text1:null, text1X:250, text1Y:height/3, text1Color:"black",
            text2:null, text2X:200, text2Y:height/3*2, text2Color:"black",
            text3:null, text3X:0, text3Y:0, text3Color:"black",
            x: 390, y: 375,
            levelColor:"white", timerColor:"white",deathColor:"white",scoreColor:"white"
        });
        levels.push({
            level:16,
            text1:"Type 'win' to win.", text1X:200, text1Y:height/3, text1Color:"white",
            text2:null, text2X:200, text2Y:height/3*2, text2Color:"black",
            text3:null, text3X:0, text3Y:0, text3Color:"black",
            x: 390, y: 375,
            levelColor:"black", timerColor:"black",deathColor:"black",scoreColor:"black"
        });

        var boxes = [];
         //Level 8
        //top border
        boxes.push({
            x: 0, y: 0,
            width: width, height:height*4/9,
            level:0, kill:0, goal:0
        });
        //left border
        boxes.push({
            x: 0, y: 0,
            width: width*4/9, height: height,
            level:0, kill:0, goal:0
        });
        //bottom border
        boxes.push({
            x: 0, y: height*5/9,
            width: width, height: height*4/9,
            level:0, kill:0, goal:0
        });
        //right border
        boxes.push({
            x: width*5/9, y: 0,
            width: width*4/9, height: height,
            level:0, kill:0, goal:0
        });
        
        
        //Level 1
        //top border
        boxes.push({
            x: 0, y: 0,
            width: width, height: 10,
            level:1, kill:0, goal:0
        });
        //left border
        boxes.push({
            x: 0, y: 0,
            width: 10, height: height,
            level:1, kill:0, goal:0
        });
        //bottom border
        boxes.push({
            x: 0, y: height - 10,
            width: width, height: 10,
            level:1, kill:0, goal:0
        });
        //right border
        boxes.push({
            x: width - 10, y: 0,
            width: 10, height: height,
            level:1, kill:0, goal:0
        });
        boxes.push({
            x: 0, y: height/3,
            width:width/3 * 2, height:50,
            level:1, kill:0, goal:0
        });
        boxes.push({
            x: height/3, y: height/3 * 2,
            width:width/3 * 2, height:50,
            level:1, kill:0, goal:0
        });
        boxes.push({
            x: width/6 * 5 - 25, y: 780,
            width:50, height:10,
            level:1, kill:0, goal:1
        });

        //Level 2  Don't touch the red
        //top border
        boxes.push({
            x: 0, y: 0,
            width: width, height: 10,
            level:2, kill:0, goal:0
        });
        //left border
        boxes.push({
            x: 0, y: 0,
            width: 10, height: height,
            level:2, kill:0, goal:0
        });
        //bottom border
        boxes.push({
            x: 0, y: height - 10,
            width: width, height: 10,
            level:2, kill:0, goal:0
        });
        //right border
        boxes.push({
            x: width - 10, y: 0,
            width: 10, height: height,
            level:2, kill:0, goal:0
        });
        boxes.push({
            x: 0, y: 375,
            width: 400, height: 50,
            level:2, kill:0, goal:0
        });
        boxes.push({
            x: 0, y: 525,
            width: 400, height: 275,
            level:2, kill:0, goal:0
        });
        boxes.push({
            x: 400, y: 600,
            width: width/2 - 10, height: 200 - 10,
            level:2, kill:1, goal:0
        });
        boxes.push({
            x:100, y: 515,
            width: 50, height: 10,
            level:2, kill:0, goal:1
        });


        //Level 3
        //top border
        boxes.push({
            x: 0, y: 0,
            width: width, height: 10,
            level:3, kill:0, goal:0
        });
        //left border
        boxes.push({
            x: 0, y: 0,
            width: 10, height: height,
            level:3, kill:0, goal:0
        });
        //bottom border
        boxes.push({
            x: 0, y: height -10,
            width: width, height: 10,
            level:3, kill:0, goal:0
        });
        //right border
        boxes.push({
            x: width - 10, y: 0,
            width: 10, height: height,
            level:3, kill:0, goal:0
        });

        boxes.push({
            x: 0, y: 125,
            width:450, height:50,
            level:3, kill:0, goal:0
        });
        boxes.push({
            x: 350, y: 250,
            width:450, height:50,
            level:3, kill:0, goal:0
        });
        boxes.push({
            x: 0, y: 375,
            width:450, height:50,
            level:3, kill:0, goal:0
        });
        boxes.push({
            x: 350, y: 500,
            width:450, height:50,
            level:3, kill:0, goal:0
        });
        boxes.push({
            x: 0, y: 625,
            width:450, height:50,
            level:3, kill:0, goal:0
        });
        boxes.push({
           x: 10, y:10,
           width:250, height:height - 20,
           level:3, kill:1, goal:0
        });
        boxes.push({
           x: width - 260, y:10,
           width:250, height:height - 20,
           level:3, kill:1, goal:0
        });
        
        
        boxes.push({
            x:375, y:height-20,
            width:50, height:10,
            level:3, kill:0, goal:1
        });

        //Level 4
        //top border
        boxes.push({
            x: 0, y: 0,
            width: width, height: 10,
            level:4, kill:0, goal:0
        });
        //left border
        boxes.push({
            x: 0, y: 0,
            width: 10, height: height,
            level:4, kill:0, goal:0
        });
        //bottom border
        boxes.push({
            x: 0, y: height - 10,
            width: width, height: 10,
            level:4, kill:0, goal:0
        });
        //right border
        boxes.push({
            x: width - 10, y: 0,
            width: 10, height: height,
            level:4, kill:0, goal:0
        });
        boxes.push({
            x: 375, y: 100,
            width: 50, height: 25,
            level:4, kill:0, goal:0
        });
        
        boxes.push({
            x: 335, y: 150,
            width: 125, height: 125,
            level:4, kill:1, goal:0
        });
        boxes.push({
            x: 100, y: 300,
            width: 125, height: 125,
            level:4, kill:1, goal:0
        });
        boxes.push({
            x: 575, y: 300,
            width: 125, height: 125,
            level:4, kill:1, goal:0
        });
        boxes.push({
            x: 335, y: 350,
            width: 125, height: 125,
            level:4, kill:1, goal:0
        });
        
        boxes.push({
            x: 10, y: 740,
            width: 780, height: 50,
            level:4, kill:1, goal:0
        });
        
        boxes.push({
            x: 350, y: 715,
            width: 100, height: 25,
            level:4, kill:0, goal:0
        });
        boxes.push({
            x:width/2 - 25, y:705,
            width:50, height:10,
            level:4, kill:0, goal:1
        });

        //Level 5 //Type jump to jump
        //top border
        boxes.push({
            x: 0, y: 0,
            width: width, height: 10,
            level:5, kill:0, goal:0
        });
        //left border
        boxes.push({
            x: 0, y: 0,
            width: 10, height: height,
            level:5, kill:0, goal:0
        });
        //bottom border
        boxes.push({
            x: 0, y: height - 10,
            width: width, height: 10,
            level:5, kill:0, goal:0
        });
        //right border
        boxes.push({
            x: width - 10, y: 0,
            width: 10, height: height,
            level:5, kill:0, goal:0
        });
        boxes.push({
            x: 0, y: 600,
            width:  100, height: 200,
            level:5, kill:0, goal:0
        });
        boxes.push({
            x: 100, y: 567,
            width:  100, height: 233,
            level:5, kill:0, goal:0
        });
        boxes.push({
            x: 200, y: 533,
            width:  100, height: 266,
            level:5, kill:0, goal:0
        });
        boxes.push({
            x: 300, y: 500,
            width:  100, height: 300,
            level:5, kill:0, goal:0
        });
        boxes.push({
            x: 400, y: 467,
            width:  100, height: 333,
            level:5, kill:0, goal:0
        });
        boxes.push({
            x: 500, y: 433,
            width:  100, height: 366,
            level:5, kill:0, goal:0
        });
        boxes.push({
            x: 600, y: 400,
            width:  100, height: 400,
            level:5, kill:0, goal:0
        });
        boxes.push({
            x: 700, y: 367,
            width:  100, height: 433,
            level:5, kill:0, goal:0
        });
        boxes.push({
            x: 10, y: 10,
            width:  780, height: 225,
            level:5, kill:1, goal:0
        });
        boxes.push({
            x: 725, y: 357,
            width:  50, height: 10,
            level:5, kill:0, goal:1
        });
        
        //Level 6
        //top border
        boxes.push({
            x: 0, y: 0,
            width: width, height: 10,
            level:6, kill:0, goal:0
        });
        //left border
        boxes.push({
            x: 0, y: 0,
            width: 10, height: height,
            level:6, kill:0, goal:0
        });
        //bottom border
        boxes.push({
            x: 0, y: height - 10,
            width: width, height: 10,
            level:6, kill:0, goal:0
        });
        //right border
        boxes.push({
            x: width - 10, y: 0,
            width: 10, height: height,
            level:6, kill:0, goal:0
        });
        
        boxes.push({
            x: 0, y: height/2,
            width: width/6, height: height/2-10,
            level:6, kill:0, goal:0
        });
        boxes.push({
            x:740, y: height/2,
            width: width/4, height: height/2-10,
            level:6, kill:0, goal:0
        });
        boxes.push({
            x:350, y: height/2,
            width: 25, height: 25,
            level:6, kill:0, goal:0
        });
        boxes.push({
            x:630, y: height/2,
            width: 25, height: 25,
            level:6, kill:0, goal:0
        });
        
        boxes.push({
            x:width/6, y: height/3*2,
            width: width/6*5 - 60, height: height/3-10,
            level:6, kill:1, goal:0
        });

        boxes.push({
            x: 740, y: height/2 - 10,
            width: 50, height: 10,
            level:6, kill:0, goal:1
        });

        //Level 7
        //top border
        boxes.push({
            x: 0, y: 0,
            width: width, height: 10,
            level:7, kill:0, goal:0
        });
        //left border
        boxes.push({
            x: 0, y: 0,
            width: 10, height: height,
            level:7, kill:0, goal:0
        });
        //bottom border
        boxes.push({
            x: 0, y: height -10,
            width: width, height: 10,
            level:7, kill:0, goal:0
        });
        //right border
        boxes.push({
            x: width - 10, y: 0,
            width: 10, height: height,
            level:7, kill:0, goal:0
        });

        boxes.push({
            x: 0, y: 125,
            width:450, height:30,
            level:7, kill:0, goal:0
        });
        boxes.push({
            x: 350, y: 255,
            width:450, height:30,
            level:7, kill:0, goal:0
        });
        boxes.push({
            x: 0, y: 385,
            width:450, height:30,
            level:7, kill:0, goal:0
        });
        boxes.push({
            x: 350, y: 515,
            width:450, height:30,
            level:7, kill:0, goal:0
        });
        boxes.push({
            x: 0, y: 645,
            width:450, height:30,
            level:7, kill:0, goal:0
        });
        boxes.push({
           x: 10, y:10,
           width:140, height:height - 20,
           level:7, kill:1, goal:0
        });
        boxes.push({
           x: width - 150, y:10,
           width:140, height:height - 20,
           level:7, kill:1, goal:0
        });
        
        
        boxes.push({
            x:width/2 - 25, y:115,
            width:50, height:10,
            level:7, kill:0, goal:1
        });
        
        
        //Level 8
        //top border
        boxes.push({
            x: 0, y: 0,
            width: width, height: 10,
            level:8, kill:0, goal:0
        });
        //left border
        boxes.push({
            x: 0, y: 0,
            width: 10, height: height,
            level:8, kill:0, goal:0
        });
        //bottom border
        boxes.push({
            x: 0, y: height - 10,
            width: width, height: 10,
            level:8, kill:0, goal:0
        });
        //right border
        boxes.push({
            x: width - 10, y: 0,
            width: 10, height: height,
            level:8, kill:0, goal:0
        });

        boxes.push({
            x: width/4, y: height/2,
            width: width/3, height: height/2-10,
            level:8, kill:0, goal:0
        });
        boxes.push({
            x: 10, y: height/3 * 2,
            width: width/4 + - 10, height: height/3 - 10,
            level:8, kill:1, goal:0
        });
        boxes.push({
            x: width/12 * 7, y: height/3 * 2,
            width: width/12 * 5 + - 10, height: height/3 - 10,
            level:8, kill:1, goal:0
        });
        boxes.push({
            x: width/2 - 150, y: height/2 - 100,
            width: 250, height: 25,
            level:8, kill:0, goal:0
        });
        boxes.push({
            x: width/8  * 7 - 25, y: height/2+10,
            width: 50, height: 25,
            level:8, kill:0, goal:0
        });
        boxes.push({
            x: width/8  * 7 - 25, y: height/2,
            width: 50, height: 10,
            level:8, kill:0, goal:1
        });
        
        //Level 9
        //top border
        boxes.push({
            x: 0, y: 0,
            width: width, height: height/3,
            level:9, kill:0, goal:0
        });
        //left border
        boxes.push({
            x: 0, y: 0,
            width: 10, height: height,
            level:9, kill:0, goal:0
        });
        //bottom border
        boxes.push({
            x: 0, y: height - 10,
            width: width, height: 10,
            level:9, kill:0, goal:0
        });
        //right border
        boxes.push({
            x: width - 10, y: 0,
            width: 10, height: height,
            level:9, kill:0, goal:0
        });

        boxes.push({
            x: 0, y: height/4,
            width: width/4, height: 30,
            level:9, kill:0, goal:0
        });
        boxes.push({
            x: 10, y: height/4 *3-10,
            width: width - 20, height: height/4,
            level:9, kill:1, goal:0
        });
        boxes.push({
            x: 10, y: height/2 + 15,
            width: width/3 * 2, height: 25,
            level:9, kill:0, goal:0
        });
        boxes.push({
            x: height/3 *2 + 25, y: height/4 * 3 - 50,
            width: 50, height: 25,
            level:9, kill:0, goal:0
        });
        boxes.push({
            x: height/3 *2 + 25, y: height/4 * 3 - 60,
            width: 50, height: 10,
            level:9, kill:0, goal:1
        });
        
        //Level 10
        //top border
        boxes.push({
            x: 0, y: 0,
            width: width, height: 10,
            level:10, kill:0, goal:0
        });
        //left border
        boxes.push({
            x: 0, y: 0,
            width: 10, height: height,
            level:10, kill:0, goal:0
        });
        //bottom border
        boxes.push({
            x: 0, y: height - 10,
            width: width, height: 10,
            level:10, kill:0, goal:0
        });
        //right border
        boxes.push({
            x: width - 10, y: 0,
            width: 10, height: height,
            level:10, kill:0, goal:0
        });
        boxes.push({
            x: 10, y: height/4 - 25,
            width: 300, height: 40,
            level:10, kill:0, goal:0
        });
        boxes.push({
            x: 310, y: height/4 - 25,
            width: 200, height: 40,
            level:10, kill:1, goal:0
        });
        boxes.push({
            x: 540, y: height/4 - 25,
            width: 250, height: 40,
            level:10, kill:1, goal:0
        });
        boxes.push({
            x: width - 360, y: height/2,
            width: 350, height: 40,
            level:10, kill:0, goal:0
        });
        boxes.push({
            x: width - 400, y: height/2,
            width: 40, height: 40,
            level:10, kill:1, goal:0
        });
        boxes.push({
            x: 10, y: height/2,
            width: 340, height: 40,
            level:10, kill:1, goal:0
        });
        boxes.push({
            x: width - 350, y: height-70,
            width: 340, height: 60,
            level:10, kill:0, goal:0
        });
        boxes.push({
            x: 10, y: height-40,
            width: 440, height: 30,
            level:10, kill:1, goal:0
        });
        boxes.push({
            x: width - 110, y: height-80,
            width: 50, height: 10,
            level:10, kill:0, goal:1
        });
        
        //Level 11
        //top border
        boxes.push({
            x: 0, y: 0,
            width: width, height: 10,
            level:11, kill:0, goal:0
        });
        //left border
        boxes.push({
            x: 0, y: 0,
            width: 10, height: height,
            level:11, kill:0, goal:0
        });
        //bottom border
        boxes.push({
            x: 0, y: height - 10,
            width: width, height: 10,
            level:11, kill:0, goal:0
        });
        //right border
        boxes.push({
            x: width - 10, y: 0,
            width: 10, height: height,
            level:11, kill:0, goal:0
        });
        boxes.push({
            x: 10, y: 100,
            width: 600, height: 200,
            level:11, kill:0, goal:0
        });
        boxes.push({
            x: 610, y: 100,
            width: 20, height: 200,
            level:11, kill:1, goal:0
        });
        boxes.push({
            x: width - 70, y: 10,
            width: 60, height: height - 20,
            level:11, kill:1, goal:0
        });
        boxes.push({
            x: 10, y: height - 75,
            width: width - 20, height: 65,
            level:11, kill:1, goal:0
        });
        boxes.push({
            x: 200, y: 500,
            width: 100, height: 25,
            level:11, kill:0, goal:0
        });
        boxes.push({
            x: 500, y: 500,
            width: 100, height: 25,
            level:11, kill:0, goal:0
        });
        boxes.push({
            x: 225, y: 490,
            width: 50, height: 10,
            level:11, kill:0, goal:1
        });
        
        //Level 12
        //top border
        boxes.push({
            x: 0, y: 0,
            width: width, height: 10,
            level:12, kill:0, goal:0
        });
        //left border
        boxes.push({
            x: 0, y: 0,
            width: 10, height: height,
            level:12, kill:0, goal:0
        });
        //bottom border
        boxes.push({
            x: 0, y: height - 100,
            width: width, height: 100,
            level:12, kill:0, goal:0
        });
        //right border
        boxes.push({
            x: width - 10, y: 0,
            width: 10, height: height,
            level:12, kill:0, goal:0
        });
        boxes.push({
            x: width/2 - 50, y: 225,
            width: 100, height: 565,
            level:12, kill:1, goal:0
        });
        boxes.push({
            x: 450, y: 450,
            width: 125, height: 25,
            level:12, kill:1, goal:0
        });
        boxes.push({
            x: width - 135, y: 450,
            width: 125, height: 25,
            level:12, kill:1, goal:0
        });
        boxes.push({
            x: 595, y: height - 110,
            width: 50, height: 10,
            level:12, kill:0, goal:1
        });
        boxes.push({
            x: 100, y: 600,
            width: 50, height: 50,
            level:12, kill:0, goal:0
        });
        boxes.push({
            x: 200, y: 450,
            width: 50, height: 50,
            level:12, kill:0, goal:0
        });
        boxes.push({
            x: 150, y: 300,
            width: 50, height: 50,
            level:12, kill:0, goal:0
        });
        boxes.push({
            x: 375, y: 200,
            width: 50, height: 25,
            level:12, kill:0, goal:0
        });
        boxes.push({
            x: 595, y: 300,
            width: 50, height: 25,
            level:12, kill:0, goal:0
        });
        
        //Level 13
        //top border
        boxes.push({
            x: 0, y: 0,
            width: width, height: 10,
            level:13, kill:0, goal:0
        });
        //left border
        boxes.push({
            x: 0, y: 0,
            width: 10, height: height,
            level:13, kill:0, goal:0
        });
        //bottom border
        boxes.push({
            x: 0, y: height - 10,
            width: width, height: 10,
            level:13, kill:0, goal:0
        });
        //right border
        boxes.push({
            x: width - 10, y: 0,
            width: 10, height: height,
            level:13, kill:0, goal:0
        });
        boxes.push({
            x: 10, y: height - 110,
            width: width - 20, height: 100,
            level:13, kill:1, goal:0
        });
        boxes.push({
            x: 10, y: 10,
            width: width - 20, height: 100,
            level:13, kill:1, goal:0
        });
        boxes.push({
            x: 10, y: height/2 - 25,
            width: width/3 - 10, height: 50,
            level:13, kill:0, goal:0
        });
        boxes.push({
            x: 540, y: height/2 - 25,
            width: width/3 - 10, height: 50,
            level:13, kill:0, goal:0
        });
        boxes.push({
            x: 675, y: height/2 + 25,
            width: 50, height: 10,
            level:13, kill:0, goal:1
        });
        
        //Level 14
        //top border
        boxes.push({
            x: 0, y: 0,
            width: width, height: 10,
            level:14, kill:0, goal:0
        });
        //left border
        boxes.push({
            x: 0, y: 0,
            width: 10, height: height,
            level:14, kill:0, goal:0
        });
        //bottom border
        boxes.push({
            x: 0, y: height - 10,
            width: width, height: 10,
            level:14, kill:0, goal:0
        });
        //right border
        boxes.push({
            x: width - 10, y: 0,
            width: 10, height: height,
            level:14, kill:0, goal:0
        });
        boxes.push({
            x: 10, y: height - 110,
            width: width - 20, height: 100,
            level:14, kill:1, goal:0
        });
        boxes.push({
            x: 10, y: 10,
            width: width - 20, height: 100,
            level:14, kill:1, goal:0
        });
        boxes.push({
            x: 10, y: 270,
            width: 350, height: 50,
            level:14, kill:0, goal:0
        });
        boxes.push({
            x: 360, y: 270,
            width: 10, height: 50,
            level:14, kill:1, goal:0
        });
        boxes.push({
            x: 440, y: 480,
            width: 350, height: 50,
            level:14, kill:0, goal:0
        });
        boxes.push({
            x: 430, y: 480,
            width: 10, height: 50,
            level:14, kill:1, goal:0
        });
        boxes.push({
            x: 700, y: 530,
            width: 50, height: 10,
            level:14, kill:0, goal:1
        });
        
        //Level 15
        //top border
        boxes.push({
            x: 0, y: 0,
            width: width, height: 10,
            level:15, kill:0, goal:0
        });
        //left border
        boxes.push({
            x: 0, y: 0,
            width: 10, height: height,
            level:15, kill:0, goal:0
        });
        //bottom border
        boxes.push({
            x: 0, y: height - 10,
            width: width, height: 10,
            level:15, kill:0, goal:0
        });
        //right border
        boxes.push({
            x: width - 10, y: 0,
            width: 10, height: height,
            level:15, kill:0, goal:0
        });
        boxes.push({
            x: 10, y: 10,
            width: width - 20, height: 100,
            level:15, kill:1, goal:0
        });
        boxes.push({
            x: 10, y: 690,
            width: width - 20, height: 100,
            level:15, kill:1, goal:0
        });
        boxes.push({
            x: width - 110, y: 10,
            width: 100, height: height - 20,
            level:15, kill:1, goal:0
        });
        boxes.push({
            x: 10, y: 10,
            width: 100, height: height - 20,
            level:15, kill:1, goal:0
        });
        boxes.push({
            x: 350, y: height/2 + 5,
            width: 100, height: 10,
            level:15, kill:0, goal:0
        });
        boxes.push({
            x: 450, y: height/2 + 5,
            width: 10, height: 10,
            level:15, kill:1, goal:0
        });
        boxes.push({
            x: 340, y: height/2 + 5,
            width: 10, height: 10,
            level:15, kill:1, goal:0
        });
        boxes.push({
            x: 375, y: height/2 + 15,
            width: 50, height: 10,
            level:15, kill:0, goal:1
        });
        
        
        
         //Level 16 - Final
        //top border
        boxes.push({
            x: 0, y: 0,
            width: width, height:height*4/9,
            level:16, kill:0, goal:0
        });
        //left border
        boxes.push({
            x: 0, y: 0,
            width: width*4/9, height: height,
            level:16, kill:0, goal:0
        });
        //bottom border
        boxes.push({
            x: 0, y: height*5/9,
            width: width, height: height*4/9,
            level:16, kill:0, goal:0
        });
        //right border
        boxes.push({
            x: width*5/9, y: 0,
            width: width*4/9, height: height,
            level:16, kill:0, goal:0
        });
        
        
       