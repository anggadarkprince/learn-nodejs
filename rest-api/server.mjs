import http from 'http';
import {Router} from './routes/Router.mjs';
import {productRoute} from './routes/productRoutes.mjs'
import {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
} from './controllers/productController.mjs';

const server = http.createServer((req, res) => {
    //res.statusCode = 200;
    //res.setHeader('Content-Type', 'text/html');
    //res.write('<h1>Hello world</h1>');
    //res.end();

    productRoute(Router);

    let handler = null;
    for (const route of Router.routes) {
        let routeMatch = req.url.match(route.path);
        if (typeof route.path === 'string') {
            routeMatch = req.url === route.path;
        }
        if (req.method === route.method && routeMatch) {
            handler = route.handler;
            break;
        }
    }

    if (handler) {
        handler(req, res);
    } else {
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({message: 'Route not found'}));
    }

    /*
    if (req.url === '/api/products' && req.method === 'GET') {
        getProducts(req, res);
    } else if(req.url.match(/\/api\/products\/\w+/) && req.method === 'GET') {
        const id = req.url.split('/')[3];
        getProduct(req, res, id);
    } else if(req.url === '/api/products' && req.method === 'POST') {
        createProduct(req, res);
    } else if(req.url.match(/\/api\/products\/\w+/) && req.method === 'PUT') {
        const id = req.url.split('/')[3];
        updateProduct(req, res, id);
    }  else if(req.url.match(/\/api\/products\/\w+/) && req.method === 'DELETE') {
        const id = req.url.split('/')[3];
        deleteProduct(req, res, id);
    } else {
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({message: 'Route not found'}))
    }*/
});

const PORT = process.env.PORT || '3000';

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});