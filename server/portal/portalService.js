var exports = module.exports = {};

exports.getProducts = (filter) => {

    var jsondata = {};

    jsondata = [{
        "_id": 1,
        "productName": "High Rise Jeans",
        "productDescription": "High Rise Jeans",
        "productImage": {
            "src": "http://images.asos-media.com/products/asos-farleigh-high-waist-slim-mom-jeans-in-jacinta-pretty-mid-wash/7948167-1-jacintaprettymid?$XL$",
            "shortDesc": "high waist slim mom jeans in jacinta",
            "width": 116,
            "height": 148,
        },
        "productPrice": 185
    },
    {
        "_id": 2,
        "productName": "Relaxed Cut Jeans",
        "productDescription": "Relaxed Cut Jeans",
        "productImage": {
            "src": "http://lsco.scene7.com/is/image/lsco/Levi/clothing/005010114-front-pdp.jpg",
            "shortDesc": "Relaxed Cut Jeans",
            "width": 116,
            "height": 148,
        },
        "productPrice": 125
    },
    {
        "_id": 3,
        "productName": "Bootleg Jeans",
        "productDescription": "Bootleg Jeans",
        "productImage": {
            "src": "https://mosaic01.ztat.net/vgs/media/pdp-zoom/LE/22/2G/06/AK/12/LE222G06A-K12@11.jpg",
            "shortDesc": "Bootleg Jeans",
            "width": 116,
            "height": 148,
        },
        "productPrice": 95
    }];

    return Promise.resolve(JSON.stringify(jsondata));

};

exports.getProjectCommissionsByMonth = (searchStr) => {

    // declare json object
    var jsondata = {};

    // hard code data structure pending development of service
    jsondata = {
        "startDate": "2016-04-01T00:00:00",
        "endDate": "2017-03-31T00:00:00",
        "projects": [{
                "projectId": 1,
                "projectTitle": "Project one",
                "costsPerMonth": [1.234, 23.45, 345.6, 0, 0, 0, 0, 0, 0, 0, 0, 123],
                "totalCost": 7158
            },
            {
                "projectId": 2,
                "projectTitle": "Project two",
                "costsPerMonth": [345.6, 12.34, 2.345, 0, 0, 0, 0, 0, 0, 0, 0, 321],
                "totalCost": 8517
            }
        ]
    }

    return Promise.resolve(JSON.stringify(jsondata));

}