var a = [40,35,62,70,68];

function avg (){
  var sum = a[0]  + a[1] + a[2] + a[3] + a[4];
  var average = sum/a.length;
  console.log(average);
}

function setup() 
{
  createCanvas(400,400);
 avg();



}

function draw() 
{
background(51);

}

