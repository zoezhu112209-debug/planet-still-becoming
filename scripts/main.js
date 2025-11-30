// 初始版本无需 JS
console.log("未完成的星球 Loaded");

function setupIndexBgm() {
    const audio = document.getElementById("bgm-index");
    if (!audio) return;

    // 统一的播放函数
    const playBgm = () => {
        audio.volume = 0.5; // 看你喜好，0~1
        audio.play().catch(() => {
            // 如果被浏览器拦截了，就算了，至少不会报错
        });
    };

    // 首次加载 DOM 完成时尝试播一次
    playBgm();

    // 从其它页面“返回”到 index（bfcache 也会触发）时，再播一次
    window.addEventListener("pageshow", (event) => {
        if (event.persisted) {
            // 从缓存恢复
            playBgm();
        } else {
            // 正常重新加载
            playBgm();
        }
    });

    // 页面重新从后台切回前台时，如果暂停了，也让它继续
    document.addEventListener("visibilitychange", () => {
        if (!document.hidden && audio.paused) {
            playBgm();
        }
    });
}

window.addEventListener("DOMContentLoaded", setupIndexBgm);
