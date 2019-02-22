export default function pixelate(c, src) {
  let ctx = c.getContext("2d");

  let img = new Image();
  img.src = src;
  img.crossorigin = "";
  let imgWidth = 500;
  let imgHeight = 350;

  ctx.drawImage(img, 0, 0, 600, 335);

  for (let i = 0; i < img.width; i += 10) {
    for (let j = 0; j < img.height; j += 10) {
      let newPixelColor = getPixelColor(i, j, ctx);
      colorBlock(i, j, newPixelColor, ctx);
    }
  }
}

function getPixelColor(i, j, ctx) {
  let tempRed = 0;
  let tempGreen = 0;
  let tempBlue = 0;
  for (let k = i; k < i + 10; k++) {
    for (let m = j; m < j + 10; m++) {
      let imgData = ctx.getImageData(k, m, 1, 1);
      tempRed += imgData.data[0];
      tempGreen += imgData.data[1];
      tempBlue += imgData.data[2];
    }
  }
  let red = tempRed / 100;
  let green = tempGreen / 100;
  let blue = tempBlue / 100;
  return "rgba(" + red + "," + green + "," + blue + ")";
}

function colorBlock(i, j, newPixelColor, ctx) {
  ctx.fillStyle = newPixelColor;
  ctx.fillRect(i, j, 10, 10);
}
