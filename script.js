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

    // for(let k = 0 ; k < 100; k++){
    while(resultArray.length < 9){
        console.log(resultArray.length)
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
        
        if(element != undefined){
            resultArray.push(result2Array)
        }
    }
    return resultArray
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

    const result = arr.filter(i => elementCount[i] != 1);

    return result;
}


function produceHiddenElements(){

    var arr = []

    while(arr.length < 6){

        var element = Math.floor(Math.random() * 9)
        var bool = true
        arr.forEach((i)=> i == element ? bool = false : 0)

        if(bool){
            arr.push(element)
        }
    }
    // console.log(hiddenElementsArray)

    return arr
}


function display(){

    const result = main()


    var table = document.createElement("table")
    table.className = "table"

    for(let i = 0; i < result.length; i++){

        const hiddenElementsArray = produceHiddenElements()

        var tr = document.createElement("tr")
    
        for(let j = 0; j < result[i].length; j++){
    
            var td = document.createElement("td")
            hiddenElementsArray.map((k) => k == j ? td.style.visibility = "hidden" + td.addEventListener("click", visibleElements) : 0)

            td.innerText = result[i][j]
            tr.append(td)

        }
        table.append(tr)
    }


    document.body.append(table)
}


function visibleElements(click){
    click.style.visibility = "visible"
}

display()


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
