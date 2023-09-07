console.log("jai sree krishnaa")


function main1(){
    var rowArray = [1,2,3,4,5,6,7,8,9]

    var arr = [[]]

    for(let i = 0; i < 9; i++){
        var element = rowArray[Math.floor(Math.random() * rowArray.length)]

        for(let j = 0 ; j < rowArray.length; j++){
            if(rowArray[j] == element){
                rowArray.splice(j, 1)
            }
        }
        arr[0].push(element)
        
    }
    return arr
    
}

function main(){

    var resultArray = main1()

    for(let k = 0 ; k < 100; k++){

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
            
            var result1Array = removeOneTimeRepeated(developedArray)
    
            var element = result1Array[Math.floor(Math.random() *  result1Array.length)]
            result2Array.push(element)            
            
            for(let j = 0 ; j < rowArray.length; j++){
                if(rowArray[j] == element){
                    rowArray.splice(j, 1)
                }
            }
            
            if(element == undefined){
                break
            }
            
        }
        
        if(element == undefined){

        }else{
            resultArray.push(result2Array)
        }
        if(resultArray.length == 9){
            
            return resultArray
        }

    }

}


function removeOneTimeRepeated(arr) {
    const elementCount = [];
  
    arr.forEach(i => {
        if (elementCount[i]) {
            elementCount[i]++;
        } else {
            elementCount[i] = 1;
        }
    })

    const result = arr.filter(i => elementCount[i] !== 1);

    return result;
}

var result = main()
var table = document.createElement("table")
table.className = "table"
for(let i =0; i < result.length; i++){

    var tr = document.createElement("tr")

    for(let j = 0; j < result[i].length; j++){

        var td = document.createElement("td")
        if(j == 2){
            td.style.visibility = "hidden"
        }
        td.innerText = result[i][j]
        tr.append(td)
    }
    table.append(tr)
}
document.body.append(table)


// var arr = [1,24,5,6]
// const elementCount = [];
// arr.forEach(i => {
//     if (elementCount[i]) {
//         elementCount[i]++;
//     } else {
//         elementCount[i] = 1;
//     }
// });
// console.log(elementCount)