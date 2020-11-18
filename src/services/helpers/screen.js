const getTypeScreen = (width) => {
    let typeScreen = '',
        secren = width? width : window.innerWidth;

    if (secren <= 576) {
        typeScreen = 'extra-small';
    } else if (secren >= 576 && secren <= 768) {
        typeScreen = 'small';
    } else if (secren >= 768 && secren <= 992) {
        typeScreen = 'medium';
    } else if (secren >= 992 && secren <= 1200) {
        typeScreen = 'large';
    } else {
        typeScreen = 'extra-large';
    }

    return typeScreen;
};

const getResponsiveKonvaSizes = (width) => {
    let size = {width: null, height: null, scale: null, offset: null};

    switch (getTypeScreen(width)) {
        case 'extra-large' : {
            size.width = 950;
            size.height = 250;
            size.scale = {x: 0.12, y: 0.12};
            size.offset = {x: -1300, y: -450};
            break;
        }
        case 'large' : {
            size.width = 800;
            size.height = 250;
            size.scale = {x: 0.13, y: 0.13};
            size.offset = {x: -600, y: -450};
            break;
        }
        case 'medium' : {
            size.width = 670;
            size.height = 250;
            size.scale = {x: 0.12, y: 0.12};
            size.offset = {x: -800, y: -450};
            break;
        }
        case 'small' : {
            size.width = 400;
            size.height = 250;
            size.scale = {x: 0.07, y: 0.07};
            size.offset = {x: -400, y: -600};
            break;
        }
        case 'extra-small' : {
            size.width = 320;
            size.height = 150;
            size.scale = {x: 0.046, y: 0.046};
            size.offset = {x: -730, y: -700};
            break;
        }
        default :
            return;
    }

    return size;
};

export {getTypeScreen, getResponsiveKonvaSizes};
