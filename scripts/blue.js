// 三段蓝色文本
const paragraphs = {
    p1: `  如果把人生比作一本书，那么我的第一章永远是蓝色的。
那时的我很简单。

  没有城市、没有边界、没有地图，也没有谁来争论我属于谁。
  我睁开“眼睛”的那一刻，看见的是一片不停起伏的海。它占据了我的大部分身体，像一条温柔又巨大的毯子包着我。

  海水的味道咸而清澈，它每天都在呼吸。潮水退下去，再回来，退下去，再回来。那时候我不知道时间是什么，只是觉得世界在有规律地动。我第一次意识到“生命”这个词，可能就是听到潮水轻撞岩石的声音——那样的节奏，像心跳。`,

    p2: `风很早就来了。

它穿过我身体的每一个角落，把水面吹出细小的褶皱。那些褶皱微微闪光，我想，那应该是地球最初的笑纹。风的触感像温暖的手指，从北到南、从东到西，轻轻画过我。

蓝色给我带来的感觉一直是安全的。
海里有光，有鱼，有漂动的海藻，有柔软的沙丘。
有时候我会把自己想成一个安静的孩子，趴在地上听大海说话。
它说得不急不缓，但永远不停。`,

    p3: `我喜欢那样的自己。

没有争吵，没有伤口，没有方向，也没有重量。
只是一个被水轻轻托住的球体。
蓝色，是我最柔软、最像自己的部分。

直到后来，人类来了。

他们造船、捕鱼、设港口、铺出道路，把我的蓝色分成无数片。我原本以为他们只是过客，但他们在我身上停下来了。他们开始给我做标记，把无尽的海划分成一个一个区域。

我并不是讨厌这些变化，只是有时候，我怀念那个只有海的时代。`
};

// 打开浮窗
function openPopup(key) {
    const overlay = document.getElementById("popupOverlay");
    const popup = document.getElementById("popupBox");
    const content = document.getElementById("popupContent");

    content.innerText = paragraphs[key];

    overlay.classList.add("show");
    popup.classList.add("show");
}

// 关闭浮窗
function closePopup() {
    const overlay = document.getElementById("popupOverlay");
    const popup = document.getElementById("popupBox");

    overlay.classList.remove("show");
    popup.classList.remove("show");
}
