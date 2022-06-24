export interface newHolderDTO {
  name: string;
  startingDate: Date;
  picture: File;
  Introduction: string;
}

export interface holderDTO {
  id: number;
  name: string;
  startingDate: Date;
  picture: string;
  Introduction: string;
}

export interface holderEventDto{
  id: number;
  name: string;
  contactperson:string;
  picture:string;
}
