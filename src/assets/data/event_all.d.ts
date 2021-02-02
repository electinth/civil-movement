declare module '*/event_all.csv' {
  interface MovementRawData {
    event_no: string;
    event_name: string;
    pre_event: number;
    reaction_type: number;
    player: number;
    date: Date;
    location: string;
    cause: string;
    proposal: string;
    key_topic: number[];
    time_show: number;
    x_desktop: number;
    y_desktop: number;
    x_mobile: number;
    y_mobile: number;
    hashtag: string;
    tag: string;
  }

  declare const movements: MovementRawData[];

  export = movements;
}
