const c = (e) => document.querySelector(e);

const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
    //   searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      
      modeText = body.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})

// searchBtn.addEventListener("click" , () =>{
//     sidebar.classList.remove("close");
// })


modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
    
    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
    }else{
        modeText.innerText = "Dark mode";
        
    }
}); 

let dashboard = document.querySelector("#btndashboard");
let revenue = document.querySelector('#btnrevenue');
let notifications = document.querySelector('#btnnotifications');
let custos = document.querySelector('#btncustos');



dashboard.addEventListener ("click", () => {
    let selSection = document.querySelector('.Dashboard');
    selSection.innerHTML = `<body class="Dashboard"> <div class="text">Section 1</div></section>`;
    // console.log("Voce Clicou em dashboard");
});

revenue.addEventListener ("click", () => {
    let selSection = document.querySelector('.Dashboard');
    selSection.innerHTML = `<section class="Dashboard"> <div class="text">Section 2</div></section>`;
    // console.log("Voce Clicou em revenue");
});

custos.addEventListener ("click", () => {
    let selSection = document.querySelector('.Dashboard');
    selSection.innerHTML = `<section class="Dashboard"> <div class="text">Section 3</div></section>`;
    // console.log("Voce Clicou em notifications");
    
});

notifications.addEventListener ("click", () => {
    let selSection = document.querySelector('.Dashboard');
    selSection.innerHTML = `<section class="Dashboard"> <div class="text">Section 4</div></section>`;
    // console.log("Voce Clicou em notifications");
    
});
