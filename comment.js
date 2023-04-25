//import * as fs from './fs/promises';
//const fs = require("node:fs/promises");



//const input = document.querySelector(".textspc");
const sendbtn = document.querySelector("#sendbtn");
//const replylnk = document.querySelector(".replybtn");
//const edbtn = document.querySelector("#editbtn");
//const remove = document.querySelector("#delbtn");
const prof = document.getElementById("prof");


    let ptag = document.querySelector(".ptags")
    let replyDiv = document.getElementById('editbox')
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
    // let replyDiv = document.getElementById('editbox').innerHTML = document.createElement("textarea")
    // replyDiv.className = "textspc"
    // replyDiv.style.height = "76px";
    // replyDiv.style.width = "321px"

    }
    const delet = document.querySelector(".deletebtn")
    function delfx(){
        delfx.forEach(function(comments) {
            comments.remove()
        });
    }
    


    
// });
// }

// let comment = [
//     {
//         img: "./images/avatars/image-juliusomo.png",
//         name: "Juliusomo",
//         sent: "2 weeks ago",
//         body: "@Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis accusantium",
//     },
   
//     {
//         img: "./images/avatars/image-maxblagun.png",
//         name: "Maxblagun",
//         sent: "2 weeks ago",
//         body: "@Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis accusantium",
//         reply: {
//             img: "./images/avatars/image-ramsesmiron.png",
//             name: "Ramsesmiron",
//             sent: "1 week ago",
//             body: "@Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis accusantium",
//         },
//     },
//     {
//         img: "./images/avatars/image-amyrobson.png",
//         name: "Amyrobson",
//         sent: "1 month ago",
//         body: "@Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis accusantium",
//     },
// ]


function updateText(tarr) {
  if(tarr){
    const commentss = tarr
  }else{
    fetch('data.json', {
      headers : { 
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
      }
    })
    .then((response) =>  response.json())
    .then(data => {
    const commentss = data[0].comments
    localStorage.setItem('comments', JSON.stringify(commentss))
  })}
  //  data.comments.map((item) => { 
    // for(let i in comments){
    // for (let i = 0; i < comments.length; i++) {
  commentss.forEach((comment) => {
    let div = document.createElement("div")
    div.className = "container" ;
    div.id = "delete"
    div.key = comment.id;
    let div2 = document.createElement("div")
    div2.className = "reply2";
    let btnadd = document.createElement("button")
    btnadd.className = "plusbtn";
    btnadd.innerText = "+";
    let inputspc = document.createElement("input")
    inputspc.className = "count";
    let btnminus = document.createElement("button")
    btnminus.className = "minusbtn";
    btnminus.innerText = "-";
    let div3 = document.createElement("div")
    div3.className = "replybox";
    let profilePic = document.createElement("img")
    profilePic.src = comment["user"]["image"]["png"];
    profilePic.id = "profile"
    let name = document.createElement("name")
    name.className = "name";
    name.innerHTML = comment.user.username
    name.style.fontWeight = "10px"
    let createdAt = document.createElement("strong")
    createdAt.textContent = comment.createdAt;
    createdAt.id = "time";
    let content = document.createElement("p")
    content.className = "ptags";
    content.innerHTML = comment.content;
    let replybtn1 = document.createElement("a")
    replybtn1.className = "replybtn"
    replybtn1.innerHTML = "Reply"
    replybtn1.onclick = reply()
    let replyicon = document.createElement("img")
    replyicon.src = "./images/icon-reply.svg"
    replyicon.style.left = "91%"
    replyicon.className = "replybtn"
    replyicon.onclick = reply()


    let sect1 = document.querySelector("#firstsection")

    div.appendChild(div2);
    div2.appendChild(btnadd);
    div2.appendChild(inputspc);
    div2.appendChild(btnminus);
    div2.appendChild(div3);
    div3.appendChild(profilePic);
    div3.appendChild(name);
    name.appendChild(createdAt);
    div3.appendChild(content);
    div3.appendChild(replyicon);
    div3.appendChild(replybtn1);

   
    
    
   

let repliess = comment.replies
repliess.forEach((replies) => {
    let replyDiv = document.createElement("div")
    replyDiv.className = "container3" ;
    replyDiv.id = "delete" + replies.id
    let replyDiv2 = document.createElement("div")
    replyDiv2.className = "reply2i";
    let replyBtnAdd = document.createElement("button")
    replyBtnAdd.className = "plusbtn";
    replyBtnAdd.innerText = "+";
    let replyInputspc = document.createElement("input")
    replyInputspc.className = "count";
    let replyBtnMinus = document.createElement("button")
    replyBtnMinus.className = "minusbtn";
    replyBtnMinus.innerText = "-";
    let replyDiv3 = document.createElement("div")
    replyDiv3.className = "replybox";
    let replyProfile = document.createElement("img")
    replyProfile.src = replies.user.image.png;
    replyProfile.id = "profile";
    let replyName = document.createElement("name")
    replyName.className = "name";
    replyName.innerHTML = replies.user.username
    replyName.style.fontWeight = "10px";
    let replyTime = document.createElement("strong")
    replyTime.textContent = replies.createdAt;
    replyTime.id = "time";
    let replyMessage = document.createElement("p")
    replyMessage.className = "ptags";
    replyMessage.innerHTML = replies.content;
    let replybtn2 = document.createElement("a")
    replybtn2.className = "replybtn";
    replybtn2.innerHTML = "Reply";
    let replyicon2 = document.createElement("img")
    replyicon2.src = "./images/icon-reply.svg";
    replyicon2.style.left = "91%";
    replyicon2.className = "replybtn";


    replyDiv.appendChild(replyDiv2);
    replyDiv2.appendChild(replyBtnAdd);
    replyDiv2.appendChild(replyInputspc);
    replyDiv2.appendChild(replyBtnMinus);
    replyDiv2.appendChild(replyDiv3);
    replyDiv3.appendChild(replyProfile);
    replyDiv3.appendChild(replyName);
    replyName.appendChild(replyTime);
    replyDiv3.appendChild(replyMessage);
    replyDiv3.appendChild(replyicon2);
    replyDiv3.appendChild(replybtn2);

    div.appendChild(replyDiv);
    // if(comment.replies != []){
    // div.appendChild(replyDiv);
    // }
  })

    function reply() {
      let replydiv = document.createElement("div")
      replydiv.className = "container" ;
      let div2 = document.createElement("div")
      div2.className = "reply2i";
      let img = document.createElement("img")
      img.src = prof.src
      img.id = "profile";
      let text = document.createElement("textarea")
      text.className = "textspc1";
      let replybtn = document.createElement("button")
      replybtn.id = "sendbtn"
      replybtn.innerHTML = "Reply"
      replybtn.onclick = function replyfx1(){
         replydiv.remove()
       }
     

      replydiv.appendChild(div2);
      div2.appendChild(img);
      div2.appendChild(text);
      div2.appendChild(replybtn);
      let sect2 = document.querySelectorAll("delete");
      div.click();
      for (var i=0; i < sect2.length; i++) {
      sect2[i].onclick = function (e) {
      e.target.appendChild(sect2);
};
}
}

// require(['foo'], function (foo) {
//     //foo is now loaded.
// });
// const fs = fss();
 

  
//  const theCall = (obj) => {
//   define(function (require) {
//     var fs = require('fs');
//     function jsonReader(filePath, cb) {
//       fs.readFile(filePath, (err, fileData) => {
//         if (err) {
//           return cb && cb(err);
//         }
//         try {
//           const object = JSON.parse(fileData);
//           return cb && cb(null, object);
//         } catch (err) {
//           return cb && cb(err);
//         }
//       });
//     };
//     // jsonReader("./data.json", (err, data) => {
//     //   if (err) {
//     //     console.log(err);
//     //     return;
//     //   }
//     //   console.log(data[0].comments); // => "Infinity Loop Drive"
//     // });
//     jsonReader("./data.json", (err, data) => {
//       if (err) {
//         console.log("Error reading file:", err);
//         return;
//       }
//       // increase data order count by 1
//       data[0].comments += obj;
//       fs.writeFile("./data.json", JSON.stringify(data[0]), err => {
//         console.log(obj);
//         console.log(data[0].comments);
//         if (err) console.log("Error writing file:", err);

//       });
//     });
//   }); 
// } 

sendbtn.onclick = function (){
 

  var today = new Date();
  let text = document.querySelector(".textspc").value;
  var time = today.getSeconds() + " secs ago"
  let profile = prof.src
  let newCom = {
      "id": commentss.length,
      "content": text,
      "createdAt": time,
      "score": 0,
      "user": {
        "image": {
          "png": profile,
        },
      "username": "Juliosomo",
      },
      "replies": []   
  };
  if (newCom.content !== null) {
 
      var exo = JSON.parse(localStorage.getItem('comments'));
      console.log(exo)
      exo.push(newCom);
      localStorage.setItem('comments', JSON.stringify(exo));
      clearContainerDOM();
      updateText(exo);
      document.querySelector(".textspc").value = " ";
    // })
  } else {
      console.log("no value")
  }   
  }

      //}  
      

  sect1.appendChild(div)
    }) 
      

}


function clearContainerDOM() {
    let prevTask = document.querySelectorAll("#delete");
    for(let i = 0; i < prevTask.length; i++){
        prevTask[i].remove();
    }
  }

updateText();


   