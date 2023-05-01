const buttons = document.querySelectorAll('button');
const blocks = document.querySelectorAll('.menu_block_img');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        blocks.forEach(block => {
            block.style.display = 'none';
        });
        blocks[index].style.display = 'block';
    })
})