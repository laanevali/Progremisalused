var tellimus = { 
    "id": 2113, 
    "orderNumber": "E210126001", 
    "createdAt": "2021-01-26 16:04:24", 
    "clientName": "Kalle Tali", 
    "deliveryType": "Omniva smartpost", 
    "deliveryValue": 178, 
    "rows": [ 
      { 
        "article_id": 31, 
        "name": "Kohvimasin De'Longhi Dolce Gusto Piccolo EDG100.W", 
        "product_code": "257549", 
        "price": 49.1666666667, 
        "amount": 1, 
        "vat": 0.2 
      }, 
      { 
        "article_id": 23420, 
        "name": "Kohvikapslid Nescafe Dolce Gusto Espresso Intenso, 128 g, 16 tk", 
        "product_code": "355836", 
        "price": 5.0666666667, 
        "amount": 2, 
        "vat": 0.2 
      }, 
      { 
        "article_id": 23421, 
        "name": "Kohvikapslid Nescafe Dolce Gusto Latte Macchiato, 194 g, 16 tk", 
        "product_code": "000000000501267301", 
        "price": 5.825, 
        "amount": 1, 
        "vat": 0.2 
      } 
    ] 
  } 

let t_1 = tellimus.rows[0]
let t_2 = tellimus.rows[1]
let t_3 = tellimus.rows[2]
  
let kaibemaks = (120/100)

let toode1 = "Toote nimi: " + t_1.name + '\n'  + "Hind: " + (t_1.price * kaibemaks) + '\n' + "Kogus: " + t_1.amount + '\n' + "Summa: " + (t_1.price * kaibemaks * t_1.amount)
let toode2 = "Toote nimi: " + t_2.name + '\n' + "Hind: " + (t_2.price * kaibemaks) + '\n' + "Kogus: " + t_2.amount + '\n' + "Summa: " + (t_2.price * kaibemaks * t_2.amount)
let toode3 = "Toote nimi: " + t_3.name + '\n' + "Hind: " + (t_3.price * kaibemaks) + '\n' + "Kogus: " + t_3.amount + '\n' + "Summa: " + (t_3.price * kaibemaks * t_3.amount)
  
let summa = (t_1.price * kaibemaks * t_1.amount) + (t_2.price * kaibemaks * t_2.amount) + (t_3.price * kaibemaks * t_3.amount)

console.log(toode1,'\n',toode2,'\n',toode3)
console.log("Kogu tellimuse summa: " + summa)
  
  