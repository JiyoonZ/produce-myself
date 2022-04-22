// 탭창 구현하기
let links = document.querySelectorAll('#tab-group li a'); //위에탭부분
let items = document.querySelectorAll('#tab-group li');

//a링크 클릭하면 환면전화 멈추기
for(let i=0; i<links.length; i++) {
  links[i].onclick= function(e) {
    e.preventDefault();
  }
}
// 메뉴탭 클릭하면 해당 내용이 나오는 링크가 보이도록 active
for(let i=0; i<items.length; i++) {
  items[i].onclick = function() {
    var tabId = this.querySelector("a").getAttribute("href");
    

        document.querySelectorAll("#tab-group li, .tabs div.tab").forEach(function(item) {
          item.classList.remove("active");
        
        });
        document.querySelector(tabId).classList.add("active");
        
        this.classList.add("active");
        
  }  
}
// Theme mode 활성화
let themebtn = document.getElementById('themebtn');
let themes = document.getElementsByClassName('theme-group')[0];
let state = 'on';
themebtn.addEventListener("click", function() {
  if(state === 'off') {
    themebtn.classList.remove('noactive');
    themes.classList.add('noshow')
    state = 'on';
  } else {
    themebtn.classList.add('noactive');
    themes.classList.remove('noshow')
    state = 'off';
  }
});

//dark vs light 버전 선택하기
let ischeck = document.getElementsByClassName('checkbox')[0];

ischeck.addEventListener("click", function(e) {
  // e.preventDefault();
  if(ischeck.checked === true) {
    document.querySelector('body').style.backgroundColor = 'white';
    document.querySelector('.nameTag').style.border = 'solid 1px black';
    document.querySelector('.introduce').style.backgroundColor = "rgba(1,1,1, 0.4)";
    document.querySelectorAll('p').forEach(v => v.style.color = "white");
    
    document.querySelector('.nameTag p').style.color = 'black';
    document.querySelectorAll('.footbox p').forEach(v => v.style.color = 'black');
    console.log('하하')
    
  } else {
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('.nameTag').style.border = 'solid 1px white';
    document.querySelector('.introduce').style.backgroundColor = "rgba(255,255,255,0.2)";
    document.querySelectorAll('p').forEach(v => v.style.color = "#B5B5B6");
  }

})
