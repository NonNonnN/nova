const a =[1,2,3,4,5,6];
const b=new Array()
function f() {
  for(let i=0;i<a.length;i++){
    b.push(i)
  }
  console.log(b)
  return b
}
f();

console.log(b);
