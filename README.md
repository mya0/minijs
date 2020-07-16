# minijs

## typing.js
簡易的なタイピング表示を行います
```html
<p id="t">Typing</p>

<script src="https://cdn.jsdelivr.net/gh/mya0/minijs@master/typing.min.js"></script>
<script>
setTypingOption({speed: 100});//文字の表示間隔を100msに設定 デフォルトは50ms
document.getElementById('t').startTyping(1500);//1500ms遅延
</script>
```
