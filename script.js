document.addEventListener('DOMContentLoaded', function() {
    const firstBtns = document.querySelectorAll('.first-btn');
    const secondBtns = document.querySelectorAll('.second-btn');
    const thirdBtns = document.querySelectorAll('.third-btn');
    const selectionText = document.getElementById('selection-text');
    const firstSelection = document.getElementById('first-selection');
    const secondSelection = document.getElementById('second-selection');
    const thirdSelection = document.getElementById('third-selection');
    const outfit = document.getElementById('outfit');
    const backToHomeBtn = document.getElementById('back-to-home');

    let selectedShirtColor = '';
    let selectedPantsColor = '';
    let selectedShirtType = '';
    let selectedPantsType = '';
    let selectedStyle = ''; // 用于存储风格（例如宽松、保暖、运动）
    let selectedPantsPattern = ''; // 用于存储裤子的条纹样式

    firstBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            selectedShirtColor = this.getAttribute('data-option');
            firstSelection.classList.add('hidden');
            secondSelection.classList.remove('hidden');
            updateSelection();
        });
    });

    secondBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            selectedPantsColor = this.getAttribute('data-option');
            selectedStyle = this.getAttribute('data-option');
            selectedPantsPattern = 'wavy-stripes';
            secondSelection.classList.add('hidden');
            thirdSelection.classList.remove('hidden');
            updateSelection();
        });
    });

    thirdBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            selectedStyle = this.getAttribute('data-option');
            selectedShirtType = this.getAttribute('data-option');
            updateSelection();
        });
    });

    backToHomeBtn.addEventListener('click', function() {
        firstSelection.classList.remove('hidden');
        secondSelection.classList.add('hidden');
        thirdSelection.classList.add('hidden');
        outfit.innerHTML = '';
        selectionText.textContent = '';
        selectedShirtColor = '';
        selectedPantsColor = '';
        selectedShirtType = '';
        selectedPantsType = '';
        selectedStyle = '';
        selectedPantsPattern = '';
    });

    function updateSelection() {
        selectionText.textContent = `您的搭配是：上衣颜色: ${selectedShirtColor}, 裤子颜色: ${selectedPantsColor}, 风格: ${selectedStyle}`;
        outfit.innerHTML = `
            <div class="shirt" style="--shirt-color: ${selectedShirtColor}">
                ${selectedShirtType === '毛衣' ? '<div class="lightning"></div>' : ''}
            </div>
            <div class="pants" style="--pants-color: ${selectedPantsColor}">
            </div>
        `;
    }
});
