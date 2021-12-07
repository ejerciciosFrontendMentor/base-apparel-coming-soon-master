const forMail = document.getElementById("forMail");
const validator = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
forMail.addEventListener("submit",(e)=>{
  e.preventDefault();
})
forMail.addEventListener("click", (e) => {
  if (e.target.className === "forMail__btn") {
    if (e.target.offsetParent.firstElementChild.value === "") {
      removeData(
        e.target.nextElementSiblsing,
        e.target.offsetParent.nextElementSibling
      );
    } else {
      functionValidar(
        e.target.offsetParent.firstElementChild.value,
        e.target.offsetParent.firstElementChild.nextElementSibling,
        e.target.offsetParent.nextElementSibling
      );
    }
  }
  e.stopPropagation();
});
forMail.addEventListener("keyup", (e) => {
  if (e.target.className === "forMail__input") {
    if (e.target.value === "") {
      removeData(
        e.target.nextElementSibling,
        e.target.offsetParent.nextElementSibling
      );
    }
  }
  e.stopPropagation();
});
const functionValidar = (email, icon, msg) => {
  if (!validator.test(email)) {
    icon.classList.add("forMail__contIcom--show");
    msg.classList.add("forMail__contMsg--show");
  }
};
const removeData = (icon, msg) => {
  icon.classList.remove("forMail__contIcom--show");
  msg.classList.remove("forMail__contMsg--show");
};
