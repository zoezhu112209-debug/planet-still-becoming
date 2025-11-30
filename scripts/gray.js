// 灰色章节的三段文本
const grayParagraphs = {
    c1: `灰色不是某个时刻的灾难，而是缓慢积累的后果。

我第一次意识到“灰色”是在一座新城市出现的时候。
这是人类特别的本领——他们喜欢把我表面铺得平平整整，把石头磨光，把金属叠高。他们的建筑像一个个在我身上生长出来的方形硬壳。

城市开始扩散后，我的空气变得沉了一些。
原本轻轻吹过森林的风，现在要穿过高楼的空隙，有时候甚至被堵住。
它不像以前那么自由了。`,

    c2: `灰色，是疲劳的颜色。

是需要暂停的时候，却不得不停下来的状况。
是想深呼吸，却只能吸进一半空气的窒息。

我看到某些地方的河流不再透明，颜色开始变浑；
我看到某些山被削到只剩半边，就像被扯下来的布料；
我看到曾经铺满绿色的土地，现在盖上了密密麻麻的建筑物。

我并不是在责怪谁。

我明白人类想活下去，他们需要地方住、需要工厂、需要交通、需要速度。

可是他们走得太快，我跟不上他们的脚步。`,

    c3: `灰色让我学会了承受。

有时候我看见烟从大楼顶端缓缓升起，像倦意从我身体里冒出来。
有时候我听见城市夜里永不停歇的声音，那声音沉沉地压在我肩上。

我尽量不让自己抱怨，也不想把委屈说得太大声。
只是有些夜里，我希望人类能看见——
我并不是无限承受的石头。
我也会累。`
};

// 打开灰色浮窗
function openGrayPopup(key) {
    const overlay = document.getElementById("grayPopupOverlay");
    const popup = document.getElementById("grayPopupBox");
    const content = document.getElementById("grayPopupContent");

    content.innerText = grayParagraphs[key];

    overlay.classList.add("show");
    popup.classList.add("show");
}

// 关闭灰色浮窗
function closeGrayPopup() {
    const overlay = document.getElementById("grayPopupOverlay");
    const popup = document.getElementById("grayPopupBox");

    overlay.classList.remove("show");
    popup.classList.remove("show");
}
