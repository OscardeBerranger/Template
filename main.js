// let token = "jqQcGy7HTMVuNrY-CZyjtkegw8_rQhs5tfvBBVPfNKv1HthJh_pdHHvrpn3OwDFV";
// const button = document.querySelector('.fetch')
// const duck = document.querySelector('.imgCanard')
// function qrGen(){
//     let url = "https://api.qr-code-generator.com/v1/create?access-token="+token;
//     let body = {
//         "frame_name": "no-frame",
//         "qr_code_text": "https://www.qr-code-generator.com/",
//         "image_format": "SVG",
//         "qr_code_logo": "scan-me-square"
//     }
//     let bodySerialise = JSON.stringify(body)
//     let fetchParam = {
//         method : "POST",
//         headers: {
//             'Content-Type': 'application/json'
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body:bodySerialise
//     }
//     fetch(url, fetchParam)
//         .then(response=>response.json())
//         .then(code=>{
//             console.log(code)
//         })
// }
//
// button.addEventListener('click', ()=>{
//     qrGen()
// })