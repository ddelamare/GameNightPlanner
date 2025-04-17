
export class ArrayUtil {
    static partition(items, size) {
        var p = [];
        for (var i=Math.ceil(items.length/size); i-->0; ) {
            p[i]=items.slice(i*size, (i+1)*size);
        }
        return p;
    }
}

