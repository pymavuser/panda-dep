import type { HasProps } from "../core/has_props";
import type { Deserializer } from "../core/serialization/deserializer";
import type { Ref } from "../core/util/refs";
export type ModelDef = {
    type: "model";
    name: string;
    extends?: Ref;
    properties?: PropertyDef[];
    overrides?: OverrideDef[];
};
export type PrimitiveKindRef = "Any" | "Unknown" | "Boolean" | "Number" | "Int" | "Bytes" | "String" | "Null";
export type KindRef = PrimitiveKindRef | [
    "Regex",
    string,
    string?
] | [
    "Nullable",
    KindRef
] | [
    "Or",
    KindRef,
    ...KindRef[]
] | [
    "Tuple",
    KindRef,
    ...KindRef[]
] | [
    "Array",
    KindRef
] | [
    "Struct",
    ...([string, KindRef][])
] | [
    "Dict",
    KindRef
] | [
    "Map",
    KindRef,
    KindRef
] | [
    "Enum",
    ...string[]
] | [
    "Ref",
    Ref
] | [
    "AnyRef"
];
export type PropertyDef = {
    name: string;
    kind: KindRef;
    default?: unknown;
};
export type OverrideDef = {
    name: string;
    default: unknown;
};
export declare function decode_def(def: ModelDef, deserializer: Deserializer): typeof HasProps;
//# sourceMappingURL=defs.d.ts.map