import { useCallback, useProperty } from '@pionjs/pion';
import type { Filter, FilterFields, FilterState } from './types';

export const useFilters = () => {
	const [filters, setFilters] = useProperty<FilterState>('filters', () => []);
	const [fields] = useProperty<FilterFields>('fields');

	const add = useCallback(
		(field: string) =>
			setFilters((prev) => [
				...prev,
				{
					field,
					operator: fields?.[field]?.operators?.[0] ?? 'is',
					value: undefined,
				},
			]),
		[fields],
	);

	const remove = useCallback(
		(index: number) => setFilters((prev) => prev.filter((_, i) => i !== index)),
		[],
	);

	const update = useCallback(
		(index: number, patch: Partial<Filter>) =>
			setFilters((prev) =>
				prev.map((f, i) => (i === index ? { ...f, ...patch } : f)),
			),
		[],
	);

	const clear = useCallback(() => setFilters([]), []);

	return { filters, fields, add, remove, update, clear };
};
