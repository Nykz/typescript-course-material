// namespaces

namespace Geometry {

    export const PI = 3.14;

    export class Calc {
        area(width: number, height: number): number {
            return width * height;
        }
    }

    export function calc_area(radius: number): number {
        return Math.PI * radius * radius;
    }

}

console.log(Geometry.PI);
console.log(Geometry.calc_area(5));
const calc12 = new Geometry.Calc();
console.log(calc12.area(3, 4));

// nested namespace

namespace Shape12 {
    export namespace Circle {
        export const PI = 3.14;
    }
}

console.log(Shape12.Circle.PI);