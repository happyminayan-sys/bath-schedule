
import { ColorType, MasterSchedule } from './types';

export const BG_COLOR_MAP: Record<ColorType, { bg: string, label: string, hex: string }> = {
  pink:   { bg: 'bg-red-100', label: 'ピンク', hex: '#fee2e2' },
  blue:   { bg: 'bg-blue-100', label: '青', hex: '#dbeafe' },
  yellow: { bg: 'bg-yellow-200', label: '黄', hex: '#fef08a' },
  green:  { bg: 'bg-green-200', label: '緑', hex: '#bbf7d0' },
  purple: { bg: 'bg-purple-100', label: '紫', hex: '#f3e8ff' },
  gray:   { bg: 'bg-gray-100', label: '灰', hex: '#f3f4f6' },
  white:  { bg: 'bg-white', label: '白', hex: '#ffffff' },
  orange: { bg: 'bg-orange-200', label: '橙', hex: '#fed7aa' },
};

export const INITIAL_MASTER: MasterSchedule = {
  0: { // Sun
    slot1: { text: '駒田守彦<br>窪山裕子<br>2東寺嶋', color: 'pink' },
    slot2: { text: '水谷藤子<br>山田三枝子', color: 'gray' },
    slot3: { text: '', color: 'white' },
  },
  1: { // Mon
    slot1: { text: '吉田すえ<br>田中淑子<br>西 太田', color: 'pink' },
    slot2: { text: '家木洋子<br>西①星合<br>谷口', color: 'pink' }, 
    slot3: { text: '訪問販売', color: 'white' }, 
  },
  2: { // Tue
    slot1: { text: '中村弘<br>増田久雄', color: 'gray' },
    slot2: { text: 'リハビリ<br>清掃<br>(24Hシート作成)', color: 'yellow' },
    slot3: { text: '', color: 'white' },
  },
  3: { // Wed
    slot1: { text: '駒田守彦<br>窪山裕子<br>2東寺嶋', color: 'pink' },
    slot2: { text: '松本美好<br>西 紀平', color: 'pink' },
    slot3: { text: 'ヒロタ', color: 'white' },
  },
  4: { // Thu
    slot1: { text: '水谷藤子<br>山田三枝子', color: 'gray' },
    slot2: { text: '家木洋子<br>西①星合<br>谷口', color: 'pink' },
    slot3: { text: '', color: 'white' },
  },
  5: { // Fri
    slot1: { text: 'リハビリ<br>吉田すえ<br>田中淑子', color: 'pink' }, 
    slot2: { text: 'シーツ交換', color: 'yellow' },
    slot3: { text: '回診', color: 'white' },
  },
  6: { // Sat
    slot1: { text: '松本美好<br>西 紀平', color: 'pink' },
    slot2: { text: '中村弘<br>増田久雄', color: 'gray' },
    slot3: { text: '精神科', color: 'white' },
  },
  weeklyFooters: {
    0: { text: '衛生チェック(　)', color: 'yellow' },
    1: { text: '衛生チェック(　)', color: 'yellow' },
    2: { text: '衛生チェック(　)', color: 'yellow' },
    3: { text: '衛生チェック(　)', color: 'yellow' },
    4: { text: '衛生チェック(　)', color: 'yellow' },
  }
};

export const INITIAL_RESIDENTS = [
  '駒田守彦', '窪山裕子', '水谷藤子', '山田三枝子',
  '吉田すえ', '田中淑子', '家木洋子', '松本美好',
  '中村弘', '増田久雄', '西', '太田', '星合', '谷口', '紀平'
];
