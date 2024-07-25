let count = 0;
function updateHeader() {
    const p = document.getElementById("header");
    count = count + 1;
    p.innerText = p.innerText  + " " + count;            
}  

let validate = () => {
    if(document.getElementById('txtName').value == '') {
        return false;
    }
    return true;
}