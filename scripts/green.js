// 绿色章节的三段文本
const greenParagraphs = {
    g1: `绿色的出现，是我生命中最温暖的意外。

最早的绿色不是森林，也不是草原，而是几簇在岩石间颤抖的小苔藓。它们低矮、脆弱、微小得像误放在世界上的标点符号。可就是这些不起眼的点缀，让我第一次觉得自己“活着”。

后来，又有一些更高的植物从土壤冒出来。它们用根须抓住地面，就像婴儿伸手抓住你的小指。那种努力，是一种能被听见的成长。我能感受到它们往地下钻、往上方伸的动作，就像有人在我体内一笔一笔写下新的文字。`,

    g2: `树木的出现，让我第一次有了影子。

那种影子不是黑暗，而是温柔的保护。
光透过叶隙洒下来，在我身上形成细碎的亮点。那种亮点就像星星落进森林里，落在我皮肤上。

我记得最早的森林。
它们几乎把陆地盖得严严实实，风吹过的时候，叶子发出的声音像是一整座大地的合唱。鸟类开始在树上安家，昆虫在植物中穿行。那是一段我最喜欢的时光，因为我感到自己在不断被填满。`,

    g3: `绿色代表着恢复。
    
每次被刮掉、烧掉、推平后，它都会在某个角落偷偷重新长出来。
它不抱怨，也不急躁，只是一遍又一遍地重复着成长这个动作。

我常想，如果人类能像树一样慢一点，世界是不是就不会那么累。

随着他们的出现，我的绿色开始减少。
森林被砍、土地被开发、山被挖空，河道被改道。
但只要还有一片草地还在努力，我就知道我还可以坚持。

绿色告诉我：“我还没有放弃，你也不要。”`
};

// 打开绿色浮窗
function openGreenPopup(key) {
    const overlay = document.getElementById("greenPopupOverlay");
    const popup = document.getElementById("greenPopupBox");
    const content = document.getElementById("greenPopupContent");

    content.innerText = greenParagraphs[key];

    overlay.classList.add("show");
    popup.classList.add("show");
}

// 关闭绿色浮窗
function closeGreenPopup() {
    const overlay = document.getElementById("greenPopupOverlay");
    const popup = document.getElementById("greenPopupBox");

    overlay.classList.remove("show");
    popup.classList.remove("show");
}
