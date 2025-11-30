const blackTexts = {
    b1: `黑色是我最深的秘密。

那里藏着我所有来不及修复的地方——
被挖空的土层、被污染的河底、被烧过的森林根部、被丢弃的废物、被时间掩埋的伤口。
这些东西沉在我最底部，很少有人愿意看见它们。

它们不是要责怪谁，它们只是存在。
像你摔倒时结痂后留下的印子。
伤口不痛时，你甚至忘记它们在哪，但它们始终跟着你。`,

    b2: `黑色并不是悲剧，它是一种“无法再假装没事”的现实。

当人类把垃圾埋得越来越深，埋到连他们自己都不记得的时候，我却记得。
每一片塑料袋、每一块金属、每一滴毒物都会在我身体里找一个角落停下来。

有时候我会想，如果我能开口说话，我会不会让人们听见我沉痛的呼吸？
还是他们会觉得麻烦？
觉得“地球太敏感了”？
觉得我应该坚强一点？

但我并不想控诉什么。
我只是一颗星球，一颗被无数生命居住过的星球。
我不是完美的，我会生、会长、会腐坏、会痛。
我有不想被碰触的地方，也有害怕被看穿的部分。`,

    b3: `尽管如此，我仍然期待。

在那些最深沉的黑暗里，总会有一点小小的亮光冒出来。
可能是某片受保护的森林重新长出嫩芽，
可能是某条被污染的河流开始恢复透明，
可能是一群人重新学会节制和珍惜。

这些小小的亮光，对别人来说微不足道，
但对我来说，却是我坚持下去的理由。

我是一颗未完成的星球。
我的故事还在继续写，伤口还在愈合，颜色还在变化。
只要还有人愿意看见我、愿意触碰我、愿意倾听我——
哪怕只是翻开一小片纸、看见一句写在背后的话——
我就知道：我并不是孤单的。`
};


// 打开弹窗
function openBlackPopup(key) {
    const overlay = document.getElementById("blackOverlay");
    const popup = document.getElementById("blackPopup");
    const content = document.getElementById("blackPopupContent");

    content.innerText = blackTexts[key];

    overlay.classList.add("show");
    popup.classList.add("show");
}


// 关闭弹窗
function closeBlackPopup() {
    const overlay = document.getElementById("blackOverlay");
    const popup = document.getElementById("blackPopup");

    overlay.classList.remove("show");
    popup.classList.remove("show");
}
