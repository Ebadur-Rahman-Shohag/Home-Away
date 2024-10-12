import { IconType } from "react-icons";
import { FaMale,FaFemale,FaChild  } from "react-icons/fa";
import { GiTShirt,GiArmoredPants,GiRunningShoe,GiClothes,GiNecklaceDisplay,GiDress,GiSombrero    } from "react-icons/gi";

import { MdCabin } from "react-icons/md";

import { TbCaravan, TbTent, TbBuildingCottage } from "react-icons/tb";

import { GiWoodCabin, GiMushroomHouse } from "react-icons/gi";
import { PiWarehouse, PiLighthouse, PiVan } from "react-icons/pi";

import { GoContainer } from "react-icons/go";

type Category = {
  label: CategoryLabel;
  icon: IconType;
};

export type CategoryLabel =
  | "men"
  | "women"
  | "children"
  | "shirts"
  | "pants"
  | "shoes"
  | "suits"
  | "ties"
  | "saree"
  | "hats";

export const categories: Category[] = [
  {
    label: "men",
    icon: FaMale,
  },
  {
    label: "women",
    icon: FaFemale,
  },
  {
    label: "children",
    icon: FaChild,
  },
  {
    label: "shirts",
    icon: GiTShirt,
  },
  {
    label: "pants",
    icon: GiArmoredPants,
  },
  {
    label: "shoes",
    icon: GiRunningShoe ,
  },
  {
    label: "suits",
    icon: GiClothes ,
  },
  {
    label: "ties",
    icon: GiNecklaceDisplay ,
  },

  {
    label: "saree",
    icon: GiDress ,
  },
  {
    label: "hats",
    icon: GiSombrero ,
  },
];
