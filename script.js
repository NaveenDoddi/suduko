console.log("jai sree krishnaa")


// function main(){

//     var col = [[
//         3, 7, 5, 9, 2,
//         1, 4, 6, 8
//     ]]
//     var count = 1
//     function run(){
        
//         col[count] = []
        
//         var arr = [1,2,3,4,5,6,7,8,9]
        
//         for(let i = 0; i < 9; i++){
//             var arr1 = [1,2,3,4,5,6,7,8,9]
            
//             for(let j = 0 ; j < count; j++){
                
//                 arr1.splice(arr1.findIndex((i) => i == col[count-1][j]),1)
                
//             }
            
//             // console.log(arr1.findIndex((i) => i == col[count-1][j]))
//             console.log(arr1)

//             // var element = Math.floor(Math.random() *  arr1.length)
//             // col[count].push(arr[element])
//             // arr.splice(arr.findIndex((i) => i == arr[element]),1);
//             // console.log(col[count])
            
//         }
        
//         count++
//     }

//     for(let m = 0; m < 2; m++){
//         run()

//         console.log("col")
//     }
//     // console.log(col)
// }
// main()

var resultArray = [[3, 7, 5, 9, 2, 1, 4, 6, 8]]

function main(){

    for(let k = 0 ; k < 8; k++){

        var rowArray = [1,2,3,4,5,6,7,8,9]

        var result2Array = []
        
        for(let i = 0; i < 9; i++){

            var colArray = [1,2,3,4,5,6,7,8,9]

            for(let j = 0 ; j < resultArray.length; j++){
                for(let l = 0; l < 9; l++){
                    if(resultArray[j][i] == colArray[l]){
                        colArray.splice(l, 1)
                    }
                }
                
            }
    
            var developedArray = [...colArray, ...rowArray]
            // console.log(developedArray, "deveolped")
            var result1Array = removeOneTimeRepeated(developedArray)
    
            var element = result1Array[Math.floor(Math.random() *  result1Array.length)]
            result2Array.push(element)

            // resultArray[k+1][i+1].push(element)
            
            for(let j = 0 ; j < rowArray.length; j++){
                if(rowArray[j] == element){
                    rowArray.splice(j, 1)
                }
            }
            // console.log(element)
            // console.log(rowArray)
            
        }
        
        // console.log(element)
        // console.log(rowArray)
        resultArray.push(result2Array)
        
    }
    console.log(resultArray)
}

main()

function removeOneTimeRepeated(arr) {
    const elementCount = {};

    // Count the occurrences of each element in the array
    for (const element of arr) {
      if (elementCount[element]) {
        elementCount[element]++;
      } else {
        elementCount[element] = 1;
      }
    }
  
    let hasRepeatedTwice = false;
  
    // Check if any element repeats twice
    for (const element in elementCount) {
      if (elementCount[element] === 2) {
        hasRepeatedTwice = true;
        break;
      }
    }
  
    if (hasRepeatedTwice) {
      // Filter out elements that occur only once
      const result = arr.filter(element => elementCount[element] !== 1);
      return result;
    } else {
      // No element repeats twice, return the original array
      return arr;
    }
}
