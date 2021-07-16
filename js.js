var arab = document.getElementById("arabi");
var English = document.getElementById("english");
var title = document.getElementById("title");
var hello = document.getElementById("hello");
var contact = document.getElementById("contact");
var contact_btn = document.getElementById("contact-btn");




English.addEventListener("click", () => {
    localStorage.setItem("language", "english");
    all("english");
});

arab.addEventListener("click", () => {
    localStorage.setItem("language", "arabic");
    all("arabic");
});

onload = () => {
    all(localStorage.getItem("language"));
};

function all(all) {
    if (all === "english") {
        title.innerHTML = "Multi Languages Website";
        hello.innerHTML = "! Welcome to The Website ";
        contact.innerHTML = "Contact us";
        contact_btn.innerHTML = "Click Here";

    }

    if (all === "arabic") {
        title.innerHTML = "موقع متعدد اللغات";
        hello.innerHTML = "مرحبا بكم في الموقع !";
        contact.innerHTML = "تواصل معنا ";
        contact_btn.innerHTML = "اضغط هنا ";

    }
}

all();