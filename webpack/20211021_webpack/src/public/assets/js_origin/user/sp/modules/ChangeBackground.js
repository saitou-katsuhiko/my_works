//export default function changeBackground(c, t){ //default形式、この場合1ファイルに1処理とするのが好ましい
export function changeBackground(c, t){
    setTimeout(() => {
        document.querySelector('body').style.backgroundColor = c;
    }, t);
}

export function changeTextColor(c,t) {
    setTimeout(() => {
        document.querySelector('body').style.color = c
    }, t);
}

//default exportと名前付きexportは通常同一ファイルでは作らない。
//defaultはそれ単体のファイルにするべき