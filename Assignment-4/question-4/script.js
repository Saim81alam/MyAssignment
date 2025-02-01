const textContainer = document.getElementById('text-container');
const colorBox = document.getElementById('colorbox');
const colorChangeButton = document.getElementById('colorchange');
const fontSizeInput = document.getElementById('fontsize');
const italicButton = document.getElementById('italic');
const underlineButton = document.getElementById('underline');
const boldButton = document.getElementById('bold');
const fontList = document.getElementById('list');
const getStyleButton = document.getElementById('getstyle');
const cssPropsParagraph = document.getElementById('css-props');

let isItalic = false;
let isUnderline = false;
let isBold = false;

// color
colorChangeButton.addEventListener('click',() => {
    textContainer.style.color = colorBox.value;
})

// font size 
fontSizeInput.addEventListener('input', (e) => {
        const fontSize = e.target.value;
        textContainer.style.fontSize = fontSize + 'px';
});

// italic
italicButton.addEventListener('click',()=>{
    isItalic = !isItalic;
    textContainer.style.fontStyle = isItalic ? 'italic' : 'normal';
})
    
// underline 
underlineButton.addEventListener('click',()=>{
    isUnderline = !isUnderline
    textContainer.style.textDecoration = isUnderline ? 'underline' : 'none';
})

// bold

boldButton.addEventListener('click',()=>{
    isBold = !isBold
    textContainer.style.fontWeight = isBold ? 'bold' : 'normal';
})

// font fameli

fontList.addEventListener('click',(e)=>{
    const selectedFont =  e.target.value;
    textContainer.style.fontFamily = selectedFont; 
})

// Get CSS
getStyleButton.addEventListener('click', () => {
    const fontStyle = textContainer.style.fontStyle ? `font-style: ${textContainer.style.fontStyle};` : '';
    const fontWeight = textContainer.style.fontWeight ? `font-weight: ${textContainer.style.fontWeight};` : '';
    const textDecoration = textContainer.style.textDecoration ? `text-decoration: ${textContainer.style.textDecoration};` : '';
    const fontFamily = textContainer.style.fontFamily ? `font-family: ${textContainer.style.fontFamily};` : '';
    const fontSize = textContainer.style.fontSize ? `font-size: ${textContainer.style.fontSize};` : '';
    const color = textContainer.style.color ? `color: ${textContainer.style.color};` : '';

    const cssString = `${fontStyle} ${fontWeight} ${textDecoration} ${fontFamily} ${fontSize} ${color}`;
    cssPropsParagraph.textContent = cssString.trim();
});
