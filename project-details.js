const projectImplementationDetails = [
  [
    'Flutter·Kotlin 네이티브 MethodChannel 연동 기반 백그라운드 위치 측정',
    '네이버 지도·마커 API 및 REST API 기반 드론·사용자 실시간 위치 확인·알림',
    'FCM 기반 세이프존 및 안전 경로 이탈 알림'
  ],
  [
    'Java/XML 기반 레거시 Android 화면의 Kotlin·Jetpack Compose 전환',
    'REST API·Retrofit2 통신, Room·SharedPreferences 데이터 관리',
    'Figma 기반 UI 적용 및 QA팀 협업 기반 버그 개선'
  ],
  [
    'Jetpack Glance와 DataStore를 활용해 앱에서 설정한 데이터를 홈 화면 위젯과 공유했습니다.',
    'Supabase 기반 아티스트별 이미지 조회·확장 가능한 콘텐츠 관리 구조',
    'Compose·위젯에 Coil·동일 ImageLoader 적용: AsyncImage·SubcomposeAsyncImage 상태 처리, ImageRequest 크기 최적화·crossfade, Bitmap 변환·캐시 정책 통일',
    'GlanceAppWidget Provider·Receiver 역할 분리: Provider 화면·상태 구성, Receiver 이미지 다운로드·캐시·위젯 갱신'
  ],
  [
    'Riverpod·Freezed 기반 단방향 상태 관리',
    'ML Kit 기반 모서리 보정 촬영·갤러리 이미지 크롭',
    'SQLite 로컬 저장소·Riverpod 기반 수집 현황·지출 금액·바인더별 진행률 관리'
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

const droneCopProject = document.querySelector('#projects .project');
if (droneCopProject) {
  const droneCopDetail = droneCopProject.querySelector('.project-detail');
  droneCopDetail.innerHTML = `
    <div class="project-title">
      <div><p class="label">COMPANY PROJECT</p><h3>드로니캅 <em>Android·Flutter 어린이 안전 서비스</em></h3></div>
      <a href="https://play.google.com/store/apps/details?id=kr.co.igis.safehomecomingapp&hl=ko" target="_blank" rel="noreferrer">Google Play Store에서 보기 ↗</a>
    </div>
    <p class="project-period">기간: 2024.11 - 2026.02 / 역할: 모바일 개발</p>
    <p class="project-overview">드론·GPS 위치 정보와 실시간 알림을 결합한 어린이 안전 등하교 서비스 모바일 앱 개발·상용화</p>
    <div class="evidence">
      <div class="implementation"><b>기능 구현</b><p>실시간 위치 및 안전 알림 기능 개발</p></div>
      <div><b>운영·배포</b><p>Firebase Crashlytics 기반 크래시 로그 분석·안정성 개선<br>Google Play Console·App Store Connect 배포·릴리즈 관리</p></div>
      <div><b>현장 검증</b><p>대덕초등학교·지구대 현장 시연 3회 피드백 기반 GPS 오차·알림 지연 개선</p></div>
      <div><b>기술</b><p>Flutter · Kotlin · Riverpod · MethodChannel · Firebase FCM · REST API · 네이버 지도 API</p></div>
    </div>
  `;
}

const yCallMeProject = document.querySelector('.project-visual.ycall')?.closest('.project');
if (yCallMeProject) {
  const yCallMeDetail = yCallMeProject.querySelector('.project-detail');
  yCallMeDetail.innerHTML = `
    <div class="project-title">
      <div><p class="label">COMPANY PROJECT</p><h3>와이콜미 <em>AI 기반 악성 앱 탐지 보안 솔루션</em></h3></div>
      <a href="https://play.google.com/store/apps/details?id=com.yhdatabase.solution.ycall&hl=ko" target="_blank" rel="noreferrer">Google Play Store에서 보기 ↗</a>
    </div>
    <p class="project-period">기간: 2023.02 - 2024.01 / 역할: Android 개발</p>
    <p class="project-overview">실시간 악성 앱 탐지·보안 대응 기능을 제공하는 Android 애플리케이션 개발·운영</p>
    <div class="evidence">
      <div class="implementation"><b>기능 구현</b><p>Android UI·데이터 관리 기능 개발</p></div>
      <div><b>검증·배포</b><p>전시회 사용자 피드백 기반 버그 수정<br>Google Play Store 출시·운영, 2024년 KISA 협력과제 1위 수상 기여</p></div>
      <div><b>기술</b><p>Kotlin · Jetpack Compose · Coroutines · Flow · MVVM · Retrofit2 · Room · REST API</p></div>
    </div>
  `;
}

const photoWidgetEvidence = document.querySelector('.project-visual.widget')?.closest('.project')?.querySelector('.evidence');
if (photoWidgetEvidence && !photoWidgetEvidence.querySelector('.validation-deployment')) {
  photoWidgetEvidence.insertAdjacentHTML('beforeend', `
    <div class="validation-deployment"><b>검증·배포</b><p>각 팬 커뮤니티·SNS 배포, Firebase Analytics 기반 사용자 관리</p></div>
  `);
}

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
        <div><b>검증·배포</b><p>Play Store 내부 테스트 등록 및 테스트 실행 준비 중</p></div>
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

  const mainImplementation = evidence.querySelector('.implementation') || evidence.children[1];
  const summary = mainImplementation?.querySelector('p');
  if (!mainImplementation || !summary) return;

  const detailCopy = document.createElement('div');
  detailCopy.className = 'implementation-copy';
  summary.replaceWith(detailCopy);
  detailCopy.append(summary);
  detailCopy.insertAdjacentHTML('beforeend', `<ul>${details.map(detail => `<li>${detail}</li>`).join('')}</ul>`);
});
