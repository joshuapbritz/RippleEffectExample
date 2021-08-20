function generateRipple(rippleX, rippleY, rippleDimensions) {
    const div = document.createElement('div');
    div.className = 'ripple-pad';

    div.style.width = `${rippleDimensions}px`;
    div.style.height = `${rippleDimensions}px`;

    div.style.left = `${rippleX}px`;
    div.style.top = `${rippleY}px`;

    div.style.borderRadius = `${rippleDimensions}px`;

    return div;
}

export function RippleEffect(event) {
    const host = event.currentTarget;
    const rect = host.getBoundingClientRect();
    const cursorX = event.clientX;
    const cursorY = event.clientY;

    const fromTop = cursorY - rect.top;
    const fromBottom = rect.height - fromTop;
    const fromLeft = cursorX - rect.left;
    const fromRight = rect.width - fromLeft;

    const requiredDimension = Math.ceil(Math.max(fromRight, fromLeft, fromTop, fromBottom));
    const ripple = generateRipple(fromLeft - requiredDimension, fromTop - requiredDimension, requiredDimension * 2);
    host.appendChild(ripple);

    ripple.addEventListener('animationend', ({ animationName }) => {
        if (animationName === 'RippleEffect') ripple.remove();
    });
}