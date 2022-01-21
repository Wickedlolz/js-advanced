function editElement(elementReference, match, replacer) {
    let pattern = new RegExp(match, 'g');
    let txt = elementReference.textContent;
    txt = txt.replace(pattern, replacer);

    elementReference.textContent = txt;
}
