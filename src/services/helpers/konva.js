import Konva from "konva";

const createKonvaStage = (data) => {
  return new Konva.Stage({
    container: data.container,
    scale: data.scale,
    offset: data.offset,
    width: data.width,
    height: data.height,
  });
};

const createKonvaLayer = () => {
  return new Konva.Layer();
}

const createKonvaImage = (imageData, infoData) => {
  return new Promise(resolve => {
    let image = new Image();
    image.src = imageData.src;

    image.onload = () => {
      const konvaImageData = {
        image,
        x: imageData.x || 0,
        y: imageData.y || 0,
        width: imageData.width || 0,
        height: imageData.height || 0,
      };

      if (infoData) {
        Object.assign(konvaImageData, infoData);
      }

      return resolve(new Konva.Image(konvaImageData));
    }
  });
};

export { createKonvaStage, createKonvaLayer, createKonvaImage };