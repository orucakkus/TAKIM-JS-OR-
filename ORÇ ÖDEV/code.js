function merhaba(){
    let ad,soyad,yas,adam;
    ad=document.getElementById("txtad").value;
    yas=document.getElementById("txtyas").value;
    soyad=document.getElementById("txtsoyad").value;
    document.getElementById("sonucBaslık").innerHTML="";
    adam=document.getElementById("takımlar").selectedIndex;

    if(adam==0){
        
        document.getElementById("logo").setAttribute("src","besiktasta-sicak-gelisme-sozlesme-teklifini-reddetti.jpg");
        document.getElementById("sonucBaslık").innerHTML="Kara Sevda beşiktaş";
    }
    else if(adam==1){
        document.getElementById("logo").setAttribute("src","60b3e7e6ae298bfd1c13b2c4.jpg");
        document.getElementById("sonucBaslık").innerHTML="Şampiyon Galatsary";
    }
    else{
        
    }
    console.log(adam)
}