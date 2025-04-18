
export class ArrayUtil {
    
    /**
     * @param {T[]} items 
     * @param {number} size
     * @returns {T[][]}
     * @template T
     * */
    static partition(items, size) {
        /** @type Array<Array<T>> */
        var p = [];
        for (var i=Math.ceil(items.length/size); i-->0; ) {
            p[i]= items.slice(i*size, (i+1)*size);
        }
        return p;
    }
}

