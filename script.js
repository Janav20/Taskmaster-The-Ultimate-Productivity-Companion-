const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addTask(){
    if(inputbox.value === ''){
        alert("You must write something!");
    }
    else{   /* To add the text in the list*/
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";        //the code for the cross icon
        li.appendChild(span);   //to display the cross icon
    }
    inputbox.value ='';
    savedata(); // to save the updated content in the browser
}

listcontainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
}, false);

function savedata(){     //without this function, on reloading the webpage all the tasks dissappear!
    localStorage.setItem("data",listcontainer.innerHTML);
}

function showtask(){     // to show the previous task lists on reloading the webpage
    listcontainer.innerHTML=localStorage.getItem("data");
}

showtask();