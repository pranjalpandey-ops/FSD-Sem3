const fs = require('fs');

fs.writeFile('sample.txt', 'Welcome to Full Stack Development', (err) => {
    if (err) {
        console.log('Error creating file:', err);
        return;
    }

    console.log('File created successfully');
})

fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
        console.log('Error reading file:', err);
        return;
    }

    console.log('File content:', data);
})
fs.appendFile('sample.txt',' Namaste',(err,data)=>{
    if(err){
        console.log('Error in updateing file',err);
    }
    else{
        console.log('\n3. File updated Successfully');
    }
})
fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
        console.log('Error reading file:', err);
        return;
    }

    console.log('File content: updated');
})
fs.unlink('sample.txt', (err) => {
    if (err) { 
        console.log('Error deleting file:', err); 
        return;
    } 
    console.log('File deleted successfully'); 
});