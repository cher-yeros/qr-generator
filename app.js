const QRCode = require('qrcode')
const xlsx = require('xlsx');

var fs = require('fs');

var wb = xlsx.readFile("biree 123.xlsx");
var ws = wb.Sheets["Agriculture&Natural Resource"];
var data = xlsx.utils.sheet_to_json(ws);

var i = 0;

var newD = data.map(function(user) {

    //console.log(user);
    //let user = {
    //    fullname_am,
    //    fullname,
    //    IDNO,
    //    JobTitle_am,
    //    JobTitle,
    //    Adress,
    //    Mobile,
    //    photo,
    //}

    let userString = JSON.stringify(user)
    
    var d = `./test`;


    if (!fs.existsSync(d)){
        fs.mkdirSync(d);
    }
    

    QRCode.toFile(`D:/Node/QrGenerator/test/${user.fullname}.png`, `${userString}`, {
        color: {
            dark: '#000000',  // Blue dots
            light: '#FFFFFF' // Transparent background
        }
        
        }, function (err) {
        if (err) throw err
        console.log('done')
    })

});
//QRCode.toFile('D:/Node/QrGenerator/qrs/ዳኛቸው አየለ ደበሌ.png', 'ዳኛቸው አየለ ደበሌ', {
//  color: {
//    dark: '#000000',  // Blue dots
//    light: '#FFFFFF' // Transparent background
//  }
//}, function (err) {
//  if (err) throw err
//  console.log('done')
//})