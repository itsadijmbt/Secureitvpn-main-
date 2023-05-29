

const USERNAME ='1';
const PASSWORDS ='1';
const  signup=document.querySelector('.login-page');

const  btnop=document.querySelector('.loog');
const guestUserInputBtn = document.querySelector('.guest')
const userInput = document.querySelectorAll('.bbx');
const ERROR_MSG=document.querySelector('.error-msg');
const validUserInterface = document.querySelector('.head-btn');
const iconValidUserInterface = document.querySelector('.user-view');
const validUserInterfaceMENU = document.querySelector('.menu-bar');
const signupInPage = document.getElementById('upit');
const logOutBtn = document.getElementById('lgbtn');
const dropDownMenu = document.querySelector('.sign-up-menu-bar');
const removeUserMenu = document.querySelector('.intro');
const PageUSerName =  document.querySelector('.side-menu-user');


let access=false;
let userIntend = true;

logOutBtn.addEventListener('click',()=>{
  userIntend=false;
  access=false;  
  dropDownMenu.style.display='none';

   user_validation_username ='';
   user_validation_password  = '';
  iconValidUserInterface.style.display='none';
  validUserInterface.style.display='flex';
  console.log('userintend in logout', userIntend);
  console.log('access in log out', access);
});
//set it in such a way that it works only for signed in
removeUserMenu.addEventListener('click',()=>{
  dropDownMenu.style.display='none';
  if(userIntend===true)
  iconValidUserInterface.style.display='flex';

  console.log('userintend', userIntend);
  console.log('access', access);
  
})

iconValidUserInterface.addEventListener('click',()=>{
  PageUSerName.textContent=userInput[0].value;
  dropDownMenu.style.display='flex';
  iconValidUserInterface.style.display='none';

});



guestUserInputBtn.addEventListener('click',()=>{ 

  signup.style.display='none';
  
  access=false;
  userIntend=false;
  iconValidUserInterface.style.display='none'

  console.log('userintend in guestmode', userIntend);
  console.log('access in guestmode', access);

});


signupInPage.addEventListener('click',() =>{
 
  signup.className='login-page';
  userInput[0].value='';
  userInput[1].value='';
  check();
  console.log('userintend in sign', userIntend);
  console.log('access in sign', access);
  if(access===true)   iconValidUserInterface.display='flex';

});

btnop.addEventListener('click',check);

function displayUserIcon(){
  if(access===true)  iconValidUserInterface.display='flex';
}


function check(){  

   UserValidationHandler();
   console.log('access in check fn',access);
   console.log('userIntend in check fn',userIntend);
   console.log('acess when login pressed', access)

   if(userIntend===true)
   iconValidUserInterface.style.display='flex';
  if(access===true){
   signup.style.display='none';
   iconValidUserInterface.display='flex';
  validUserInterface.style.display='none';
  validUserInterfaceMENU.style.width='30%';
  validUserInterfaceMENU.style.marginLeft='20%';
  }else{
    signup.style.display='flex';
  }
  
}

const UserValidationHandler= ()=>{

  let user_validation_username = userInput[0].value;
  let user_validation_password  = userInput[1].value;
  console.log('user ', user_validation_username);
  console.log('pass', user_validation_password);

   if(user_validation_username===USERNAME && user_validation_password===PASSWORDS) {access=true;userIntend=true}
   else{
    ERROR_MSG.style.color ='red';

    ERROR_MSG.textContent='Incorrect UserName or Password!!';


   }

};
