const list = document.getElementById("list");
const o_l= document.getElementById("o_l");
let f_e;
const submit = document.getElementById("submit");
const clear = document.getElementById("clear");
let num = 1;
let num_l = 1;
let error ;
async function shower(){
    if(0<localStorage.length){
    let ls= 1
        while(ls<=localStorage.length){
         ls++
        let key = "Todo_"+num_l;
        let u =localStorage.getItem(key)
        console.log(u)
        num_l++
         let li = document.createElement("li")
         let sc_new = document.createElement("li")
         li.className="element";
         li.innerText=u;
         sc_new.className="lab"
         sc_new.innerHTML=`<label class="sc_n">${num}</label>`;
         list.appendChild(sc_new)
         list.appendChild(li)
         num++
        }
        ls=1;
    }else if(0==localStorage.length){
        list.innerHTML="<label class='no'>Here is no ToDo</label>";
        error=1;
    }else{
        console.log(new Error("Here is Some Error"))
    }
}
shower()
async function scroll_e() {
    o_l.scrollTop = o_l.scrollHeight;
}
const enter = ()=>{
    const v1 = document.getElementById("v1").value;
    let key = "Todo_"+num_l;
    localStorage.setItem(key,v1)
    let li = document.createElement("li")
    let sc_new = document.createElement("li")
    if(v1){
        if(error>0){

            list.innerHTML=""; 
            error=0;
        }
        li.className="element"
        console.log(v1)
        li.innerText=v1;
          sc_new.className="lab"
          sc_new.innerHTML=`<label class="sc_n">${num}</label>`;
          list.appendChild(sc_new)
          list.appendChild(li)
          num_l++
          num++
        }
        else {
            console.error("WRONG - You can not leave it blank")
        }
        scroll_e()
    }
    const clear_fun = ()=>{
        num=1;
        localStorage.clear();
    shower()
}
submit.addEventListener("click",enter)
clear.addEventListener("click",clear_fun)

