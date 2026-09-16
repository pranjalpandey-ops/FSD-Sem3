const fs= require('fs');
fs.writeFileSync('example.txt','This is Exp 2', 'utf8');

console.log('file is written successful');
fs.readFileSync('secastudent.txt','utf8')

console.log('file is read successfully')
fs.appendFileSync('secastudent.txt','\n Thisis new line appened','utf8')

console.log('file is appened');
fs.unlinkSync('example.txt');

console.log('File has been deleted')
if (fs.existsSync('secastudent.txt')){
    console.log('file exists')
}
else{
    console.log('file not found')
}