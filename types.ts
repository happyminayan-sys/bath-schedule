
export type ColorType = 'pink' | 'blue' | 'yellow' | 'green' | 'purple' | 'gray' | 'white' | 'orange';

export interface ScheduleSlot {
  text: string; // HTML string for content
  color: ColorType; // Background color for the slot
}

export interface DaySchedule {
  slot1: ScheduleSlot;
  slot2: ScheduleSlot;
  slot3: ScheduleSlot;
}

export interface MasterSchedule {
  [key: number]: DaySchedule; // 0=Sun, 1=Mon, ... 6=Sat
  // 週番号(0-4)ごとのデフォルト設定
  weeklyFooters?: { [weekIdx: number]: { text: string, color: ColorType } };
  // 互換性のための古いフィールド（任意）
  weeklyFooter?: { text: string, color: ColorType };
}

export interface WeeklySchedule {
    [sundayDate: string]: { text: string, color: ColorType };
}

export interface MonthlyOverrides {
  [dateKey: string]: Partial<DaySchedule>;
}

export interface Resident {
  name: string;
}
