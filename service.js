const language = {
    en:{
      title: "404",
      subtitle: "This page is currently not available.",
      content_line_one: "Please try again later.",
      content_line_two: "If this error has been occurring for a long time, please notify an administrator.",
      footer: "A service provided by {{ YOUR NAME HERE }}."
    },
    de:{
      title: "404",
      subtitle: "Diese Seite ist derzeit nicht verfügbar.",
      content_line_one: "Bitte versuchen Sie es später noch einmal.",
      content_line_two: "Wenn dieser Fehler schon seit längerer Zeit auftritt, benachrichtigen Sie bitte einen Administrator.",
      footer: "Ein Service von {{ YOUR NAME HERE }}."
    },
    fr:{
      title: "404",
      subtitle: "Cette page n'est actuellement pas disponible.",
      content_line_one: "Veuillez réessayer plus tard.",
      content_line_two: "Si cette erreur se produit depuis longtemps, veuillez en informer un administrateur.",
      footer: "Un service fourni par {{ YOUR NAME HERE }}."
    }
  }
  
  var userLang = navigator.language || navigator.userLanguage;
  
  
  loadText();
  updateLangNav();
  
  function loadText(){
    document.getElementById("app_lang_title").innerHTML = language[userLang].title;
    document.getElementById("app_lang_subtitle").innerHTML = language[userLang].subtitle;
    document.getElementById("app_lang_content_one").innerHTML = language[userLang].content_line_one;
    document.getElementById("app_lang_content_two").innerHTML = language[userLang].content_line_two;
    document.getElementById("app_lang_footer").innerHTML = language[userLang].footer;
  }
  
  function updateLangNav(){
    switch(userLang){
      case "de":
        document.getElementById("app_btn_german").classList.add("active");
        document.getElementById("app_btn_english").classList.remove("active");
        document.getElementById("app_btn_france").classList.remove("active");
        break;
      case "en":
        document.getElementById("app_btn_german").classList.remove("active");
        document.getElementById("app_btn_english").classList.add("active");
        document.getElementById("app_btn_france").classList.remove("active");
        break;
      case "fr":
        document.getElementById("app_btn_german").classList.remove("active");
        document.getElementById("app_btn_english").classList.remove("active");
        document.getElementById("app_btn_france").classList.add("active");
        break;
    }
  }
  
  document.getElementById("app_btn_german").addEventListener("click", function() {
    userLang = "de";
    loadText();
    updateLangNav();
  });
  
  document.getElementById("app_btn_english").addEventListener("click", function() {
    userLang = "en";
    loadText();
    updateLangNav();
  });
  
  document.getElementById("app_btn_france").addEventListener("click", function() {
    userLang = "fr";
    loadText();
    updateLangNav();
  });