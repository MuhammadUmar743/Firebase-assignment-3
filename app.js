import { auth, createUserWithEmailAndPassword, db, doc, setDoc } from "./config.js"
import { getUser } from "./login.js"

window.signUp =(event)=> {
    event.preventDefault()

    let email = document.getElementById("email")
    let password = document.getElementById("password")
    let firstName = document.getElementById("firstName")
    let lastName = document.getElementById("lastName")
    let phoneNumber = document.getElementById("phoneNumber")

    // {

    // firstName : 'Muhammad Umar'
    // lastName : 'Asghar'
    // phoneNumber : '03272390211'
    // userId : 'dummyId'
    // email : muhammadumar2666@gmail.com

    // }

    // xxxxx password hum kabhi bhi nhi lete hain user se database me nhi to tum gye 
    // matlab yeh tarika ghalat ha bus password nhi lena ha (Wrong way  )


    console.log(email.value , password.value)

    createUserWithEmailAndPassword(auth , email.value , password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    saveDataToDb(firstName , lastName , email , phoneNumber , user.uid)
    console.log(user , 'Sahi chal gaya ')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage , 'Masla aagya ha ')
    // ..
  });

  email.value = ""

}

async function saveDataToDb(firstName , lastName , email , phoneNumber , userId){
  await setDoc(doc(db, "users", userId), {

  firstName: firstName.value,
  lastNameName: lastName.value,
  email: email.value,
  phoneNumber: phoneNumber.value,
  userId: userId

});


}

getUser()