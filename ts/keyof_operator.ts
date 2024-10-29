// keyof operator
interface Person12 {
    name: string;
    age: number;
    email: string;
}

type PersonKeys = keyof Person12;
let keys: PersonKeys = 'name';