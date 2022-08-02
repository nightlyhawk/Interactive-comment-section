const input = document.querySelector(".textspc")
const sendbtn = document.querySelector("#sendbtn")
const replylnk = document.querySelector(".replybtn")
const edbtn = document.querySelector("#editbtn")
const remove = document.querySelector("#delbtn")




// 
let text = [];
sendbtn.onclick = function updateText(text){
    let div = document.createElement("div")
    div.className = "container" ;
    let div2 = document.createElement("div")
    div2.className = "reply2";
    let btnadd = document.createElement("button")
    btnadd.className = "plusbtn";
    btnadd.textContent = "+";
    let inputspc = document.createElement("input")
    inputspc.className = "count";
    let btnminus = document.createElement("button")
    btnminus.className = "minusbtn";
    btnminus.textContent = "-";
    let div3 = document.createElement("div")
    div3.className = "replybox";
    let pp = document.createElement("img")
    pp.src = "./images/avatars/image-juliusomo.png";
    pp.id = "profile"
    let p1 = document.createElement("p1")
    p1.className = "name";
    p1.innerHTML = "juliusomo"
    p1.style.fontWeight = "10px"
    let p = document.createElement("p")
    p.className = "ptags";
    p.innerHTML = text;
    let replybtn1 = document.createElement("a")
    replybtn1.id = "#replybtn"
    replybtn1.innerHTML = "Reply"
    let replyicon = document.createElement("img")
    replyicon.src = "./images/icon-reply.svg"
    replyicon.appendChild(replybtn1);
    let input = document.querySelector(".textspc").value;
    // let value = input.value;
    if (input) {
        text.push(input);
        updateText (text);
        input.value = "";
    } else{

    }
    let sect1 = document.querySelector("#firstsection")

        div.appendChild(div2);
        div2.appendChild(btnadd);
        div2.appendChild(inputspc);
        div2.appendChild(btnminus);
        div2.appendChild(div3);
        div3.appendChild(pp);
        div3.appendChild(p1);
        div3.appendChild(p);
        div3.appendChild(replyicon);
        
        
        sect1.appendChild(div)
    }
    function replyfx(){
        let div = document.createElement("div")
        div.className = "container" ;
        let div2 = document.createElement("div")
        div2.className = "reply2i";
        let img = document.createElement("img")
        img.src = "./images/avatars/image-juliusomo.png"
        img.style.height = "40px";
        let text = document.createElement("textarea")
        text.className = "textspc1";
        let replybtn = document.createElement("button")
        replybtn.id = "sendbtn"
        replybtn.innerHTML = "Reply"
        replybtn.onclick = function replyfx1(){
            let input = text.value
            let text = document.createElement("p")
            text.style.textAlign = "left"
            text.innerHTML = input.value
            let p0 = document.createElement("p1")
            p0.className = "name";
            p0.innerHTML = "juliusomo" + " " + "1 sec ago";           
            p0.style.fontWeight = "10px"
               
        }

        let sect2 = document.querySelector("#secondsection")

        div.appendChild(div2);
        div2.appendChild(img);
        div2.appendChild(p0); 
        div2.appendChild(text);
        div2.appendChild(replybtn)

        sect2.appendChild(div)

    }
    let ptag = document.querySelector(".ptags")
    let divv = document.getElementById('editbox')
    function editfx(){
    var txt01 = document.createElement("textarea")
    txt01.className = "textspc"
    var txt02 = ptag.innerHTML
    var repnode = document.querySelector(".ptags")
    txt01.appendChild(txt02)
    ptags.replaceChild(txt01, ptags.childNodes[0]) 
    // ptag.outerHTML = ptag.outerHTML.replace(/<p>/g, '<textarea style = "width: 321px; height: 76px;">').replace(/<\/p>/g, '</textarea>'); 
    // let result =ptag.outerHTML.replace(/p/g, "textarea")
    // ptag.outerHTML = 
    // ptag.className = "textspc"
    // ptag.style.height = "76px";
    // ptag.style.width = "321px"
    // let divv = document.getElementById('editbox').innerHTML = document.createElement("textarea")
    // divv.className = "textspc"
    // divv.style.height = "76px";
    // divv.style.width = "321px"

    }
    const delet = document.querySelector(".deletebtn")
    function delfx(){
        delfx.forEach(function(item) {
            item.remove()
        });
    }
    


    
// });
// }