const projectImplementationDetails = [
  [
    'REST API로 드론 호출·순찰 상태·위치 데이터를 연동하고, 화면 상태에 따라 사용자에게 진행 상황을 표시했습니다.',
    'Flutter와 Riverpod을 활용해 호출·위치·위험요소 정보를 화면 단위 상태로 관리했습니다.',
    '위치 추적과 위험요소 표시 흐름을 구성해 보호자가 필요한 정보를 빠르게 확인할 수 있도록 구현했습니다.'
  ],
  [
    'Jetpack Compose 기반 화면으로 탐지 결과와 차단 상태를 직관적으로 확인할 수 있도록 UI를 개선했습니다.',
    'Retrofit2를 통해 탐지·차단 관련 API를 연동하고, 비동기 응답을 화면 상태에 반영했습니다.',
    'AI 탐지 결과와 KISA 데이터를 활용하는 기능의 유지보수 및 고도화에 참여했습니다.'
  ],
  [
    'Jetpack Glance와 DataStore를 활용해 앱에서 설정한 데이터를 홈 화면 위젯과 공유했습니다.',
    'Supabase에서 아티스트별 이미지 데이터를 조회하고, 콘텐츠를 확장할 수 있는 구조로 관리했습니다.',
    'Coil로 이미지를 Bitmap으로 변환하고 캐싱해 위젯 이미지 렌더링을 최적화했습니다.'
  ],
  [
    'Riverpod & Freezed 기반의 단방향 상태 관리(State Management)를 적용했습니다. 화면(UI)이 데이터를 직접 수정하지 않고, 상태 변경의 경로를 Notifier 한곳으로 모은 구조를 지향했습니다.',
    '머신러닝 Kit을 활용한 모서리 보정 촬영 및 갤러리 이미지 크롭 기능으로 구성했습니다.',
    'SQLite 로컬 저장소와 Riverpod 기반 상태 관리를 적용해 수집 현황·지출 금액·바인더별 진행률을 관리했습니다.'
  ]
];

const competencySection = document.querySelector('#competency');
const experienceSection = document.querySelector('#experience');

if (competencySection && experienceSection) {
  competencySection.querySelector('.section-heading .label').textContent = '01 / JOB CAPABILITIES';

  const experienceList = experienceSection.querySelector('.experience-list');
  experienceList.insertAdjacentHTML('afterbegin', `
    <article>
      <div class="date">2026.05 — 재직중</div>
      <div><h3>(주)서창전기통신</h3><p>ESS솔루션 개발부 · 주임</p></div>
      <div class="work"><b>SCLOUD ESS 모니터링 시스템 개발</b><p>태양광·피크컷 등 ESS 저장 에너지를 모니터링하고 제어하는 시스템의 개발을 지원하며, 태양광 발전량 예측 모델 개발에 참여하고 있습니다.</p></div>
      <div class="work-tags"><span>Vue</span><span>Spring Boot</span><span>Python</span><span>Android</span></div>
    </article>
  `);
  const combinedExperience = document.createElement('div');
  combinedExperience.className = 'combined-experience';
  combinedExperience.innerHTML = '<div class="capability-subhead"><p>PROFESSIONAL EXPERIENCE</p></div>';
  combinedExperience.append(experienceList);
  competencySection.querySelector('.section-heading').insertAdjacentElement('afterend', combinedExperience);

  const competencyGrid = competencySection.querySelector('.competency-grid');
  const competencySubhead = document.createElement('div');
  competencySubhead.className = 'competency-subhead';
  competencySubhead.textContent = '02 / CORE COMPETENCIES';
  competencyGrid.insertAdjacentElement('beforebegin', competencySubhead);
  experienceSection.remove();
}

document.querySelector('.hero-title h1')?.remove();
document.querySelectorAll('.section-heading h2').forEach(title => title.remove());
document.querySelector('#projects .section-heading .label').textContent = '03 / PROJECTS';

const resceneWidgetImages = [
  ['리센느_메인화면.gif', '리센느 포토 위젯 메인 화면'],
  ['리센느_배경화면.gif', '리센느 포토 위젯 배경화면'],
  ['리센느_위젯화면.gif', '리센느 포토 위젯 위젯 화면']
];

document.querySelectorAll('.project-visual.widget img').forEach((image, index) => {
  const [src, alt] = resceneWidgetImages[index];
  image.src = src;
  image.alt = alt;
});

const additionalProjectScreens = [
  ['.project-visual.drone', '드론순찰_최대.JPG', '드로니캅 드론 순찰 상세 화면'],
  ['.project-visual.ycall', '악성앱메인.JPG', '와이콜미 악성 앱 탐지 화면']
];

additionalProjectScreens.forEach(([selector, src, alt]) => {
  const visual = document.querySelector(selector);
  if (visual && visual.querySelectorAll('img').length === 2) {
    const image = document.createElement('img');
    image.src = src;
    image.alt = alt;
    visual.append(image);
  }
});

const droneMainScreens = [
  ['등록메뉴.jpg', '드로니캅 메인 메뉴 화면'],
  ['드론긴급호출.jpg', '드로니캅 지도 기반 메인 화면'],
  ['드론순찰.png', '드로니캅 드론 순찰 화면']
];

document.querySelectorAll('.project-visual.drone img').forEach((image, index) => {
  const [src, alt] = droneMainScreens[index];
  image.src = src;
  image.alt = alt;
});

const ycallmeMainScreens = [
  ['실시간탐지2.PNG', '와이콜미 실시간 탐지 화면'],
  ['악성앱메인.JPG', '와이콜미 홈 메인 화면'],
  ['AI탐지결과.jpg', '와이콜미 AI 탐지 결과 화면']
];

document.querySelectorAll('.project-visual.ycall img').forEach((image, index) => {
  const [src, alt] = ycallmeMainScreens[index];
  image.src = src;
  image.alt = alt;
});

const projectsSection = document.querySelector('#projects');
if (projectsSection && !projectsSection.querySelector('.photo-binder')) {
  const photoBinder = document.createElement('article');
  photoBinder.className = 'project photo-binder reverse';
  photoBinder.innerHTML = `
    <div class="project-visual binder">
      <img src="바인더1.jpg" alt="포토바인더 바인더 화면 1">
      <img src="바인더2.jpg" alt="포토바인더 바인더 화면 2">
      <img src="바인더3.jpg" alt="포토바인더 바인더 표지 3">
    </div>
    <div class="project-detail">
      <div class="project-title"><div><p class="label">SIDE PROJECT</p><h3>포토 바인더 <em>Photo Binder</em></h3></div><a href="https://github.com/cho123456789/photo_card" target="_blank" rel="noreferrer">GitHub ↗</a></div>
      <p class="project-overview">실물 바인더처럼 포토카드를 정리하고, 보유 현황과 구매 정보를 관리하는 Flutter 기반 개인 컬렉션 앱</p>
      <div class="evidence">
        <div><b>담당 역할</b><p>기획 · 디자인 · Flutter 개발</p></div>
        <div><b>주요 구현</b><p>바인더·슬롯 관리, 문서 스캐너 기반 카드 등록, 수집률·지출 금액 관리</p></div>
        <div><b>사용 기술</b><p>Flutter · Dart · Riverpod · SQLite(sqflite) · Clean Architecture · ML Kit</p></div>
      </div>
    </div>
  `;
  projectsSection.append(photoBinder);

}

document.querySelectorAll('.project').forEach((project, index) => {
  const evidence = project.querySelector('.evidence');
  const details = projectImplementationDetails[index];
  if (!evidence || !details) return;

  const mainImplementation = evidence.children[1];
  const summary = mainImplementation?.querySelector('p');
  if (!mainImplementation || !summary) return;

  const detailCopy = document.createElement('div');
  detailCopy.className = 'implementation-copy';
  summary.replaceWith(detailCopy);
  detailCopy.append(summary);
  detailCopy.insertAdjacentHTML('beforeend', `<ul>${details.map(detail => `<li>${detail}</li>`).join('')}</ul>`);
});
