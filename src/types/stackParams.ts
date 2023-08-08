import { IFood } from "../interfaces/IFood";

export type StackParamList = {
    BoardScreen: undefined;
    Home: undefined;
    DetailsScreen: { food: IFood };
    Cart: undefined;
};