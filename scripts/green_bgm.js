window.addEventListener("load", function () {
    const audio = document.getElementById("bgm-green");

    // 开始静音
    audio.volume = 0.0;
    audio.play().catch(() => {
        console.log("自动播放被阻止，等待用户点击页面任意地方");
    });

    // 用户第一次点击页面 → 音乐淡入
    const startMusic = () => {
        let vol = 0.0;
        const fade = setInterval(() => {
            if (vol < 0.5) {
            // 背景音不要太大，0.3~0.5 是最佳文学体验音量
                vol += 0.02;
                audio.volume = vol;
            } else {
                clearInterval(fade);
            }
        }, 100);

        window.removeEventListener("click", startMusic);
    };

    window.addEventListener("click", startMusic);
});
