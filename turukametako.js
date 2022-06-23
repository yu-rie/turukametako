'use strict';

const turuLegNum = 2;
const kameLegNum = 4;
const takoLegNum = 8;
let animalsCheckbox = document.getElementsByName('animals_checkbox');
const makeTuruKameTakoZanButton = document.getElementById('make_turu_kame_tako_zan');

makeTuruKameTakoZanButton.onclick = function(){
    //チェックボックスにチェックの入った動物を配列に入れる
    let checkedAnimalsArray = new Array();
    for(let i =0;i < animalsCheckbox.length;i++){
        if(animalsCheckbox.item(i).checked){
            checkedAnimalsArray.push(animalsCheckbox.item(i).value);
        }
    }
    //

    
}

//裏の作業として、動物の数を1~100の間でランダムにしたい。
/**
 * 1~100の間のランダムな数を返す
 * @param {}
 * @return {int}
 */

function returnRandomNumber1_100(){
    return Math.floor(Math.random() * 100);
}

