import Konva from "konva";

export const getTypeScreen = (windowWidth) => {
    windowWidth = Math.round(windowWidth);
    let typeScreen;

    if (windowWidth <= 576) {
        typeScreen = 'extra-small';

    } else if (windowWidth >= 576 && windowWidth <= 768) {
        typeScreen = 'small';

    } else if (windowWidth >= 768 && windowWidth <= 992) {
        typeScreen = 'medium';

    } else if (windowWidth >= 992 && windowWidth <= 1200) {
        typeScreen = 'large';

    } else {
        typeScreen = 'extra-large';

    }

    return typeScreen;
}

export const createCanvas = (canvasContainerElement, windowWidth) => {
    let canvas;
    let typeScreen = getTypeScreen(windowWidth);

    canvas = new Konva['Stage']({
        'container': canvasContainerElement,
    });

    canvas['setOffset']({
        'x': 0,
        'y': 0,
    });

    responsiveCanvas(typeScreen, canvas);

    return canvas;
};


export const responsiveCanvas = (typeScreen, canvas) => {
    let canvasWidth;
    let canvasHeight;
    let canvasScale = {
        x: 0.215,
        y: 0.215,
    };
    let canvasOffset = {
        x: -750,
        y: -500,
    };

    switch (typeScreen) {
        case 'extra-large' : {
            canvasWidth = 1200;
            canvasHeight = 350;
            canvasScale = {
                x: 0.215,
                y: 0.215,
            };
            canvasOffset = {
                x: -750,
                y: -400,
            };

            break;
        }
        case 'large' : {
            canvasWidth = 992;
            canvasHeight = 250;
            canvasScale = {
                x: 0.18,
                y: 0.18,
            };
            canvasOffset = {
                x: -700,
                y: -200,
            };

            break;
        }

        case 'medium' : {
            canvasWidth = 768;
            canvasHeight = 250;
            canvasScale = {
                x: 0.14,
                y: 0.14,
            };
            canvasOffset = {
                x: -680,
                y: -450,
            };

            break;
        }

        case 'small' : {
            canvasWidth = 576;
            canvasHeight = 250;
            canvasScale = {
                x: 0.1,
                y: 0.1,
            };
            canvasOffset = {
                x: -680,
                y: -500,
            };

            break;
        }

        case 'extra-small' : {
            canvasWidth = 320;
            canvasHeight = 150;
            canvasScale = {
                x: 0.056,
                y: 0.056,
            };
            canvasOffset = {
                x: -730,
                y: -500,
            };

            break;
        }

        default : return
    }


    canvas.scale({
        'x': canvasScale.x,
        'y' : canvasScale.y,
    });
    canvas.offset({
        'x': canvasOffset.x,
        'y': canvasOffset.y,
    });
    canvas.width(canvasWidth);
    canvas.height(canvasHeight);
};