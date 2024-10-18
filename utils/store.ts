import { create } from "zustand";

// Define the state and the setter function type
type PropertyState = {
  propertyId: string;
  price: number;
  amount: number;
  discount: number;
  setProperty: (value: number) => void;
};

// Create the Zustand store
export const useProperty = create<PropertyState>((set) => ({
  propertyId: "",
  price: 0,
  amount: 0,
  discount: 0,

  // Setter function to update the 'amount'
  setProperty: (value: number) => set((state) => ({ amount: value })),
}));
