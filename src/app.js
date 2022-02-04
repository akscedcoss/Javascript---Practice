
    function myFunction(){
        let len=parseInt(document.getElementById("length").value);
        let wid=parseInt(document.getElementById("width").value);
        console.log(len,wid);
        console.log(typeof(len));
        console.log(typeof(wid));
        document.getElementById("area").innerHTML = "Area is : "+len*wid+" sq mtr";
    document.getElementById("peri").innerHTML = "Peri is : "+(len+wid)+" mtr"; 

    } 

    function myFunction2()
    {
    let time=document.getElementById("time").value;
    console.log(typeof(time));
    let timeOption= document.querySelector('input[name="time-option"]:checked').value;
    
  
    
    if (timeOption=="mts")
    {
        document.getElementById("res").innerHTML =time+" Min = "+(time*60)+" sec" ; 
    }
    if (timeOption=="htm")
    {
        document.getElementById("res").innerHTML =time+" Hour = "+(time*60)+" min" ; 
    }
    
   
 


    }