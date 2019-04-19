var storeMap = new Map();
class StoreService {
    /**
     * 
     * @param {string} key 
     */
    get(key) {
        return storeMap.get(key);
    }
    /**
     * 
     * @param {string} key 
     * @param {*} value 
     */
    set(key, value) {
        storeMap.set(key, value);
    }
    /**
     * 
     * @param {string} k 
     */
    clearStore(k) {
        Array.from(storeMap.keys()).map(key => {
            if (key.indexOf(k) === 0) {
                storeMap.delete(key);
            }
        });
    }
}

export const storeService = new StoreService();
/**
 * 
 * @param {Object} target 
 * @param {string} propertyKey 
 * @param {*} descriptor 
 */
export const storeRequest = (target, propertyKey, descriptor) => {
    if (!descriptor) {
        return;
    }
    var originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        var a = args.map(arg => JSON.stringify(arg)).join();
        let k = `${propertyKey}(${a})`;
        if (storeService.get(k)) {
            return Promise.resolve(storeService.get(k));
        } else {
            let result = originalMethod.apply(this, args).then((res) => {
                storeService.set(k, res);
                return res; 
            });
            return result;
        }
    };
    descriptor.value.storeName = propertyKey;
    return descriptor;
}
/**
 * 
 * @param {*} clearKey 
 */
export const clearRequest = clearKey => (target, propertyKey, descriptor) => {
    var originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        if (clearKey.storeName === undefined) {
            // throw '要清除的缓存方法尚未初始化';
        } else {
            storeService.clearStore(clearKey.storeName);
        }
        var result = originalMethod.apply(this, args);
        return result;
    };
    return descriptor;
};