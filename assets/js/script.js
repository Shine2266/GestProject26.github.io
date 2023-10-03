document.addEventListener('DOMContentLoaded', function() {
    const colorOptions = document.querySelectorAll('.color-option');
    const bagPreview = document.getElementById('bag-preview');

    colorOptions.forEach(option => {
        option.addEventListener('click', () => {
            const selectedColor = option.style.backgroundColor;
            bagPreview.style.backgroundColor = selectedColor;
        });
    });
});