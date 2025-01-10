document.addEventListener('DOMContentLoaded', function() {
    // Logo 和 menu 的事件處理
    const logo = document.querySelector('.logo');
    const menu = document.querySelector('.menu');
    
    logo.querySelector('button').addEventListener('click', function() {
        logo.classList.add('hide');
        menu.classList.remove('hide');
        menu.classList.add('show');
    });
    
    menu.addEventListener('mouseleave', function() {
        logo.classList.remove('hide');
        menu.classList.remove('show');
        menu.classList.add('hide');
    });

    // GSAP 動畫初始化
    gsap.registerPlugin(ScrollTrigger);
    
    // 初始隱藏所有需要的元素
    gsap.set('#banner h1, #banner .scrollAlign, #banner .bannerImg, #banner .banner2Img', {
        opacity: 0
    });
    gsap.set('#first-title .titleGraph, #second-title .titleGraph, #third-title .titleGraph, #last-title .titleGraph', {
        opacity: 0
    });
    gsap.set('#first-title h3, #first-title h1, #second-title h3, #second-title h1, #third-title h3, #third-title h1, #last-title h3, #last-title h1', {
        opacity: 0,
        y: 50
    });
    gsap.set('.box2, .box3', {
        opacity: 0,
        pointerEvents: 'none'
    });
    gsap.set('#first-summary .first-summary-text, #first-summary img', {
        opacity: 0,
        y: 50
    });
    gsap.set('#second-summary .second-summary-text, #second-summary img', {
        opacity: 0,
        y: 50
    });
    
    gsap.set('#third-summary .third-summary-text, #third-summary img', {
        opacity: 0,
        y: 50
    });
    
    gsap.set('#last-content-1 .textSet, #last-content-1 img', {
        opacity: 0,
        y: 50
    });
    
    gsap.set('#last-content-2 .last-content-2-text, #last-content-2 .imgSet1, #last-content-2 .imgSet2, #last-content-2 .imgSet3', {
        opacity: 0,
        y: 50
    });
    
    gsap.set('#last-summary .textSet, #last-summary img', {
        opacity: 0,
        y: 50
    });
    // gsap.set('.whiteCurtain2', {
    //     y: '-200' // 初始位置在視窗上方
    // });

    // 白色簾幕動畫
    gsap.timeline({
        scrollTrigger: {
            trigger: "#banner",
            start: "top top",
            end: "+=100%",
            pin: true,
            scrub: 1
        }
    })
    .to('.whiteCurtain', {
        yPercent: -200,
        ease: 'none'
    })
    .to('.bannerImg', { opacity: 1, duration: 0.3 }, '-=0.3')
    .to('.banner2Img', { opacity: 1, duration: 0.3 }, '-=0.1')
    .to('#banner h1', { opacity: 1, y: 0, duration: 0.3 }, '-=0.1')
    .to('#banner .scrollAlign', { opacity: 1, y: 0, duration: 0.3 }, '-=0.1');

    // First-title 動畫
    gsap.timeline({
        scrollTrigger: {
            trigger: "#first-title",
            start: "top center",
            end: "center center",
            toggleActions: "play none none reverse"
        }
    })
    .to('#first-title .titleGraph', {
        opacity: 1,
        duration: 1,
        ease: "power2.out"
    })
    .to('#first-title h3', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
    }, '-=0.5')
    .to('#first-title h1', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
    }, '-=0.5');

    // Second-title 動畫
    gsap.timeline({
        scrollTrigger: {
            trigger: "#second-title",
            start: "top center",
            end: "center center",
            toggleActions: "play none none reverse"
        }
    })
    .to('#second-title .titleGraph', {
        opacity: 1,
        duration: 1,
        ease: "power2.out"
    })
    .to('#second-title h3', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
    }, '-=0.5')
    .to('#second-title h1', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
    }, '-=0.5');

    // Second-summary 動畫
gsap.timeline({
    scrollTrigger: {
        trigger: "#second-summary",
        start: "top center",
        toggleActions: "play none none reverse"
    }
})
.to('#second-summary .second-summary-text', {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
})
.to('#second-summary img', {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out"
}, '-=0.8');

    // Third-title 動畫
    gsap.timeline({
        scrollTrigger: {
            trigger: "#third-title",
            start: "top center",
            end: "center center",
            toggleActions: "play none none reverse"
        }
    })
    .to('#third-title .titleGraph', {
        opacity: 1,
        duration: 1,
        ease: "power2.out"
    })
    .to('#third-title h3', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
    }, '-=0.5')
    .to('#third-title h1', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
    }, '-=0.5');

    // Third-summary 動畫
gsap.timeline({
    scrollTrigger: {
        trigger: "#third-summary",
        start: "top center",
        toggleActions: "play none none reverse"
    }
})
.to('#third-summary .third-summary-text', {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
})
.to('#third-summary img', {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out"
}, '-=0.8');

    // Last-title 動畫
    gsap.timeline({
        scrollTrigger: {
            trigger: "#last-title",
            start: "top center",
            end: "center center",
            toggleActions: "play none none reverse"
        }
    })
    .to('#last-title .titleGraph', {
        opacity: 1,
        duration: 1,
        ease: "power2.out"
    })
    .to('#last-title h3', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
    }, '-=0.5')
    .to('#last-title h1', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
    }, '-=0.5');

    // Last-content-1 動畫
gsap.timeline({
    scrollTrigger: {
        trigger: "#last-content-1",
        start: "top center",
        toggleActions: "play none none reverse"
    }
})
.to('#last-content-1 .textSet', {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
})
.to('#last-content-1 img', {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out"
}, '-=0.8');

// Last-content-2 動畫
gsap.timeline({
    scrollTrigger: {
        trigger: "#last-content-2",
        start: "top center",
        toggleActions: "play none none reverse"
    }
})
.to('#last-content-2 .last-content-2-text', {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
})
.to('#last-content-2 .imgSet1, #last-content-2 .imgSet2, #last-content-2 .imgSet3', {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out"
}, '-=0.8');

// Last-summary 動畫
// 整合 Last-summary 的所有動畫
const lastSummaryTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: "#last-summary",
        start: "top center",
        toggleActions: "play none none reverse"
    }
});

// 添加淡入動畫
lastSummaryTimeline
    .to('#last-summary .textSet', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out"
    })
    .to('#last-summary img', {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out"
    }, '-=0.8');

    // First-content 的滾動動畫
    ScrollTrigger.create({
        trigger: "#first-content",
        start: "top top",
        end: "bottom top",
        pin: true,
        anticipatePin: 1,
        scrub: 1,
        onEnter: () => {
            // 當進入 first-content 區域時，4秒後執行文字變換
            setTimeout(() => {
                const title2 = document.querySelector('.box1 .title-2');
                gsap.to(title2, {
                    opacity: 0,
                    duration: 0.5,
                    onComplete: () => {
                        title2.textContent = '首先是我們的小綠!';
                        gsap.to(title2, {
                            opacity: 1,
                            duration: 0.5
                        });
                    }
                });
            }, 4000);
        },
        onUpdate: (self) => {
            const progress = self.progress;
            
            if (progress < 0.33) {
                gsap.to('.box1', { opacity: 1, pointerEvents: 'auto', duration: 0.5 });
                gsap.to('.box2, .box3', { opacity: 0, pointerEvents: 'none', duration: 0.5 });
            } else if (progress < 0.66) {
                gsap.to('.box2', { opacity: 1, pointerEvents: 'auto', duration: 0.5 });
                gsap.to('.box1, .box3', { opacity: 0, pointerEvents: 'none', duration: 0.5 });
            } else {
                gsap.to('.box3', { opacity: 1, pointerEvents: 'auto', duration: 0.5 });
                gsap.to('.box1, .box2', { opacity: 0, pointerEvents: 'none', duration: 0.5 });
            }
        }
    });
    // First-content 的滾動動畫之後，添加 first-summary 動畫
    gsap.timeline({
        scrollTrigger: {
            trigger: "#first-summary",
            start: "top center",
            toggleActions: "play none none reverse"
        }
    })
    .to('#first-summary .first-summary-text', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out"
    })
    .to('#first-summary img', {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out"
    }, '-=0.8');  // 讓圖片動畫在文字動畫完成前0.8秒就開始
});

// 定義鳥類資料陣列
const birdsData = [
    {
        nameCh: "亞洲輝椋鳥",
        nameEn: "Aplonis panayensis",
        alias: "菲律賓椋鳥 / Asian Glossy Starling",
        classification: "燕雀目 / 椋鳥科 / 輝椋鳥屬",
        features: "體長約19公分，全身黑綠色，尾方形略短。腹面淺米色。 頰及喉有細黑縱紋。胸腹部具粗縱斑。眼血紅色。喙、腳黑色。",
        intro: "多數棲息於都市內。群居性， 總是在高處活動，幾乎不落至地面。"
    },
    {
        nameCh: "鵲鴝",
        nameEn: "Copsychus saularis",
        alias: "四喜 / Oriental Magpie-Robin",
        classification: "燕雀目 / 鶲科 / 鵲鴝屬",
        features: "體長約20公分，雄鳥頭、胸、背藍黑色，雌鳥則為灰色，兩翼有白斑，腹部為白色，尾下覆羽淡黃色。",
        intro: "棲息於開闊的林地和經耕作的地區，經常靠近人類居住地。"
    },
    {
        nameCh: "白尾八哥",
        nameEn: "Acridotheres javanicus",
        alias: "爪哇八哥 / Javan Myna",
        classification: "燕雀目 / 椋鳥科 / 八哥屬",
        features: "體長約22公分，全身黑灰色，背、腹部深灰色。翼有白斑。尾黑色，末端及尾下覆羽白色。眼淡黃色，喙、腳橙黃色。",
        intro: "棲息於平原及都市。極為適應人類環境，毫不畏懼人類，白天單獨或小群活動，多數時間在地面覓食，或走或跳。"
    },
    {
        nameCh: "家八哥",
        nameEn: "Acridotheres tristis",
        alias: "眼鏡八哥 / Common Myna",
        classification: "燕雀目 / 椋鳥科 / 八哥屬",
        features: "體長約24公分，頭、尾、飛羽黑色，眼周裸露無羽為鮮黃色裸皮，眼後呈箭矢形。背、腹部咖啡色。翅有一白斑。喉、胸部褐灰色。尾下覆羽白色。喙、腳黃色。",
        intro: "棲息於平原及都市。毫不畏懼人類。單獨或小群活動，大多在地面覓食與走動。"
    },
    {
        nameCh: "黑領椋鳥",
        nameEn: "Gracupica nigricollis",
        alias: "烏領椋鳥 / Black-collared Starling",
        classification: "燕雀目 / 椋鳥科 / 椋鳥屬",
        features: "體長約28公分，頭、腹部白色，眼周裸露無羽為鮮黃色裸皮，眼後呈箭矢形。胸、頸形成一圈黑帶。背部深褐色，翼上覆羽有白斑。尾、喙黑色。腳黃灰色。",
        intro: "棲息於平原及都市等。成對或小群活動，於地面覓食與活動。怕人。"
    },
    {
        nameCh: "野鴿",
        nameEn: "Columba livia",
        alias: "原鴿 / Rock Pigeon",
        classification: "鴿形目 / 鳩鴿科 / 鴿屬",
        features: "體長約32公分，全身灰色，頸、胸部有綠藍紫的金屬光澤，翼、尾端各有一黑色橫紋，尾部的較寬，尾上覆羽白色。",
        intro: "適應城市的生活環境，群居活動。"
    },
    {
        nameCh: "喜鵲",
        nameEn: "Pica serica",
        alias: "客鳥 / Oriental Magpie",
        classification: "燕雀目 / 鴉科 / 喜鵲屬",
        features: "體長約48公分，頭、喙、腳黑色，背、尾及翅膀紫藍色。翼有白斑。",
        intro: "棲息於山區、平原、城市。適應人類環境，成群活動，有地域性。"
    },
];

document.querySelectorAll('.imgSet-1 > div, .imgSet-2 > div').forEach(div => {
    div.addEventListener('click', (e) => {
        const className = e.currentTarget.className; // 例如 "imgSet-1-1" 或 "imgSet-2-3"
        const index = getIndexFromClassName(className);
        updatePanel(index);
        
        // 移除其他圖片的active狀態
        document.querySelectorAll('.imgSet-1 > div, .imgSet-2 > div').forEach(div => {
            div.classList.remove('active');
        });
        // 添加當前圖片的active狀態
        e.currentTarget.classList.add('active');
    });
});

// 從類名獲取索引的輔助函數
function getIndexFromClassName(className) {
    // 假設類名格式為 "imgSet-1-1" 或 "imgSet-2-3"
    const parts = className.split('-');
    const set = parseInt(parts[1]);
    const number = parseInt(parts[2]);
    
    // 計算實際索引
    // 如果是第一組（imgSet-1），直接返回number - 1
    // 如果是第二組（imgSet-2），返回 3 + (number - 1)
    return set === 1 ? number - 1 : 3 + (number - 1);
}

// 更新面板內容的函數
function updatePanel(index) {
    if (index >= birdsData.length) return;
    
    const bird = birdsData[index];
    
    // 更新標題
    document.querySelector('.panel .title-ch').textContent = bird.nameCh;
    document.querySelector('.panel .title-en').textContent = bird.nameEn;
    
    // 更新內容
    document.querySelector('.panel .text-1-content').textContent = bird.alias;
    document.querySelector('.panel .text-2-content').textContent = bird.classification;
    document.querySelector('.panel .text-3-content').textContent = bird.features;
    document.querySelector('.panel .text-4-content').textContent = bird.intro;
}