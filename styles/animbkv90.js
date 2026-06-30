function copyFunction() {
    const copyText = document.getElementById("myCode").textContent;
    const textArea = document.createElement('textarea');
    textArea.textContent = copyText;
    document.body.append(textArea);
    textArea.select();
    document.execCommand("copy");
    btn.innerText = "Cкопировано!";
    textArea.remove();
}
document.getElementById('btn').addEventListener('click', copyFunction);

