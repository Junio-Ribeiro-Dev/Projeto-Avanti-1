document.getElementById("searchButton").addEventListener("click", function () {
  let searchText = document.getElementById("searchInput").value.trim();
  let resultDiv = document.getElementById("searchResult");

  if (searchText !== "") {
      resultDiv.innerHTML = `Você buscou por: <strong>${searchText}</strong>`;
      resultDiv.style.display = "block";

      // Ocultar após 4 segundos (4000 milissegundos)
      setTimeout(() => {
          resultDiv.style.display = "none";
      }, 4000);
  } else {
      resultDiv.style.display = "none";
  }
});

// carrossel

new Swiper('.card-container', {
    
    loop: true,
  
  
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
        
      },
  
    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  
    breakpoints: {
        0:{
            slidesPerView: 1
        },
        390:{
            slidesPerView: 2
        },
        768:{
            slidesPerView: 2
        },
        1024:{
            slidesPerView: 3
        },
        1920:{
            slidesPerView: 5
        },
    
    }
  });

  // menu respponsivo

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu() { 

    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}   

btnMobile.addEventListener('click', toggleMenu);


  

// faq 


document.addEventListener("DOMContentLoaded", () =>{
    const questions = document.querySelectorAll(".faq-question");
    
    questions.forEach(question => {
      question.addEventListener("click", ()=> {
        question.classList.toggle("active");
        const answer = question.nextElementSibling;
        const icon = question.querySelector(".icon");
        
        if (answer.style.display === "block") {
          answer.style.display = "none";
          icon.textContent = "+";
        } else {
          answer.style.display = "block";
          icon.textContent ="-";
        }
      });
    });
    
    
  });