import type {MarkerColorProps} from "@yandex/ymaps3-default-ui-theme/dist/types/markers/YMapDefaultMarker";

export default interface MapMarker{
    title: string;
    description: string;
    coordinates: number[];
    color: MarkerColorProps;
    isVisible: boolean;
    popupVisible: boolean;
}