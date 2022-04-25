import {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
} from '../controllers/productController.mjs';

function productRoute(router) {
    router.get('/api/products', function (req, res) {
        getProducts(req, res);
    });

    router.get(new RegExp(/\/api\/products\/\w+/), function (req, res) {
        const id = req.url.split('/')[3];
        getProduct(req, res, id);
    });

    router.post('/api/products', function (req, res) {
        createProduct(req, res);
    });

    router.put(new RegExp(/\/api\/products\/\w+/), function (req, res) {
        const id = req.url.split('/')[3];
        updateProduct(req, res, id);
    });

    router.delete(new RegExp(/\/api\/products\/\w+/), function (req, res) {
        const id = req.url.split('/')[3];
        deleteProduct(req, res, id);
    });
}

export {productRoute}
