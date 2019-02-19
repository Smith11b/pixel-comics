function myCanvas() {
  let c = document.getElementById("myCanvas");
  let ctx = c.getContext("2d");

  let img = new Image();
  img.src = './pixelTest.jpg';
  img.crossorigin = ""
  let imgWidth = img.clientWidth;
  let imgHeight = img.clientHeight;

  ctx.drawImage(img,0,0,600,335);

    for(let i=0;i<img.width;i+=10){
      for(let j=0;j<img.height;j+=10){
        let newPixelColor = getPixelColor(i,j);
        colorBlock(i,j,newPixelColor);
    }
  }
}

function getPixelColor(i,j) {
  let c = document.getElementById("myCanvas");
  let ctx = c.getContext("2d");

  let tempRed=0;
  let tempGreen=0;
  let tempBlue=0;
  for(let k=i;k<i+10;k++){
    for(let m=j;m<j+10;m++){
      let imgData = ctx.getImageData(k, m, 1, 1);
      tempRed += imgData.data[0];
      tempGreen += imgData.data[1];
      tempBlue += imgData.data[2];
    }
  }
  let red = tempRed/100;
  let green = tempGreen/100;
  let blue = tempBlue/100;
  return("rgba("+red+","+green+","+blue+")");
}

function colorBlock(i,j,newPixelColor) {
  let c = document.getElementById("myCanvas");
  let ctx = c.getContext("2d");

  ctx.fillStyle = newPixelColor;
  ctx.fillRect(i,j,10,10);
}
