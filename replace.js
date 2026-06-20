const fs = require('fs');
const path = require('path');

const directory = '/Users/a1/Downloads/gmpro-frontend/src';

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if(file.endsWith('.js') || file.endsWith('.jsx')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk(directory);

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    // Replace href="#contact" with href="#live-chat" anywhere in CTA/Hero/Components
    content = content.replace(/href="#contact"/g, 'href="#live-chat"');
    
    // Replace href="#" with href="#live-chat" in Clients.jsx
    if (file.endsWith('Clients.jsx')) {
        content = content.replace(/href="#"(.*?>\s*Hubungi)/gs, 'href="#live-chat"$1');
    }

    if (original !== content) {
        fs.writeFileSync(file, content);
        console.log('Updated', file);
    }
});
