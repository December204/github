var score = 8.8
if (score <4 ){
    console.log('trungbinh');

}else if(score >=4 && score <8){
    console.log('kha');
}else if(score >=8 && score <9 ){
    console.log('gioi')
}else{
    console.log('excellent');
}
var age = 5
switch (age){
    case 2:
        case 3 :
        case 4 :
        case 5:
        console.log('taideptrai');
       break;
        case 6:
        console.log('1');
} 
var exp=4;
var salary= exp>3? 1000:500
console.log(salary)
var exp=3;
var salary= exp<1?1000:
exp<2?2000:
exp<=3?3000:4000;
console.log(salary);
for (var i=0;i<10;i++){console.log(i)
}
for(var i=1;i<10;i+=2){console.log(i)}
var arr=['a','b','c','d','e','f'];
for(var i=arr.length-1;i>=0;i--){console.log(arr[i])}
var obj={
    name:'tai',
    age:19,
}
for (var key in obj){console.log(key);}


