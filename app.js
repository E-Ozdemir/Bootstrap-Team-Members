// function changeBodyBg() {
//     const isChecked=document.getElementById("switchValue").checked == true
//     ? (document.querySelector("body").style.backgroundColor = "black") 
//       (document.querySelector(".second-bg").style.backgroundColor = "black")

//     : (document.querySelector("body").style.backgroundColor = "white");
// }



    function changeBodyBg(){

        const isChecked=document.getElementById("switchValue");
        if (isChecked.checked) {
            (document.querySelector("body").style.backgroundColor = "black");
            // (document.querySelector(".second-bg").style.backgroundColor = "black");
        }
        else{
            // (document.querySelector(".second-bg").style.backgroundColor = "white");
            (document.querySelector("body").style.backgroundColor = "white");
        }
    }