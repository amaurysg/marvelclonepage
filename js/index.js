const ipad = window.matchMedia("screen and (max-width: 767px)");
const menu = document.getElementById("menuLeft");
const burgerButton = document.getElementById("burger-menu");
/* const headerMobile = document.getElementById("header-mobile");
 */
ipad.addListener(validation);
//VALIDACION DE MEDIAQUERY
function validation(evento) {
  if (evento.matches) {
    burgerButton.addEventListener("click", hideShow);
  } else burgerButton.removeEventListener("click", hideShow);
  console.log(evento.matches);
}
validation(ipad);

function hideShow() {
  if (menu.classList.contains("is-active")) {
    menu.classList.remove("is-active");
  } else {
    menu.classList.add("is-active");
  }
}


//MENUS LEFT NEW //
//SELECTORES MENU LEFT//
const Menu = document.querySelector(".Menu");
const menuButton = document.querySelector(".icon-menu");
const menuCloseButton = document.querySelector(".Menu-close");
const subMenuLinks = document.querySelectorAll(".Submenu-open");
const subMenuBackLinks = document.querySelectorAll(".Submenu-back");

//SELECTORES SUBMENUS HEADER//
const menuDesktopLinks = document.querySelectorAll(".Menu-link");

menuDesktopLinks.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    setTimeout(() => {
      //link.preventDefault()
      link.classList.toggle("isActive");
      link.children[1].classList.toggle("isActive");
    }, 250);
  });
  link.addEventListener("mouseleave", () => {
    //link.preventDefault()
    link.classList.toggle("isActive");
    link.children[1].classList.toggle("isActive");
  });
});


//ABRIR MENU//
menuButton.addEventListener("click", (event) => {
  event.preventDefault();
  Menu.classList.toggle("isActive");
});
//CERRAR MENU//
menuCloseButton.addEventListener("click", (event) => {
  event.preventDefault();
  Menu.classList.toggle("isActive");
});

//ABRIR SUB MENUS DERECHA A IZQUIERDA//
subMenuLinks.forEach((submenu) => {
  submenu.addEventListener("click", (event) => {
    event.preventDefault();
    submenu.nextElementSibling.classList.toggle("isActive");
  });
});
//CERRAR SUB MENUS IZQUIERDA A DERECHA//
subMenuBackLinks.forEach((backLink) => {
  backLink.addEventListener("click", (event) => {
    event.preventDefault();
    backLink.parentElement.classList.toggle("isActive");
  });
});


//FUNCION DE TESTE
function teste() {
  alert("Función teste");
}

//<<<<---- SUBMENUS ---->>>> //

var ListSubMenu = document.querySelectorAll(".nav2-list-item");

ListSubMenu.forEach((event) => {
  event.addEventListener("mouseenter", () => {
    event.classList.toggle("is-active");
    event.children[1].classList.toggle("is-active");
  });
  event.addEventListener("mouseleave", () => {
    event.classList.toggle("is-active");
    event.children[1].classList.toggle("is-active");
  });
});


const $botonSignIn = document.getElementById("open-modal-sign");
const $botonCloseSignIn = document.getElementById("boton-sign-close")
const $classModalSign = document.getElementById("modal-sign");
const $botonOpenCreateAccount = document.getElementById("open-modal-create")
const $classCreateAccount = document.getElementById("modal-create")
const $botonCloseCreate = document.getElementById("modalCreate-close")


$botonSignIn.addEventListener("click", () => {
  $classModalSign.classList.toggle("is-active")
})

$botonCloseSignIn.addEventListener("click", closeSignIn)

function closeSignIn() {
  $botonCloseSignIn.addEventListener("click", () => {
    $classModalSign.classList.remove("is-active")
  })
}

$botonOpenCreateAccount.addEventListener("click", () => {
  $classCreateAccount.classList.add("is-active")
  $classModalSign.classList.remove("is-active")
})

$botonCloseCreate.addEventListener("click", () => {
  alert("Hola")
})








/* MODAL CREATE USER  */



//ESCONDER MENU SCROLL//
/* var lastScrollTop = 0;
var hea = document.getElementById("headerd");
window.addEventListener("scroll", () => {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    hea.style.display = "none";
  } else {
    hea.style.display = "block";
  }
  lastScrollTop = scrollTop;
}); */

/* let ubicacionActual = window.pageYOffset; //0

function menuHiddenShow() {
  let desplazamiento = window.pageYOffset;
  if (desplazamiento >= ubicacionActual) {
    document.getElementById("headers").style.top = "500px";
    console.log("se e");
  } else {
    document.getElementById("headerd").style.top = "-200px";
    console.log("se escondió");
  }
  ubicacionActual = desplazamiento;
}
 */
