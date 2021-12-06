var y=Object.defineProperty;var x=(o,e,t)=>e in o?y(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var i=(o,e,t)=>(x(o,typeof e!="symbol"?e+"":e,t),t);import{c as S}from"./vendor.95a88ac9.js";class d{constructor(){}static getHtml(){}}class w extends d{static getHtml(){return`
      <section class="about__hero">
        <div>
          <p class="about__hero--title">
            Help others without any reason and give without the expectation of receiving anything in return.
          </p>

          <p class="about__hero--subtitle">
            We aim to make a difference in the nonprofit community.
          </p>
        </div>
      </section>

      <section class="container about__team">
        <p class="about__team--title">Team</p>

        <p class="about__team--subtitle">
          We are a team of university students that wants to ease the access
          to a variety of nonprofits and charities to help nonprofits and givers.
          If you have a passion for helping nonprofits and
          givers, contact us at
          <a href="mailto:team@example.com">team@example.com.</a>
        </p>

        <div class="about__team--members">
          <div class="about__team--member">
            <i class="far fa-user"></i>
            <p class="about__team--member--name">Emin Aliyev</p>
            <p class="about__team--member--position">Developer</p>
          </div>

          <div class="about__team--member">
            <i class="far fa-user"></i>
            <p class="about__team--member--name">Nisanur Guvensoy</p>
            <p class="about__team--member--position">Developer</p>
          </div>

          <div class="about__team--member">
            <i class="far fa-user"></i>
            <p class="about__team--member--name">Sadik Solmaz</p>
            <p class="about__team--member--position">Developer</p>
          </div>
        </div>
      </section>
    `}}class B extends d{static getHtml(){return`
      <div class="container">
        <div class="row">
          <div class="col-12 md:col-6 home__left">
            <p class="home__left--title">
              Give a hand, be happy
            </p>

            <p class="home__left--subtitle">
              Built with heart. Forever free.
            </p>

            <p class="home__left--description">
              Choose the category you want to help, and discover nonprofits.
            </p>
          </div>

          <div class="home__right col-12 md:col-6">
            <img
              src="./images/onboarding.svg"
              alt="Onboarding"
              class="home__right--image"
            />
          </div>
        </div>
      </div>
    `}}class u{constructor(){}static render(){}}var c=[{id:"animals",name:"Animals",icon:"animals.svg",textColor:"#d49350",hoverTextColor:"#a2611e",hoverBgColor:"#f6dcc1",selectedBgColor:"#e8a764"},{id:"culture",name:"Culture",icon:"culture.svg",textColor:"#7a6db5",hoverTextColor:"#7063ab",hoverBgColor:"#d6d1ed",selectedBgColor:"#988bd3"},{id:"education",name:"Education",icon:"education.svg",textColor:"#7593b6",hoverTextColor:"#577598",hoverBgColor:"#d8e4f2",selectedBgColor:"#9dbbde"},{id:"environment",name:"Environment",icon:"environment.svg",textColor:"#86a537",hoverTextColor:"#5e7d10",hoverBgColor:"#dbe7bb",selectedBgColor:"#a4c355"},{id:"health",name:"Health",icon:"health.svg",textColor:"#bc749d",hoverTextColor:"#9e567f",hoverBgColor:"#f0d3e4",selectedBgColor:"#da92bb"},{id:"humans",name:"Humans",icon:"humans.svg",textColor:"#cca151",hoverTextColor:"#906515",hoverBgColor:"#f7e5c5",selectedBgColor:"#eabf6f"},{id:"justice",name:"Justice",icon:"justice.svg",textColor:"#57989c",hoverTextColor:"#397a7e",hoverBgColor:"#c8e2e3",selectedBgColor:"#75b6ba"},{id:"religion",name:"Religion",icon:"religion.svg",textColor:"#d26544",hoverTextColor:"#be5130",hoverBgColor:"#f9cdc0",selectedBgColor:"#f08362"},{id:"research",name:"Research",icon:"research.svg",textColor:"#59a593",hoverTextColor:"#2f806d",hoverBgColor:"#bbe9cf",selectedBgColor:"#8ac8b9"}];class l extends u{static generateStyleSheet(){const e=document.createElement("style");c.forEach(s=>{const n=`
        #${s.id} {
          color: ${s.textColor};
        }

        #${s.id}:hover {
          background-color: ${s.hoverBgColor};
          color: ${s.hoverTextColor};
        }
      `;e.innerHTML+=n});const t=new URLSearchParams(location.search).get("categories");let a="";t&&(a=`
        #${t} {
          background-color: ${c.find(s=>s.id===t).selectedBgColor};
          color: #fff;
        }
      `),e.innerHTML+=a,document.body.appendChild(e)}static getCategories(){return this.list=[],c.forEach(e=>{this.list.push(`
        <li>
          <a href="/search?categories=${e.id}" id="${e.id}" data-link="${e.id}">
            <img src="./images/${e.icon}">
            <span>${e.name}</span>
          </a>
        </li>
      `)}),this.list.join("")}static render(){return`
      <ul>
        ${this.getCategories()}
      </ul>
    `}}i(l,"list",[]);const $=S({space:"rg13wmiqw4n6",accessToken:"ctwhEKjYGOqFoaLdrKtxb-jwoL4f0PJc_ujYVtKuKMo"});class h extends u{static getCategories(){return new URLSearchParams(location.search).get("categories")}static getResults(e){this.results="",$.getEntries({content_type:"nonprofit","fields.category[in]":e}).then(({items:t})=>{t.forEach(a=>{const{category:s,name:n,location:v,description:g,logo:f,cover:b,link:_}=a.fields;this.results+=`
            <div class="result ${s}">
              <img src="${b.fields.file.url}">

              <div class="result__body" style="background-color: ${c.find(C=>C.id===s).hoverBgColor};">
                <img src="${f.fields.file.url}">

                <div>
                  <p class="result__name">${n}</p>
                  <p class="result__location">${v}</p>
                  <p class="result__description">${g}</p>
                </div>
              </div>

              <a href="${_}" target="_blank">Donate</a>
            </div>
          `}),document.dispatchEvent(new CustomEvent("resultsgot",{detail:this.results}))}).catch(t=>{throw t})}static render(){}}i(h,"results","");document.addEventListener("resultsgot",o=>{document.querySelector(".results").innerHTML=o.detail});class E extends d{static getHtml(){return h.getResults(h.getCategories()),`
      <div class="container">
        <div class="categories">
          ${l.render()}
        </div>

        <div class="results">
        </div>
      </div>
    `}}var p=[{name:"home",path:"/",view:B},{name:"about",path:"/about",view:w},{name:"search",path:"/search",view:E}];class m{constructor(){}static matchRoute(){let t=p.map(a=>({route:a,isMatch:location.pathname===a.path})).find(a=>a.isMatch);return t||(t={route:p[0],isMatch:!0}),t}static navigate(e,t,a){history.pushState(e,t,a),this.render()}static render(){const e=this.matchRoute().route,t=document.querySelector("main");t.classList.replace(t.classList[t.classList.length-1],e.name),t.innerHTML=e.view.getHtml()}}class L extends u{static render(){return l.generateStyleSheet(),`
      ${l.render()}
    `}}class r{static renderSearchPopup(){const e=document.createElement("div");e.className="header__search--popup",e.innerHTML=L.render(),this.search.appendChild(e)}static toggleSearchPopup(){this.showSearchPopup?document.querySelector(".header__search--popup").style.display="none":document.querySelector(".header__search--popup").style.display="block",this.showSearchPopup=!this.showSearchPopup}static toggleOverlay(){this.showOverlay?document.querySelector(".overlay").style.display="none":document.querySelector(".overlay").style.display="flex",this.showOverlay=!this.showOverlay,document.dispatchEvent(new CustomEvent("overlaytoggled",{detail:{state:this.showOverlay}}))}}i(r,"search",document.querySelector(".header__search")),i(r,"showSearchPopup",!1),i(r,"showOverlay",!1);const T=document.querySelector("#search"),k=document.querySelector(".overlay");window.onpopstate=()=>{m.render()};document.addEventListener("DOMContentLoaded",()=>{m.render(),r.renderSearchPopup()});document.querySelectorAll("a").forEach(o=>{o.addEventListener("click",e=>{e.currentTarget.getAttribute("data-link")&&(e.preventDefault(),m.navigate(null,null,e.currentTarget.href))})});T.addEventListener("focus",()=>{r.toggleOverlay(),r.toggleSearchPopup()});document.addEventListener("overlaytoggled",o=>{const e=document.querySelector(".header__search");o.detail.state?e.style.borderBottomLeftRadius=e.style.borderBottomRightRadius=0:e.style.borderBottomLeftRadius=e.style.borderBottomRightRadius="0.5rem"});k.addEventListener("click",()=>{r.toggleOverlay(),r.toggleSearchPopup()});
