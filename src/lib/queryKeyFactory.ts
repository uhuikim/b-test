export const consultingKeys = {
    base: [{ scope: 'consulting' }] as const,
    list: () => [{ ...consultingKeys.base[0], entity: 'list' }],
    detail: (id: number) => [{ ...consultingKeys.base[0], entity: 'detail', id }],
}