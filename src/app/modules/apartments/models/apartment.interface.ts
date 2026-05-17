export interface Apartment {
  id: number;
  tower: string;
  apartmentNumber: string;
  floor: number;
  status: boolean;
  ownerName?: string;
  createdAt?: Date;
}
