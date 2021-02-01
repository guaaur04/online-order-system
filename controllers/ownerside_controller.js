const router = require("express").Router();
const db = require("../models");

router.get("/", function (req, res) {
    var hbsObject = {}
    return res.render("owner-dash-home", hbsObject);
});

// render category data to category page
router.get("/category", function (req, res) {
    db.Category.findAll().then(function (data) {
        var categoryArray = []
        data.forEach(element => {
            var item = element.toJSON()
            categoryArray.push(item)
        });
        var hbsObject = {
            categories: categoryArray
        }
        console.log(hbsObject)
        return res.render("owner-dashboard-pages/category", hbsObject);
    }).catch(err => {
        res.status(500).json(err);
    });
});

// render extra data to extra items page
router.get("/extra", function (req, res) {
    db.Extra.findAll().then(function (data) {
        var extraArray = []
        data.forEach(element => {
            var item = element.toJSON()
            extraArray.push(item)
        });
        var hbsObject = {
            extras: extraArray
        }
        console.log(hbsObject)
        return res.render("owner-dashboard-pages/extra", hbsObject);
    }).catch(err => {
        res.status(500).json(err);
    });
});

// render products and categories to product page 
router.get("/product", function (req, res) {
    db.Product.findAll({
        include: [db.Image, db.Category]
    }).then(function (data) {
        // console.log(data)
        var productArray = []
        data.forEach(element => {
            var item = element.toJSON()
            productArray.push(item)
        });
        db.Category.findAll().then(function (data) {
            var categoryArray = []
            data.forEach(element => {
                var item = element.toJSON()
                categoryArray.push(item)
            })
            var hbsObject = {
                categories: categoryArray,
                products: productArray
            }
            return res.render("owner-dashboard-pages/product", hbsObject);
        })

    })
});

// render categories and sizes to new product page 
router.get("/product-new", function (req, res) {
    db.Size.findAll().then(function (data) {
        // console.log(data)
        var sizeArray = []
        data.forEach(element => {
            var item = element.toJSON()
            sizeArray.push(item)
        });
        db.Category.findAll().then(function (data) {
            var categoryArray = []
            data.forEach(element => {
                var item = element.toJSON()
                categoryArray.push(item)
            })
            var hbsObject = {
                categories: categoryArray,
                sizes: sizeArray
            }
            return res.render("owner-dashboard-pages/product-new", hbsObject);
        })

    })
});

// render categories and sizes to edit product page 
router.get("/product-edit", function (req, res) {
    db.Size.findAll().then(function (data) {
        // console.log(data)
        var sizeArray = []
        data.forEach(element => {
            var item = element.toJSON()
            sizeArray.push(item)
        });
        db.Category.findAll().then(function (data) {
            var categoryArray = []
            data.forEach(element => {
                var item = element.toJSON()
                categoryArray.push(item)
            })
            var hbsObject = {
                categories: categoryArray,
                sizes: sizeArray
            }
            return res.render("owner-dashboard-pages/product-edit", hbsObject);
        })

    })
});


router.get("/productAddOn", function (req, res) {
    db.ProductAddOn.findAll().then(function (data) {
        var productAddOnArray = []
        data.forEach(element => {
            var item = element.toJSON()
            productAddOnArray.push(item)
        });
        var hbsObject = {
            productAddOns: productAddOnArray
        }
        console.log(hbsObject)
        return res.render("owner-dashboard-pages/productAddOn", hbsObject);
    }).catch(err => {
        res.status(500).json(err);
    });
});

router.get("/size", function (req, res) {
    db.Size.findAll().then(function (data) {
        var sizeArray = []
        data.forEach(element => {
            var item = element.toJSON()
            sizeArray.push(item)
        });
        var hbsObject = {
            sizes: sizeArray
        }
        console.log(hbsObject)
        return res.render("owner-dashboard-pages/size", hbsObject);
    }).catch(err => {
        res.status(500).json(err);
    });
});

// edit this route for the owner user control panel
router.get("/user", function (req, res) {
    db.User.findAll().then(function (data) {
        var userArray = []
        data.forEach(element => {
            var item = element.toJSON()
            userArray.push(item)
        });
        var hbsObject = {
            users: userArray
        }
        console.log(hbsObject)
        return res.render("owner-dashboard-pages/user", hbsObject);
    }).catch(err => {
        res.status(500).json(err);
    });
});

module.exports = router;