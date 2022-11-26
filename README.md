Получаем и выводим весь список контактов в виде таблицы (console.table)
node index.js --action list
https://monosnap.com/file/CFVFgCBXPHDHt9nGJV0CSRfAfabIB6

Получаем контакт по id
node index.js --action get --id 5
https://monosnap.com/file/L9sgv3E9kRLhc0HrHgm28SbMbXYZfb

Добавялем контакт
node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
https://monosnap.com/file/BUyce11tKEtjS5d7XITZ6Qu2kgi0Oy

Удаляем контакт
node index.js --action remove --id=3
https://monosnap.com/file/D2VCBK8cGYMb5XyyMPPI4dtcqrhaxm