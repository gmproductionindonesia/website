const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = dir + '/' + file;
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('.jsx') || file.endsWith('.js')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('./src');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    content = content.replace(/orange-500/g, '[#c29b62]');
    content = content.replace(/orange-400/g, '[#c29b62]');
    content = content.replace(/orange-600/g, '[#a88654]');
    content = content.replace(/orange-50([^0-9])/g, '[#c29b62]/10$1'); // avoid matching 500
    
    if (content !== original) {
        fs.writeFileSync(file, content);
        console.log(`Updated ${file}`);
    }
});
