
document.querySelectorAll('code').forEach((block) => {
    const button = document.createElement('button');
    button.innerHTML = '<i class="bi bi-clipboard"></i>';
    button.className = 'btn btn-primary btn-sm cpbtn';
    button.style.float = 'left';
    button.style.margin = '5px';
    button.style.marginLeft = '8px';
    button.style.borderRadius = '55px';
    button.onclick = () => {
        navigator.clipboard.writeText(block.innerText);
        button.innerHTML = '<i class="bi bi-clipboard-check"></i>';
        setTimeout(() => {
            button.innerHTML = '<i class="bi bi-clipboard"></i>';
        }, 2000);
    };
    block.parentNode.appendChild(button);
});