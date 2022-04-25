import * as Product from '../models/productModel.mjs';
import {getPostData} from "../utils.mjs";

async function getProducts(req, res) {
    try {
        const products = await Product.findAll();

        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(products));
    } catch (error) {
        console.log(error);
    }
}

async function getProduct(req, res, id) {
    try {
        const product = await Product.findById(id);

        if (!product) {
            res.writeHead(404, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({message: 'Product not found'}));
        } else {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(product));
        }
    } catch (error) {
        console.log(error);
    }
}

async function createProduct(req, res) {
    try {
        const body = await getPostData(req);
        const {title, description, price} = JSON.parse(body.toString());

        const product = await Product.create({
            title,
            description,
            price
        });

        res.writeHead(201, {'Content-Type': 'application/json'});
        return res.end(JSON.stringify(product));
    } catch (error) {
        console.log(error);
    }
}

async function updateProduct(req, res, id) {
    try {
        const product = await Product.findById(id);

        if (!product) {
            res.writeHead(404, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({message: 'Product not found'}));
        } else {
            const body = await getPostData(req);
            const {title, description, price} = JSON.parse(body.toString());

            const updatedProduct = await Product.update(id, {
                title: title || product.title,
                description: description || product.description,
                price: price || product.price
            });

            res.writeHead(200, {'Content-Type': 'application/json'});
            return res.end(JSON.stringify(updatedProduct));
        }
    } catch (error) {
        console.log(error);
    }
}

async function deleteProduct(req, res, id) {
    try {
        const product = await Product.findById(id);

        if (!product) {
            res.writeHead(404, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({message: 'Product not found'}));
        } else {
            await Product.remove(id);

            res.writeHead(204, {'Content-Type': 'application/json'});
            return res.end(JSON.stringify({message: `Product id ${id} is deleted`}));
        }
    } catch (error) {
        console.log(error);
    }
}


export {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}