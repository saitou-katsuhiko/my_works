import { changeBackground, changeTextColor } from '../modules/ChangeBackground.js';
//import changeBackground from '../modules/ChangeBackground.js';//export defaultでは{}は要らない


changeBackground('red', 2000);

//importしていないので実行されない　changeTextColor is not defined
//webpack本番モード(production)では読み込みもされないので、ファイルサイズが増えない
changeTextColor('white', 1000);