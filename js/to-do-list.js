const input = document.querySelector(".input")
const add = document.querySelector(".addbutton")

let value;
 
input.addEventListener("input", (e) =>
{
    e.preventDefault();
    value = e.target.value;
});

add.addEventListener("click", () => 
{
    if (input.value === "") return;
    input.value= "";
    addtolocalstorage(value.toUpperCase());
})

function addtolocalstorage(mylist) {
    let mylists;
    if(localStorage.getItem("mylist") === null) {
        mylists = [];
    } else {
        mylists = JSON.parse(localStorage.getItem("mylist"))
    }

    mylists.push(mylist);
    localStorage.setItem("mylist", JSON.stringify(mylists))
document.querySelector("ol").innerHTML = "";
mylists.forEach(item => {
    let listdiv = document.createElement("div");
    listdiv.innerHTML = `<li>${item}</li> <input id=delete type=button value= REMOVE >`;
    document.querySelector("ol").appendChild(listdiv);
    
});
buttons()

}

function getlist()
{
    let mylists;
    if(localStorage.getItem("mylist") === null) {
        mylists = [];
    } else {
        mylists = JSON.parse(localStorage.getItem("mylist"))
    }

    
document.querySelector("ol").innerHTML = "";
mylists.forEach(item => {
    let listdiv = document.createElement("div");
    listdiv.innerHTML = `<li>${item}</li> <input id=delete type=button value= REMOVE >`;
    document.querySelector("ol").appendChild(listdiv);
    
});
buttons()
};

function buttons()
{
    document.querySelectorAll("div, input").forEach((item, index) =>
 {
        let mylists;
    if(localStorage.getItem("mylist") === null) {
        mylists = [];
    } else {
        mylists = JSON.parse(localStorage.getItem("mylist"))
    }
    item.addEventListener("click", () => {
        mylists.splice(index, 1);
        localStorage.setItem("mylist", JSON.stringify(mylists));
        getlist();
    });
 });
    
}
 getlist();