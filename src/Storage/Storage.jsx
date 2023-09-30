

export const Storage = {
    get(key){
        const val = window.localStorage.getItem(key);
        if(!val){
            return null;
        }
    },
    set(key, val){
        window.localStorage.setItem(key.JSON.stringify(val));
    },
    remove(key){
        window.localStorage.removeItem(key);
    }

}

export default Storage;