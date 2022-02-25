const fs = require('fs');

fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', 'utf8', (err) => {
    if (err) console.log(err);
    console.log("Employees.json dosyası oluşturuldu. Başlangıç verisi girildi")
});

fs.readFile('employees.json', 'utf8', (err, data) => {
    if (err) console.log(err);
    console.log("Dosyadaki veri:", data);
})

fs.appendFile('employees.json', '\n {"name": "Employee 2 (New)Name", "salary": 5000}', 'utf8', (err) => {
    if (err) console.log(err);
    console.log("Yeni veri eklendi")
});

fs.unlink('employees.json', (err) => {
    if (err) console.log(err);
    console.log("Dosya silindi")
});