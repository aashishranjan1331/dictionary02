
 
        const search=document.getElementById('search')
      const click=document.getElementById('click');
      const add=document.getElementById('add');
      click.addEventListener("click",function(){
       const word=search.value;
       
       const URL=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
     
       async function get(word) {
             const get= await fetch(URL);
             const data=await get.json();
            console.log(data[0].meanings[0].definitions[0]. definition);
            console.log(data[0].sourceUrls)
            console.log(data[0].meanings[0].synonyms)
         add.innerHTML=   `1) meaning: ${data[0].meanings[0].definitions[0].definition}<br>`
          + `2) part of speech: ${data[0].meanings[0].partOfSpeech}.<br>`+`3) For more information:<p style="color: red;"> ${data[0].sourceUrls}</p>`;
       //    add.innerHTML=   `${data[0].meanings[0].partOfSpeech}`
       }

   

       get();
       search.value = '';
      });
     
         
 


 //html access
   // let donation=document.querySelector("#Donation");
   // donation.addEventListener("click",function(){
   //    console.log("hello");
   //    window.location.href = "http://127.0.0.1:5500/wikipidia.html";

   // });
   // //preference
   // let preference=document.querySelector(".preferance");
   // preference.addEventListener("click",function(){
   //    window.location.href = "http://127.0.0.1:5500/preference.html"
   // })
   // let account=document.querySelector(".create");
   // account.addEventListener("click",function(){
   //    window.location.href = "http://127.0.0.1:5500/createaccount.html"
   // })
   function load(){
      // document.getElementById('main').value=""
      const xhttp=new XMLHttpRequest();
      xhttp.onload=function(){
         document.getElementById('main').innerHTML=this.responseText
      }
      xhttp.open("GET","wikipidia.html");
      xhttp.send();
   }
     function load1(){
      // document.getElementById('main').value=""
      const xhttp=new XMLHttpRequest();
      xhttp.onload=function(){
         document.getElementById('main').innerHTML=this.responseText
      }
      xhttp.open("GET","create.php");
      xhttp.send();
   }