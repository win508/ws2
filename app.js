function displayResult(){

    let codeHTML = document.getElementById("HTML").value;
    let codeCSS = document.getElementById("CSS").value;
    let codeJS = document.getElementById("JS").value;


    let resultEl = document.getElementById("result");


    resultEl.contentDocument.body.innerHTML = `
        <style>${codeCSS}</style>
        ${codeHTML}
    `;

 
    resultEl.contentWindow.eval(codeJS);
}
