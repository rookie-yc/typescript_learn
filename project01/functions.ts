// function add(x: number, y: number, z?: number): number {
//     if(typeof z === 'number') {
//         return x + y + z
//     } else {
//         return x + y
//     }
// }

// let result = add(2, 3)

const add = function(x: number, y: number, z?: number): number {
    if(typeof z === 'number') {
        return x + y + z
    } else {
        return x + y
    }
}

let add2: (x: number, y: number, z?: number) => number = add;

let str = 'str';
str = 123
