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

    // 第一组按钮点击事件
    firstBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            selectedShirtColor = this.getAttribute('data-option');
            firstSelection.classList.add('hidden');
            secondSelection.classList.remove('hidden');
            updateSelection();
        });
    });

    // 第二组按钮点击事件
    secondBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            selectedPantsColor = this.getAttribute('data-option');
            selectedStyle = this.getAttribute('data-option'); // 保存用户选择的风格
            selectedPantsPattern = 'wavy-stripes'; // 保存裤子的条纹样式
            secondSelection.classList.add('hidden');
            thirdSelection.classList.remove('hidden');
            updateSelection();
        });
    });

    // 第三组按钮点击事件
    thirdBtns.forEach(btn => {
        btn.addEventListener('click', function() {
             selectedStyle = this.getAttribute('data-option'); // 保存用户选择的风格
            selectedShirtType = this.getAttribute('data-option');
            updateSelection();  // 在第三组选择完成后更新搭配
        });
    });

    // 回到主页按钮点击事件
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
        selectedStyle = ''; // 清除选中的风格
        selectedPantsPattern = ''; // 清除裤子的条纹样式
    });

    // 更新选择结果
    function updateSelection() {
        outfit.innerHTML = `
            <div class="shirt ${getShirtStyle(selectedStyle)}" style="--shirt-color: ${selectedShirtColor};">
                ${getLeisureText(selectedStyle)}
            </div>
            <div class="pants ${selectedPantsPattern}" style="background-color: ${selectedPantsColor};"></div>
        `;
    }

    // 获取裤子样式
    function getPantsStyle(style) {
        switch(style) {
            case '寬鬆':
                return 'long-pants';  // 宽松裤子
            case '保暖':
                return 'wavy-stripes';  // 适用于保暖和运动裤
            case '運動':
                return 'sport'; 
                
            default:
                return '';
        }
    }

    // 获取上衣样式
    function getShirtStyle(style) {
        switch(style) {
            case '寬鬆':
                return 'long-sleeve';  // 宽松款式
            case '保暖':
                return 'wavy-stripes';  // 保暖款式
            case '運動':
                return 'sport';  // 运动款式
            case '毛衣':
                return 'sweater'; // 毛衣样式
            case '短袖':
                return 'short-sleeve'; // 短袖样式
            case '休閑':
                return 'leisure'; // 休闲样式
            default:
                return '';
        }
    }

    // 根据风格显示对应的文本
    function getLeisureText(style) {
        if (style === '休閑') {
           return `<div class="leisure-text" style="font-style: italic; color: black; margin-top: 20px;">LEISURE</div>`;
        }
        return '';
    }
});

// 监听按钮点击事件
const firstBtns = document.querySelectorAll('.first-btn');
const secondBtns = document.querySelectorAll('.second-btn');
const thirdBtns = document.querySelectorAll('.third-btn');

const firstSelection = document.getElementById('first-selection');
const secondSelection = document.getElementById('second-selection');
const thirdSelection = document.getElementById('third-selection');

// 用于存储每次选择的选项
let shirtColor = '';
let fitType = '';
let shirtType = '';

// 给第一个选择的按钮绑定事件
firstBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        shirtColor = btn.dataset.option; // 获取选中的颜色
        firstSelection.style.display = 'none'; // 隐藏第一个选择
        secondSelection.style.display = 'block'; // 显示第二个选择
    });
});

// 给第二个选择的按钮绑定事件
secondBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        fitType = btn.dataset.option; // 获取选中的类型
        secondSelection.style.display = 'none'; // 隐藏第二个选择
        thirdSelection.style.display = 'block'; // 显示第三个选择
    });
});

// 给第三个选择的按钮绑定事件
thirdBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        shirtType = btn.dataset.option; // 获取选中的款式
        thirdSelection.style.display = 'none'; // 隐藏第三个选择
        
        // 在选择完成后隐藏所有的选择部分
        document.querySelectorAll('.selection').forEach(selection => {
            selection.style.display = 'none';
        });
        
        // 显示最终的搭配
        showOutfit();
    });
});
// 显示搭配的函数
function showOutfit() {
    // 将颜色值转换为对应的颜色名称
    const shirtColorName = shirtColor === '#f44336' ? '红色' :
                           shirtColor === '#2196f3' ? '蓝色' :
                           shirtColor === '#ffeb3b' ? '黄色' : '灰色';  // 默认灰色

    const fitTypeName = fitType === '寬鬆' ? '宽松' :
                        fitType === '保暖' ? '保暖' :
                        fitType === '運動' ? '運動' : '休閑';  // 默认休闲

    const resultText = `搭配: 衣服颜色 - ${shirtColorName}, 款式 - ${shirtType}, 类型 - ${fitTypeName}`;
    document.getElementById('selection-text').textContent = resultText;

    const outfitDiv = document.getElementById('outfit');

    // 设置实际颜色
    const shirtActualColor = shirtColor === '#f44336' ? 'red' :
                             shirtColor === '#2196f3' ? 'blue' :
                             shirtColor === '#ffeb3b' ? 'yellow' : 'gray'; // 默认灰色

    outfitDiv.innerHTML = `
        <div class="shirt" style="background-color: ${shirtActualColor};">
            <p>${shirtType}</p>
        </div>
        <div class="pants" style="background-color: ${fitType === '運動' ? '#ffeb3b' : '#808080'};"></div>
    `;
}

// 点击回到主页按钮时，重置所有选择并重新开始选择
document.getElementById('back-to-home').addEventListener('click', function() {
    // 显示第一个选择界面并隐藏后续选择
    document.getElementById('first-selection').style.display = 'block';
    document.getElementById('second-selection').style.display = 'none';
    document.getElementById('third-selection').style.display = 'none';

    // 清除已选择的值
    shirtColor = '';
    fitType = '';
    shirtType = '';

    // 清空搭配显示区域
    document.getElementById('outfit').innerHTML = '';
    document.getElementById('selection-text').textContent = '';
});
