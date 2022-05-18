document.addEventListener("DOMContentLoaded", () => {
  const $username = document.querySelector(".username");
  const $password = document.querySelector(".password");
  const $repassword = document.querySelector(".re-password");
  const $loginBtn = document.querySelector(".login-btn");
  const $reg_crabz = /^(?=.*[a-zA-Z])(?=.*[0-9]).{5,20}$/;

  document.addEventListener("keyup", () => {
    $loginBtn.disabled =
      $username.value.length !== 0 &&
      $password.value.length !== 0 &&
      $repassword.value.length !== 0
        ? false
        : true;
  });

  $loginBtn.addEventListener("click", (event) => {
    if (
      $username.value.indexOf("@") === -1 ||
      $password.value.length < 5 ||
      !$reg_crabz.exec($password.value)
    ) {
      alert("비밀번호를 영문+숫자 6~20자 이내확인해주세요.");
    } else {
      alert(`${$username.value.split("@")[0]}님 환영합니다.`);
    }
  });
});

// !p1.exec(frm.uid.value)
//(?=.*[a-zA-Z])
