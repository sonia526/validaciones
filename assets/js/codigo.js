function validateForm(){
  var salida_enviar = document.getElementById("salida_enviar");
  validaName();
  validaDni();
  /*validaEdad();*/
  validaCelular();
  validaPass();
  confirmarPass();
  confirmarComentario()
      
  if(validaName() == true && validaDni()==true && validaCelular()==true && validaPass()==true && validaPass()==true &&validarComentario()==true)
      salida_enviar.innerHTML='<p style="color:green;">Formulario Enviado Correctamente ✔</p>';  
  else
     salida_enviar.innerHTML='<p style="color:red;">Llena todos los campos correctamente</p>';
}
function primMayuscula(id){
    var nomArray = id.split("");
    var primeraLetra = nomArray[0];
    var primeraMayus = primeraLetra.toUpperCase();
    var cortePalabra = false;
     for(var i=1;i<nomArray.length;i++)
        {
          if(cortePalabra)
          {    
            primeraMayus += nombArray[i].toUpperCase();
            cortePalabra = false;
          }
          else
              primeraMayus+=nomArray[i];
          if(nomArray[i] == " ")
              cortePalabra = true;
        }
    return primeraMayus;
}
function validaName(){
  var name = document.getElementById("name"); 
  var isValid=false;
  if(name.value.length > 0 && name.value.match(/^[a-zA-Z\s]*$/)){
    var palabra=primMayuscula(name.value);
    document.getElementById("name").value = palabra; 
    salida_name.innerHTML="<p style='color:green; font-size:15px;' >Nombre valido ✔</p>";
    isValid=true;
  }
  else{
    salida_name.innerHTML="<p style='color:red; font-size:15px;' >Debes escribir letras en el nombre</p>";
    isValid=false;
  }   
  return isValid;
}

function validaDni(){
  var dni = document.getElementById("input-dni");
  var isValid=false;
 if(dni.value.length > 0 && dni.value.match(/[0-9]{7,8}[A-Z]/)){  
    salida_dni.innerHTML="<p style='color:green; font-size:15px;'>Dni valido ✔</p>";
    isValid=true;
  }
return isValid;
 }



function validaCelular(){
  var celular = document.getElementById("input-celular");
  var isValid=false;
 if(celular.value.length > 0 && celular.value.match(/^[9|6|7][0-9]{8}$/)){  
    salida_celular.innerHTML="<p style='color:green; font-size:15px;'>numero valido ✔</p>";
    isValid=true;

  }
  /*else{
    salida_celular.innerHTML="<p style='color:red; font-size:15px;' > debes escribir numeros</p>";
    isValid=false;
  }*/
  return isValid;
 }



function validaPass(){
  var password = document.getElementById("input-password");
  var isValid=false;
  if (!password.value.match(/.{6,}/) || password.value == "123456" || password.value.toLowerCase() == "password" || password.value == "098754"){
    salida_pass.innerHTML="<p style='color:red; font-size:15px;'>Debes Ingresar una contraseña valida.</p>";
    isValid=false;
  }
  else{
   salida_pass.innerHTML="<p style='color:green; font-size:15px;'>Contraseña valida ✔</p>";
    isValid=true;
  }
  return isValid;
}


function confirmarPass(){
  var password = document.getElementById("input-password");
  var isValid=false;
  if (!password.value.match(/.{6,}/) || password.value == "123456" || password.value.toLowerCase() == "password" || password.value == "098754"){
    salida_pass.innerHTML="<p style='color:red; font-size:15px;'>Debes Ingresar una contraseña valida.</p>";
    isValid=false;
  }
  else{
   salida_pass.innerHTML="<p style='color:green; font-size:15px;'>Contraseña valida ✔</p>";
    isValid=true;
  }
  return isValid;
}


