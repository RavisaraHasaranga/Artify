// Theme buttons
const theme1 = document.getElementById("theme-1");
const theme2 = document.getElementById("theme-2");
const theme3 = document.getElementById("theme-3");

// Font size buttons
const size1 = document.getElementById("size-1");
const size2 = document.getElementById("size-2");
const size3 = document.getElementById("size-3");

// Add event listeners to theme buttons
theme1.addEventListener("click", () => {
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";

  document.querySelectorAll('.topbox').forEach(element => {
    element.style.backgroundColor = '#EDDCD2';
    element.style.borderColor = '#CB997E';


    element.addEventListener("mouseover", () => {
        element.style.boxShadow = '0 0 20px #CB997E';
      });
      
      element.addEventListener("mouseout", () => {
        element.style.boxShadow = '0 0 10px #CB997E';
      });
  });


  document.querySelectorAll('.top-title').forEach(element => {
    element.style.color = 'black';
    
    
  });
  document.querySelectorAll('.details').forEach(element => {
    element.style.color = '#494949';  
  });

  document.querySelectorAll('.span').forEach(element => {
    element.style.color = '#CB997E';
  });




});

theme2.addEventListener("click", () => {
  document.body.style.backgroundColor = "#A7A2A9";
  document.body.style.color = "white";
  document.querySelectorAll('.topbox').forEach(element => {
    element.style.backgroundColor = '#7f7b80';
    element.style.borderColor = '#5d5b5d';


    element.addEventListener("mouseover", () => {
        element.style.boxShadow = '0 0 20px #5d5b5d';
      });
      
      element.addEventListener("mouseout", () => {
        element.style.boxShadow = '0 0 10px #5d5b5d';
      });
  
    
    
  });
  document.querySelectorAll('.top-title').forEach(element => {
    element.style.color = 'white';
    
    
  });
  document.querySelectorAll('.details').forEach(element => {
    element.style.color = 'white';
    
    
  });

  document.querySelectorAll('.span').forEach(element => {
    element.style.color = '#cbcbcb';

    
    
  });

  document.querySelectorAll('.content').forEach(element => {
    element.style.backgroundColor = '#7f7b80';
    element.style.borderColor = '#0d67e5';   
    

});
});

theme3.addEventListener("click", () => {
  document.body.style.backgroundColor = "#1f2937";
  document.body.style.color = "white";
  document.querySelectorAll('.topbox').forEach(element => {
    element.style.backgroundColor = '#6b7280';
    element.style.borderColor = '#0d67e5';


    element.addEventListener("mouseover", () => {
        element.style.boxShadow = '0 0 20px #0d67e5';
      });
      
      element.addEventListener("mouseout", () => {
        element.style.boxShadow = '0 0 10px #0d67e5';
      });
  
    
    
  });
  document.querySelectorAll('.top-title').forEach(element => {
    element.style.color = 'white';
    
    
  });
  document.querySelectorAll('.details').forEach(element => {
    element.style.color = 'white';
    
    
  });

  document.querySelectorAll('.span').forEach(element => {
    element.style.color = '#1f2937';

    
    
  });

  document.querySelectorAll('.content').forEach(element => {
    element.style.backgroundColor = '#6b7280';
    element.style.borderColor = '#0d67e5';   
    

});
  

  
});

// Add event listeners to font size buttons
size1.addEventListener("click", () => {

    
  document.body.style.fontSize = "small";

  document.querySelectorAll('.details').forEach(element => {
    element.style.fontSize = "small";
    
    
  });
  
  
});

size2.addEventListener("click", () => {
  document.body.style.fontSize = "medium";
  document.querySelectorAll('.details').forEach(element => {
    element.style.fontSize = "medium";
    
    
  });
});

size3.addEventListener("click", () => {
  document.body.style.fontSize = "large";
  document.querySelectorAll('.details').forEach(element => {
    element.style.fontSize = "large";
    
    
  });
});