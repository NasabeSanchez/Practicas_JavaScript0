const Usuario1="Natalia"
const contraseña1="1234"
function Login(){
    const username=document.getElementById('username').value;
    const password=document.getElementById('password').value;
    const error=document.getElementById('error');
    if (username===Usuario1 && password===contraseña1){
        localStorage.setItem("Usuario_Logeado",username); //para obtener el usuario de la persona que se esta logeando y poder utilizarla en la otra pagina
        window.location.href="home.html";
    }else{
        error.textContent= "Usuario o contraseña incorrecto"
    }

}
