//export default では読み込み先が限定されているのでモジュールファイルと読み込み時の命名を変更することが可能
//このclassは本当はTextAnimationという名前
import animation from '../modules/textAnimation.js';

document.addEventListener('DOMContentLoaded', function() {
    const ta = new animation('.animate-title');
    const ta2 = new animation('.animate-title-2');
    setTimeout(() => {
        ta.animate();
        ta2.animate();
    }, 8000);
});