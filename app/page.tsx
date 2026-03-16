import Image from "next/image";

// 模拟新闻数据
const newsData = {
  nac: [
    {
      id: 1,
      title: "不结盟运动峰会召开，成员国共商全球合作新篇章",
      summary: "第19届不结盟运动峰会在乌干达坎帕拉举行，来自120多个成员国的代表齐聚一堂，讨论全球南方国家的合作与发展。",
      image: "https://picsum.photos/seed/nac1/800/450",
      date: "2024-01-15",
      category: "NAC"
    },
    {
      id: 2,
      title: "不结盟运动呼吁加强多边主义，反对单边制裁",
      summary: "成员国代表在联合声明中强调，应尊重各国主权，通过对话解决国际争端。",
      image: "https://picsum.photos/seed/nac2/800/450",
      date: "2024-01-14",
      category: "NAC"
    }
  ],
  g20: [
    {
      id: 3,
      title: "G20领导人峰会达成历史性气候融资协议",
      summary: "二十国集团领导人在巴西里约热内卢峰会上同意设立千亿美元气候基金，支持发展中国家绿色转型。",
      image: "https://picsum.photos/seed/g201/800/450",
      date: "2024-01-16",
      category: "G20",
      video: true
    },
    {
      id: 4,
      title: "G20财长会议聚焦全球经济复苏与债务可持续",
      summary: "各国财长就加强国际金融架构改革达成共识，承诺支持低收入国家债务重组。",
      image: "https://picsum.photos/seed/g202/800/450",
      date: "2024-01-13",
      category: "G20"
    }
  ],
  unga6: [
    {
      id: 5,
      title: "联合国大会第六委员会通过多项国际法决议",
      summary: "第六委员会（法律）在第78届联大期间通过了关于国际法委员会工作报告的多项决议。",
      image: "https://picsum.photos/seed/unga1/800/450",
      date: "2024-01-12",
      category: "UNGA6"
    }
  ],
  iucn: [
    {
      id: 6,
      title: "世界自然保护大会：生物多样性保护取得进展但仍面临挑战",
      summary: "IUCN发布最新红色名录，显示全球物种灭绝风险持续上升，呼吁采取紧急行动。",
      image: "https://picsum.photos/seed/iucn1/800/450",
      date: "2024-01-11",
      category: "IUCN",
      video: true
    },
    {
      id: 7,
      title: "IUCN推出新的生态系统恢复标准",
      summary: "新标准将为全球生态修复项目提供科学指导，助力实现2030年可持续发展目标。",
      image: "https://picsum.photos/seed/iucn2/800/450",
      date: "2024-01-10",
      category: "IUCN"
    }
  ],
  copuos: [
    {
      id: 8,
      title: "联合国外空委讨论太空碎片治理与国际合作",
      summary: "COPUOS第67届会议强调建立全球太空交通管理机制，确保外层空间的可持续利用。",
      image: "https://picsum.photos/seed/copuos1/800/450",
      date: "2024-01-09",
      category: "COPUOS"
    },
    {
      id: 9,
      title: "和平利用外层空间：新技术推动国际合作",
      summary: "多国代表分享卫星技术应用经验，探讨太空探索领域的南南合作机遇。",
      image: "https://picsum.photos/seed/copuos2/800/450",
      date: "2024-01-08",
      category: "COPUOS"
    }
  ],
  unctad: [
    {
      id: 10,
      title: "UNCTAD报告：全球贸易格局正在重塑",
      summary: "《2024年贸易和发展报告》指出，数字经济和绿色转型将成为未来贸易增长的主要驱动力。",
      image: "https://picsum.photos/seed/unctad1/800/450",
      date: "2024-01-07",
      category: "UNCTAD",
      video: true
    },
    {
      id: 11,
      title: "UNCTAD呼吁加强发展中国家能力建设",
      summary: "贸发会议秘书长强调，技术转移和知识共享对缩小南北差距至关重要。",
      image: "https://picsum.photos/seed/unctad2/800/450",
      date: "2024-01-06",
      category: "UNCTAD"
    }
  ]
};

// 头条新闻组件
function HeadlineNews() {
  return (
    <section className="mb-12 border-b-2 border-gray-900 pb-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <article className="group cursor-pointer">
            <div className="relative overflow-hidden mb-4">
              <Image
                src={newsData.g20[0].image}
                alt={newsData.g20[0].title}
                width={800}
                height={450}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {newsData.g20[0].video && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              )}
              <span className="absolute top-4 left-4 bg-red-700 text-white px-3 py-1 text-sm font-bold uppercase">
                {newsData.g20[0].category}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-red-700 transition-colors">
              {newsData.g20[0].title}
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              {newsData.g20[0].summary}
            </p>
            <time className="block mt-3 text-sm text-gray-500">{newsData.g20[0].date}</time>
          </article>
        </div>
        <div className="flex flex-col gap-4">
          <article className="group cursor-pointer border-l-4 border-red-700 pl-4">
            <span className="text-xs font-bold text-red-700 uppercase">{newsData.nac[0].category}</span>
            <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2 leading-snug group-hover:text-red-700 transition-colors">
              {newsData.nac[0].title}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2">{newsData.nac[0].summary}</p>
            <time className="block mt-2 text-xs text-gray-400">{newsData.nac[0].date}</time>
          </article>
          <article className="group cursor-pointer border-l-4 border-blue-700 pl-4">
            <span className="text-xs font-bold text-blue-700 uppercase">{newsData.iucn[0].category}</span>
            <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2 leading-snug group-hover:text-blue-700 transition-colors">
              {newsData.iucn[0].title}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2">{newsData.iucn[0].summary}</p>
            <time className="block mt-2 text-xs text-gray-400">{newsData.iucn[0].date}</time>
          </article>
          <article className="group cursor-pointer border-l-4 border-green-700 pl-4">
            <span className="text-xs font-bold text-green-700 uppercase">{newsData.unctad[0].category}</span>
            <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2 leading-snug group-hover:text-green-700 transition-colors">
              {newsData.unctad[0].title}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2">{newsData.unctad[0].summary}</p>
            <time className="block mt-2 text-xs text-gray-400">{newsData.unctad[0].date}</time>
          </article>
        </div>
      </div>
    </section>
  );
}

// 栏目新闻组件
function SectionNews({ title, color, news, category }: { title: string, color: string, news: any[], category: string }) {
  return (
    <section className="mb-12">
      <div className={`border-t-4 ${color} pt-4 mb-6`}>
        <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-wide">{title}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((item) => (
          <article key={item.id} className="group cursor-pointer">
            <div className="relative overflow-hidden mb-3">
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={225}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {item.video && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-900 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              )}
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug group-hover:text-red-700 transition-colors">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2">{item.summary}</p>
            <time className="block mt-2 text-xs text-gray-400">{item.date}</time>
          </article>
        ))}
      </div>
    </section>
  );
}

// 报纸版面组件
function NewspaperLayout() {
  return (
    <section className="mb-12 bg-amber-50 p-8 border border-amber-200">
      <div className="text-center mb-8 border-b-2 border-gray-900 pb-4">
        <h2 className="text-4xl font-black text-gray-900 tracking-wider">THE MUN CHRONICLE</h2>
        <p className="text-sm text-gray-600 mt-2">模拟联合国主新闻中心 · 特别报道</p>
        <div className="flex justify-between items-center mt-4 text-xs text-gray-500">
          <span>Vol. 2024 No. 1</span>
          <span>Price: Free</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 左栏 */}
        <div className="md:col-span-1 space-y-6">
          <article className="border-b border-gray-300 pb-4">
            <h3 className="text-lg font-bold text-gray-900 mb-2">{newsData.copuos[0].title}</h3>
            <Image
              src={newsData.copuos[0].image}
              alt={newsData.copuos[0].title}
              width={300}
              height={180}
              className="w-full h-auto mb-3 grayscale hover:grayscale-0 transition-all"
            />
            <p className="text-sm text-gray-700 leading-relaxed">{newsData.copuos[0].summary}</p>
          </article>
          <article className="border-b border-gray-300 pb-4">
            <h3 className="text-lg font-bold text-gray-900 mb-2">{newsData.unga6[0].title}</h3>
            <p className="text-sm text-gray-700 leading-relaxed">{newsData.unga6[0].summary}</p>
          </article>
        </div>
        
        {/* 中栏 - 主打文章 */}
        <div className="md:col-span-1 border-x border-gray-300 px-4">
          <article>
            <div className="text-center mb-4">
              <span className="text-xs font-bold text-red-700 uppercase">Editor&apos;s Pick</span>
            </div>
            <Image
              src={newsData.g20[1].image}
              alt={newsData.g20[1].title}
              width={300}
              height={200}
              className="w-full h-auto mb-4 sepia hover:sepia-0 transition-all"
            />
            <h3 className="text-xl font-black text-gray-900 mb-3 text-center leading-tight">
              {newsData.g20[1].title}
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed text-justify first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-2">
              {newsData.g20[1].summary} 各国财长就加强国际金融架构改革达成共识，承诺支持低收入国家债务重组。这一历史性决定标志着全球经济治理迈出了重要一步。
            </p>
            <blockquote className="mt-4 pl-4 border-l-4 border-gray-900 italic text-gray-600">
              &quot;这是多边主义的胜利，是国际社会团结协作的典范。&quot;
            </blockquote>
          </article>
        </div>
        
        {/* 右栏 */}
        <div className="md:col-span-1 space-y-6">
          <article className="border-b border-gray-300 pb-4">
            <h3 className="text-lg font-bold text-gray-900 mb-2">{newsData.iucn[1].title}</h3>
            <p className="text-sm text-gray-700 leading-relaxed">{newsData.iucn[1].summary}</p>
          </article>
          <article className="border-b border-gray-300 pb-4">
            <h3 className="text-lg font-bold text-gray-900 mb-2">{newsData.unctad[1].title}</h3>
            <Image
              src={newsData.unctad[1].image}
              alt={newsData.unctad[1].title}
              width={300}
              height={180}
              className="w-full h-auto mb-3 grayscale hover:grayscale-0 transition-all"
            />
            <p className="text-sm text-gray-700 leading-relaxed">{newsData.unctad[1].summary}</p>
          </article>
          <div className="bg-gray-900 text-white p-4 text-center">
            <h4 className="font-bold mb-2">VIDEO HIGHLIGHTS</h4>
            <div className="aspect-video bg-gray-700 flex items-center justify-center cursor-pointer hover:bg-gray-600 transition-colors">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
            <p className="text-xs mt-2">点击观看精彩视频集锦</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// 视频专区组件
function VideoSection() {
  const videos = [
    { id: 1, title: "G20峰会全程回顾", thumbnail: newsData.g20[0].image, duration: "15:32" },
    { id: 2, title: "IUCN世界自然保护大会 highlights", thumbnail: newsData.iucn[0].image, duration: "08:45" },
    { id: 3, title: "UNCTAD年度贸易报告解读", thumbnail: newsData.unctad[0].image, duration: "12:20" },
    { id: 4, title: "COPUOS太空探索专题", thumbnail: newsData.copuos[0].image, duration: "10:15" }
  ];

  return (
    <section className="mb-12">
      <div className="border-t-4 border-purple-700 pt-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-wide flex items-center gap-3">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
          Video Center
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {videos.map((video) => (
          <article key={video.id} className="group cursor-pointer">
            <div className="relative overflow-hidden mb-3">
              <Image
                src={video.thumbnail}
                alt={video.title}
                width={400}
                height={225}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-14 h-14 rounded-full bg-red-700 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              <span className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 text-xs rounded">
                {video.duration}
              </span>
            </div>
            <h3 className="text-base font-bold text-gray-900 leading-snug group-hover:text-red-700 transition-colors">
              {video.title}
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* 页眉 */}
      <header className="bg-white border-b-4 border-gray-900">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight">
              MUN NEWS CENTER
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mt-2 font-light">
              模拟联合国主新闻中心
            </p>
            <div className="flex justify-center items-center gap-4 mt-4 text-sm text-gray-500">
              <time>{new Date().toLocaleDateString(&apos;zh-CN&apos;, { year: &apos;numeric&apos;, month: &apos;long&apos;, day: &apos;numeric&apos;, weekday: &apos;long&apos; })}</time>
              <span>|</span>
              <span>第 2024 期</span>
            </div>
          </div>
          
          {/* 导航栏 */}
          <nav className="mt-6 border-t border-b border-gray-300 py-3">
            <ul className="flex flex-wrap justify-center gap-4 md:gap-8">
              {[
                { name: &apos;NAC&apos;, label: &apos;不结盟运动&apos;, color: &apos;text-red-700&apos; },
                { name: &apos;G20&apos;, label: &apos;二十国集团&apos;, color: &apos;text-blue-700&apos; },
                { name: &apos;UNGA6&apos;, label: &apos;联大六委&apos;, color: &apos;text-green-700&apos; },
                { name: &apos;IUCN&apos;, label: &apos;世界自然保护联盟&apos;, color: &apos;text-emerald-700&apos; },
                { name: &apos;COPUOS&apos;, label: &apos;外空委&apos;, color: &apos;text-purple-700&apos; },
                { name: &apos;UNCTAD&apos;, label: &apos;贸发会议&apos;, color: &apos;text-indigo-700&apos; }
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href={`#${item.name.toLowerCase()}`}
                    className={`${item.color} font-bold hover:underline uppercase tracking-wide`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* 主要内容 */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* 头条新闻 */}
        <HeadlineNews />
        
        {/* G20 栏目 */}
        <div id="g20">
          <SectionNews 
            title="G20 · 二十国集团" 
            color="border-blue-700" 
            news={newsData.g20} 
            category="G20"
          />
        </div>
        
        {/* NAC 栏目 */}
        <div id="nac">
          <SectionNews 
            title="NAC · 不结盟运动" 
            color="border-red-700" 
            news={newsData.nac} 
            category="NAC"
          />
        </div>
        
        {/* 报纸版面 */}
        <NewspaperLayout />
        
        {/* IUCN 栏目 */}
        <div id="iucn">
          <SectionNews 
            title="IUCN · 世界自然保护联盟" 
            color="border-emerald-700" 
            news={newsData.iucn} 
            category="IUCN"
          />
        </div>
        
        {/* COPUOS 栏目 */}
        <div id="copuos">
          <SectionNews 
            title="COPUOS · 联合国外空委" 
            color="border-purple-700" 
            news={newsData.copuos} 
            category="COPUOS"
          />
        </div>
        
        {/* UNGA6 栏目 */}
        <div id="unga6">
          <SectionNews 
            title="UNGA6 · 联合国大会第六委员会" 
            color="border-green-700" 
            news={newsData.unga6} 
            category="UNGA6"
          />
        </div>
        
        {/* UNCTAD 栏目 */}
        <div id="unctad">
          <SectionNews 
            title="UNCTAD · 联合国贸发会议" 
            color="border-indigo-700" 
            news={newsData.unctad} 
            category="UNCTAD"
          />
        </div>
        
        {/* 视频专区 */}
        <VideoSection />
      </main>

      {/* 页脚 */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">MUN NEWS CENTER</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                模拟联合国主新闻中心致力于为全球青年外交官提供最权威、最及时的会议资讯和成果展示。
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">快速链接</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#g20" className="hover:text-white transition-colors">G20 峰会</a></li>
                <li><a href="#nac" className="hover:text-white transition-colors">不结盟运动</a></li>
                <li><a href="#iucn" className="hover:text-white transition-colors">世界自然保护联盟</a></li>
                <li><a href="#copuos" className="hover:text-white transition-colors">联合国外空委</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">联系我们</h4>
              <p className="text-gray-400 text-sm">
                Email: press@mun-news.org<br/>
                地址：模拟联合国新闻中心<br/>
                © 2024 MUN News Center. All rights reserved.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
            <p>本网站为模拟联合国活动专用，所有内容均为演示用途。</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
