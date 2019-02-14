function myCanvas() {
  let c = document.getElementById("myCanvas");
  let ctx = c.getContext("2d");
  let img = document.getElementById("nature");
  let imgWidth = img.clientWidth;
  let imgHeight = img.clientHeight;

  // ctx.drawImage(img,0,0,600,335);

  // Create gradient
var grd = ctx.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(0, 0, 600, 335);

  // let tempRed=0;
  // let tempGreen=0;
  // let tempBlue=0;
  // for(let k=0;k<10;k++){
  //   for(let m=0;m<10;m++){
  //     let imgData = ctx.getImageData(k, m, 1, 1);
  //     tempRed += imgData.data[0];
  //     tempGreen += imgData.data[1];
  //     tempBlue += imgData.data[2];
  //   }
  // }
  // let red = tempRed/100;
  // let green = tempGreen/100;
  // let blue = tempBlue/100;
    for(let i=0;i<imgWidth;i+=10){
      for(let j=0;j<imgHeight;j+=10){
        myPixel();
        // ctx.drawImage(img,i,j,10,10,i,j,10,10);
        // ctx.fillStyle = "rgba("+red+","+green+","+blue+")";
        // ctx.fillRect(i,j,10,10);
    }
  }
  // ctx.drawImage(img,0,0,600,335);
}

function myPixel(i,j) {
  let c = document.getElementById("myCanvas");
  let ctx = c.getContext("2d");
  let tempRed=0;
  let tempGreen=0;
  let tempBlue=0;
  for(let k=0;k<10;k++){
    for(let m=0;m<10;m++){
      let imgData = ctx.getImageData(k, m, 1, 1);
      tempRed += imgData.data[0];
      tempGreen += imgData.data[1];
      tempBlue += imgData.data[2];
    }
  }
  let red = tempRed/100;
  let green = tempGreen/100;
  let blue = tempBlue/100;
}
