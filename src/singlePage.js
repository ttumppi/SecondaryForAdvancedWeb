
window.onload = () => {
    const button = document.getElementById("fontButton");



    button.onclick = () => {

        const helloWorldText = document.getElementById("helloWorld");

        if (helloWorldText.style.fontSize != "25px"){
            helloWorldText.style.fontSize = "25px";
        }
        else{
            helloWorldText.style.fontSize = "10px";
        }

    }
}




