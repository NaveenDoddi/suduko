console.log("jai sree krishnaa")

let seconds = 0
let minutes = 0
let stopWatch
let isStopWatchRunning = true

let levelNumber = 4

var time = JSON.parse(localStorage.getItem("sudokoTime"))
if(time == null){
    document.getElementById("continueBtn").style.visibility = "hidden"
}else{

    displayContinueBtn()

}

function start(){
    var div = document.getElementById("mainDiv");
    div.scrollTop += 47;
    
}

function selectLevel(btn){
    var level = btn.innerText

    if(level == "Easy"){
        levelNumber = 4
    }else if(level == "Medium"){
        levelNumber = 5
    }else{
        levelNumber =  7
    }

    display()
    seconds = 0
    minutes = 0
    document.getElementById("timer").innerText = "Timer: 00 : 00"
    // pause()

    document.getElementById("continueStartBtns").style.visibility = "hidden"
    document.getElementById("continueStartBtns").style.position = "absolute"
    document.getElementById("sudokoBody").style.visibility = "visible"

    document.getElementById("continueBtn").style.visibility = "hidden"

    clearInterval(stopWatch)

    isStopWatchRunning = true
    startStopWatch()
}


function timer(){
    seconds++
    if(seconds == 60){
        minutes++
        seconds = 0
    }
    document.getElementById("timer").innerText = "Timer: " + minutes + " : " + seconds
}

function startStopWatch(){
    if(isStopWatchRunning){
        stopWatch = setInterval(() => {
            timer()
        }, 1000);
        
    }
    isStopWatchRunning = false
}

function pause(){
    clearInterval(stopWatch)
    isStopWatchRunning = true

    const div1 = document.getElementById('sudokoBody');
    const div2 = document.getElementById('pauseDiv');

    div1.style.visibility = "hidden"
    div2.style.visibility = "visible"

    const div3 = div2.getElementsByTagName("div")[0]

    var difficultySpan = div3.getElementsByTagName("span")[1]

    if(levelNumber == 4){
        var difficulty = "Easy"
        difficultySpan.style.backgroundColor = "green"
    }else if(levelNumber == 5){
        var difficulty = "Medium"
        difficultySpan.style.backgroundColor = "orange"
    }else{
        var difficulty = "Hard"
        difficultySpan.style.backgroundColor = "red"
    }

    
    difficultySpan.innerText = "Difficulty: "+ difficulty
    
    var timeSpan = div3.getElementsByTagName("span")[0]
    timeSpan.innerText =  "Time: " + minutes + " : " + seconds

}

function resume(){
    isStopWatchRunning = true
    startStopWatch()
    const div1 = document.getElementById('sudokoBody');
    const div2 = document.getElementById('pauseDiv');

    document.getElementById("exitDiv").style.visibility = "hidden"

    div2.style.visibility = "hidden"
    div1.style.visibility = "visible"
}

function restart(){
    // resume()
    display()
    clearInterval(stopWatch)
    document.getElementById("timer").innerText = "Timer: 00 : 00"
    seconds = 0
    minutes = 0

    isStopWatchRunning = true
    startStopWatch()

    document.getElementById('sudokoBody').style.visibility = "visible"
    document.getElementById("exitDiv").style.visibility = "hidden"
    document.getElementById('pauseDiv').style.visibility = 'hidden'
    document.getElementById('winDiv').style.visibility = 'hidden'

    
}

function hint(){
    document.getElementById("current").getElementsByTagName("span")[0].innerText = document.getElementById("current").getElementsByTagName("span")[0].ariaValueText
    document.getElementById("hintSound").play()
    document.getElementById("hintSound").currentTime = 0;
    document.getElementById("current").style.backgroundColor = "green"

    checkComplete()
}

function toSaveTable(){
    localStorage.setItem("suduko",JSON.stringify(document.getElementById("toShowTable").innerHTML))
    localStorage.setItem("sudokoTime",JSON.stringify(minutes + "." + seconds))

    document.getElementById("exitDiv").style.visibility = "hidden"
    document.getElementById("continueStartBtns").style.visibility = "visible"
    document.getElementById("continueStartBtns").style.position = "relative"
    document.getElementById("sudokoBody").style.visibility = "hidden"

    displayContinueBtn()
    clearInterval(stopWatch)
    isStopWatchRunning = true

}

function withOutSave(){
    document.getElementById("exitDiv").style.visibility = "hidden"
    document.getElementById("continueStartBtns").style.visibility = "visible"
    document.getElementById("continueStartBtns").style.position = "relative"
    document.getElementById("sudokoBody").style.visibility = "hidden"

    displayContinueBtn()
}
function Continue(){

    document.getElementById("continueBtn").style.visibility = "hidden"

    document.getElementById("continueStartBtns").style.visibility = "hidden"
    document.getElementById("continueStartBtns").style.position = "absolute"

    document.getElementById("sudokoBody").style.visibility = "visible"

    var table = JSON.parse(localStorage.getItem("suduko"))
    var div = document.createElement("div")
    div.innerHTML = table

    document.getElementById("toShowTable").innerHTML = ""
    document.getElementById("toShowTable").append(div)

    var divs = document.getElementsByClassName("div3")
    for(let i = 0; i < divs.length; i++){
        var span = divs[i].getElementsByTagName("span")[0]
        if(span.ariaValueText){
            divs[i].addEventListener("click",handleClick)
        }
    }

    var time = JSON.parse(localStorage.getItem("sudokoTime"))

    minutes = time.split(".")[0]
    seconds = time.split(".")[1]
    document.getElementById("timer").innerText = "Timer: " + minutes + " : " + seconds

    isStopWatchRunning = true
    startStopWatch()    
}

function exit1(){
    document.getElementById("exitDiv").style.visibility = "visible"
    document.getElementById("sudokoBody").style.visibility = "hidden"
}

function displayContinueBtn(){
    var btn = document.getElementById("continueBtn")
    btn.innerText = "Continue"

    if(levelNumber == 4){
        var difficulty = "Easy"
    }else if(levelNumber == 5){
        var difficulty = "Medium"
    }else{
        var difficulty = "Hard"
    }
    btn.style.visibility = "visible"
    var br = document.createElement("br")

    var span = document.createElement("span")
    span.style.fontSize = "small"
    span.style.color = "grey"

    var time = JSON.parse(localStorage.getItem("sudokoTime"))

    minutes = time.split(".")[0]
    seconds = time.split(".")[1]

    span.innerText = difficulty + " " + minutes + " : " + seconds
    btn.append(br , span)
}


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
        if (elementCount[i]){
            elementCount[i]++
        } else{
            elementCount[i] = 1
        }
    })
    const result = arr.filter(i => elementCount[i] != 1);
    return result
}

function produceHiddenElements(){

    var arr = []

    while(arr.length < levelNumber){

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
    document.getElementById("toShowTable").innerHTML = ""

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
    startStopWatch()
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
                // arr[i].getElementsByTagName("span")[0].style.fontSize ="large"

                // arr[i].getElementsByTagName("span")[0].style.fontFamily = "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"

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

        click.parentNode.childNodes[i].style.backgroundColor = "lightgrey"
        rowArr[i].style.backgroundColor = "lightgrey"

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
        document.getElementById("correctSound").play()
        document.getElementById("correctSound").currentTime = 0;


        div.removeEventListener("click",handleClick)
    }else{
        div.style.backgroundColor = "red"
        document.getElementById("wrongSound").play()
        document.getElementById("wrongSound").currentTime = 0;
    }
    div.getElementsByTagName("span")[0].innerText = input

    checkComplete()

}

function checkComplete(){
    var count = 0
    var divs = document.getElementsByClassName("div3")
    for(let i = 0; i < divs.length; i++){
        if(divs[i].ariaValueText == "isVisited"){
            count++
        }
    }
    if(levelNumber == 4){
        if(count == 36){
            run()
        }
    }
    if(levelNumber == 5){
        if(count == 45){
            run()
        }
    }
    if(levelNumber == 7){
        if(count == 63){
            run()
        }
    }
    function run(){
        console.log("completed")
        document.getElementById("winSound").play()
        document.getElementById("sudokoBody").style.visibility = "hidden"
        document.getElementById("winDiv").style.visibility = "visible"
        clearInterval(stopWatch)
    }
    
}


display()
