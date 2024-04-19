var online = localStorage.getItem('bool');
if(online==='true'){
    var login = document.querySelector('.loginElement');
    var view = document.querySelector('View')
    var register = document.querySelector('.registerElement');
    var pfp = document.querySelector('.profilePic');
    var user = localStorage.getItem('username');


    pfp.style.display = 'block';
    register.style.display = 'none';
    login.style.display = 'none';
    document.querySelector('.user').innerHTML = "Hello, " + user + "!";
}

function logout(){
    localStorage.clear();
    location.reload();
}

function showInsuffecient(){
    document.getElementById('Insuffecient').style.display = 'block';
}

function Preview(){

 window.location.href="./CromgeTest.html"
   
}

function Web1(){

 window.location.href="./2ndPage.html"

}

function Web2(){

 window.location.href="./3rdPage.html"
   
   }

function Web3(){

 window.location.href="./4thPage.html"
   
}   

function Web4(){

    window.location.href="./5thPage.html"
      
   }   

   function Web5(){

    window.location.href="./6thPage.html"
      
   }   

   /* Boxing */

   function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}