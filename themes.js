function changeCSS() {
    // Get the HTML link element that references the CSS file
    var cssLink = document.getElementById("css-main01");
    var cssLink1 = document.getElementById("css-main0");
    var icon = document.getElementById("sidebar-style-toggle");
    console.log(icon.className)
    if (icon.className === "fa-regular fa-moon"){
        // Set the href attribute of the link element to the new CSS file
        cssLink.href = "css\\nag.css";
        try{
            cssLink1.href = "css\\nod.css";

        }
        catch{
            

        }
        
        icon.className = "fa-sharp fa-regular fa-sun";
    }
    else{
        cssLink.href = "css\\dashmix.min.css";
        try{
            cssLink1.href = "css\\sb-admin-2.min.css";

        }
        catch{

        }
        
        icon.className = "fa-regular fa-moon"
    }
  
    // Set the href attribute of the link element to the new CSS file
    
}