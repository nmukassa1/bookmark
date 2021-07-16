//Hamburger Menu
const menu = document.getElementById('toggle');
const menuFirstLine = menu.firstElementChild;
const menuSecondLine = menu.lastElementChild;
const dropdown = document.querySelector('header .dropdown');
const logoContainer = document.querySelector('.logo');
const logoDark = logoContainer.firstElementChild;
const logoLight = logoContainer.lastElementChild;
const navLinks = dropdown.firstElementChild.children;
const socials = document.querySelector('.socials');
const socialsIcon = socials.children;

menu.addEventListener('click', menuToggle);

function menuToggle() {
    menu.classList.toggle('menuToggle');

    menuFirstLine.classList.toggle('firstMenuLineToggle');

    menuSecondLine.classList.toggle('secondMenuLineToggle');

    dropdown.classList.toggle('dropdownToggle');

    logoContainer.classList.toggle('logoContainerToggle');

    logoDark.classList.toggle('logoDark');

    logoLight.classList.toggle('logoLight');

    for(let i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.toggle('navLinksToggle');
    }

    for(let i = 0; i < socialsIcon.length; i++) {
        socialsIcon[i].classList.toggle('navlinksToggle');
    }
}

//Features section 
const featuresContainer = document.getElementById('slides-btns');
const slidesBtns = document.querySelectorAll('.btn-container button');
const slideText = document.getElementById('slide-text');
const slideImg = document.querySelector('#slide-img img');
const content = [
    {
        image: 'images/illustration-features-tab-1.svg',
        header: 'Bookmark in one click',
        paragraph: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'
    },
    {
        image: 'images/illustration-features-tab-2.svg',
        header: 'Intelligent search',
        paragraph: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'
    },
    {
        image: 'images/illustration-features-tab-3.svg',
        header: 'Share your bookmarks',
        paragraph: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'
    }
];
const h2 = document.querySelector('#slide-text h2');
const p = document.querySelector('#slide-text p');

featuresContainer.addEventListener('click', features);

function features(e) {
   let item = e.target;
   if (item === slidesBtns[0]) {
        slideImg.src = content[0].image;
        h2.innerHTML = content[0].header;
        p.innerHTML = content[0].paragraph;
        item.classList.add('active');
        slidesBtns[1].classList.remove('active');
        slidesBtns[2].classList.remove('active');
   } else if (item === slidesBtns[1]) {
        slideImg.src = content[1].image;
        h2.innerHTML = content[1].header;
        p.innerHTML = content[1].paragraph;
        item.classList.add('active');
        slidesBtns[0].classList.remove('active');
        slidesBtns[2].classList.remove('active');
   } else if (item === slidesBtns[2]) {
        slideImg.src = content[2].image;
        h2.innerHTML = content[2].header;
        p.innerHTML = content[2].paragraph;
        item.classList.add('active');
        slidesBtns[0].classList.remove('active');
        slidesBtns[1].classList.remove('active');
   }
}



//Accordion
const question = document.getElementsByClassName('question');
const answer = question[0].nextElementSibling;

for (let i = 0; i < question.length; i++) {
    question[i].addEventListener('click', function() {
        const answer = this.nextElementSibling;
        answer.classList.toggle('answerToggle');
        const arrow = this.lastElementChild;
        arrow.classList.toggle('arrowToggle');
        const path = arrow.firstElementChild;
        path.classList.toggle('arrowActive');
        
    })
} //Frequently asked questions


//Form validation
const form = document.querySelector('form');
const email = document.getElementById('email');
const error = document.querySelector('.error');

form.addEventListener('submit', invalidEmail);

function invalidEmail(e) {
    // if the email field is valid, we let the form submit
  if(!email.validity.valid) {
    // If it isn't, we display an appropriate error message
    showError();
    // Then we prevent the form from being sent by canceling the event
    e.preventDefault();
  }
}    
function showError() {
    if(email.validity.valueMissing) {
      // If the field is empty,
      // display the following error message.
      error.textContent = `Whoops, make sure it's an email`;
    } else if(email.validity.typeMismatch) {
      // If the field doesn't contain an email address,
      // display the following error message.
      error.textContent = `Whoops, make sure it's an email`;
    }
    // Set the styling appropriately
    error.classList.add('errorToggle');
    const errorContainer = error.parentElement;
    errorContainer.classList.add('inputActive');
  }