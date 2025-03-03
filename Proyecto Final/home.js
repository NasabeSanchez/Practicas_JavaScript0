function postear(){
    const commentText=document.getElementById('Lugar_Comentario').value;
    const commentSeccion=document.querySelector('.coment_section');
    const username= localStorage.getItem('Usuario_Logeado') || "Anónimo";
    const Fecha=new Date().toLocaleTimeString();

    if(commentText.trim()===""){ //trim elimina los espacios vacios al inicio de una cadena
        alert("No se pueden publicar comentarios vacios, escribe algo")
        return;
    }

    const comentario= document.createElement('section');
    comentario.classList.add('comentario');
    comentario.innerHTML= `<strong>${username}</strong> - ${Fecha} <br> ${commentText}`;

    commentSeccion.appendChild(comentario);
    document.getElementById('Lugar_Comentario').value="";
}