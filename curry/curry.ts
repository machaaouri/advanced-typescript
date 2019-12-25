const fn00 = (name: string, age: number, single: boolean) => true
type Fn00 = Parameters<typeof fn00>

type Param<F extends (...args:any[]) => any> = F extends ((...args: infer A) => any) ? A: never
type Fn001 = Param<typeof fn00>

type Head<T extends any[]> = T extends [...any[]] ? T[0] : never
type test002 = Head<[boolean, 2, string, number]>
type test003 = Head<Param<typeof fn00>>

type Tail<T extends any[]> = ((...p:T) => void) extends (h:any, ...r: infer TT) => void ? TT: never
type test004 = Tail<[boolean, 2, string, number]>

// you can get one but not the other
type HasTail<F extends any[]> = F extends ([]) ? false : true
type test005 = HasTail<Tail<Tail<[number,number,string]>>>

// Extract a property’s type from an object
type ObjectInfer<O> = O extends {a: infer A} ? A : never
const object = {a: 'hello world'}
type test01 = ObjectInfer<typeof object>

// Extract inner types from function types
type FunctionInfer<F> = F extends ((...args: infer A) => infer B) ? [A,B] : never
const fn01 = (a: number, b: number) => console.log("")
type test02 = FunctionInfer<typeof fn01>

// Extract generic types from a class or an interface
type ClassInfer<C> = C extends Promise<infer G> ? G: never
const promise = new Promise<string>(() => {})
type test03 = ClassInfer<typeof promise>

// Extract types from array
type ArrayInfer<A> = A extends (infer U)[] ? U: never
const array = [1, 'test', 2, true, 3]
type test04 = ArrayInfer<typeof array>

// Extract types from a tuple
type TupleInfer<T> = T extends (infer B)[] ? B : never
type test22 = TupleInfer<[string, number, boolean, string]>

// Curry type that takes a tuple of parameters P and a return type R
type Curry01<P extends any[], R> = (args: Head<P>) => HasTail<P> extends true ? Curry01<Tail<P>,R> : R
declare function curry01<P extends any[], R>(f:(...args: P) => R): Curry01<P,R>

const toCurry = curry01(fn00)
const testCurry = toCurry("houssame")(29)(true)