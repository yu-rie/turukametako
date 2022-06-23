'use strict';
const turuLegNum = 2;
const kameLegNum = 4;
const takoLegNum = 8;
let animalsCheckbox = document.getElementsByName('animals_checkbox');
const makeTuruKameTakoZanButton = document.getElementById('make_turu_kame_tako_zan');

makeTuruKameTakoZanButton.onclick = function () {
    //チェックボックスにチェックの入った動物を配列に入れる
    //TODO 三つチェックがついた時に処理を終わらせてアラートを出す
    let checkedAnimalsArray = new Array();
    for (let i = 0; i < animalsCheckbox.length; i++) {
        if (animalsCheckbox.item(i).checked) {
            checkedAnimalsArray.push(animalsCheckbox.item(i).value);
        }
    }
    //Mapに動物とランダムに出した引数を入れる
    let animalsMap = returnAnimalsMap(checkedAnimalsArray);
    //Mapの値から足の合計足本数を出す
    let sumOfLegs = returnSumOfLegs(animalsMap);
    console.log(animalsMap);
    console.log(sumOfLegs);
    //問題文を作る

}

//裏の作業として、動物の数を1~100の間でランダムにしたい。
/**
 * 1~100の間のランダムな数を返す
 * @param {}
 * @return {int}
 */
function returnRandomNumber1_100() {
    return Math.floor(Math.random() * 100);
}

//Mapのkeyを動物名、valueをランダムな匹数にして返す
/**
 * @param {array}
 * @return {Map}
 */
function returnAnimalsMap(arr){
    let map = new Map();
    for(let i = 0; i < arr.length;i++){
        map.set(arr[i],returnRandomNumber1_100());
    }

    return map;
}

//Mapの値を参照して足の合計本数を返す
/**
 * @param {Map}
 * @return {int}
 */
function returnSumOfLegs(animalmap){
    let legs = 0;
   if(animalmap.get('ツル')){
    legs = legs + animalmap.get('ツル')*2;
   }
   if(animalmap.get('カメ')){
    legs = legs + animalmap.get('カメ')*4;
   }
   if(animalmap.get('タコ')){
    legs = legs + animalmap.get('タコ')*8;
   }

   return legs;
}


