export interface newHolderDTO {
  name: string;
  startingDate: Date;
  picture: File;
  introduction: string;
}

export interface holderDTO {
  id: number;
  name: string;
  startingDate: Date;
  picture: string;
  Introduction: string;
}

export interface holderEventDTO{
  id: number;
  name: string;
  contactperson:string;
  picture:string;
}

