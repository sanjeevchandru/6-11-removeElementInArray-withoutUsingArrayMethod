document.write("Deleting any one elements in an array without using array method"+"<br>");
document.write("------------------------------------------------------------------"+"<br>");

let arr=[22,12,78,-12,56,89];
let a=prompt("Enter a index position : ");
let b=[];

document.write("The array elements are :"+arr+"<br>");
for(let i=0;i<arr.length;i++)
{
    if(arr[i]!=arr[a])
    {
        b.push(arr[i]);
    }
}
document.write("The remining array elements :"+b+"<br>");
