##keyof operator

This operator is used to gather the keys of any object or type for example

```ts
type Car{
    name:string; color:string; brand:string;
}
```

the keyof operator gathers the keys which are name, color and brand

#Differences between types and interfaces
##1. they have differnt declaration syntax for example-

```ts
interface Car{name:string, age:string}, type Car = {name:string, age:string}
```

##2. Interface can extend other classes but type cannot

```ts
interface Audi extends Car {
  Speed: string;
}
```

##3. In type, unions can be done which cannot be done in interface. For example-

```ts
type User = 'guest' | 'normal' | 'admin' which cannot be done in interface
```
