// let num=10;
// while(num<30){
//     console.log(num);
//     num++;
// }
// let b=5;
// do{
//     b++;
//     console.log(b);
// }while(b<10)
// for all perfect squares
// for(let i=1;i<1000;i++){
//     let r=i**0.5;
//     if(r==parseInt(r)){
//         console.log(i);
//     }
// }
//to find reverse no.
let c=3456;
let rev=0;
while(c>0){
    console.log(rev);
    let r=c%10;
    rev=rev*10+r;
    c=c/10;
    r=parseInt(c);
console.log(rev);
}
