var blueColor = "#307192"
var redColor = "#c45453"
var blackColor = [50, 51, 62, 255]
var greenColor = [110, 170, 146,255]
var whiteColor = [231, 236, 239,255]
var inScene1 = false;
var scene1start;
var inScene2 = false;
var scene2start;
var inScene3 = true;
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

// DUMMMY DATA
// data from post for scene3/4
var city = 'Canberra';
var cost = 30000;
var jobList = [
  {
  jobName: "Data Scientist",
  median_salary: 80000, 
  median_salary_normalised: 0.80,
  projected_growth: 2.0,
  },
  {
  jobName: "Software Engineer",
  median_salary: 60000, 
  median_salary_normalised: 0.60,
  projected_growth: 1.5,
  },
  {
  jobName: "Software Consultant",
  median_salary: 59000, 
  median_salary_normalised: 0.59,
  projected_growth: 1.2,
  },
  {
  jobName: "Full Stack Developer",
  median_salary: 50000, 
  median_salary_normalised: 0.50,
  projected_growth: 1.2,
  },
  {
  jobName: "Web Developer",
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



var ausImg
function preload(){
  ausImg = loadImage("assets/australia_image.png")
  backImg= loadImage("images/right-arrow.png")
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
function scene1(){
  var panelWidth = width*2/3;
  drawPanel(panelWidth);
  drawAustralia();
}

function drawPanel(w){
  noStroke();
  fill(blueColor)
  rect(w, 0, width, height);
}

function drawAustralia(){
  push()
  translate(width*1/3, height/2)
  scale((width*2/3)/ausImg.width)

  image(ausImg, 0-ausImg.width/2 ,0-ausImg.height/2)
  pop()
}

function drawCities() {
}

//////////////////////////
// SCENE 2
//////////////////////////
function scene2(){
  var panelWidth = width*2/3;
  drawPanel(panelWidth);
  drawAustralia();
}

function drawPanel(w){
  fill(blueColor)
  rect(w, 0, width, height);
}

function drawAustralia(){
  push()
  translate(width*1/3, height/2)
  scale((width*2/3)/ausImg.width)

  image(ausImg, 0-ausImg.width/2 ,0-ausImg.height/2)
  pop()
}

//////////////////////////
// SCENE 3 
//////////////////////////
function scene3() {
  textSize(30);
  fill(blackColor);
  textSize(width/25)
  text(city, 50, 50, 100, 100)
  drawJobGraph(frameCount);
  drawBackButton(100);
}


function drawJobGraph(s) {
  let topPadding = 50
  let leftPadding = 50
  let barHeight = 30
  let currentHeight;
  for (i = 0; i < 5; i++){
    currentHeight = 200+i*(height/7)
    fill(blackColor)
    textSize(width/50)
    text(jobList[i].jobName, leftPadding, currentHeight);
   
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
  }
}

function drawBackButton(a) {
  tint(50, 50)
  image(backImg, 0, 0, width/30, width/30)
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
  } else if (inScene2){
    console.log("2")

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
