const fs = require('fs');

const deleteFile = (filePath) => {
    fs.unlink(filePath, (err) => {
        if (err) {
            // فقط اطبع الخطأ ولا توقف السيرفر
            console.log('Failed to delete file:', err); 
        }
    });
}

exports.deleteFile = deleteFile;