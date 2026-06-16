document.querySelectorAll('.code-box-wrapper').forEach(wrapper => {
    const button = document.createElement('button');
    button.className = 'copy-btn';
    button.innerHTML = '<i class="far fa-copy"></i>';

    const tooltip = document.createElement('div');
    tooltip.className = 'copy-tooltip';
    tooltip.innerText = 'Copied!';

    button.appendChild(tooltip);
    wrapper.appendChild(button);

    button.addEventListener('click', async () => {
        const text = [...wrapper.querySelectorAll('.cmd')]
            .map(el => el.innerText)
            .join('\n');

        await navigator.clipboard.writeText(text);

        button.innerHTML = '<i class="fas fa-check"></i>';
        button.appendChild(tooltip);
        tooltip.classList.add('show');

        setTimeout(() => {
            button.innerHTML = '<i class="far fa-copy"></i>';
            button.appendChild(tooltip);
            tooltip.classList.remove('show');
        }, 2000);
    });
});