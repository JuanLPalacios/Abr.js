import { SequentialDataView } from "sequential-data-view-js";
export declare const INT16_MAX = 65535;
export declare const abrBrushes: {
    map: {
        [key: string]: AbrBrush;
    };
    get(key: string): AbrBrush;
    set(key: string, value: AbrBrush): void;
    clear(): void;
    list(): unknown[];
};
export declare function loadAbrBrushes(file: File): Promise<unknown[]>;
export declare function loadAbrFromArrayBuffer(buffer: ArrayBuffer, filename: string): Promise<unknown[]>;
export declare const abrReadContent: (abrSdv: SequentialDataView) => AbrHeader;
export declare function abrSupportedContent(abrHeader: AbrHeader): boolean;
export declare function abrReach8BimSection(abrSdv: SequentialDataView, name: string): void;
export declare function charCodeComparison(buffer: number[], str: string, num: number): boolean;
export declare function loadAbrBrush(abrSdv: SequentialDataView, abrHeader: AbrHeader, filename: string, imageId: number, id: number): Promise<number>;
