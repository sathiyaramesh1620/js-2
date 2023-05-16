const fruits=["Banana","Orange","Apple","Mango"]
fruits.fill("kiwi")
console.log(fruits)//[ 'kiwi', 'kiwi', 'kiwi', 'kiwi' ]
const vegetables=["beetroot","Carrot","Onion","Tomato"]
vegetables.fill("Raddish",2,4)
console.log(vegetables)//[ 'beetroot', 'Carrot', 'Raddish', 'Raddish' ]