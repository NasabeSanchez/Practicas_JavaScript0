function post(){
    const commentText=document.getElementById('Lugar_Comentario').value;
    const commentSeccion=document.getElementById('coment_section');
    const username= localStorage.getItem('Usuario_Logeado');
    const Fecha=new Date().toLocaleTimeString()

    if(commentText.trim()===""){ //trim elimina los espacios vacios al inicio de una cadena
        alert("No se puedem publicar comentarios vacios, escribe algo")
        return
    }

    const comentario= document.createElement('seccion')
    comentario.classList.add("comentario")
    comentario.innerHTML= '<strong>${username}</strong> - %{fecha} <br> ${commentText}';

    commentSeccion.appendChild(comentario);
    document.getElementById('Lugar_Comentario').value="";
}