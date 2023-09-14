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

    while(resultArray.length < 9){
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

    while(arr.length < 4){

        var element = Math.floor(Math.random() * 9)
        var bool = true
        arr.forEach((i)=> i == element ? bool = false : 0)

        if(bool){
            arr.push(element)
        }
    }

    return arr
}

var bool = false

function visibleElements(click){

    click.id = "current"
    click.style.backgroundColor = "lightblue"

    // var span = click.getElementsByTagName("span")[0]
    // span.style.visibility = "visible"

    if(bool){
        document.getElementById("previous").style.backgroundColor = "white"
        document.getElementById("previous").id = ""
        
    }
    document.getElementById("current").id = "previous"
    bool = true

}

function handleClick(){
    visibleElements(this)
}


function display(){

    const result = main()

    var div1 = document.createElement("div")
    div1.className = "div1"

    for(let i = 0; i < result.length; i++){

        const hiddenElementsArray = produceHiddenElements()

        var div2 = document.createElement("div")
        div2.className = "div2"
    
        for(let j = 0; j < result[i].length; j++){
    
            var div3 = document.createElement("div")
            var span = document.createElement("span")
            div3.className = "div3"
            hiddenElementsArray.map((k) => k == j ? div3.addEventListener("click",handleClick) + (span.style.visibility = "hidden"): 0)

            span.innerText = result[i][j]
            div3.append(span)
            div2.append(div3)

        }
        div1.append(div2)
    }

    document.getElementById("toShowTable").append(div1)
}

display()

function toFillBox(click){
    var input = click.innerText
    var arr = document.getElementsByTagName("div")
    for(let i = 0; i < arr.length; i++){
        if(arr[i].style.backgroundColor == "lightblue" || arr[i].style.backgroundColor == "red"){
            console.log(arr[i].getElementsByTagName("span")[0].innerHTML.toString() == input)
            console.log(arr[i].getElementsByTagName("span")[0].innerHTML.toString())
            console.log(input)
            if(arr[i].getElementsByTagName("span")[0].innerHTML.toString() == input){

                arr[i].style.backgroundColor = "green"
                arr[i].getElementsByTagName("span")[0].innerText = input
                arr[i].getElementsByTagName("span")[0].style.visibility = "visible"

            }else{

                arr[i].style.backgroundColor = "red"
                
            }
        }
    }

}


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
