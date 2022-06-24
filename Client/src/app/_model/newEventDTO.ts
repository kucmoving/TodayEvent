import { categoryDTO } from "./newCategoryDTO";
import { eventLocationDTO } from "./newEventLocationDTO";
import { holderEventDTO } from "./newHolderDTO";

export interface newEventDTO {
  title: string;
  introduction: string;
  picture: File;
  confirm: boolean;
  startingDate: Date;
  video: string;
  categoryIds: number[];
  eventLocationIds: number[];
  holders: holderEventDTO[];
}

export interface eventDTO {
  title: string;
  introduction: string;
  picture: string;
  confirm: boolean;
  startingDate: Date;
  video: string;
}

export interface EventPOstGetDTO{
  category: categoryDTO[];
  eventLocation: eventLocationDTO[];
}


