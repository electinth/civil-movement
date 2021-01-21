declare module '*/event_all.csv' {
  interface MovementRawData {
    event_no: string;
    event_name: string;
    pre_event: string;
    reaction_type: string;
    player: string;
    date: string;
    location: string;
    cause: string;
    proposal: string;
    key_topic: string;
    time_show: string;
    x_desktop: string;
    y_desktop: string;
    x_mobile: string;
    y_mobile: string;
    hashtag: string;
    tag: string;
  }

  declare const movements: MovementRawData[];

  export = movements;
}
