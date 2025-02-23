/* Вопрос 1

Сервер с информацией о товарах вернул ответ в виде json: 

{
    "displayedName": {
        "displayedName": {
            "value": [
                "Профиль маячковый ПВХ 10 мм L3м"
            ],
            "description": "Полное наименование товара для клиента"
            }
        },
    "stock": {
        "stocks": {
                "34": {
                "2": "35",
                "3": "42",
                "4": "58",
                "5": "57",
                "6": "112",
                "20": "51",
                "22": "78",
                "26": "34",
                "32": "22",
                "35": "358",
                "40": "28",
                "43": "68",
                "45": "58",
                "49": "31",
                "51": "29",
                "56": "42",
                "62": "26",
                "64": "0",
                "65": "57",
                "86": "15",
                "114": "41",
                "117": "46",
                "143": "46",
                "162": "4",
                "171": "0",
                "176": "12"
            }
        }
    }
}

stocks - остатки товара в регионе,

34 - номер региона,

2, 3, 4, ... 176 - номера магазинов региона,

"2": "35" означает, что в магазине 2 товар в наличии в количестве 356 штук

Необходимо написать на JavaScript три метода:

получить название товара

получить массив номеров магазинов, в которых есть товары в наличии

найти максимальное количество товара в регионе, вернуть это количество и номер магазина

Операции чтения и записи из файла можно опустить - объект можно сразу положить в переменную. */



const input = {
    "displayedName": {
        "displayedName": {
            "value": [
                "Профиль маячковый ПВХ 10 мм L3м"
            ],
            "description": "Полное наименование товара для клиента"
            }
        },
    "stock": {
        "stocks": {
                "34": {
                "2": "35",
                "3": "42",
                "4": "58",
                "5": "57",
                "6": "112",
                "20": "51",
                "22": "78",
                "26": "34",
                "32": "22",
                "35": "358",
                "40": "28",
                "43": "68",
                "45": "58",
                "49": "31",
                "51": "29",
                "56": "42",
                "62": "26",
                "64": "0",
                "65": "57",
                "86": "15",
                "114": "41",
                "117": "46",
                "143": "46",
                "162": "4",
                "171": "0",
                "176": "12"
            }
        }
    }
}


class ProductInfo {
    constructor(input)
    {
        this.name = input.displayedName.displayedName.value[0];
        this.description = input.displayedName.displayedName.description;
        this.region = Object.keys(input.stock.stocks)[0];
        this.stocks = input.stock.stocks[this.region];
    }
    productName()
    {
        return this.name
    }
    inStock()
    {
        let shopsArr=Object.keys(this.stocks);
        let inStockShops = []
        shopsArr.forEach(shop => {
            if (this.stocks[shop]!="0")
            {
                inStockShops.push(shop)
            }
        });
        return inStockShops;
    }
    maxAmount()
    {
        let shopsArr=Object.keys(this.stocks);
        const maxAmount = {
            shopId: '',
            amount: 0
        }
        shopsArr.forEach(shop => {
            const current = +this.stocks[shop]
            if (current>maxAmount.amount)
            {
                maxAmount.amount=current;
                maxAmount.shopId=shop;
            }
        });
        return maxAmount;
    }


}


let product = new ProductInfo(input);

console.log(product.productName());
console.log(product.inStock());
console.log(product.maxAmount());
