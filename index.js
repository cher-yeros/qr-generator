const QRCode = require('qrcode')
const xlsx = require('xlsx');

var fs = require('fs');

var wb = xlsx.readFile("QR -mwu.xlsx");
var ws = wb.Sheets["Admin"];
var data = xlsx.utils.sheet_to_json(ws);

var i = 0;

var newD = data.map(function(record) {
    let college = record.college;
    var fullname = record.fullname;

    if(college == undefined )
    college = "no-college";

    if(fullname == undefined )
    fullname = "no-fullname-"+i
    i++;

    var d = `./Admin/${college}`;


    if (!fs.existsSync(d)){
        fs.mkdirSync(d);
    }
    

    QRCode.toFile(`D:\\Node\\QrGenerator\\Admin\\${college}\\${fullname}.png`, `${fullname}`, {
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