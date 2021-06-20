const demo1 = document.getElementById("demo1")
const inpute= document.getElementById("input-el")
const btn1=document.getElementById("btn-1")
const btn2=document.getElementById("btn-2")


/*let src=[
    {
        name:"Letsfit-Resistance-Exercise-Stretching-Strength",
        link:"https://www.youtube.com/embed/results?search_query=Willful-Version-Waterproof-Smartwatch-Compatible"
        },
        {
        name:"Logitech-MK270-Wireless-Keyboard-Mouse",
        link:"https://www.youtube.com/embed/O2MJvPifXHg"
     },   
     {
        name:"AmazonBasics-Microfiber-Sheet-Set-Queen",
        link:"https://www.youtube.com/embed/15IF9XcyJmc"   
     },
     {
        name:"Willful-Version-Waterproof-Smartwatch-Compatible",
        link:"https://www.youtube.com/embed/C9X8iFjiaiQ"   
     }
    ]*/
btn1.addEventListener("click",()=>{
  handler(inpute.value)               

})
btn2.addEventListener("click",()=>{
chrome.tabs.query({active:true,currentWindow:true},function(tabs)
{
  var tabURL = tabs[0].url;
 var val=tabURL.split("/")
 console.log(val[3]) 
 inpute.value=val[3] 
 
 handler(inpute.value)
})
})

let listitem=""
function render(content){

        listitem = `<iframe src="https://www.youtube.com/embed/${content}"></iframe>`
       
         demo1.innerHTML = listitem
         inpute.value="" 
}

async function handler(content){


    let response= await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${content}&key=AIzaSyB4Ku1Xd0-esdt724a4p2KUiXkUOvvp9PM`)
    .then(response =>{ return(response.json())})
    .then(data =>{return(data)})  
    
    
    render(response.items[0].id.videoId)
    }
    