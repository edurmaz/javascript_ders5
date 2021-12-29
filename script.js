// arrow fonksiyon: fonksiyon tanımlamasını bir miktar kısaltmaya yarar.
let arguman ="Merhaba"

function regularFunc(params) {    //  regular fonksiyon tanımlaması bu şekilde
    return params;
}
regularFunc()  //çağırılma şekli böyle içerisine değer giriyoruz.

const expressFunc = function (params) {  // express functa bu şekilde tanımlama isim kullanmamıza gerek yok
    return params;
}
expressFunc(arguman) //içerisine değer giriyoruz


// arrow fonksiyonun 
const arrowFunc = (params) => {
    return params;   // Burda func kelimesi kalkıyor func olduğunu => işaretinden anlıyoruz buna fed arrow deniyor. çağırılışı aynı.
}
arrowFunc(arguman)      // kısa tek satırlık fonksiyonlarda kullanılabiliyor. Daha pratik. Tek parametresi varsa paranteze ihtiyacı yok.


// eğer tek satır olacaksa return e de ihtiyaç yok
const arrowFunc2 = params => params;
console.log(arrowFunc2(arguman)) //çağırılışı aynı.

// example

const arrowEx = (param1,param2)=>{
    let result1= param1 + param2;
    let result2= param1 - param2;
    return ([result1, result2])
}
console.log(arrowEx(6,3) [0])

/*------------------ARRAYS(diziler)---------------------*/
// arraylar data tipdir. arraylar her datayı alabilir. string,number,undifined,bool,vs. içersine herşeyi yazabiliriz.
// array syntax ı []köşeli parantezdir. içerisi virgüllerle ayrılır. array içerisinde arrayda olabilir.
//arraylara erişim index numarasıyla olur. 0 (sıfır)dan başlar. ulaşmaya çalışacağımız zaman [0],[1] şeklinde çağırırız.

let arr = ["merhaba",5, true] //3 elemanlı bir array oluşturduk. sıfırıncı index merhaba birinci 5 ikinci true olarak gözükür.
console.log(arr)
console.log(arr[0]) // indexe ulaşmak istiyorsak arrayın isminin yanına köşeli parantezle index no yazılır.

// array oluşturma yöntemleri

let myArray = [3,"merhaba","dünya", 5];        // ikisinde de herhangi bir fark yok bu şekilde yeni bir array oluşturuluyor
let newArr = new Array();  // içerisine sadece sayı girersek boş arrayler gösterir. eğer string koyarsak array'e eklem yapar.

//içerik değiştirme
myArray[2]="jüpiter";       // bu şekilde index numarası verip içeriğini değiştirirebiliyoruz.

// stringden variable üretme

let lastName = "demir";     // split yazdığımızda tek elemanlı bir array oluşturur.

lastName.split()            // ("") şeklinde yaparsak hepsini ayırır

let letArr = ["mer","ha",5]
const constArr = ["mermer" , "hal", 66];

letArr[1] ="hay";
constArr[1]="at";       // bir arrayın içeriğini değiştirmek için let veya const olması önemli değil ama const'u tümden değiştiremeyiz.
console.log(letArr)     
console.log(constArr)       // ekleme çıkarma manipüle etme yapılır. hepsini yeniden atayamıyoruz.

let newArr1 = new Array(1).fill(3) // fill komutu verilen değerle içini dolduruyor.
console.log(newArr1);

let newArray = new Array(2);
newArray[0]=8;
newArray[1]=99;
console.log(newArray)