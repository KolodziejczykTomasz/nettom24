(function() {
    "use strict";
  
    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }
  
    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all)
      if (selectEl) {
        if (all) {
          selectEl.forEach(e => e.addEventListener(type, listener))
        } else {
          selectEl.addEventListener(type, listener)
        }
      }
    }
  
    /**
     * Easy on scroll event listener 
     */
    const onscroll = (el, listener) => {
      el.addEventListener('scroll', listener)
    }
  
    /**
     * Navbar links active state on scroll
     */
    let navbarlinks = select('#navbar .scrollto', true)
    const navbarlinksActive = () => {
      let position = window.scrollY + 200
      navbarlinks.forEach(navbarlink => {
        if (!navbarlink.hash) return
        let section = select(navbarlink.hash)
        if (!section) return
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          navbarlink.classList.add('active')
        } else {
          navbarlink.classList.remove('active')
        }
      })
    }
    window.addEventListener('load', navbarlinksActive)
    onscroll(document, navbarlinksActive)
  
    /**
     * Scrolls to an element with header offset
     */
    const scrollto = (el) => {
      let header = select('#header')
      let offset = header.offsetHeight
  
      let elementPos = select(el).offsetTop
      window.scrollTo({
        top: elementPos - offset,
        behavior: 'smooth'
      })
    }
  
    /**
     * Toggle .header-scrolled class to #header when page is scrolled
     */
    let selectHeader = select('#header')
    if (selectHeader) {
      const headerScrolled = () => {
        if (window.scrollY > 100) {
          selectHeader.classList.add('header-scrolled')
        } else {
          selectHeader.classList.remove('header-scrolled')
        }
      }
      window.addEventListener('load', headerScrolled)
      onscroll(document, headerScrolled)
    }
  
    /**
     * Back to top button
     */
    let backtotop = select('.back-to-top')
    if (backtotop) {
      const toggleBacktotop = () => {
        if (window.scrollY > 100) {
          backtotop.classList.add('active')
        } else {
          backtotop.classList.remove('active')
        }
      }
      window.addEventListener('load', toggleBacktotop)
      onscroll(document, toggleBacktotop)
    }
  
    /**
     * Mobile nav toggle
     */
    on('click', '.mobile-nav-toggle', function(e) {
      select('#navbar').classList.toggle('navbar-mobile')
      this.classList.toggle('bi-list')
      this.classList.toggle('bi-x')
    })
  
    /**
     * Mobile nav dropdowns activate
     */
    on('click', '.navbar .dropdown > a', function(e) {
      if (select('#navbar').classList.contains('navbar-mobile')) {
        e.preventDefault()
        this.nextElementSibling.classList.toggle('dropdown-active')
      }
    }, true)
  
    /**
     * Scrool with ofset on links with a class name .scrollto
     */
    on('click', '.scrollto', function(e) {
      if (select(this.hash)) {
        e.preventDefault()
  
        let navbar = select('#navbar')
        if (navbar.classList.contains('navbar-mobile')) {
          navbar.classList.remove('navbar-mobile')
          let navbarToggle = select('.mobile-nav-toggle')
          navbarToggle.classList.toggle('bi-list')
          navbarToggle.classList.toggle('bi-x')
        }
        scrollto(this.hash)
      }
    }, true)
  
    /**
     * Scroll with ofset on page load with hash links in the url
     */
    window.addEventListener('load', () => {
      if (window.location.hash) {
        if (select(window.location.hash)) {
          scrollto(window.location.hash)
        }
      }
    });

   /**
     * Counter in success section
     */
      function myFunction() {
        const counters = document.querySelectorAll(".counter");

        counters.forEach((counter) => {
          counter.innerText = "0";
          const updateCounter = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;
            const increment = target / 20000;
            if (count < target) {
              counter.innerText = `${Math.ceil(count + increment)}`;
              setTimeout(updateCounter, 1);
            } else counter.innerText = target;
          };
          updateCounter();
        });
      }

      let firstScrolled = false;
      window.onscroll = function(){        
          if(!firstScrolled && scrollY >=2000) {
            myFunction();
            firstScrolled = true;
          }
      };


     /**
     * Animation on scroll
     */
    window.addEventListener('load', () => {
      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
        mirror: false
      });
    });



    const form = document.querySelector('form');

    const name = document.querySelector('#name');
    const emn = document.querySelector('.error-message-name');
    const ign = document.querySelector('.ign');
    
    const email = document.getElementById("email");
    const eme = document.querySelector('.error-message-email');
    const ige = document.querySelector('.ige');
    
    const message = document.querySelector('#message');
    const emm = document.querySelector('.error-message-message');
    const igm = document.querySelector('.igm');
    
    
    
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        validationInputs();
    });
    const validationInputs = () => {
        validationInputsName();
        validationInputsEmail();
        validationInputsMessage();
    
    }
    const validationInputsName = (e) => {
        const nameValue = name.value.trim();
        const validName=/^[A-Za-z]+$/;
        if(nameValue==="")
        {
            ign.classList.add('error');
            emn.innerHTML = "Pole obiwązkowe";
        }else if(!validName.test(nameValue)){
            ign.classList.add('error');
            emn.innerHTML = "Przepraszam, błędny format";
        }else{
            ign.classList.remove('error');
            emn.innerHTML = "";
            return true;
        }
    }
    
    name.oninput=function(){
        validationInputsName();
    }
    const validationInputsEmail = (e) => {
        const email = document.getElementById("email");
        const reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        const result = reg.test(email.value);
    
        if ((email !== null) && (email.value === "")) {
            ige.classList.add('error');
            eme.innerHTML = "Pole obiwązkowe";
            return false
        } else if (result === false) {
            ige.classList.add('error');
            eme.innerHTML = "Przepraszam, błędny format";
            return false;
        }
        ige.classList.remove('error');
        eme.innerHTML = "";
        return true;
    }
    email.oninput=function(){
        validationInputsEmail();
    }
    const validationInputsMessage = (e) => {
        const messageValue = message.value.trim();
        if(messageValue==="")
        {
            igm.classList.add('error');
            emm.innerHTML = "Pole obiwązkowe"; 
			}else {
            igm.classList.remove('error');
            emm.innerHTML = "";
            return true;
        }
    }
    
    message.oninput=function(){
        validationInputsMessage();
    }
    
	const btn__submit = document.getElementById('btn__submit');
	
	
	const sendMail= ()=> {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_fxafsic";
  const templateID = "template_0za1kpa";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Wiadomość została wysłana!!!")

    })
    .catch(err=>console.log(err));

}
	
btn__submit.addEventListener("click", sendMail);	
  
  })()