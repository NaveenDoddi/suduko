console.log("jai sree krishnaa")

console.log(document.getElementById("h11").ariaValueText)
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
            div3.className = "div3 "+j
            var span = document.createElement("span")
            
            hiddenElementsArray.some((k) => k == j) ? div3.addEventListener("click",handleClick) + (span.ariaValueText = result[i][j]) + (span.innerText = ".") : (span.innerText = result[i][j])

            div3.append(span)
            div2.append(div3)
        }
        div1.append(div2)
    }

    document.getElementById("toShowTable").append(div1)
}


function handleClick(){
    visibleElements(this)

}

function visibleElements(click){

    var arr = document.getElementsByClassName("div3")
    for(let i = 0; i < arr.length; i++){
        if(arr[i].style.backgroundColor != "red"){
            arr[i].style.backgroundColor = "white"
        }
        if(arr[i].ariaValueText == "isVisited"){
            if(arr[i].getElementsByTagName("span")[0].ariaValueText == arr[i].getElementsByTagName("span")[0].innerText){
                // arr[i].style.backgroundColor = "green"
            }else if( arr[i].getElementsByTagName("span")[0].innerText != "."){
                arr[i].style.backgroundColor = "red"
            }
        }   

        if(arr[i].id == "current"){
            arr[i].id = ""
        }
        
    }

    var rowId = click.className
    var rowArr = document.getElementsByClassName(rowId)
    for(let i = 0; i < rowArr.length; i++){

        click.parentNode.childNodes[i].style.backgroundColor = "grey"
        rowArr[i].style.backgroundColor = "grey"

    }

    click.style.backgroundColor = "lightblue"
    click.id = "current"
    click.ariaValueText = "isVisited"

}


function toFillBox(click){

    var input = click.innerText
    var div = document.getElementById("current")

    if(div.getElementsByTagName("span")[0].ariaValueText == input && div.ariaValueText == "isVisited"){
        div.style.backgroundColor = "green"
    }else{
        div.style.backgroundColor = "red"
    }
    div.getElementsByTagName("span")[0].innerText = input

}
function toSaveTable(){
    localStorage.setItem("sudoko",JSON.stringify(document.getElementById("toShowTable").innerHTML))

}
function toShowSavedTable(){
    var i = localStorage.getItem("suduko")
    console.log(i)
    console.log(localStorage.getItem("typingHistory"))
    // document.getElementById("toShowTable").append(JSON.parse(sessionStorage.getItem("suduko")))

}


display()