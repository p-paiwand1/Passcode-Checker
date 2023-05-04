// Passcode Checker

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Input
  let code1 = +document.getElementById("code1-in").Value;
  let code2 = +document.getElementById("code2-in").value;
  let code3 = +document.getElementById("code3-in").value;

  // Check Passcode
  if ((code1 === 10 && code2 === 20) || code3 === 30) {
    document.getElementById("status").style.backgroundColor = "green";
  } else {
    document.getElementById("status").style.backgroundColor = "red";
  }
  if (code1 === 10 && (code2 === 20 || code3 === 30)) {
    document.getElementById("status").style.backgroundColor = "green";
  } else {
    document.getElementById("status").style.backgroundColor = "red";
  }
  if ((code1, code2 && code3 === 20)) {
    document.getElementById("status").style.backgroundColor = "green";
  } else {
    document.getElementById("status").style.backgroundColor = "red";
  }
  if (code1 < 0 || code2 < 0 || code3 < 0) {
    document.getElementById("status").style.backgroundColor = "green";
  } else {
    document.getElementById("status").style.backgroundColor = "red";
  }
  if (code1 === 7 && code2 === 7 && code3 === 7) {
    document.getElementById("status").style.backgroundColor = "green";
  } else {
    document.getElementById("status").style.bacgroundColor = "red";
  }
  if (code1 !== 0 && code2 !== 0 && code3 !== 0) {
    document.getElementById("status").style.backgroundColor = "green";
  } else {
    document.getElementById("status").style.bacgroundColor = "red";
  }
  if (code1 === code2 && code1 === code3) {
    document.getElementById("status").style.backgroundColor = "green";
  } else {
    document.getElementById("status").style.bacgroundColor = "red";
  }
  if (code3 > code1 || code3 > code2) {
    document.getElementById("status").style.backgroundColor = "green";
  } else {
    document.getElementById("status").style.bacgroundColor = "red";
  }
  if (code3 > code1 && code3 > code2) {
    document.getElementById("status").style.backgroundColor = "green";
  } else {
    document.getElementById("status").style.bacgroundColor = "red";
  }
  if (code2 > code1 && code2 < code3) {
    document.getElementById("status").style.backgroundColor = "green";
  } else {
    document.getElementById("status").style.bacgroundColor = "red";
  }
}
