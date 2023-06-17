import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  btnType?: "button" | "submit";
  // rightIcon?: string;
  textStyles?: string;
  isDisabled?: boolean;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  containerStyles?: string;
}

export interface SearchBarProps {
  title: string;
  options: object[];
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManuFacturer: (manufacturer: string) => void;
}

export interface CarProps {
  model: string;
  make: string;
  mpg: number;
  transmission: string;
  year: number;
  drive: string;
  city_mpg: number;
}

export interface FilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
}

export interface HomeProps {
  searchParams: FilterProps;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}
