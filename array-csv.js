//javascript.js
//convertir un array en un CSV
const arr= ["En", "un","lugar","de","la","Mancha"]

let acc="";
const n= arr.length
for (let i= 0;i<n;i++){
    
  acc+=arr[i];
    if(i<n-1)
        {
            acc+=";";
        }

//   acc += (i<n-1)?acc:acc+
}
console.log(acc);