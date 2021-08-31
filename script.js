const password = document.querySelector(".password");
const email = document.querySelector(".email");
const img = document.querySelector(".img");
const form = document.querySelector("#login-form");
const buton = document.querySelector(".submit")
window.onload = ()=>{
    img.src="./img/saskin.png"


}
document.addEventListener("focusout",(e)=>{    
    img.src="./img/saskin.png"
    

})
email.addEventListener("focus",changephoto1)
password.addEventListener("focus",changephoto2)
function changephoto1(){
    img.src="./img/asagi-bakarken.png"
} 
function changephoto2(){
    img.src="./img/gozluklu.png"

}
class Request {

   
    post(url,data){

        return new Promise((resolve,reject) => {
            fetch(url,{
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                  "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response => response.text())
            .then(data => resolve(data))
            .catch(err => reject(err));


        })
        

    }

    

}
const request = new Request();
request.post("log.json",{userId:1,title:"Thriller"})
