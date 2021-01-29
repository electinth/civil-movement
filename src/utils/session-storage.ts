const IS_INSTRUCTION_SEEN_SESSTION_STORAGE_KEY = 'IS_INSTRUCTION_SEEN';

export const getIsInstructionSeen = (): boolean =>
  !!sessionStorage.getItem(IS_INSTRUCTION_SEEN_SESSTION_STORAGE_KEY);

export const markInstructionAsSeen = (): void =>
  sessionStorage.setItem(IS_INSTRUCTION_SEEN_SESSTION_STORAGE_KEY, 'true');
