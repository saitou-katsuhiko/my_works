export function changeBackground(c, t){
    setTimeout(() => {
        document.querySelector('body').style.backgroundColor = c;
    }, t);
}