export interface Profile {
  title: string;
  name: string;
  birthAndAddress: string;
  phoneAndEmail: string;
  portfolioLabel: string;
  portfolioUrl: string;
}

export const profile: Profile = {
  title: 'UX Design · UI Developer',
  name: '남협수',
  birthAndAddress: '1975.05 · 서울시 은평구',
  phoneAndEmail: 'a11ymarkup@gmail.com',
  portfolioLabel: 'portfolio.sapjil.net',
  portfolioUrl: 'https://portfolio.sapjil.net',
};

export const summaryTags: string[] = [
  '기술등급 고급',
  '경력 20년+ (해외 7년 포함)',
  'React · Vue · 웹접근성',
  'JLPT 1급',
];

export interface Career {
  period: string;
  company: string;
  title: string;
  duty: string;
}

export const careers: Career[] = [
  {
    period: '2018.01 ~ 현재',
    company: '프리랜서',
    title: '',
    duty: '퍼블리싱 / 웹 디자인',
  },
  {
    period: '2015.04 ~ 2017.12',
    company: '(주)플라이트그래프',
    title: '차장',
    duty: '퍼블리싱 / 웹 디자인',
  },
  {
    period: '2013.06 ~ 2015.03',
    company: '(주)크루메이트',
    title: '차장',
    duty: '퍼블리싱 / 웹 디자인',
  },
  {
    period: '2008.01 ~ 2013.03',
    company: '(주)TYO',
    title: '팀원 · 일본 근무',
    duty: '퍼블리싱 / 웹 디자인',
  },
  {
    period: '2006.01 ~ 2007.12',
    company: '(주)Azincourt',
    title: '계약직 · 일본 근무',
    duty: '퍼블리싱 / 웹 디자인',
  },
  {
    period: '2001.06 ~ 2003.03',
    company: '프리랜서',
    title: '',
    duty: '웹 디자인',
  },
  {
    period: '1999.03 ~ 2001.05',
    company: '(유)콤마디자인',
    title: '사원',
    duty: '광고 & 웹 디자인 / 퍼블리싱',
  },
];

export type Platform = 'Mobile' | 'Web';

export interface Project {
  period: string;
  name: string;
  client: string;
  role: string;
  stack: string[];
  link?: string;
  platform?: Platform[];
}

export const projects: Project[] = [
  {
    period: '2026.07 ~ 2026.10',
    name: 'AI 컨시어지 서비스 구축 프로젝트',
    platform: ['Mobile'],
    client: '키움증권 · 증권',
    role: 'React 퍼블리싱 전담 (SI/PA)',
    stack: ['React', 'TypeScript', 'Tailwind', 'Scss', 'Figma', 'Git', 'Codex', 'Claude Code', 'Claude Design'],
  },
  {
    period: '2026.03 ~ 2026.06',
    name: 'SIDE PROJECT with AI',
    platform: ['Web', 'Mobile'],
    client: '',
    role: 'AI를 활용한 서비스 구축 실험(개인 프로젝트)',
    stack: [
      'React',
      'TypeScript',
      'Tailwind',
      'Google AI Studio',
      'Figma',
      'Git',
      'Claude Code',
      'Codex',
      'ChatGPT',
      'Vercel',
      'supabase',
      'cloudflare',
    ],
    // link: 'https://stepintokorea.minamiland.com/',
  },
  {
    period: '2025.09 ~ 2026.01',
    name: 'AIA iMap 건강정보 기반 보장분석 개발',
    platform: ['Web'],
    client: 'AIA · 보험',
    role: 'React 퍼블리싱 전담 (SI/PA)',
    stack: ['React', 'TypeScript', 'Scss', 'Figma', 'Git', 'Jira'],
    link: 'https://portfolio.sapjil.net/review/uYtC2el8pxhL',
  },
  {
    period: '2025.04 ~ 2025.06',
    name: '미래엔 AI 디지털 교과서',
    platform: ['Web'],
    client: '미래엔 · 교육 플랫폼',
    role: 'React 퍼블리싱(TSX) 지원, 모노레포 (SI/PA)',
    stack: ['React', 'TypeScript', 'Radix', 'Scss', 'Figma', 'Git'],
    link: 'https://portfolio.sapjil.net/review/cG9wKf1OKF9',
  },
  {
    period: '2024.08 ~ 2025.01',
    name: '삼성전자 RCS 시스템운영',
    platform: ['Web'],
    client: '삼성전자 · 시스템',
    role: 'Vue 퍼블리싱 전담 (SR/PA)',
    stack: ['Vue3', 'Scss', 'Figma', 'Git'],
    link: 'https://portfolio.sapjil.net/review/d5UBTLGX6b',
  },
  {
    period: '2024.05 ~ 2024.08',
    name: '우리은행 e-스포츠관 구축',
    platform: ['Mobile'],
    client: '우리은행 · 콘텐츠',
    role: 'React 퍼블리싱(JSX) 전담 (SI/PL)',
    stack: ['React', 'Next.js', 'Tailwind', 'Scss', 'Figma', 'Git'],
    link: 'https://portfolio.sapjil.net/review/j2X4BOFmLZ',
  },
  {
    period: '2023.10 ~ 2023.12',
    name: 'SK mySUNI 학습지원 플랫폼 운영',
    platform: ['Web'],
    client: 'SK · 교육 플랫폼',
    role: 'React 퍼블리싱(JSX) 전담 (SM,SR/PA)',
    stack: ['React', 'Semantic UI', 'Scss', 'Figma', 'Git'],
    link: 'https://portfolio.sapjil.net/review/nnRBHIa1D',
  },
  {
    period: '2023.05 ~ 2023.09',
    name: 'KB라이프 생명보험 어플리케이션 운영',
    platform: ['Web'],
    client: 'KB라이프 · 시스템',
    role: 'React 퍼블리싱(JSX) 전담 (SM,SR/PA)',
    stack: ['React', 'MUI', 'Scss', 'Git', 'Jira'],
    link: 'https://portfolio.sapjil.net/review/sV0mlG3i3Z',
  },
  {
    period: '2022.08 ~ 2023.02',
    name: 'NH오늘농사 2차 종합영농플랫폼 구축',
    platform: ['Mobile'],
    client: '농협중앙회 · 농업 플랫폼',
    role: 'HTML/CSS/스크립트 공통 작업, 웹접근성 (SI/PL)',
    stack: ['HTML/CSS/jQuery', 'Mobiscroll', 'SVN'],
    link: 'https://portfolio.sapjil.net/review/xrI5okdDQb',
  },
  {
    period: '2022.04 ~ 2022.07',
    name: 'NH콕뱅크 고도화 기획디자인',
    platform: ['Mobile'],
    client: '농협중앙회 · 뱅킹',
    role: '공통 작업, 조회/송금 담당, 웹접근성 (SI/PA)',
    stack: ['HTML/CSS/jQuery', 'SVN'],
    link: 'https://portfolio.sapjil.net/review/z3BpuD78Tm3d',
  },
  {
    period: '2021.01 ~ 2022.04',
    name: '우리WON뱅킹 전담반 운영',
    platform: ['Mobile'],
    client: '우리은행 · 뱅킹',
    role: '신규 서비스·리뉴얼·가이드 운영 (SM,SR/PA)',
    stack: ['HTML/CSS/jQuery', 'GSAP', 'Zeplin', 'Figma', 'Redmine', 'SVN'],
    link: 'https://portfolio.sapjil.net/review/lE3HV01py0Wp',
  },
  {
    period: '2020.12 ~ 2021.01',
    name: 'Meta On Meta',
    platform: ['Mobile'],
    client: '항공권 비교 및 예약 · 항공',
    role: '퍼블리싱 및 디자인 전담 (SI)',
    stack: ['HTML/CSS/jQuery', 'Gulp', 'Scss', 'Figma', 'Git'],
    link: 'https://portfolio.sapjil.net/review/vtDzjIUVrc',
  },
  {
    period: '2020.10 ~ 2020.12',
    name: 'KB Next LiivOn',
    platform: ['Mobile'],
    client: 'KB · 부동산',
    role: '퍼블리싱 지원 (SI/PA)',
    stack: ['Vue', 'Scss', 'Zeplin', 'Jira', 'Git'],
  },
  {
    period: '2020.02 ~ 2020.08',
    name: '온라인 플랫폼 서비스 구축 2차',
    platform: ['Mobile'],
    client: '국기원 · 플랫폼',
    role: '기획(90%), 퍼블리싱 전담 (SI)',
    stack: ['HTML/CSS/jQuery', 'Gulp', 'Scss', 'SVN'],
    link: 'https://portfolio.sapjil.net/review/l1aGARVwuI',
  },
  {
    period: '2019.10 ~ 2019.12',
    name: '넥스트레벨',
    platform: ['Web'],
    client: '넥센 · 타이어 이커머스',
    role: '모바일 퍼블리싱 전담 (SI/PA)',
    stack: ['HTML/CSS/jQuery', 'Scss', 'SVN'],
    link: 'https://portfolio.sapjil.net/review/F5Ho1sJCuXee',
  },
  {
    period: '2019.03 ~ 2019.10',
    name: '온라인 플랫폼 서비스 구축 1차',
    platform: ['Mobile'],
    client: '국기원 · 플랫폼',
    role: '기획(50%), 퍼블리싱 전담 (SI)',
    stack: ['HTML/CSS/jQuery', 'XD', 'Gulp', 'Scss', 'Redmine', 'SVN'],
    link: 'https://portfolio.sapjil.net/review/GuIJTY97ojNi',
  },
  {
    period: '2018.08 ~ 2018.11',
    name: 'CJ ENM AMEX 고도화',
    platform: ['Web'],
    client: 'CJ ENM · 시스템',
    role: '퍼블리싱 전담 (SI)',
    stack: ['Vue', 'Vuetify', 'Scss', 'Git'],
  },
  {
    period: '2018.01 ~ 2018.03',
    name: '삼성패스 백오피스 리뉴얼',
    platform: ['Web'],
    client: '삼성 · 시스템',
    role: '퍼블리싱 전담 (SI)',
    stack: ['HTML/CSS/jQuery', 'Scss', 'SVN'],
  },
  {
    period: '2013.06 ~ 2017.12',
    name: '플라이트그래프',
    platform: ['Web', 'Mobile'],
    client: '항공권 비교 및 예약 · 항공',
    role: '디자인 및 퍼블리싱 전담 (SI,SM)',
    stack: ['HTML/CSS/jQuery', 'Gulp', 'GitLab'],
    link: 'https://portfolio.sapjil.net/review/27z0Opeyq2l',
  },
  {
    period: '2015.07 ~ 2016.02',
    name: '티웨이항공 사이트 리뉴얼',
    platform: ['Web'],
    client: '티웨이항공 · 항공',
    role: '공통 작업, 웹접근성 (SI/PL)',
    stack: ['HTML/CSS/jQuery', 'SVN'],
  },
  {
    period: '2014.12 ~ 2015.05',
    name: '동원 홈푸드 온라인몰',
    platform: ['Web'],
    client: '동원 · 푸드',
    role: 'HTML/CSS/스크립트 공통 작업 (SI/PL)',
    stack: ['HTML/CSS/jQuery', 'SVN'],
  },
  {
    period: '2008.01 ~ 2013.03',
    name: '웹사이트 구축 및 운영',
    platform: ['Web', 'Mobile'],
    client: '',
    role: '일본 업체(SAPPORO · KAI · FOX · SUBARU 등)의 디자인, 퍼블리싱 (SI,SM/PA,PL)',
    stack: ['HTML/CSS/jQuery', 'Wordpress', 'SVN'],
  },
];

export interface DateEntry {
  date: string;
  label: string;
}

export const education: DateEntry[] = [
  { date: '2008.03', label: '메이세이대학교 조형예술학과 졸업' },
  { date: '1999.02', label: '인덕대학교 시각디자인과 졸업' },
  // { date: '1994.02', label: '충암고등학교 졸업' },
];

export const certifications: DateEntry[] = [
  { date: '2005.02', label: 'JLPT 1급' },
  {
    date: '2003.10 ~ 2005.03',
    label: '일본어 어학(오사카)',
  },
  // { date: '병역', label: '만기 전역' },
];
