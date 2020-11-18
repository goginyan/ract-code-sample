export let products = [
    {
        'id': 1,
        'name': 'Receiver2',
        'price': 1337,
        'base_part': true,
        'category': 'Receiver',
        'attachments': {
            'Tripod': {
                'connector': 'i-1',
                'positions': {
                    'top': 33,
                    'left': 10
                }
            },
            'Grip': {
                'connector': 'i-1',
                'positions': {
                    'top': 32,
                    'left': 26
                },
                'offset': {
                    'x': 'top',
                    'y': 'left'
                }
            },
            'Suppressor': {
                'connector': 'i-1',
                'positions': {
                    'top': 10,
                    'left': -17
                }
            },
            'Stock': {
                'connector': 'i-1',
                'positions': {
                    'top': 13.5,
                    'left': 97
                }
            },
            'Scope': {
                'connector': 'i-1',
                'positions': {
                    'top': -35,
                    'left': 54
                }
            },
            'Laser': {
                'connector': 'i-1',
                'positions': {
                    'top': -28,
                    'left': 28
                }
            }

        },
        'image': '/images/Gun 2 - Not Assembled.png',
        'imageDetails': {
            'width': 3443.6,
            'height': 1025.5,
        }
    },
    {
        'id': 2,
        'name': 'Angled_Foregrip_Black',
        'price': 10,
        'base_part': true,
        'category': 'Grip',
        'attachments': null,
        'image': '/images/grip/Angled_Foregrip_Black_Left.png',
        'imageDetails': {
            'width': 323,
            'height': 419
        }
    },
    {
        'id': 3,
        'name': 'Angled_Foregrip_Tan',
        'price': 10,
        'base_part': false,
        'category': 'Grip',
        'attachments': null,
        'image': '/images/grip/Angled_Foregrip_Tan_Left.png',
        'imageDetails': {
            'width': 314,
            'height': 408
        }
    },
    {
        'id': 4,
        'name': 'PTS_MVG_Tan',
        'price': 10,
        'base_part': false,
        'category': 'Grip',
        'attachments': null,
        'image': '/images/grip/PTS_MVG_Tan_Left.png',
        'imageDetails': {
            'width': 229,
            'height': 441
        }
    },
    {
        'id': 5,
        'name': 'SI_grip_red',
        'price': 10,
        'base_part': false,
        'category': 'Grip',
        'attachments': null,
        'image': '/images/grip/SI_grip_red_left.png',
        'imageDetails': {
            'width': 713,
            'height': 258
        },
        'partOffset': {
            'x': -20,
            'y': 0
        }
    },
    {
        'id': 6,
        'name': 'Laser_Black',
        'price': 10,
        'base_part': false,
        'category': 'Laser',
        'attachments': null,
        'image': '/images/laser/Laser_Black_left\x20copy.png',
        'imageDetails': {
            'width': 512,
            'height': 363
        }
    },
    {
        'id': 7,
        'name': 'Laser_Tan',
        'price': 10,
        'base_part': false,
        'category': 'Laser',
        'attachments': null,
        'image': '/images/laser/Laser_Tan_Left.png',
        'imageDetails': {
            'width': 512,
            'height': 363
        }
    },
    {
        'id': 8,
        'name': 'G&G_Scope',
        'price': 10,
        'base_part': false,
        'category': 'Scope',
        'attachments': null,
        'image': '/images/scope/G_G_Scope_Left.png',
        'imageDetails': {
            'width': 1501,
            'height': 471.9,
        },

    },
    {
        'id': 9,
        'name': 'Holosun',
        'price': 10,
        'base_part': false,
        'category': 'Scope',
        'attachments': null,
        'image': '/images/scope/Holosun_Left_copy.png',
        'imageDetails': {
            'width': 512,
            'height': 363
        },
        'partOffset': {
            'x': 80,
            'y': 24
        }
    },
    {
        'id': 10,
        'name': 'HS503CU',
        'price': 10,
        'base_part': false,
        'category': 'Scope',
        'attachments': null,
        'image': '/images/scope/HS503CU_copy.png',
        'imageDetails': {
            'width': 512,
            'height': 363
        },
        'partOffset': {
            'x': 80,
            'y': 24
        }
    },
    {
        'id': 11,
        'name': 'HS510',
        'price': 10,
        'base_part': false,
        'category': 'Scope',
        'attachments': null,
        'image': '/images/scope/HS510.png',
        'imageDetails': {
            'width': 512,
            'height': 363
        },
        'partOffset': {
            'x': 90,
            'y': 24
        }
    },
    {
        'id': 12,
        'name': 'MFT_Black',
        'price': 10,
        'base_part': false,
        'category': 'Stock',
        'attachments': null,
        'image': '/images/stock/MFT_Black_Left\x20copy.png',
        'imageDetails': {
            'width': 1348,
            'height': 762,
        }
    },
    {
        'id': 13,
        'name': 'MFT_Tan',
        'price': 10,
        'base_part': false,
        'category': 'Stock',
        'attachments': null,
        'image': '/images/stock/MFT_Tan_Left.png',
        'imageDetails': {
            'width': 1371,
            'height': 776,
        }
    },
    {
        'id': 14,
        'name': 'PTS_EPS',
        'price': 10,
        'base_part': false,
        'category': 'Stock',
        'attachments': null,
        'image': '/images/stock/PTS_EPS.png',
        'imageDetails': {
            'width': 1385,
            'height': 800,
        },
        'partOffset': {
            'x': 1,
            'y': 0
        }
    },
    {
        'id': 15,
        'name': 'PTS_EPS_Tan',
        'price': 10,
        'base_part': false,
        'category': 'Stock',
        'attachments': null,
        'image': '/images/stock/PTS_EPS_Tan_Left.png',
        'imageDetails': {
            'width': 1383,
            'height': 808,
            'offsetX': -5
        }
    },
    {
        'id': 16,
        'name': 'PTS',
        'price': 10,
        'base_part': false,
        'category': 'Suppressor',
        'attachments': null,
        'image': '/images/suppressor/PTS_Suppressor.png',
        'imageDetails': {
            'width': 866,
            'height': 222,
        },
        'partOffset': {
            'x': 4,
            'y': 8
        }
    },
    {
        'id': 17,
        'name': 'PTS_Tan',
        'price': 10,
        'base_part': false,
        'category': 'Suppressor',
        'attachments': null,
        'image': '/images/suppressor/PTS_Tan_Suppressor.png',
        'imageDetails': {
            'width': 890,
            'height': 250
        }
    },
    {
        'id': 18,
        'name': 'TriPod',
        'price': 10,
        'base_part': false,
        'category': 'Tripod',
        'attachments': null,
        'image': '/images/tripod/TriPod_Left.png',
        'imageDetails': {
            'width': 1047,
            'height': 335,
        }
    }
];
export let categories = [];
//Create list with type categories
products.forEach(product => {
    let productCategory = product['category'];
    if ( categories.indexOf(productCategory) === -1 && productCategory !== 'Receiver') {
        categories.push(productCategory)
    }
});
