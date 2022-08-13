let topics = [
  'digital ocean',
  'github actions',
  'turborepo',
  'next',
  'vite',
  'vitest',
  'darin.co',
  'Github Wiki as CMS'
]

export const b = topics.map(topic => {
  return `This topic is ${topic}`
}) //?

let method6 = (current:number, arr:number[] = []):number[] => {
  let next = [current - 1, ...arr]
  return (current === 1)
    ? next
    : method6(current - 1, next)
}
let method5 = (n:number) => Array.from({length: n}, (_, i) => i)
let method4 = Array.from({length:16}) //?
let method3 = Array.from({length: 16}, (_, i) => i) //?
let method1 = new Array(16).fill(0).map((_, i) => i) //?
let method2 = Array.from(new Array(16)).map((_, i) => i) //?

method6(16) //?
method5(16) //?

let loop = (n:number, fn: () => unknown) => {
  Array.from({length: n}, (_, i) => fn(i))
}

loop(5, (i) => {
  return `Hello ${i}`
})
