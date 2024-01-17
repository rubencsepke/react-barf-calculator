export const SelectType = {
    Single: "single",
    Multi: "multi"
} as const;

export type SelectTypeKeys = typeof SelectType[keyof typeof SelectType]