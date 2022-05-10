let inputbox1 = document.querySelector("#input1")
let inputbox2 = document.querySelector("#input2")
let inputbox3 = document.querySelector("#input3")
let inputbox4 = document.querySelector("#input4")


function random() {
  let blank = ''
  let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz0123456789@#$'
  var inputRange = parseFloat(document.getElementById("input-range").value)
  for (i = 0; i < inputRange; i++) {
    let rnum = Math.floor(Math.random() * str.length + 1)
    blank += str.charAt(rnum)
  }
  return blank
}
function genpass() {
  inputbox1.value = random()
  inputbox2.value = random()
  inputbox3.value = random()
  inputbox4.value = random()
}

function copyfun() {
  copytext = [inputbox1, inputbox2, inputbox3, inputbox4]
  copytext[i].select()
  copytext[i].setSelectionRange(0, 99999)

  // navigator.clipboard.writeText(copytext[i].value)
  document.execCommand("copy")
  alert("copied text is: " + copytext[i].value)

}

function copyText1() {
  copyfun(i = 0)
}
function copyText2() {
  copyfun(i = 1)
}
function copyText3() {
  copyfun(i = 2)
}
function copyText4() {
  copyfun(i = 3)
}



