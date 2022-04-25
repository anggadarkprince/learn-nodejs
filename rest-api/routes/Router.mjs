class Router {
    static routes = [];

    static addRoute(method, path, handler) {
        Router.routes.push({
            method: method,
            path: path,
            handler: handler
        });
    }

    static get(path, handler) {
        Router.routes.push({
            method: 'GET',
            path: path,
            handler: handler
        });
    }

    static post(path, handler) {
        Router.routes.push({
            method: 'POST',
            path: path,
            handler: handler
        });
    }

    static put(path, handler) {
        Router.routes.push({
            method: 'PUT',
            path: path,
            handler: handler
        });
    }

    static delete(path, handler) {
        Router.routes.push({
            method: 'DELETE',
            path: path,
            handler: handler
        });
    }
}

export {Router}