export interface newEventDTO {
  title: string;
  summary: string;
  poster: File;
  confirm: boolean;
  startingDate: Date;
  video: string;
  categoryIds: number[];
  eventLocationIds: number[];
}

export interface eventDTO {
  title: string;
  summary: string;
  poster: string;
  confirm: boolean;
  startingDate: Date;
  video: string;
}
