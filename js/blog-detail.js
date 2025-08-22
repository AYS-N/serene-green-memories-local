
// microCMSの設定
const SERVICE_DOMAIN = import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN;
const API_KEY = import.meta.env.VITE_MICROCMS_API_KEY;

// DOM要素
const blogDetailTitle = document.getElementById('blog-detail-title');
const blogDetailDate = document.getElementById('blog-detail-date');
const blogDetailCategory = document.getElementById('blog-detail-category');
const blogDetailImage = document.getElementById('blog-detail-image');
const blogDetailContent = document.getElementById('blog-detail-content');
const blogCategories = document.getElementById('blog-categories');
const blogRecent = document.getElementById('blog-recent');

// URLからIDを取得
const urlParams = new URLSearchParams(window.location.search);
const blogId = urlParams.get('id');

// 日付をフォーマットする関数
function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}年${month}月${day}日`;
}

// ブログ詳細を取得する関数
async function fetchBlogDetail() {
  try {
    if (!blogId) {
      window.location.href = 'blog.html';
      return null;
    }
    
    if (!SERVICE_DOMAIN || !API_KEY) {
      if (blogDetailContent) {
        blogDetailContent.innerHTML = '<p class="info-message">microCMSの環境変数が設定されていません。</p>';
      }
      return null;
    }
    
    console.log('MicroCMS設定:', { SERVICE_DOMAIN, API_KEY: API_KEY ? 'あり' : 'なし', blogId });
    
    const url = `https://${SERVICE_DOMAIN}.microcms.io/api/v1/blogs/${blogId}`;
    console.log('リクエストURL:', url);
    
    const response = await fetch(url, {
      headers: {
        'X-API-KEY': API_KEY
      }
    });
    
    console.log('レスポンス:', response.status, response.statusText);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('エラー詳細:', errorText);
      throw new Error(`ブログ記事の取得に失敗しました: ${response.status} ${response.statusText}`);
    }
    
    const blog = await response.json();
    return blog;
  } catch (error) {
    console.error('Error:', error);
    
    // MicroCMSからの取得に失敗した場合はサンプルデータを表示
    console.log('MicroCMSからの取得に失敗しました。サンプルデータを表示します。');
    return getSampleBlogDetail(blogId);
  }
}

// サンプルブログ詳細データ
function getSampleBlogDetail(id) {
  const sampleBlogs = {
    'sample1': {
      id: 'sample1',
      title: '遺品整理の基本的な進め方｜心構えから実際の手順まで詳しく解説',
      content: `
        <h2>遺品整理とは</h2>
        <p>遺品整理は、故人が残された物品を整理・処分する作業です。単なる片付けではなく、故人を偲び、遺族の心の整理をつける大切な儀式でもあります。</p>
        
        <h2>遺品整理の基本的な流れ</h2>
        <h3>1. 心の準備</h3>
        <p>遺品整理は精神的に負担が大きい作業です。無理をせず、家族や親族と協力しながら進めることが大切です。</p>
        
        <h3>2. 重要書類の確認</h3>
        <p>まずは以下の重要書類を探し、整理しましょう：</p>
        <ul>
          <li>遺言書</li>
          <li>通帳・印鑑</li>
          <li>保険証書</li>
          <li>不動産関係書類</li>
        </ul>
        
        <h3>3. 仕分け作業</h3>
        <p>遺品を以下のカテゴリーに分けて整理します：</p>
        <ul>
          <li>貴重品・重要書類</li>
          <li>思い出の品</li>
          <li>リサイクル可能な物</li>
          <li>処分する物</li>
        </ul>
        
        <h2>専門業者への依頼を検討する場合</h2>
        <p>物量が多い場合や、遺族だけでは対応が困難な場合は、専門業者への依頼を検討しましょう。整理のミカタでは、丁寧で心のこもった遺品整理サービスを提供いたします。</p>
      `,
      publishedAt: '2024-12-15T09:00:00.000Z',
      category: {
        id: 'tips',
        name: '整理のコツ'
      },
      eyecatch: {
        url: 'images/service-estate.png',
        width: 800,
        height: 600
      }
    },
    'sample2': {
      id: 'sample2',
      title: '生前整理のメリットとは？始める最適なタイミングについて',
      content: `
        <h2>生前整理とは</h2>
        <p>生前整理は、自分自身で身の回りの整理を行うことです。終活の一環として、近年注目を集めています。</p>
        
        <h2>生前整理のメリット</h2>
        <h3>家族の負担軽減</h3>
        <p>事前に整理することで、遺族の負担を大幅に軽減できます。</p>
        
        <h3>自分らしい人生の振り返り</h3>
        <p>物の整理を通じて、これまでの人生を振り返る機会になります。</p>
        
        <h2>始める最適なタイミング</h2>
        <p>健康で判断力があるうちに始めることが重要です。60歳頃から少しずつ始めることをおすすめします。</p>
      `,
      publishedAt: '2024-12-10T10:30:00.000Z',
      category: {
        id: 'lifetime',
        name: '生前整理'
      },
      eyecatch: {
        url: 'images/service-lifetime-large.jpg',
        width: 800,
        height: 600
      }
    },
    'sample3': {
      id: 'sample3',
      title: '特殊清掃について知っておきたいこと',
      content: `
        <h2>特殊清掃とは</h2>
        <p>特殊清掃は、通常の清掃では対応できない特殊な環境での清掃作業です。専門的な知識と技術、適切な機材が必要な分野です。</p>
        
        <h2>特殊清掃が必要なケース</h2>
        <ul>
          <li>孤独死が発生した現場</li>
          <li>事故現場</li>
          <li>ゴミ屋敷の清掃</li>
          <li>害虫駆除が必要な現場</li>
        </ul>
        
        <h2>専門業者に依頼する理由</h2>
        <p>特殊清掃は感染症のリスクや精神的負担を伴います。適切な防護服や消毒剤を使用し、安全に作業を行う専門業者への依頼をおすすめします。</p>
      `,
      publishedAt: '2024-12-05T14:00:00.000Z',
      category: {
        id: 'cleanup',
        name: '特殊清掃'
      },
      eyecatch: {
        url: 'images/service-cleanup-large.jpg',
        width: 800,
        height: 600
      }
    }
  };
  
  return sampleBlogs[id] || sampleBlogs['sample1'];
}

// カテゴリ一覧を取得する関数
async function fetchCategories() {
  try {
    // まずカテゴリ専用エンドポイントを試す
    const categoryEndpoints = ['categories', 'category'];
    
    for (const endpoint of categoryEndpoints) {
      try {
        const response = await fetch(`https://${SERVICE_DOMAIN}.microcms.io/api/v1/${endpoint}`, {
          headers: {
            'X-API-KEY': API_KEY
          }
        });
        
        if (response.ok) {
          const data = await response.json();
          console.log('カテゴリ取得成功:', endpoint, data);
          return data.contents || data;
        }
      } catch (err) {
        continue;
      }
    }
    
    // カテゴリエンドポイントがない場合、ブログ記事からカテゴリを抽出
    const response = await fetch(`https://${SERVICE_DOMAIN}.microcms.io/api/v1/blogs`, {
      headers: {
        'X-API-KEY': API_KEY
      }
    });
    
    if (response.ok) {
      const data = await response.json();
      const uniqueCategories = [];
      const categoryMap = new Map();
      
      data.contents.forEach(blog => {
        if (blog.category && !categoryMap.has(blog.category.id)) {
          categoryMap.set(blog.category.id, {
            id: blog.category.id,
            name: blog.category.name || blog.category.id
          });
        }
      });
      
      return Array.from(categoryMap.values());
    }
    
    throw new Error('カテゴリの取得に失敗しました');
  } catch (error) {
    console.error('Error:', error);
    // サンプルカテゴリデータを返す
    return [
      { id: 'tips', name: '整理のコツ' },
      { id: 'lifetime', name: '生前整理' },
      { id: 'cleanup', name: '特殊清掃' },
      { id: 'waste', name: '不用品回収' }
    ];
  }
}

// 最新記事を取得する関数
async function fetchRecentBlogs() {
  try {
    const response = await fetch(`https://${SERVICE_DOMAIN}.microcms.io/api/v1/blogs?limit=5`, {
      headers: {
        'X-API-KEY': API_KEY
      }
    });
    
    if (!response.ok) {
      throw new Error('最新記事の取得に失敗しました');
    }
    
    const data = await response.json();
    return data.contents;
  } catch (error) {
    console.error('Error:', error);
    // サンプル最新記事データを返す
    return [
      {
        id: 'sample1',
        title: '遺品整理の基本的な進め方｜心構えから実際の手順まで詳しく解説',
        publishedAt: '2024-12-15T09:00:00.000Z'
      },
      {
        id: 'sample2',
        title: '生前整理のメリットとは？始める最適なタイミングについて',
        publishedAt: '2024-12-10T10:30:00.000Z'
      },
      {
        id: 'sample3',
        title: '特殊清掃について知っておきたいこと',
        publishedAt: '2024-12-05T14:00:00.000Z'
      }
    ];
  }
}

// ブログ詳細を表示する関数
async function displayBlogDetail() {
  const blog = await fetchBlogDetail();
  if (!blog) return;
  
  // タイトル設定
  document.title = `${blog.title} | 整理のミカタ - 遺品整理のプロフェッショナル`;
  blogDetailTitle.textContent = blog.title;
  
  // 日付設定
  const formattedDate = formatDate(blog.publishedAt);
  blogDetailDate.textContent = `公開日: ${formattedDate}`;
  blogDetailDate.setAttribute('datetime', blog.publishedAt);
  
  // カテゴリ設定
  if (blog.category) {
    blogDetailCategory.textContent = blog.category.name;
    blogDetailCategory.classList.add('active');
  } else {
    blogDetailCategory.style.display = 'none';
  }
  
  // アイキャッチ画像設定
  if (blog.eyecatch) {
    blogDetailImage.src = blog.eyecatch.url;
    blogDetailImage.alt = blog.title;
  } else {
    blogDetailImage.parentElement.style.display = 'none';
  }
  
  // 本文設定
  blogDetailContent.innerHTML = blog.content;
  
  // 関連記事を表示
  await displayCategories();
  await displayRecentBlogs();
}

// カテゴリ一覧を表示する関数
async function displayCategories() {
  const categories = await fetchCategories();
  if (categories.length === 0) return;
  
  let html = '';
  categories.forEach(category => {
    html += `<li><a href="blog.html?category=${category.id}">${category.name}</a></li>`;
  });
  
  blogCategories.innerHTML = html;
}

// 最新記事を表示する関数
async function displayRecentBlogs() {
  const blogs = await fetchRecentBlogs();
  if (blogs.length === 0) return;
  
  let html = '';
  blogs.forEach(blog => {
    if (blog.id !== blogId) {
      html += `<li>
        <a href="blog-detail.html?id=${blog.id}">
          <div class="blog-recent-title">${blog.title}</div>
          <div class="blog-recent-date">${formatDate(blog.publishedAt)}</div>
        </a>
      </li>`;
    }
  });
  
  blogRecent.innerHTML = html;
}

// ページ読み込み時に実行
document.addEventListener('DOMContentLoaded', () => {
  if (blogDetailContent) {
    displayBlogDetail();
  }
});
