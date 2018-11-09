var x = prompt('Mời nhập mảng');
var arr = x.split(',');

document.write('Mảng bạn nhập vào là: <br>');
for (var i=0; i<arr.length; i++)
  document.write((i===arr.length-1) ? (arr[i]+'<br>') : (arr[i]+', '));

var max = arr[0];
var index = 0;

for(var i = 1; i < arr.length; i++){
  if(arr[i] > max){
      max = arr[i];
      index = i;
  }
}

document.write("max: " + max + " at position " + index);