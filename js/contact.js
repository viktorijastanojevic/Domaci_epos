function myFunction() {
    let text; 
  
    let ime = document.getElementById("ime").value;
    let  prezime = document.getElementById("prezime").value;
    let poruka = document.getElementById("subject").value;
  
    if (ime==="") {
      text = "Nedozvoljen unos za IME";
      alert(text);
      return;
    }

    if (prezime==="") {
        text = "Nedozvoljen unos za PREZIME";
        alert(text);
        return;
    }
  
    if (poruka==="") {
      text = "Ovo polje NE MOŽE biti prazno";
      alert(text);
      return;
    } 
   
  }

  


