function valueSetter(){
   gsap.set("#nav a",{y:"-100%",opacity:0})
   gsap.set("#home span .child",{y: "100%"})
   gsap.set("#home .row img",{opacity:0})

   document.querySelectorAll("#Visual>g").forEach(function  (e){
      var character = e.childNodes[1].childNodes[1];
      
            character.style.strokeDasharray = character.getTotalLength() + 'px';
            character.style.strokeDashoffset=character.getTotalLength() + 'px';
         })
}

function revealToSpan(){
document.querySelectorAll(".reveal")
.forEach(function(elem){
   //create two span
   var parent= document.createElement("span");
   var child=document.createElement("span");

   //parent and child both set their respective classes
   parent.classList.add("parent");
   child.classList.add("child");

   //span parent get child and child get elem details

   child.innerHTML=elem.innerHTML;
   parent.appendChild(child);

   //elem replaces its value with parent span
   elem.innerHTML= "";
   elem.appendChild(parent);
});
}


function loaderAnimation(){
   var tl=gsap.timeline();
   tl
     
    .from("#loader .child span",
    {
       x:100,
       duration:1,
       delay:1,
        ease: Circ.easeInOut
   
    }
    )
    .to("#loader .parent .child",{
       y: "-100%",
       duration:1,
       stagger: 0.2,
       ease:Power3.easeInOut
    })
   
    .to("#loader",{
    height :0,
    
     duration:1,
    
     ease:Circ.easeInOut
   })
   
    .to("#green",{
       height: "100%",
       top:0,
       duration:1,
       delay:-.8,
       ease: Circ.easeInOut
    })
    .to("#green",{
     height: "0%",
 
     duration:1,
     delay:-.5,
     ease: Circ.easeInOut,
     onComplete: function(){
      animateHomepage()
   }

   })
}

function animateSvg(){
   document.querySelectorAll("#Visual>g").forEach(function  (e){
var character = e.childNodes[1].childNodes[1];

      character.style.strokeDasharray=character.getTotalLength() + 'px';
      character.style.strokeoffset=character.getTotalLength() + 'px';
   })

   gsap.to("#Visual>g>g>path , #Visual>g>g>polyline",{
      strokeDashoffset:0,
      
      duration:2,
      ease:Expo.easeInOut
   
      })
}


function animateHomepage()
{
  
   var tl = gsap.timeline();
   tl
   .to("#nav a",{
      y:0,
      opacity:1,
      stagger:.05,
      ease:Expo.easeInOut,
      
   })
   .to("#home .parent .child",{
      y:0,
     
      stagger:.1,
      duration:2,
      ease:Expo.easeInOut,
      
   })
   .to("#home .row img",{
      opacity:1,
     delay:-.5,
      ease:Expo.easeInOut,
      onComplete: function(){
         animateSvg();
      }
      
   })
}
function locoInitialize()
{
   const scroll = new LocomotiveScroll({
      el: document.querySelector('#main'),
      smooth: true
  });
}

function cardHoverEffect()
{
   document.querySelectorAll(".cnt").forEach(function(cnt)
   {
      var showingImage;
      
      cnt.addEventListener("mousemove",function(dets){
         showingImage=dets.target;
         if(showingImage.dataset.index==0){
       
        document.querySelector("#cursor").children[0].style.opacity = 1;
        
        
        document.querySelector("#cursor").children[0].style.transform=`translate(${dets.clientX}px , ${dets.clientY+dets.clientY+dets.clientY}px)`;}
        else{
        document.querySelector("#cursor").children[1].style.opacity = 1;
        showingImage=dets.target;
        
        document.querySelector("#cursor").children[1].style.transform=`translate(${dets.clientX}px , ${dets.clientY+dets.clientY+dets.clientY}px)`;
       
        }
        document.querySelector("#work").style.backgroundColor = "#"+dets.target.dataset.color;
      })
      cnt.addEventListener("mouseleave",function(dets){
       
      document.querySelector("#cursor").children[showingImage.dataset.index].style.opacity=0;
         showingImage.style.filter="greyscale(0)";
         document.querySelector("#work").style.backgroundColor = "#fff";
      })
      
     
   })
}
function redirectToGoogleDrive() {
   window.location.href = 'https://drive.google.com/file/d/1Km-VNQL9Esn2mdNvOONwV9JA99WsG3vd/view?usp=sharing';
 }
revealToSpan();
valueSetter();
loaderAnimation();
locoInitialize();
cardHoverEffect();