var blueColor = "#307192"
var redColor = "#c45453"
var blackColor = [50, 51, 62, 255]
var greenColor = [110, 170, 146,255]
var whiteColor = [231, 236, 239,255]
var inScene1 = true;
var scene1start;
var inScene2 = false;
var scene2start;
var inScene3 = false;
var scene3start;

// data from post for scene3/4
// var state;
// var cost;
// var jobList = {
//   jobName;
//   median_salary:
//   median_salary_normalised:
//   projected_growth:
// }

//DUMMY DATA For CIty List
var cities = ["Canberra", "Melbourne", "Sydney", "Perth", "Adelaide", "Brisbane", "Darwin", "Hobart"]

// DUMMMY DATA
// data from post for scene3/4
var city = 'Canberra';
var cost = 30000;
var jobList = [
  {
  jobName: "Telecommunications Engineering Professionals",
  median_salary: 80000, 
  median_salary_normalised: 0.80,
  projected_growth: 2.0,
  },
  {
  jobName: "Computer Network Professionals",
  median_salary: 60000, 
  median_salary_normalised: 0.60,
  projected_growth: 1.5,
  },
  {
  jobName: "Software and Applications Programmers",
  median_salary: 59000, 
  median_salary_normalised: 0.59,
  projected_growth: 1.2,
  },
  {
  jobName: "Database and Systems Administrators",
  median_salary: 50000, 
  median_salary_normalised: 0.50,
  projected_growth: 1.2,
  },
  {
  jobName: "ICT Business and Systems Analysts",
  median_salary: 45000, 
  median_salary_normalised: 0.45,
  projected_growth: 0.9,
  },
]
var costNormalised = cost/jobList[0].median_salary; 

// // data from post for scene2/3 for undustry no job
// var cityList {
//   city
//   industryGrowth:
//   median_salary:
// }

// // data from post for scene2/3 for job
// var cityList {
//   city
//   industryGrowth:
//   median_salary:
//   cost_of_living:
// }



var ausImg;
var backImg;

function preload(){
  ausImg= loadImage("static/australia_image.png")
  backImg= loadImage("static/right-arrow.png")
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background((whiteColor));

  if (inScene1){
    scene1();
  } else if (inScene2){
    scene2();
  } else if (inScene3){
    scene3();
  }

  // console.log("x = " + mouseX + " , " + mouseY)
}

//////////////////////////
// SCENE 1 
//////////////////////////

function drawAustralia(){
  push()
  translate(width*1/3, height/2)
  scale((width*2/3)/ausImg.width)

  image(ausImg, 0-ausImg.width/2 ,0-ausImg.height/2)
  pop()
}

function drawCities() {
  
}

function drawCityNamesPanel(w){
  console.log(cities.length);
  let space = (height-50)/cities.length
  for (i = 0; i < cities.length; i++){
    fill(whiteColor)
    text(cities[i], w + 50, space + space * i)
  }
}

var panelWidth;
function scene1(){
  push()
  panelWidth = width*2/3;
  drawPanel(panelWidth);
  drawAustralia();
  fill(whiteColor)
  textSize(height/40)
  drawCityNamesPanel(panelWidth);
  pop()
}
//////////////////////////
// SCENE 2
//////////////////////////

function scene2(){
  push()
  panelWidth = width*2/3;

  drawPanel(panelWidth);
  drawAustralia();
  drawBackButton2(255)
  drawMoreInfoButton();
  drawJobGraphMini(frameCount)
  textSize(30);
  fill(blackColor);
  textSize(width/25)
  text(city, panelWidth+50, 50, 100, 100)
  pop()
}

function drawPanel(w){
  fill(blueColor)
  noStroke()
  rect(w, 0, width, height);
}

function drawAustralia(){
  push()
  translate(width*1/3, height/2)
  scale((width*2/3)/ausImg.width)

  image(ausImg, 0-ausImg.width/2 ,0-ausImg.height/2)
  pop()
}

function drawJobGraphMini(s) {
  push()
  let topPadding = 50
  let leftPadding = panelWidth + 50
  let barHeight = 30
  let currentHeight;
  for (i = 0; i < 3; i++){
    currentHeight = 200+i*(height/7)
    fill(blackColor)
    textSize(width/50)
    text(i+1 + ". " + jobList[i].jobName, leftPadding, currentHeight);
   
    let barPadding = 20;
    fill(whiteColor)
    noStroke()
    let barSalaryLength = jobList[i].median_salary_normalised* (width/4 - 50);
    rect(leftPadding, currentHeight + barPadding, barSalaryLength, barHeight, 100, 100)

    fill(redColor)
    noStroke()
    let barCostLength = costNormalised * (width/3 - 50)
    rect(leftPadding, currentHeight + barPadding, barCostLength, barHeight, 100, 100)

    push()
    rectMode(CENTER)
    let textPadding = 10;
    fill(blackColor)
    textSize(width/80)
    text('$' + jobList[i].median_salary, textPadding + leftPadding + barSalaryLength, currentHeight + barPadding + (barHeight/2) + 5)

    fill(blackColor)
    textSize(width/80)
    text('$' + cost, leftPadding + barCostLength- width/15, currentHeight + barPadding + (barHeight/2) + 5)
    pop()
  }
  pop()
}

function drawBackButton2(a) {
  tint(50, 50)
  image(backImg, panelWidth, 0, width/30, width/30)
}

function drawMoreInfoButton() {
  push()
  fill(blackColor)
  rect(width-100, height-50, 60, 30, 100, 100)
  fill(whiteColor);
  textSize(15);
  textAlign(CENTER,CENTER)
  text("Info", width-100, height-50, 60,30)
  console.log("bruh")
  pop()
}


//////////////////////////
// SCENE 3 
//////////////////////////
function scene3() {
  push()
  textSize(30);
  fill(blackColor);
  textSize(width/25)
  text(city, 50, 50, 100, 100)
  drawJobGraph(frameCount);
  drawBackButton(100);
  drawFutureGraph();
  pop()
}


function drawJobGraph(s) {
  let topPadding = 50
  let leftPadding = 50
  let barHeight = 30
  let currentHeight;
  for (i = 0; i < 5; i++){
    push()
    currentHeight = 200+i*(height/7)
    fill(blackColor)
    textSize(width/50)
    text(i+1 + ". " + jobList[i].jobName, leftPadding, currentHeight);
   
    let barPadding = 20;
    fill(blueColor)
    noStroke()
    let barSalaryLength = jobList[i].median_salary_normalised* width/2;
    rect(leftPadding, currentHeight + barPadding, barSalaryLength, barHeight, 100, 100)

    fill(redColor)
    noStroke()
    let barCostLength = costNormalised * width/2
    rect(leftPadding, currentHeight + barPadding, barCostLength, barHeight, 100, 100)

    push()
    rectMode(CENTER)
    let textPadding = 10;
    fill(blackColor)
    textSize(width/80)
    text('$' + jobList[i].median_salary, textPadding + leftPadding + barSalaryLength, currentHeight + barPadding + (barHeight/2) + 5)

    fill(whiteColor)
    textSize(width/80)
    text('$' + cost, leftPadding + barCostLength- width/15, currentHeight + barPadding + (barHeight/2) + 5)
    pop()
    pop()
  }
}

function drawBackButton(a) {
  tint(50, 50)
  image(backImg, 0, 0, width/30, width/30)
}

function drawFutureGraph() {
  push()
  let barSpan = height*3/4
  translate(width/2, 100)



  var barSpace = barSpan/3;
  textSize(30)
  text("Projected Job Growth for the next 5 Years", 15, 50)
  textSize(20)
  noStroke()
  for (i = 0; i < 5; i++){
    fill(blueColor)
    rect((barSpace+i*barSpace)/2, barSpan, -(barSpace/3), -(jobList[i].projected_growth)* (barSpan/3))
    fill(blackColor)
    text(jobList[i].projected_growth + "",(barSpace+i*barSpace)/2- (barSpace/5),  barSpan-(jobList[i].projected_growth)* (barSpan/3)-20, 50, 50)
    text((i+1)+"",(barSpace+i*barSpace)/2 - (barSpace/5),  barSpan+10, 50, 50)
  }

  strokeWeight(10)
  stroke(10)
  line(0,0, 0, barSpan)
  line(0,barSpan, barSpan, barSpan)



  pop()
}

// function testMouse(){
//   if (scene1){

//   } else if (scene2){

//   } else if (scene3){
//     if (mouseX<30 && mouseY<30){
      
//     }
//   }
// }

function mousePressed() {
  console.log("hello")
  if (inScene1){
    console.log("1")
    console.log(panelWidth)

    if (mouseX > panelWidth){
      console.log(mouseX)
      for (i = 0; i < cities.length; i++){
        let space = (height-50)/cities.length
        if (mouseY < (space + space * i)){
          //send cities[i]
          //loadJSON('/test?name=' + cities[i], processCityData);
          inScene1 = false;
          inScene2 = true;
          inScene3 = false;
        }
      }
    }
  } else if (inScene2){
    console.log("2")
    if (mouseX > panelWidth && mouseX < (panelWidth+width/30)){
      if (mouseY < width/30){
        console.log("back to scene1")
        inScene1 = true;
        inScene2 = false;
        inScene3 = false;
      }
    }

    if (mouseX > width-100){
      if (mouseY > height-50){
        inScene1 = false;
        inScene2 = false;
        inScene3 = true;
        console.log("yeet!")
      }
    }


  } else if (inScene3){
    console.log("3")
    if ((mouseX < 30) && (mouseY < 30)){
      inScene1 = false;
      inScene2 = true;
      inScene3 = false;
      console.log("yeet")
    }
  }
}

function processCityData(){

}
