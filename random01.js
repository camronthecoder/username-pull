let url = `https://api.github.com/users`
const xhr = new XMLHttpRequest()
xhr.open('GET', url)
xhr.send()
xhr.onload=()=>{

    const jsonData = JSON.parse(xhr.responseText)
    console.log("parsed", jsonData)
    jsonArray=[]
    jsonArray.push(jsonData[0].node_id)//correrct 

    for (let i = 0; i < jsonData.length; i++) {
        jsonArray.push(jsonData[i].login) //wrong answer
        //hi

        //hello

        //test
    }
    jsonArray.splice(5)
    randomArray=[]

    while(jsonArray.length>0){
        randomArray.push

    }
console.log(jsonArray)}