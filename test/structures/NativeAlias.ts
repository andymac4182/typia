import { Spoiler } from "../internal/Spoiler";

export interface NativeAlias {
    date: NativeAlias.DATE;
    uint8Array: NativeAlias.UINT8ARRAY;
    uint8ClampedArray: NativeAlias.UINT8CLAMPEDARRAY;
    uint16Array: NativeAlias.UINT16ARRAY;
    uint32Array: NativeAlias.UINT32ARRAY;
    bigUint64Array: NativeAlias.BIGUINT64ARRAY;
    int8Array: NativeAlias.INT8ARRAY;
    int16Array: NativeAlias.INT16ARRAY;
    int32Array: NativeAlias.INT32ARRAY;
    bigInt64Array: NativeAlias.BIGINT64ARRAY;
    float32Array: NativeAlias.FLOAT32ARRAY;
    float64Array: NativeAlias.FLOAT64ARRAY;
    buffer: NativeAlias.BUFFER;
    arrayBuffer: NativeAlias.ARRAYBUFFER;
    sharedArrayBuffer: NativeAlias.SHAREDARRAYBUFFER;
    dataView: NativeAlias.DATAVIEW;
    weakSet: NativeAlias.WEAKSET;
    weakMap: NativeAlias.WEAKMAP;
}
export namespace NativeAlias {
    export type DATE = Date;
    export type UINT8ARRAY = Uint8Array;
    export type UINT8CLAMPEDARRAY = Uint8ClampedArray;
    export type UINT16ARRAY = Uint16Array;
    export type UINT32ARRAY = Uint32Array;
    export type BIGUINT64ARRAY = BigUint64Array;
    export type INT8ARRAY = Int8Array;
    export type INT16ARRAY = Int16Array;
    export type INT32ARRAY = Int32Array;
    export type BIGINT64ARRAY = BigInt64Array;
    export type FLOAT32ARRAY = Float32Array;
    export type FLOAT64ARRAY = Float64Array;
    export type BUFFER = Buffer;
    export type ARRAYBUFFER = ArrayBuffer;
    export type SHAREDARRAYBUFFER = SharedArrayBuffer;
    export type DATAVIEW = DataView;
    export type WEAKSET = WeakSet<any>;
    export type WEAKMAP = WeakMap<any, any>;

    export function generate(): NativeAlias {
        return {
            date: new Date(),
            uint8Array: new Uint8Array(),
            uint8ClampedArray: new Uint8ClampedArray(),
            uint16Array: new Uint16Array(),
            uint32Array: new Uint32Array(),
            bigUint64Array: new BigUint64Array(),
            int8Array: new Int8Array(),
            int16Array: new Int16Array(),
            int32Array: new Int32Array(),
            bigInt64Array: new BigInt64Array(),
            float32Array: new Float32Array(),
            float64Array: new Float64Array(),
            buffer: Buffer.alloc(0),
            arrayBuffer: new ArrayBuffer(0),
            sharedArrayBuffer: new SharedArrayBuffer(0),
            dataView: new DataView(new ArrayBuffer(0)),
            weakSet: new WeakSet(),
            weakMap: new WeakMap(),
        };
    }

    export const SPOILERS: Spoiler<NativeAlias>[] = [
        (input) => {
            input.date = {} as any;
            return ["$input.date"];
        },
        (input) => {
            input.uint8Array = [] as any;
            return ["$input.uint8Array"];
        },
        (input) => {
            input.uint8ClampedArray = null!;
            return ["$input.uint8ClampedArray"];
        },
        (input) => {
            input.uint16Array = undefined!;
            return ["$input.uint16Array"];
        },
        (input) => {
            input.uint32Array = new Int32Array() as any;
            return ["$input.uint32Array"];
        },
        (input) => {
            input.bigUint64Array = new Set() as any;
            return ["$input.bigUint64Array"];
        },
        (input) => {
            input.int8Array = new Map() as any;
            return ["$input.int8Array"];
        },
        (input) => {
            input.int16Array = new WeakMap() as any;
            return ["$input.int16Array"];
        },
        (input) => {
            input.int32Array = new WeakSet() as any;
            return ["$input.int32Array"];
        },
        (input) => {
            input.bigInt64Array = new Date() as any;
            return ["$input.bigInt64Array"];
        },
        (input) => {
            input.float32Array = new RegExp("") as any;
            return ["$input.float32Array"];
        },
        (input) => {
            input.float64Array = new Error() as any;
            return ["$input.float64Array"];
        },
        (input) => {
            input.buffer = new ArrayBuffer(0) as any;
            return ["$input.buffer"];
        },
        (input) => {
            input.arrayBuffer = undefined! as any;
            return ["$input.arrayBuffer"];
        },
        (input) => {
            input.sharedArrayBuffer = null! as any;
            return ["$input.sharedArrayBuffer"];
        },
        (input) => {
            input.dataView = 0 as any;
            return ["$input.dataView"];
        },
        (input) => {
            input.weakSet = new Set() as any;
            return ["$input.weakSet"];
        },
        (input) => {
            input.weakMap = new Map() as any;
            return ["$input.weakMap"];
        },
    ];
}
