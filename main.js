let token = "gp88cE1tYvKbCo6GEZKWyG2iavqyqBqf4VE4pt7frSVOEWmd84yqc5gPFUfPBwZQ";
const button = document.querySelector('.fetch')
const frame = document.querySelector('.frame')
const duck = document.querySelector('.imgCanard')
async function qrGen(){
    let url = "https://api.qr-code-generator.com/v1/create?access-token="+"gp88cE1tYvKbCo6GEZKWyG2iavqyqBqf4VE4pt7frSVOEWmd84yqc5gPFUfPBwZQ";
    let body = {
        "frame_name": "no-frame",
        "qr_code_text": "https://www.qr-code-generator.com/",
        "image_format": "SVG",
        "qr_code_logo": "scan-me-square"
    }
    let bodySerialise = JSON.stringify(body)
    let fetchParam = {
        method : "POST",
        headers: {
            "Content-Type": "application/json"
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body:bodySerialise
    }
//    console.log(fetchParam)
   fetch(url, fetchParam)
        .then(response=>response.json())
        .then(code=>{
            console.log(code)
        })
}
function addImg(img){
    frame.style.backgroundImage = "url('"+img+"')";
}

button.addEventListener('click', ()=>{
    qrGen()
})