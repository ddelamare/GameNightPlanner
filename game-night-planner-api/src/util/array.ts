
export class ArrayUtil {
    
    static partition<T>(items : T[], size: number) : T[][] {
        var p: Array<Array<T>> = [];
        for (var i=Math.ceil(items.length/size); i-->0; ) {
            p[i]= items.slice(i*size, (i+1)*size);
        }
        return p;
    }
}

