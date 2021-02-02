export interface Filter {
  key: number;
  label: string;
  mainColor?: string;
  accentColor?: string;
}

export const ORGANIZERS: Filter[] = [
  { key: 1, label: 'เยาวชน', mainColor: '#FFFFFF' },
  { key: 2, label: 'ประชาชน', mainColor: '#C1B1F0' },
  { key: 3, label: 'พรรคการเมือง', mainColor: '#FF7A00' },
  {
    key: 4,
    label: 'ภาครัฐและอื่นๆ',
    mainColor: '#1A171B',
    accentColor: '#FFFFFF',
  },
];

export const KEY_TOPICS: Filter[] = [
  { key: 1, label: 'ความยุติธรรม' },
  { key: 2, label: 'ขับไล่รัฐบาล' },
  { key: 3, label: 'แก้รัฐธรรมนูญ' },
  { key: 4, label: 'ปฏิรูปสถาบัน' },
  { key: 5, label: 'ปกป้องสถาบัน' },
  { key: 6, label: 'อื่นๆ' },
];
