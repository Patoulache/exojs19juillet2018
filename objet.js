VERIF = {
  
  test: document.querySelectorAll('.valeur'),
  
  init1: function () {
    
    var btn = document.querySelector('#verif');
    btn.addEventListener('click',VERIF.check);
    
  },
  
  check: function () {
    
    var test = document.querySelectorAll('.valeur');
    var check = [];
    for (var i=0; i<test.length; i++) {
      check.push(test[i].value);
      
    };

    var regex = /^\D{1,30}[a-zA-Z]$/;
    var regex2 = /^[0-9]{2}-[0-9]{2}-[0-9]{4}$/;
    if (regex.test(check[0]) !== true) {
      alert("veuillez mettre une entrée valide");
    } else if (regex.test(check[1]) !== true) {
      alert("veuillez mettre une entrée valide2");
    } else if (regex2.test(check[2]) !== true) {
      alert("veuillez mettre une entrée valide3");
    } else {
      return document.querySelector('#valid').className="visible";
    }; 
        
  }
};

AJAX = {
  
  req: new XMLHttpRequest(),
  
  init2: function () {
    var btn = document.querySelector('#valid');
    btn.addEventListener('click',AJAX.test);
    
  },
  
  test: function (){
    
    var form1= [];
    var test = document.querySelectorAll('.valeur');
    for (var i=0; i<test.length; i++) {
      form1.push(test[i].value);
      
      
      
      AJAX.req.onload = function(){
        console.log(AJAX.req.status);
        var recup= JSON.parse(AJAX.req.responseText);
        console.log(recup);
        console.log(recup.nom);
       // MIRROIR.init3();
      }

    }
    
    console.log(form1);
    
    
    AJAX.req.open('POST', 'transfo.php', true);
    AJAX.req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    AJAX.req.send('donnees='.concat(form1));
  }
};

MIRROIR = {

  init3: function () {
    var searchIn = document.querySelector('#form2'); 
    var insertIn = searchIn.innerHTML = "\
    <form method=\"POST\" action=\"transfo.php\">\
      <div>\
        <input type=\"text\" id=\"nom\" class=\"valeur\" placeholder=\"Ex : Apeuprès\">\
                <label for=\"nom\">Nom de famille :</label>\
      </div>\
      <div>\
        <input type=\"text\" id=\"prenom\" class=\"valeur\" placeholder=\"Ex : Jean-michel\">\
        <label for=\"prenom\">Prénom :</label>\
      </div>\
      <div>\
        <input type=\"text\" id=\"birth\" class=\"valeur\" placeholder=\"Ex : 27-12-1957\">\
        <label for=\"birth\">Date de naissance :</label>\
      </div>\
      <div>\
        <input type=\"email\" id=\"mail\" class=\"valeur\" placeholder=\"Ex : jmapeupres@pasloin.com\">\
        <label for=\"mail\">E-mail :</label>\
    </div>\
</form>";

  }




};

function start(){
  VERIF.init1();
  AJAX.init2();

}

window.onload = start;

