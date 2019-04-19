import createBrowserHistory from 'history/createBrowserHistory';

export class UrlHelper {
    history = createBrowserHistory();
    /**
     * 
     * @param {string} name 
     * @param {string} url 
     */
    getParameterByName(name, url) {
        if (!url) {
            url = window.location.href;
        }
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) {
            return undefined;
        }
        if (!results[2]) {
            return '';
        }
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
    /**
     * 
     * @param  {[string]} paths 
     */
    getPath(...paths) {
        let url = '';
        if (Array.isArray(paths[0])) {
            url = paths[0].join('/');
        } else if (typeof paths[0] === 'string') {
            url = paths[0];
        } else {
            url = '';
        }
        if (url.length === 0) {
            return '/';
        }
        return '/' + url;
    }
    /**
     * 
     * @param {string} path 
     * @param {number} num 
     */
    getUpPath(path, num = 1) {
        let paths = path.split('/');
        Array(num).fill(0).map(() => {
            paths.pop();
        });
        return paths.join('/');
    }
    /**
     * 
     * @param {string} url 
     */
    matchUrl(url) {
        return this.history.location.pathname + '/' + url;
    }
    /**
     * 
     * @param  {string[]} paths 
     */
    navigationTo(...paths) {
        if (paths.length === 1) {
            this.history.push(this.history.location.pathname + '/' + paths);
        } else {
            this.history.push(this.history.location.pathname + '/' + paths.join('/'));
        }
    }
    /**
     * 
     * @param  {string[]} paths 
     */
    getNavigationPath(...paths) {
        if (paths.length === 1) {
            return this.history.location.pathname + '/' + paths;
        } else {
            return this.history.location.pathname + '/' + paths.join('/');
        }
    }
    /**
     * 
     * @param {string} config 
     */
    frontConfig(config) {
        return !config || config === 'false' ? false : true;
    }
}

export const urlHelper = new UrlHelper();