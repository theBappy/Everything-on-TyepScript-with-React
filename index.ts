// Strings
// let myName: string = 'Harry'
// myName ='some other person'
// console.log(myName)

// Numbers
// let favNumber: number = 7 
// console.log(favNumber)


// Boolean
// let tsHard: boolean = false
// tsHard = true  
// console.log(tsHard)

// Here we're inferring the typ
// let tech = 'typescript'
// let favNumber = 9
// let isHard = true
// console.log(tech)
// console.log(isHard)
// console.log(favNumber)
// console.log(typeof tech)
// console.log(typeof favNumber)
// console.log(typeof isHard)

// Any type
// let color: any = 'crimson'
// color = 23
// color = true
// color()
// console.log(color)


// Regular function

// function addOne(num: number){
//   return num + 1
// }
// const res = addOne(5)
// console.log(res)

// function subtractOne(num: number){
//   return num - 10
// }
// const res = subtractOne(110)
// console.log(res)

// function mOne(num: number){
//   return num * 5
// }
// const result = mOne(5)
// console.log(result)

// function divOne(n: number){
//   return n / 5
// }
// const data = divOne(50)
// console.log(data);

// Arrow function
// const double = (x:number, y:number) =>x * y
// const res = double(2, 10)
// console.log(res

// Default parameters value
// function greet(person: string = "Anonymous") {
//   return `Hello ${person}`
// }
// const res = greet("Bappy")
// console.log(res)


// Return annotations
// Regular function

// function double1(x:number) : number {
//   return x * x
// }
// const res = double1(2)
// console.log(res)

// function double(x : number): number {
//   return x + x
// }
// const rest = double(7)
// console.log(rest)

// function division(x:number): number {
//   return x / x 
// }
// const res = division(87)
// console.log(res);

// Arrow functions
// const double2 = (x: number): number => x * x
// console.log(double2(7))

// const addition = (x: number) : number => x + x
// console.log(addition(8))

// const division = (x:number) : number => x / x
// console.log(division(77))

// function printMessage(message:string): void {
//   console.log(`This is my ${message}`);
// }
// printMessage('message')

// function throwError(msg:string): never {
//   throw new Error(msg)
// }
// function infiniteLoop() : never{
//   while(true) {}
// }
// let x : never ;
// function neverReturns() : never {
//   while(true) {}
// }
// x = neverReturns()

// const numbers : number[] = [1,2,4,5,6]
// console.log(numbers)

// const myArray: any[] = [1, true, 'bappy']
// console.log(myArray)

// const str: string[] = ['one', 'two', 'three']
// console.log(str)

// const items: string[] =[]
// items.push('keyboard')
// console.log(items)

// const numList : number[] = []
// numList.push(20)
// numList.push(30)
// console.log(numList)

// const items = Array<string> = []
// items.push('first')
// console.log(items)

// const items: Array<number> = [1,4,5]
// console.log(items)

// const matrix: number[][] = [
//   [1,2],
//   [2,3],
// ]
// console.log(matrix)

// const singleDi: number[] = [ 1,3,5,6]
// const doubleDi: number[] [] =[[1,2,3,4,5]]
// const tripleDi: number [] [] [] = [[[2,3,4,5]]]
// const tetraDi: number [] [] [] [] =[[[[1,2,3,4,5]]]]
// console.log(singleDi)
// console.log(doubleDi)
// console.log(tripleDi)
// console.log(tetraDi)

// Define person objects
// const person : {firstName: string; lastName: string; age: number} = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 30
// }
// console.log(`Name: ${person.firstName} ${person.lastName} And Age: ${person.age}`)

// const car : {brand: string; model: string, year: number} = {
//   brand: 'Yamaha',
//   model: 'YT7878',
//   year: 1998
// }
// console.log(`Car info:\n${car.model} \n${car.brand} \n ${car.year}`);


// function printUser(): {name: string; age: number; location:string} {
//   return {
//     name: 'John',
//     age: 20,
//     location: 'China',
//   }
// }
// const res = printUser()
// console.log(res)


// type User  = {
//   name: string,
//   age: number,
//   location: string,
// }
// const printUser = (user: User) => {
//   return `Name: (${user.name}) Age: (${user.age}) Location: (${user.location})`
// }
// const res = printUser({name: 'Alex', age: 20 , location: 'USA'})
// console.log(res)

// type User = {
//   name: string,
//   age?: number,
//   location: string,
// }
// type Profile = {
//   name: string,
//   age: number,
//   readonly location: string,
//   idNumber?: number,
// }
// const profile: Profile = {
//   name: 'bappy',
//   age: 20,
//   location: 'China',
// }
// profile.location = 'something'
// console.log(`Name: ${profile.name}, Age: ${profile.age}, Location: ${profile.location}, TIN: ${profile.idNumber} `)


// Intersection types
// type User = {
//   first: string,
//   last: string,
//   age: number,
// }
// type AccountDetails = {
//   email: string,
//   password: string,
// }
// type UserAccount = User & AccountDetails;

// const myself: UserAccount = {
//     first: 'Alamin',
//     last: 'Bappy',
//     age: 50,
//     email: 'abp@gmail.com',
//     password: '12345',
// };
// console.log(`Name: ${myself.first} ${myself.last}, Age: ${myself.age}, Email: ${myself.email}, password: ${myself.password}`)

// Unions types in TS
// let password : string | number |boolean = true
// let password: string | number = 'testing123'
// type UserInfo = {
//   first: string,
//   last: string,
//   age: number, 
// }
// type AccountDetails = {
//   email: string,
//   password: string,
// }
// let User: UserInfo | AccountDetails = {
//   email: 'someone@gmail.com',
//   password: 'password123',
// }
// const items: (number | string)[] = [1,2,4,'hello']
// console.log(items);

// let color: 'red' | 'crimson' | 'fusha'
// color = 'red'
// // color = 'yellow'
// console.log(color)

// let isTrue = true | false
// isTrue = true
// console.log(isTrue);

// let number = 4 | 5 | 8
// number = 5 
// console.log(number)


// let password: 'secretpassword' = 'secretpassword'
// password = 'something else'
// console.log(password);

// let myTuple : [string, number] = ['hello', 55]
// console.log(myTuple[0])
// console.log(myTuple[1])

// let myTuple: [string, number] = ['hello', 42]
// let [first, second] = myTuple
// console.log(first);
// console.log(second);

// let myTuple :[number, string] 
// myTuple =[10, 'hello world']
// console.log(myTuple)

// const products : (number | string) [] = ['item1', 12]
// console.log(products)

const games: [string, string, string] = ['game1', 'game2', 'game3']
console.log(games[]);






  