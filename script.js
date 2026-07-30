/* ===================================================
   Student Record System
   script.js
=================================================== */

// ==========================
// 탭 전환
// ==========================

const tabs = document.querySelectorAll(".tab");
const pages = document.querySelectorAll(".page");

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        tabs.forEach(btn => {

            btn.classList.remove("active");

        });

        pages.forEach(page => {

            page.classList.remove("active");

        });

        tab.classList.add("active");

        const target = document.getElementById(tab.dataset.tab);

        if(target){

            target.classList.add("active");

            window.scrollTo({

                top:0,

                behavior:"smooth"

            });

        }

    });

});

// ==========================
// 비밀번호 팝업
// ==========================

const PASSWORD = "sirahane";   // 원하는 비밀번호

const openSecret = document.getElementById("openSecret");

const secretContent = document.getElementById("secretContent");

const passwordModal = document.getElementById("passwordModal");

const passwordInput = document.getElementById("passwordInput");

const confirmPassword = document.getElementById("confirmPassword");

const cancelPassword = document.getElementById("cancelPassword");

const passwordError = document.getElementById("passwordError");

let unlocked = false;

// ==========================
// 열기 버튼
// ==========================

openSecret.addEventListener("click",()=>{

    if(unlocked){

        if(secretContent.style.display==="block"){

            secretContent.style.display="none";

            openSecret.textContent="기밀문서 열람";

        }else{

            secretContent.style.display="block";

            openSecret.textContent="기밀문서 닫기";

        }

        return;

    }

    passwordModal.style.display="flex";

    passwordInput.value="";

    passwordError.textContent="";

    passwordInput.focus();

});
// ==========================
// 비밀번호 확인
// ==========================

function checkPassword(){

    if(passwordInput.value === PASSWORD){

        unlocked = true;

        passwordModal.style.display = "none";

        secretContent.style.display = "block";

        openSecret.textContent = "기밀문서 닫기";

        passwordError.style.color = "#2b8a3e";
        passwordError.textContent = "ACCESS GRANTED";

    }else{

        passwordError.style.color = "#b12626";
        passwordError.textContent = "ACCESS DENIED";

        passwordInput.select();

    }

}

confirmPassword.addEventListener("click",checkPassword);

// ==========================
// Enter 키
// ==========================

passwordInput.addEventListener("keydown",(e)=>{

    if(e.key==="Enter"){

        checkPassword();

    }

});

// ==========================
// 취소 버튼
// ==========================

cancelPassword.addEventListener("click",()=>{

    passwordModal.style.display="none";

    passwordInput.value="";

    passwordError.textContent="";

});

// ==========================
// ESC 키
// ==========================

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        passwordModal.style.display="none";

        passwordInput.value="";

        passwordError.textContent="";

    }

});

// ==========================
// 팝업 바깥 클릭
// ==========================

passwordModal.addEventListener("click",(e)=>{

    if(e.target===passwordModal){

        passwordModal.style.display="none";

        passwordInput.value="";

        passwordError.textContent="";

    }

});

// ==========================
// 등장 애니메이션
// ==========================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.animate([

                {
                    opacity:0,
                    transform:"translateY(20px)"
                },

                {
                    opacity:1,
                    transform:"translateY(0)"
                }

            ],{

                duration:500,
                easing:"ease"

            });

        }

    });

});

document.querySelectorAll(".paper").forEach(paper=>{

    observer.observe(paper);

});

// ==========================
// 사진 확대
// ==========================

const profileImage = document.querySelector(".photoBox img");

if(profileImage){

    profileImage.addEventListener("click",()=>{

        if(profileImage.style.transform==="scale(1.8)"){

            profileImage.style.transform="scale(1)";
            profileImage.style.cursor="zoom-in";

        }else{

            profileImage.style.transform="scale(1.8)";
            profileImage.style.cursor="zoom-out";

        }

    });

}

// ==========================
// 초기 설정
// ==========================

secretContent.style.display = "none";

if(profileImage){

    profileImage.style.cursor = "zoom-in";
    profileImage.style.transition = ".25s";

}