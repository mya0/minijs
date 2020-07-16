{
    let typingOption = {
        speed: 50,
    };
    window.setTypingOption = (option = {}) => {
        typingOption = {...typingOption, ...option};
    }
    HTMLElement.prototype.startTyping = function (delay = 0) {
        const text = this.textContent;
        this.textContent = "";
        for(let i = 0; i < text.length; i++) {
            setTimeout(() => {
                this.textContent = text.slice(0, i+1);
            }, i*typingOption.speed + delay);
        }
    }
};
