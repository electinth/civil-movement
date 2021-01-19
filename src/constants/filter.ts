export interface Filter {
  key: string;
  label: string;
  mainColor?: string;
  accentColor?: string;
}

export const ORGANIZERS: Filter[] = [
  { key: 'youth', label: 'เยาวชน', mainColor: '#FFFFFF' },
  { key: 'civil', label: 'ประชาชน', mainColor: '#C1B1F0' },
  { key: 'party', label: 'พรรคการเมือง', mainColor: '#FF7A00' },
  {
    key: 'government',
    label: 'ภาครัฐและอื่นๆ',
    mainColor: '#1A171B',
    accentColor: '#FFFFFF',
  },
];

export const KEY_TOPICS: Filter[] = [
  { key: 'justice', label: 'ความยุติธรรม' },
  { key: 'government', label: 'ขับไล่รัฐบาล' },
  { key: 'constitution', label: 'รัฐธรรมนูญ' },
  { key: 'reform_monarchy', label: 'ปฏิรูปสถาบัน' },
  { key: 'protect_monarchy', label: 'ปกป้องสถาบัน' },
  { key: 'other', label: 'อื่นๆ' },
];
