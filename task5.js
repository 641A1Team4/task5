//Task5 Massivin elementləri arasından ilk rast gəlinən cüt ədədi tapmaq üçün proqram tərtib etməlisiniz
function div2(array) {   
    for (let i=0; i<array.length; i++) {        
        if (array %2 ===0) {
            return a[i];
        }      
    }
    return -1; // Əgər massivdə cüt ədəd yoxdursa -1 qaytarmaq lazımdır.
}
const sample_array = [1,3,5,7,71,11,4,9,100];
console.log(div2(sample_array));


