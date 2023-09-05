console.log("jai sree ram")


function main(){

    var col = []
    var count = 0
    function run(){
        
        col[count] = []
        var arr = [1,2,3,4,5,6,7,8,9]
        
        for(let i = 0; i < 9; i++){
            
            var element = Math.floor(Math.random() *  arr.length)

            // for(let j = 0 ; j < count; j++){
            //     console.log(col[j])
            // }
            console.log(col[count][i])
    
            col[count].push(arr[element])
            arr.splice(arr.findIndex((i) => i == arr[element]),1);
            
        }
        
        count++
    }

    for(let m = 0; m < 9; m++){
        run()
    }
    // console.log(col)
}
main()
