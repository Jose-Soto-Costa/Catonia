let data ={
		  
    totalStars:5,
    starsM: 2 ,
    starsC: 2,
    starsD: 2,
    name: "Write your name",
    page: 1,
    prePage: 1,
    origin:{ 
          hell:"pragaras",
          origin:"solo",
          skills:{},
           info:{},
    },
    kin: { 
          hell:"pragaras",
          kin:"one",
           info:{
               pure:"Migth",
           },
    },
    skills:{ 
          migthSkills:{

          element:{
              att:"premade",
              group:"deathWind",
              name:"element",
              upgraded:false,
              kin:true,
              origin:false,
              info:""
          },
          
          superSpeed:{
              att:"premade",
              group:"superSpeed",
              name:"superSpeed",
              upgraded:false,
              kin:false,
              origin:true,
          },

          },

          cunningSkills:{
     
          },


          darknessSkills:{
          },

          info:{},
      
        }
    }

function update(){
  	  
    console.log(lore.data);
        localStorage['data'] =  JSON.stringify(lore.data);
}

function start(){
    if (localStorage['data']){
let local =  JSON.parse(localStorage['data']);
data = local;
    }
}

$(document).ready(function(){
    start();
})
