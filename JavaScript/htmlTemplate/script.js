if('content' in document.createElement('template')) {
    let container = document.querySelector('#templateContainer');
        template =      document.querySelector('#templateItem');

    let clone = template.content.cloneNode(true);
    let item = clone.querySelectorAll("p");
    item[0].textContent = "target1";
    item[1].textContent = "text1"

    container.appendChild(clone);

    let clone2 = template.content.cloneNode(true);
    item = clone2.querySelectorAll("p");
    item[0].textContent = "target2";
    item[1].textContent = "text2";

    container.appendChild(clone2);
} else {//IE等template非対応用

}