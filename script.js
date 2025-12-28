// 等待DOM完全加载
document.addEventListener('DOMContentLoaded', function() {
    // 初始化所有功能
    initMobileMenu();
    initScrollToTop();
    initContactForm();
    initDetailModals();
    initFeatureModals();
    initVideoModals();
    
    // 监听滚动事件
    window.addEventListener('scroll', handleScroll);
    
    // 监听窗口大小变化
    window.addEventListener('resize', handleResize);
});

// ========== 移动端菜单 ==========
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
        });
        
        // 点击菜单项关闭菜单
        const navLinks = document.querySelectorAll('.nav-item a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });
    }
}

// ========== 回到顶部按钮 ==========
function initScrollToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });
        
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// 滚动到顶部
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ========== 联系表单 ==========
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 获取表单数据
            const formData = new FormData(contactForm);
            const formValues = Object.fromEntries(formData.entries());
            
            // 这里应该发送到服务器
            // 现在只是显示一个成功消息
            alert('感谢您的留言！我们会尽快与您联系。');
            contactForm.reset();
        });
    }
}

// ========== 详情弹窗 ==========
function initDetailModals() {
    // 绑定行业项目按钮
    const projectBtns = document.querySelectorAll('.project-btn');
    projectBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const sector = this.closest('.project-card').dataset.sector;
            openDetailModal(sector);
        });
    });
}

// 行业项目详情数据
const sectorDetails = {
    'medical': {
        title: '医疗健康',
        content: `
            <h3>医疗健康行业应用场景及案例</h3>
            <p class="highlight">解决医疗健康领域"诊疗过程不直观、技能培训高风险、复杂知识难沟通、患者管理低效"的核心痛点。实现诊疗精准化、培训安全化、沟通直观化、管理智能化。</p>
            <p class="note">[部分项目需专业医疗人员配合、联合研发]</p>
            
            <div class="medical-columns">
                <div class="column">
                    <h4>1. 医院临床与患者服务</h4>
                    <p><strong>应用形式：</strong>三维动画、VR数媒治疗、数字人助手、手术模拟</p>
                    <p><strong>应用场景：</strong>医患沟通（疾病机理、手术方案讲解）、VR心理治疗与疼痛管理等、数字人智能预问诊、数字人指引、基于患者数据的个性化术前规划。</p>
                    <p><strong>应用价值：</strong>提升患者知情度与就医体验，辅助疼痛管理，提高医生诊疗效率与手术精准度，构建和谐医患关系。</p>
                </div>
                
                <div class="column">
                    <h4>2. 医学教育与技能培训</h4>
                    <p><strong>应用形式：</strong>VR沉浸式解剖、高仿真手术模拟器、急诊模拟演练</p>
                    <p><strong>应用场景：</strong>医学生进行虚拟解剖，外科医生在零风险环境下练习腹腔镜等复杂手术操作，医护团队进行重症应急演练、知识培训等。</p>
                    <p><strong>应用价值：</strong>解决"尸体资源稀缺、实操高风险、不可逆"的矛盾，实现安全、可重复、高效率的标准化培训。</p>
                </div>
                
                <div class="column">
                    <h4>3. 医疗器械与药品营销</h4>
                    <p><strong>应用形式：</strong>产品原理动画、手术流程演示、AR互动手册、药品作用机制可视化</p>
                    <p><strong>应用场景：</strong>在展会、学术会议上动态展示CT、手术机器人等设备的内部结构和工作原理，直观呈现新药在分子层面的靶向作用机制。</p>
                    <p><strong>应用价值：</strong>将晦涩的技术参数和微观过程变得生动易懂，成为学术推广和市场营销的"硬名片"，助力品牌塑造与客户转化。</p>
                </div>
                
                <div class="column">
                    <h4>4. 大众健康与康复管理</h4>
                    <p><strong>应用形式：</strong>VR康复训练、健康科普体验</p>
                    <p><strong>应用场景：</strong>为中风患者设计游戏化VR康复任务以提升训练趣味性；在体检中心用VR/AR技术震撼展示吸烟危害或体检结果。</p>
                    <p><strong>应用价值：</strong>创新康复治疗手段，提升患者依从性；强化健康科普效果，助力疾病预防与健康管理。</p>
                </div>
            </div>
            
            <div class="video-section">
                <h4>案例视频</h4>
                <div class="video-grid">
                    <div class="video-thumb" data-video="videos/yl-2-1.mp4" data-title="医患沟通案例">
                        <div class="thumb-img">
                            
                            <div class="play-overlay">▶</div>
                        </div>
                        <p>医患沟通案例</p>
                    </div>
                    <div class="video-thumb" data-video="videos/yl-2-2.mp4" data-title="VR手术演示">
                        <div class="thumb-img">
                            
                            <div class="play-overlay">▶</div>
                        </div>
                        <p>VR手术演示</p>
                    </div>
                    <div class="video-thumb" data-video="videos/yl-2-3.mp4" data-title="医学教育案例">
                        <div class="thumb-img">
                            
                            <div class="play-overlay">▶</div>
                        </div>
                        <p>医学教育案例</p>
                    </div>
                    <div class="video-thumb" data-video="videos/yl-2-4.mp4" data-title="药品展示案例">
                        <div class="thumb-img">
                            
                            <div class="play-overlay">▶</div>
                        </div>
                        <p>药品展示案例</p>
                    </div>
                </div>
            </div>
        `
    }
}
    'government': {
        title: '政府与大型企业',
        content: `
            <h3>政府与大型企业应用场景及案例</h3>
            <p class="highlight">让规划"看得见"，让汇报"听得懂"解决政府及大型企业在宏观规划、复杂工程、招商引资中"专业术语晦涩、成果展示不直观、未来愿景难以感知"的核心痛点。</p>
            
            <div class="medical-columns">
                <div class="column">
                    <h4>1. 城市规划与招商推介</h4>
                    <p><strong>应用形式：</strong>三维动画宣传片、数字沙盘、VR漫游</p>
                    <p><strong>应用场景：</strong>为"新城规划"、"产业园区"制作宏大的三维动画，动态展示未来5-10年的城市面貌、交通物流、产业布局。</p>
                    <p><strong>应用价值：</strong>在招商会上给投资者最直观的信心，提升项目获批概率，助力土地价格。</p>
                </div>
                
                <div class="column">
                    <h4>2. 重大工程可视化汇报</h4>
                    <p><strong>应用形式：</strong>工艺流程仿真、施工动画、BIM可视化</p>
                    <p><strong>应用场景：</strong>用于地铁、桥梁、核电站等超级工程的汇报，用动画清晰演示地下施工法、复杂组装流程，凸显技术实力。</p>
                    <p><strong>应用价值：</strong>向上级和公众透明化展示项目价值与内容，成为企业技术实力的"硬名片"。</p>
                </div>
                
                <div class="column">
                    <h4>3. 宣传科普</h4>
                    <p><strong>应用形式：</strong>二维或三维动画宣视频、或触控视频</p>
                    <p><strong>应用场景：</strong>在地铁、公交等人流量较多的公共场合适用，普及规范、提高规则共识度、引导作用</p>
                    <p><strong>应用价值：</strong>减少说教成分，有效拉近群众距离，成为无论老少都可以接受的传播媒介</p>
                </div>
                
                <div class="column">
                    <h4>4. 应急预案模拟推演</h4>
                    <p><strong>应用形式：</strong>VR仿真、互动视频</p>
                    <p><strong>应用场景：</strong>模拟洪水、火灾等突发事件，在虚拟环境中进行人员疏散、物资调配的演练。</p>
                    <p><strong>应用价值：</strong>提升应急响应能力，降低演练成本和宣传教育成本。</p>
                </div>
            </div>
            
            <div class="video-section">
            <h4>案例视频</h4>
            <div class="video-grid">
                <div class="video-thumb" data-video="videos/zf-2-1.mp4" data-title="城市规划展示">
                    <div class="thumb-img">
                        
                        <div class="play-overlay">▶</div>
                    </div>
                    <p>城市规划展示</p>
                </div>
                <div class="video-thumb" data-video="videos/zf-2-2.mp4" data-title="工程项目汇报">
                    <div class="thumb-img">
                        
                        <div class="play-overlay">▶</div>
                    </div>
                    <p>工程项目汇报</p>
                </div>
                <div class="video-thumb" data-video="videos/zf-2-3.mp4" data-title="应急演练模拟">
                    <div class="thumb-img">
                        
                        <div class="play-overlay">▶</div>
                    </div>
                    <p>应急演练模拟</p>
                </div>
            </div>
        </div>
    `
}
    'tourism': {
        title: '文旅文博',
        content: `
            <h3>文旅文博应用场景及案例</h3>
            <p class="highlight">让文物"活"起来，让体验"沉"进去。破解传统博物馆和旅游景区"静态陈列、体验单一、文化内涵难以感知"的困境，通过技术实现文化资产的活化与变现。</p>
            
            <div class="medical-columns">
                <div class="column">
                    <h4>1. 文物复原与数字展陈</h4>
                    <p><strong>应用形式：</strong>高清三维建模、AR互动</p>
                    <p><strong>应用场景：</strong>对珍贵/破损文物进行高精度三维数字化，游客可在屏幕上任意旋转、放大查看细节，甚至通过AR设备"复原"破碎的瓷器。</p>
                    <p><strong>应用价值：</strong>增加观展趣味性，提供超越实物的观察视角。</p>
                </div>
                
                <div class="column">
                    <h4>2. 沉浸式历史穿越体验</h4>
                    <p><strong>应用形式：</strong>VR/AR体验、全景漫游</p>
                    <p><strong>应用场景：</strong>打造VR时空穿越项目，让游客"回到"宋朝街市、唐代宫殿，与历史人物互动。或利用大型投影打造沉浸式展厅，身临其境感受古画意境。案例：环绕屏，三折等</p>
                    <p><strong>应用价值：</strong>将文化IP转化为爆款旅游产品，实现门票二次消费，提升吸引力。</p>
                </div>
                
                <div class="column">
                    <h4>3. 智能导览与数字人讲解</h4>
                    <p><strong>应用形式：</strong>数字人、AI语音</p>
                    <p><strong>应用场景：</strong>定制历史名人数字人作为虚拟导游，通过手机App扫描文物即可触发动画讲解，或通过AI语音提供个性化路线规划。</p>
                    <p><strong>应用价值：</strong>提升科技服务档次，满足年轻游客自助式、互动式需求，打造时代前沿"数字化"形象。</p>
                </div>
                
                <div class="column">
                    <h4>4. 文创衍生与线上营销</h4>
                    <p><strong>应用形式：</strong>裸眼3D短视频、数字藏品、IP形象数字化</p>
                    <p><strong>应用场景：</strong>制作文物IP的裸眼3D视频在社交媒体引爆传播，发行限量版数字藏品进行创新变现，打造专属IP形象提高知名度与用户粘性。</p>
                    <p><strong>应用价值：</strong>低成本高效营销，开辟数字资产新收入渠道。</p>
                </div>
            </div>
            
            <div class="video-section">
            <h4>案例视频</h4>
            <div class="video-grid">
                <div class="video-thumb" data-video="videos/wl-2-1.mp4" data-title="文物数字复原">
                    <div class="thumb-img">
                        
                        <div class="play-overlay">▶</div>
                    </div>
                    <p>文物数字复原</p>
                </div>
                <div class="video-thumb" data-video="videos/wl-2-2.mp4" data-title="VR历史体验">
                    <div class="thumb-img">
                        
                        <div class="play-overlay">▶</div>
                    </div>
                    <p>VR历史体验</p>
                </div>
                <div class="video-thumb" data-video="videos/wl-2-3.mp4" data-title="数字文创展示">
                    <div class="thumb-img">
                        
                        <div class="play-overlay">▶</div>
                    </div>
                    <p>数字文创展示</p>
                </div>
            </div>
        </div>
    `
}
    'industrial': {
        title: '工业与制造',
        content: `
            <h3>工业与制造应用场景及案例</h3>
            <p class="highlight">工业与制造板块：从"制造"到"智造"的视觉引擎。赋能工业企业的研发、生产、营销、运维全生命周期，实现降本增效和营销升级。</p>
            
            <div class="medical-columns">
                <div class="column">
                    <h4>1. 营销与售后支持</h4>
                    <p><strong>应用形式：</strong>三维建模、虚拟装配</p>
                    <p><strong>应用场景：</strong>为复杂仪器设备制作工作原理动画，展示设备精密与权威性；售后人员用AR眼镜扫描设备，即可叠加故障提示和维修步骤。</p>
                    <p><strong>应用价值：</strong>降低销售沟通成本，提升售后效率，打造高端品牌形象。</p>
                </div>
                
                <div class="column">
                    <h4>2. 智能工厂与数字孪生</h4>
                    <p><strong>应用形式：</strong>生产线仿真、数据可视化展示</p>
                    <p><strong>应用场景：</strong>展示整个工厂的"数字孪生体"，将生产状态、物料流动，三维可视化。用于全况概览，产能优化和瓶颈分析。</p>
                    <p><strong>应用价值：</strong>实现生产流程的透明化和可视化，后期搭载实时映射技术，可实现智能化管理，是工业4.0的核心。</p>
                </div>
                
                <div class="column">
                    <h4>3. 安全与操作培训</h4>
                    <p><strong>应用形式：</strong>VR安全培训</p>
                    <p><strong>应用场景：</strong>让新员工在VR中模拟操作高危设备、体验违规操作带来的事故后果，如高空坠落、机械伤害。</p>
                    <p><strong>应用价值：</strong>实现"零风险"的高效培训，深刻强化安全意识。</p>
                </div>
            </div>
            
            <div class="video-section">
            <h4>案例视频</h4>
            <div class="video-grid">
                <div class="video-thumb" data-video="videos/gy-2-1.mp4" data-title="设备工作原理展示">
                    <div class="thumb-img">
                        
                        <div class="play-overlay">▶</div>
                    </div>
                    <p>设备工作原理展示</p>
                </div>
                <div class="video-thumb" data-video="videos/gy-2-2.mp4" data-title="工厂数字孪生系统">
                    <div class="thumb-img">
                        
                        <div class="play-overlay">▶</div>
                    </div>
                    <p>工厂数字孪生系统</p>
                </div>
            </div>
        </div>
    `
}
    'retail': {
        title: '展会、产品、零售',
        content: `
            <h3>展会、产品发布与零售板块应用场景及案例</h3>
            <p class="highlight">极致的视觉体验抢夺消费者注意力，打造品牌记忆点，促进销售转化。</p>
            
            <div class="medical-columns">
                <div class="column">
                    <h4>1. 展台互动与引流</h4>
                    <p><strong>应用形式：</strong>AR互动、全息投影、大型LED创意内容</p>
                    <p><strong>应用场景：</strong>在展会现场，观众用手机扫描海报，产品模型即可跃然纸上；或通过全息柜展示虚拟概念产品等。</p>
                    <p><strong>应用价值：</strong>成为整个展馆的流量中心，聚集人气，高效获客。</p>
                </div>
                
                <div class="column">
                    <h4>2. 产品发布</h4>
                    <p><strong>应用形式：</strong>裸眼3D视频、MR混合现实演示</p>
                    <p><strong>应用场景：</strong>新品发布会时，通过巨型折角屏实现裸眼3D效果，让产品"冲"出屏幕；或让演讲者与虚拟产品进行实时交互。</p>
                    <p><strong>应用价值：</strong>引人注目，塑造品牌引领创新的高端形象。</p>
                </div>
                
                <div class="column">
                    <h4>3. 零售终端体验升级</h4>
                    <p><strong>应用形式：</strong>VR虚拟试装/试驾、AI数字人导购</p>
                    <p><strong>应用场景：</strong>消费者在商场，通过AR试穿衣服、试戴珠宝；数字人导购提供24小时个性化服务。</p>
                    <p><strong>应用价值：</strong>提升购物便捷度，降低决策成本，打造商场科技化高端形象。</p>
                </div>
            </div>
            
            <div class="video-section">
            <h4>案例视频</h4>
            <div class="video-grid">
                <div class="video-thumb" data-video="videos/zl-2-1.mp4" data-title="展会AR互动案例">
                    <div class="thumb-img">
                        
                        <div class="play-overlay">▶</div>
                    </div>
                    <p>展会AR互动案例</p>
                </div>
                <div class="video-thumb" data-video="videos/zl-2-2.mp4" data-title="产品发布3D展示">
                    <div class="thumb-img">
                        
                        <div class="play-overlay">▶</div>
                    </div>
                    <p>产品发布3D展示</p>
                </div>
            </div>
        </div>
    `
}
    'vr-gaming': {
        title: 'VR游戏开发',
        content: `
            <h3>VR游戏开发业务介绍</h3>
            <p class="highlight">提供专业的VR游戏产品研发与内容定制服务。致力于将高品质的视觉内容与沉浸式交互体验相结合，伴创造有价值的VR游戏产品。</p>
            
            <h4>核心业务</h4>
            <div class="medical-columns">
                <div class="column">
                    <h4>1. UE引擎场景开发与优化</h4>
                    <p>我们擅长使用Unreal Engine引擎构建高沉浸感的VR场景。从写实环境到风格化世界，我们专注于场景光影、材质与性能的平衡，确保在VR设备上实现稳定流畅的视觉体验。</p>
                </div>
                
                <div class="column">
                    <h4>2. 3D美术与角色全流程制作</h4>
                    <p>我们提供从原画设定、高精度三维建模、拓扑优化到PBR材质绘制的完整美术生产管线。能够高效创建符合项目风格要求的角色、场景资产与用户界面，保障内容的高质量标准。</p>
                </div>
                
                <div class="column">
                    <h4>3. VR交互设计与程序实现</h4>
                    <p>设计符合人体工学与直觉的VR交互方案。包括自然的运动操控、物体抓取与操作、UI交互等，确保玩法机制在VR环境中运行可靠且有趣。</p>
                </div>
                
                <div class="column">
                    <h4>4. 游戏系统策划与内容设计</h4>
                    <p>提供从核心玩法设计、关卡构架到数值平衡的策划支持。我们注重在VR特性下构建有深度的游戏循环与叙事体验，旨在打造"易于上手、富有沉浸感"的内容。</p>
                </div>
            </div>
            
            <h4>服务模式</h4>
            <ol>
                <li><strong>完整游戏开发：</strong>承接从概念到上线的全流程VR游戏开发。</li>
                <li><strong>内容模块定制：</strong>为客户已有的VR项目或平台，提供特定玩法和内容的定制开发。</li>
                <li><strong>联合开发与技术支持：</strong>为拥有IP或创意、但需要技术执行的伙伴，提供共同开发与专业的技术实施服务。</li>
            </ol>
            
            <div class="video-section">
            <h4>案例视频</h4>
            <div class="video-grid">
                <div class="video-thumb" data-video="videos/vr-2-1.mp4" data-title="VR游戏展示视频">
                    <div class="thumb-img">
                        
                        <div class="play-overlay">▶</div>
                    </div>
                    <p>VR游戏展示视频</p>
                </div>
            </div>
        </div>
    `
}
// 特色板块详情数据
const featureDetails = {
    'premium': {
        title: '高端与亲民结合',
        content: `
            <h3>关于整合高端数媒技术与多元化运营推广的双轨业务概念【衍生板块】</h3>
            <p class="highlight">计划构建一种独特的"双轮驱动"商业模式，即将高精度数字媒体内容制作与分层化、精准化的运营推广深度融合，形成"高端定制"与"大众流量"并行发展的双轨战略。该战略旨在针对同一核心数字资产，进行价值的多维度挖掘与受众的全覆盖触达，从而实现品牌价值长效提升与市场流量即时转化的"品效合一"。</p>
            
            <p>立志成为连接上游品牌客户与下游内容生态的价值枢纽与可靠伙伴。我们不仅对上游客户的项目效果负责，更深耕对下游内容创作者的赋能与维护，构建健康、可持续的创作生态。</p>
            
            <p>以三个核心行业为例，具体阐述这一战略的落地路径：</p>
            
            <div class="detail-list">
                <h4>1. 文博文旅行业：深化品牌内涵与引爆大众声量并举</h4>
                <p><strong>高端品牌价值线：</strong>我们致力于为文化机构打造数字化、科技化、系列化的品牌资产。例如，在为博物馆开发数字人讲解员及VR漫游系统后，我们可以以此为基础，策划制作《文物会说话》等高品质微纪录片系列。这些内容将投放于B站、知乎等高知平台，深度解读文物背后的历史脉络与艺术价值。此举核心在于塑造客户"权威、专业、富有文化深度"的高端品牌形象，吸引并沉淀高质量的文化旅游客群，实现品牌资产的长效增值。</p>
                <p><strong>亲民流量转化线：</strong>同步，我们将相同的数字内容转化为大众流量引擎。例如，提取项目中最具视觉冲击力的裸眼3D或VR片段，制作成短视频矩阵，联合旅游、探店类达人进行全景式打卡直播，在抖音、小红书等平台策划"打卡最美博物馆"等热点话题与线上挑战赛。其目标是在短期内快速引爆公众关注，显著提升实地客流量与门票收入，实现营销效果的即时转化。</p>
            </div>
            
            <div class="detail-list">
                <h4>2. 政府与大型企业（城市规划/工程）：服务于战略决策与公众沟通</h4>
                <p><strong>高端品牌价值线：</strong>我们提供的宏大三维宣传片与数字沙盘，首先是面向关键决策者的战略工具。例如，新城规划方案将通过电影级质感的视觉呈现，在高端招商洽谈会或政府汇报会上作为核心展示，旨在以无可辩驳的视觉说服力，助力客户赢得政策审批与重大投资，坚实塑造其"具备卓越远见与强大执行力"的品牌形象。</p>
                <p><strong>亲民流量转化线：</strong>与此同时，我们将核心内容进行大众化转译。例如，制作"3分钟看懂未来新城"等通俗短视频，通过民生、房产等领域的地域性KOL进行传播。这旨在向公众清晰、生动地传达发展蓝图，提升项目的社会认知度与公众好感度，构建透明、亲民的治理或企业形象，为项目落地营造良好的舆论环境。</p>
            </div>
            
            <div class="detail-list">
                <h4>3. 工业制造与医疗器械行业：影响行业决策与实现市场教育</h4>
                <p><strong>高端品牌价值线：</strong>在此领域，我们打造的内容是面向行业的"视觉权威说明书"。例如，为精密医疗器械制作的工作原理动画，将主要用于全球顶尖行业展会、专业学术会议等场景，直接触达专家、医生等决策群体。目标是在专业圈层内建立"技术领先、值得信赖"的权威品牌地位，深度影响采购决策链。</p>
                <p><strong>亲民流量转化线：</strong>我们同步执行"技术破圈"计划。将复杂的专业内容，转化为如"揭秘心脏支架如何拯救生命"等趣味科普短视频，联合医学科普达人进行传播。此举不仅能面向潜在终端用户进行高效的市场教育，在公众心智中提前建立品牌认知与信任，还能从需求端间接推动上游采购决策，拓宽品牌影响力边界。</p>
            </div>
            
            <div class="detail-list">
                <h4>双向负责的生态赋能者角色</h4>
                <p>我们的运营模式超越简单的项目执行，我们定位为双向价值的创造者与守护者。</p>
                <p><strong>对上游客户负责：</strong>深入理解客户的行业特性、品牌内核与战略目标，确保从内容创意到推广执行的每一个环节，都严格符合其品牌调性、质量要求与商业诉求。我们不仅是服务提供商，更是客户的品牌守护者，确保每一次传播都能为品牌资产做加法。</p>
                <p><strong>对下游达人负责：</strong>深刻理解内容创作者的核心资产是其个人品牌与粉丝信任（即"羽毛"）。因此，我们基于对项目的深度洞察，为达人精准匹配与其形象、专长和粉丝群体高度契合的合作机会，并提供高质量、易发挥的内容脚本与素材支持。我们"爱惜达人的羽毛"，通过共赢的合作帮助其提升价值，而非消耗其信誉，从而建立起长期、稳定、互信的达人合作网络。</p>
            </div>
            
            <div class="detail-list">
                <h4>战略综述</h4>
                <p>"高端定制"与"大众流量"双轨模式，辅以"双向负责"的生态运营理念，构成了我们完整的衍生板块理念。使我们的服务能够在满足客户对品牌高度与市场热度的双重需求的同时，赢得上下游伙伴的长期信任。</p>
            </div>
        `
    },
    'ai': {
        title: 'AI+赋能创新',
        content: `
            <h3>AI+赋能创新</h3>
            <p class="highlight">我们将持续探索AI技术与数字媒体内容的深度融合，在智能内容生成、个性化体验交互、数据驱动决策等方向加力，为客户创造更大价值。</p>
            
            <div class="video-section">
                <h4>AI赋能案例 (预留3个位置)</h4>
                <div class="video-grid">
                    <div class="video-thumb" data-video="videos/ai-2-1.mp4" data-title="AI案例1：智能内容生成">
                        <div class="thumb-img">
                            <div class="play-overlay">▶</div>
                        </div>
                        <p>AI案例1：智能内容生成</p>
                    </div>
                    <div class="video-thumb" data-video="videos/ai-2-2.mp4" data-title="AI案例2：个性化交互体验">
                        <div class="thumb-img">
                            <div class="play-overlay">▶</div>
                        </div>
                        <p>AI案例2：个性化交互体验</p>
                    </div>
                    <div class="video-thumb" data-video="videos/ai-2-3.mp4" data-title="AI案例3：数据驱动决策">
                        <div class="thumb-img">
                            <div class="play-overlay">▶</div>
                        </div>
                        <p>AI案例3：数据驱动决策</p>
                    </div>
                </div>
            </div>
        `
    },
    'cases': {
        title: '案例总汇',
        content: `
            <h3>成功案例总汇</h3>
            <p class="highlight">浏览我们所有的成功案例与项目，见证数字媒体技术在各行业的创新应用。</p>
            
            <div class="case-list">
                <h4>典型应用案例 (10个)：</h4>
                <ol>
                    <li><strong>医疗：</strong>数字人医助预问诊系统</li>
                    <li><strong>医疗：</strong>高仿真腹腔镜手术模拟器</li>
                    <li><strong>医疗：</strong>药品分子机制3D动画</li>
                    <li><strong>城市：</strong>未来新城规划数字沙盘</li>
                    <li><strong>城市：</strong>跨海大桥施工流程仿真动画</li>
                    <li><strong>文旅：</strong>唐代宫殿VR穿越体验</li>
                    <li><strong>文旅：</strong>破损瓷器AR互动复原项目</li>
                    <li><strong>工业：</strong>大型机械设备AR维修指导</li>
                    <li><strong>工业：</strong>智能工厂数字孪生系统</li>
                    <li><strong>展会：</strong>裸眼3D新品发布会视频</li>
                    <li><strong>VR专项：</strong>定制化VR安全教育体验舱</li>
                </ol>
            </div>
        `
    }
};

// 打开详情弹窗
function openDetailModal(sector) {
    const detail = sectorDetails[sector];
    if (!detail) return;
    
    const modal = document.getElementById('detailModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    
    if (modal && modalTitle && modalContent) {
        modalTitle.textContent = detail.title;
        modalContent.innerHTML = detail.content;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // 重新初始化视频缩略图点击事件
        initVideoThumbnails();
    }
}

// ========== 特色板块弹窗 ==========
function initFeatureModals() {
    // 绑定特色板块按钮
    const featureBtns = document.querySelectorAll('.feature-btn');
    featureBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const feature = this.closest('.feature-card').dataset.feature;
            openFeatureModal(feature);
        });
    });
}

// 打开特色板块弹窗
function openFeatureModal(feature) {
    const detail = featureDetails[feature];
    if (!detail) return;
    
    const modal = document.getElementById('detailModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    
    if (modal && modalTitle && modalContent) {
        modalTitle.textContent = detail.title;
        modalContent.innerHTML = detail.content;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // 重新初始化视频缩略图点击事件
        initVideoThumbnails();
    }
}

// ========== 视频弹窗 ==========
function initVideoModals() {
    // 监听弹窗关闭按钮
    const modalCloseBtns = document.querySelectorAll('.modal-close');
    modalCloseBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            closeModal(modal);
        });
    });
    
    // 点击模态框外部关闭
    const modalOverlays = document.querySelectorAll('.modal-overlay');
    modalOverlays.forEach(overlay => {
        overlay.addEventListener('click', function() {
            const modal = this.closest('.modal');
            closeModal(modal);
        });
    });
    
    // ESC键关闭弹窗
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const modals = document.querySelectorAll('.modal');
            modals.forEach(modal => {
                if (modal.style.display === 'block') {
                    closeModal(modal);
                }
            });
        }
    });
}

// 初始化视频缩略图点击事件
function initVideoThumbnails() {
    const videoThumbs = document.querySelectorAll('.video-thumb');
    videoThumbs.forEach(thumb => {
        thumb.addEventListener('click', function() {
            const videoSrc = this.dataset.video;
            const videoTitle = this.dataset.title;
            openVideoModal(videoSrc, videoTitle);
        });
    });
}

// 打开视频弹窗
function openVideoModal(videoSrc, videoTitle) {
    const videoModal = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('videoPlayer');
    const videoTitleElement = document.getElementById('videoTitle');
    
    if (videoModal && videoPlayer && videoTitleElement) {
        videoPlayer.src = videoSrc;
        videoTitleElement.textContent = videoTitle;
        videoModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // 尝试自动播放
        const playPromise = videoPlayer.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log('自动播放被阻止:', error);
            });
        }
    }
}

// 关闭视频弹窗
function closeVideoModal() {
    const videoModal = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('videoPlayer');
    
    if (videoModal && videoPlayer) {
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
        videoModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// 通用关闭弹窗函数
function closeModal(modal) {
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        
        // 如果是详情弹窗，清空内容
        if (modal.id === 'detailModal') {
            const modalContent = document.getElementById('modalContent');
            if (modalContent) {
                modalContent.innerHTML = '';
            }
        }
        
        // 如果是视频弹窗，重置视频
        if (modal.id === 'videoModal') {
            const videoPlayer = document.getElementById('videoPlayer');
            if (videoPlayer) {
                videoPlayer.pause();
                videoPlayer.currentTime = 0;
            }
        }
    }
}

// ========== 滚动处理 ==========
function handleScroll() {
    // 更新导航栏背景
    const header = document.querySelector('.main-header');
    if (header) {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
    }
}

// ========== 窗口大小变化处理 ==========
function handleResize() {
    // 在桌面端显示导航菜单
    if (window.innerWidth > 768) {
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu) {
            navMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }
}

// 移动端菜单切换
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
    }

}

