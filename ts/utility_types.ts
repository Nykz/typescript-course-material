// utlity types

interface UserRecord {
    name: string;
    age: number;
    email: string;
}
// partial
const updateUser = (user: Partial<UserRecord>) => {
    console.log(user);
};

updateUser({ name: 'Diya' });
updateUser({ email: 'diya@gmail.com' });


type User12 = Partial<UserRecord>;

let user123: User12 = {
    name: 'Diya'
};

// Required

type User123 = Required<UserRecord>;

let user1234: User123 = {
    name: 'Diya',
    age: 10,
    email: 'diya@gmail.com'
};

user1234.age = 19;

// Readonly
type UserRecord2 = Readonly<UserRecord>;

let usr: UserRecord2 = {
    name: 'Diya',
    age: 10,
    email: 'diya@gmail.com'
};

// usr.age = 19;

// Pick
type UserInfo = Pick<UserRecord, 'name' | 'email'>;

const userInfo: UserInfo = {
    name: 'Diya',
    email: 'diya@gmail.com',
    // age: 10
}

// Omit

type UserWithoutEmail = Omit<UserRecord, 'email'>;

const userOmitInfo: UserWithoutEmail = {
    name: 'Diya',
    // email: 'diya@gmail.com',
    age: 10,
}

// Record

type UserRecordInfo = Record<string, number>;

const userRecordInfo: UserRecordInfo = {
    name: 2,
    // email: 23,
    // age: 10
};

type Role = 'admin' | 'user' | 'guest';

const userRoles: Record<Role, string> = {
    admin: 'Diya',
    user: 'Prem',
    guest: 'Sujal'
};

console.log(userRoles.admin);


type Stat = 'success' | 'error' | 'loading';

// Exclude
type ExcludeError = Exclude<Stat, 'error'>;
const stat1: ExcludeError = 'success';
const stat2: ExcludeError = 'loading';

// Extract
type ExtractError = Extract<Stat, 'error' | 'loading'>;

const statE: ExtractError = 'error';

// NonNullable

type MayBeUser = string | null | undefined;
type UserNull = NonNullable<MayBeUser>;

const userNull: UserNull = 'Diya';

// ReturnType
function getType() {
    return { name: 'Diya', age: 19 };
}

type UserReturnType = ReturnType<typeof getType>;

const userType: UserReturnType = { name: 'Alice', age: 30 };

// Parameters
function updateUserData(name: string, age: number) {
    console.log(`${name}, ${age}`);
}

type UpdateUserParams = Parameters<typeof updateUserData>;

const params: UpdateUserParams = ['Diya', 20]; 

// ContructorParameters
class UserCData {
    constructor(public name: string, public age: number) {}
}

type UserContructorParams = ConstructorParameters<typeof UserCData>;

const userCParams: UserContructorParams = ['Diya', 20];