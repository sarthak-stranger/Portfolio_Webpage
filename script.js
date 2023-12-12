//  alert("f");
 let icon_div = document.getElementById("icon_div");
 let icon_close = document.getElementById("icon_close"); 
 let icon = document.getElementById("icon");
 let close = document.getElementById("close"); 
 let main = document.getElementById("main");
 let home = document.getElementById("home");
 let services = document.getElementById("services");
 let projects = document.getElementById("projects");
 let about = document.getElementById("about");
 let contact = document.getElementById("contact");
 let box = document.getElementById("box");
 let main2 = document.getElementById("main2");
 let main3 = document.getElementById("main3");
 let main3_img = document.getElementById("main3_img");
 let main3_video = document.getElementById("main3_video");
 let tag = document.getElementById("tag");
 let tag_1 = document.getElementById("tag_1");
 let tag_2 = document.getElementById("tag_2");
 let main3_rightside_slide = document.getElementById("main3_rightside_slide");
 let main3_rightside_slide_1 = document.getElementById("main3_rightside_slide_1");
 let slide_1 = document.getElementById("slide_1");
 let slide_2 = document.getElementById("slide_2");
 let slide_3 = document.getElementById("slide_3");
 let main3_body = document.getElementById("main3_body");
 let main3_body_1 = document.getElementById("main3_body_1");
 let signup = document.getElementById("signup");
 let outHead = document.getElementById("outHead");
 let main4 = document.getElementById("main4");
 

/*-------------------------------Auto type Text -------------------------------*/

var typed= new Typed(".text",{
    strings:["Web Developer" , "UI/UX Designer" , "Android Developer" , "Arduino Developer" , "Video Editor"],
    typeSpeed: 110,
    backSpeed: 90,
    backDelay: 1200,
    loop: true
});

/*------------------------------- Mobile Nav Icons -------------------------------*/

 icon_div.addEventListener("click",function(){
   icon_div.style.display = "none";
   icon_close.style.display ="block"; 
   main.style.display="none";
   mob_nav.style.display = "flex";
   main2.style.display = "none";

 });
 
 icon_close.addEventListener("click",function(){
   icon_div.style.display = "block";
   icon_close.style.display ="none";
   main.style.display ="flex";
   mob_nav.style.display ="none";

 });
 
/*------------------------------- Responsive for phone -------------------------------*/

 if(window.innerWidth <= 550 ){
     home.addEventListener("click",function(event){
        event.preventDefault();
       main.style.display = "flex"; 
       mob_nav.style.display ="none";
       icon_close.style.display ="none";
       icon_div.style.display = "block";
       home.classList.add("active");
       services.classList.remove("active");
       projects.classList.remove("active");
       about.classList.remove("active");
       contact.classList.remove("active");
       box.style.overflowY = "hidden";
     });

     services.addEventListener("click",function(event){
        event.preventDefault();
        main.style.display = "none";
       mob_nav.style.display ="none"; 
       icon_close.style.display ="none";
       icon_div.style.display = "block";
       home.classList.remove("active");
       projects.classList.remove("active");
       about.classList.remove("active");
       contact.classList.remove("active");
       services.classList.add("active");
       box.style.overflowY = "visible";
       
       projects.addEventListener("click",function(event){
        event.preventDefault();
       main.style.display = "none";
       mob_nav.style.display ="none"; 
       icon_close.style.display ="none";
       icon_div.style.display = "block";
       projects.classList.add("active");
       home.classList.remove("active");
       services.classList.remove("active");
       about.classList.remove("active");
       contact.classList.remove("active"); 
       box.style.overflowY = "hidden";
     });

     about.addEventListener("click",function(event){
        event.preventDefault();
       main.style.display = "none";
       mob_nav.style.display ="none"; 
       icon_close.style.display ="none";
       icon_div.style.display = "block";
       about.classList.add("active");
       home.classList.remove("active");
       services.classList.remove("active");
       projects.classList.remove("active");
       contact.classList.remove("active");
       box.style.overflowY = "hidden"; 
     });
   
     contact.addEventListener("click",function(event){
        event.preventDefault();
       main.style.display = "none";
       mob_nav.style.display ="none"; 
       icon_close.style.display ="none";
       icon_div.style.display = "block";
       contact.classList.add("active");
       home.classList.remove("active");
       services.classList.remove("active");
       projects.classList.remove("active");
       about.classList.remove("active");
       box.style.overflowY = "hidden"; 
     });

     });
   
 }

/*------------------------------- When Click On Home Page -------------------------------*/

 home.addEventListener("click",function(event){
    event.preventDefault();
   main.style.display = "flex"; 
   home.classList.add("active");
   services.classList.remove("active");
   projects.classList.remove("active");
   about.classList.remove("active");
   contact.classList.remove("active");
   main2.style.display = "none";
   main3.style.display = "none";
   main4.style.display = "none";
   contact_container.style.display = "none"; 
   outHead.style.backgroundImage = 'none';

 });

 /*------------------------------- When Click On Service Page -------------------------------*/

 services.addEventListener("click",function(event){
    event.preventDefault();
   main.style.display = "none";
   home.classList.remove("active");
   projects.classList.remove("active");
   about.classList.remove("active");
   contact.classList.remove("active");
   services.classList.add("active");
   main2.style.display = "flex";
   main3.style.display = "none";
   main4.style.display = "none";
   contact_container.style.display = "none"; 
   outHead.style.backgroundImage = 'url("img/back4.jpg")';
   outHead.style.backgroundSize = "Cover"; 
   outHead.style.backgroundPositionY = "-90px"; 


 });

 /*------------------------------- When Click On projects Page -------------------------------*/

 projects.addEventListener("click",function(event){
    event.preventDefault();
   main.style.display = "none";
   projects.classList.add("active");
   home.classList.remove("active");
   services.classList.remove("active");
   about.classList.remove("active");
   contact.classList.remove("active");
   main2.style.display = "none";
   main3.style.display = "flex";
   main4.style.display = "none";
   contact_container.style.display = "none"; 
   outHead.style.backgroundImage = 'none';  
 });

 /*------------------------------- When Click On About Page -------------------------------*/

 about.addEventListener("click",function(event){
    event.preventDefault();
   main.style.display = "none";
   about.classList.add("active");
   home.classList.remove("active");
   services.classList.remove("active");
   projects.classList.remove("active");
   contact.classList.remove("active");
   main2.style.display = "none";
   main3.style.display = "none";
   main4.style.display = "flex";
   contact_container.style.display = "none"; 
   outHead.style.backgroundImage = 'none';
 });

 /*------------------------------- When Click On Contact Page -------------------------------*/

 contact.addEventListener("click",function(event){
    event.preventDefault();
   main.style.display = "none";
   contact.classList.add("active");
   home.classList.remove("active");
   services.classList.remove("active");
   projects.classList.remove("active");
   about.classList.remove("active");
   main2.style.display = "none";
   main3.style.display = "none";
   main4.style.display = "none";
   contact_container.style.display = "flex"; 
   outHead.style.backgroundImage = 'url("img/contact_3.jpg")';
   outHead.style.backgroundSize = "Cover";
   outHead.style.backgroundPositionY = "-90px";
   
 });

 /*------------------------------- When Click On Button in Portfolio page  -------------------------------*/
 
 main3_rightside_slide.addEventListener("click",function() {
  if (tag.innerHTML === 'Click Here For Video'){
     
    main3_img.style.display = "none";
    main3_video.style.display = "flex";
    tag.innerHTML = "Click Here For Image";
  }else{
    main3_img.style.display = "flex";
    main3_video.style.display = "none";
    tag.innerHTML = "Click Here For Video";
     
  } 
 });
 
 main3_rightside_slide_1.addEventListener("click",function() {
  if (tag_1.innerHTML === 'Click Here For Video'){
     
    main3_img_1.style.display = "none";
    main3_video_1.style.display = "flex";
    tag_1.innerHTML = "Click Here For Image";
  }else{
    main3_img_1.style.display = "flex";
    main3_video_1.style.display = "none";
    tag_1.innerHTML = "Click Here For Video";
     
  } 
 });
 
 main3_rightside_slide_2.addEventListener("click",function() {
  if (tag_2.innerHTML === 'Click Here For Video'){
     
    main3_img_2.style.display = "none";
    main3_video_2.style.display = "flex";
    tag_2.innerHTML = "Click Here For Image";
  }else{
    main3_img_2.style.display = "flex";
    main3_video_2.style.display = "none";
    tag_2.innerHTML = "Click Here For Video";
     
  } 
 });
 
/*---------------------- When Click On Button to change projects in Portfolio page  ---------------------*/

 slide_1.addEventListener("click",function() {
    main3_body.style.display = "flex";
    main3_body_1.style.display = "none";
    main3_body_2.style.display = "none";
    slide_1.style.background = "rgb(0, 183, 3)";
    slide_2.style.background = "transparent";
    slide_3.style.background = "transparent";
 });
 slide_2.addEventListener("click",function() {
    main3_body.style.display = "none";
    main3_body_1.style.display = "flex";
    main3_body_2.style.display = "none";
    slide_2.style.background = "rgb(0, 183, 3)";
    slide_1.style.background = "transparent";
    slide_3.style.background = "transparent"; 
 });
 slide_3.addEventListener("click",function() {
    main3_body.style.display = "none";
    main3_body_1.style.display = "none";
    main3_body_2.style.display = "flex";
    slide_2.style.background = "transparent";
    slide_1.style.background = "transparent";
    slide_3.style.background = "rgb(0, 183, 3)";

 });
 

 /*---------------------------------Sending Emails -----------------------------------*/

 