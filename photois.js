var select = document.getElementById("sel");     
//var input = document.querySelector("input");
let input = ""
let inpu = ""
select.addEventListener("change", function(){
  // Если нужно value
    input = this.value;
  // Если нужен текст
    inpu = this.options[this.selectedIndex].text;
    let phoLink = document.getElementById("phot");
    if (input === "1"){

        phoLink.src = "media\\1.jpg";

    }
    else if  (input === "2"){
        phoLink.src = "media\\2.jpg";

    }
    else if  (input === "3"){
        phoLink.src = "media\\3.jpg";

    }
    else if  (input === "4"){
        phoLink.src = "media\\4.jpg";

    }
    else if  (input === "5"){
        phoLink.src = "media\\5.jpg";

    }
    else if  (input === "6"){
        phoLink.src = "media\\6.jpg";

    }
    else if  (input === "7"){
        phoLink.src = "media\\7.jpg";

    }
    else if  (input === "8"){
        phoLink.src = "media\\8.jpg";

    }
    else if  (input === "9"){
        phoLink.src = "media\\9.jpg";

    }
    else if  (input === "10"){
        phoLink.src = "media\\10.jpg";

    }
    else if  (input === "11"){
        phoLink.src = "media\\11.jpg";

    }
    else if  (input === "12"){
        phoLink.src = "media\\12.jpg";

    }
    else if  (input === "13"){
        phoLink.src = "media\\13.jpg";

    }
    else if  (input === "14"){
        phoLink.src = "media\\14.jpg";

    }
    else if  (input === "15"){
        phoLink.src = "media\\15.jpg";

    }
    else if  (input === "16"){
        phoLink.src = "media\\16.jpg";

    }
    else if  (input === "17"){
        phoLink.src = "media\\17.jpg";

    }
    else if  (input === "18"){
        phoLink.src = "media\\18.jpg";

    }
    else if  (input === "19"){
        phoLink.src = "media\\19.jpg";

    }
    else if  (input === "20"){
        phoLink.src = "media\\20.jpg";

    }
    else if  (input === "21"){
        phoLink.src = "media\\21.jpg";

    }
    else if  (input === "22"){
        phoLink.src = "media\\22.jpg";

    }
});

