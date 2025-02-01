const paragraph = document.getElementById('useless-paragraph');

function toggleVisibility() {
    if (paragraph.style.display === 'none') {
        paragraph.style.display = 'block';
    } else {
        paragraph.style.display = 'none';
    }
}