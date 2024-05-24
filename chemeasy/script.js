
function checkEmailValidity(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'interactive') {
    document.getElementById('loader').style.visibility = 'visible'
    document.getElementById('body').style.overflow = 'hidden'
  } else if (state == 'complete') {
      setTimeout(function(){
         document.getElementById('interactive');
         document.getElementById('loader').style.visibility="hidden";
         document.getElementById('load-holder').style.visibility="hidden";
         document.getElementById('body').style.overflow = 'auto'
      },0);
  }
}
// window.addEventListener("load", () => {
//   document.getElementById("dec").style.zIndex = -1;
//   document.getElementById("dec").style.opacity = 1;
// });
document.addEventListener("contextmenu", (e) => e.preventDefault());
function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}
function ctrlKey(e, keyCode) {
  return e.ctrlKey && e.keyCode === keyCode.charCodeAt(0);
}
// DisableDevtool({
//   ondevtoolopen: (type) => {
//     if(DisableDevtool.isRunning){console.log("Copyright restrictions are in effect.");
//                                  window.location.href="../../test/init.html"
//                                 }
//   },
// });
document.onkeydown = (e) => {
  if ( 
    event.keyCode === 123 ||
    ctrlKey(e, "C") ||
    ctrlKey(e, "X") ||
    ctrlShiftKey(e, "I") ||
    ctrlShiftKey(e, "J") ||
    ctrlShiftKey(e, "C") ||
    (e.ctrlKey && e.keyCode === "U".charCodeAt(0))
  )
    return !1;
};
function check() {
  const name = document.getElementById("full-name").value;
  const email = document.getElementById("email-address").value;
  const message = document.getElementById("message").value;
  if (name == "Login") {
    console.log("No logged in.");
    if (confirm("Please Login to contact us.")) {
      window.location.href = "user/login.html";
    } else {
      window.location.href = "contact.html";
    }
    return;
  }
  if (email == "Login") {
    console.log("No logged in.");
    if (confirm("Please Login to contact us.")) {
      window.location.href = "user/login.html";
    } else {
      window.location.href = "contact.html";
    }
    return;
  }
  if (email == "") {
    if (
      confirm(
        "Your email is not there, means you are not logged in and trying to contact us using illegal way. Please login first and then contact us.",
      )
    ) {
      window.location.href = "user/login.html";
    }
    console.log("Illegal way of contacting.");
    return;
  }
  if (name == "") {
    alert("Please enter your name.");
    return;
  }
  if (message == "") {
    alert("Please enter your message.");
    return;
  }
  if (!checkEmailValidity(email)) {
    alert("Please enter a valid email address.");
    return;
  } else if (confirm("Are you sure you want to send this message?")) {
    document.getElementById("fs-frm").submit();
  }
}
