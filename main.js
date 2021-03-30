// console.log(word);

const array = [
    {symbol: "ა", code: 4304},
    {symbol: "ბ", code: 4305},
    {symbol: "გ", code: 4306},
    {symbol: "დ", code: 4307},
    {symbol: "ე", code: 4308},
    {symbol: "ვ", code: 4309},
    {symbol: "ზ", code: 4310},
    {symbol: "თ", code: 4311},
    {symbol: "ი", code: 4312},
    {symbol: "კ", code: 4313},
    {symbol: "ლ", code: 4314},
    {symbol: "მ", code: 4315},
    {symbol: "ნ", code: 4316},
    {symbol: "ო", code: 4317},
    {symbol: "პ", code: 4318},
    {symbol: "ჟ", code: 4319},
    {symbol: "რ", code: 4320},
    {symbol: "ს", code: 4321},
    {symbol: "ტ", code: 4322},
    {symbol: "უ", code: 4323},
    {symbol: "ფ", code: 4324},
    {symbol: "ქ", code: 4325},
    {symbol: "ღ", code: 4326},
    {symbol: "ყ", code: 4327},
    {symbol: "შ", code: 4328},
    {symbol: "ჩ", code: 4329},
    {symbol: "ც", code: 4330},
    {symbol: "ძ", code: 4331},
    {symbol: "წ", code: 4332},
    {symbol: "ჭ", code: 4333},
    {symbol: "ხ", code: 4334},
    {symbol: "ჯ", code: 4335},
    {symbol: "ჰ", code: 4336},
]

var value = "";

function submit() {
    var word = document.getElementById("word").value;
    for(var i=0; i<word.length; i++) {
        const filteredSymbol = array.filter(arr => arr.symbol == word[i]);
        if(i == word.length-1) value =  value + "ChrW(" + filteredSymbol[0].code + ")";
        else value =  value + "ChrW(" + filteredSymbol[0].code + ") & ";
        
    }
    document.getElementById("answer").innerHTML = value;
    value = "";
}
