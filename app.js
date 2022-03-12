let letters = [ "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
'1','2','3','4', '5', '6', '7', '8', '9', '0', '!', '@', '#', '$', '%', '^', '&', '*', '?', '<', '>', '+', '-', '/' ]



const pass1 = document.querySelector('.block1');
const pass2 = document.querySelector('.block2');
const pass3 = document.querySelector('.block3');
const pass4 = document.querySelector('.block4');




let code =''




function getpassword(){

    const passDigit = document.getElementById('digits').value

    if (passDigit < 21) {
    

   
    //passord generation for block 1

    let password = "";
    
 for (let i =0; i< passDigit; i++){
    

    let randomNumber = Math.floor((Math.random()* letters.length));
    password += letters[randomNumber] ;
    
   }
   pass1.textContent = password

   //passord generation for block 2

   password = "";
    
 for (let i =0; i< passDigit; i++){
    

    let randomNumber = Math.floor((Math.random()* letters.length));
    password += letters[randomNumber] ;
    
   }
   pass2.textContent = password

   //passord generation for block 3

   password = "";
    
 for (let i =0; i< passDigit; i++){
    

    let randomNumber = Math.floor((Math.random()* letters.length));
    password += letters[randomNumber] ;
    
   }
   pass3.textContent = password

   //passord generation for block 4

   password = "";
    
 for (let i =0; i< passDigit; i++){
    

    let randomNumber = Math.floor((Math.random()* letters.length));
    password += letters[randomNumber] ;
    
   }
   pass4.textContent = password
}
else {
    alert ("Enter a value between 1 and 20")

}

} 
document.getElementById("copy1").addEventListener("click", myFunction);

function myFunction() {
    
    console.log(pass1)
    pass1.select();
    
    
  }





