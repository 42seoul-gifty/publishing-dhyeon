// 링크
const goIndex = () => {
  window.location.href = "/index.html";
};
const goMain = () => {
  window.location.href = "/main.html";
};
const goPresent1 = () => {
  window.location.href = "/present-1.html";
};
const goPresent2 = () => {
  window.location.href = "/present-2.html";
};
const goPresent3 = () => {
  window.location.href = "/present-3.html";
};
const goPresent4 = () => {
  window.location.href = "/present-4.html";
};
const goPresent4_1 = () => {
  window.location.href = "/present-4-1.html";
};
const goPresent4_2 = () => {
  window.location.href = "/present-4-2.html";
};
const goPresent5 = () => {
  window.location.href = "/present-5.html";
};
const goPresent5_1 = () => {
  window.location.href = "/present-5-1.html";
};
const goPresent6 = () => {
  window.location.href = "/present-6.html";
};

// 메뉴 모달창 예시
const modal = document.querySelector(".menu-modal");
const modalBody = document.querySelector(".menu-modal__body");

function onClickMenu() {
  modal.classList.toggle("show");
  modalBody.classList.toggle("show");
}

function onExitMenu() {
  modal.classList.toggle("show");
  modalBody.classList.toggle("show");
}

window.addEventListener("click", (e) => {
  e.target === modal ? onExitMenu() : false;
});

// 보내는분 연락처 정보 잘못 입력 했을때

const wrongnumModal = document.querySelector(".error-modal");
const wrongnumModalBody = document.querySelector(".error-modal__body");

function onWrongnumModal() {
  wrongnumModal.classList.toggle("show");
  wrongnumModalBody.classList.toggle("show");
}

window.addEventListener("click", (e) => {
  e.target === wrongnumModal ? onWrongnumModal() : false;
});

const wrongnumRewriteBtn = document.querySelector(".error-modal__btn");

wrongnumRewriteBtn.addEventListener("click", () => {
  onWrongnumModal();
});

const temp = document.querySelector(".test_button");

temp.addEventListener("click", () => {
  onWrongnumModal();
});
