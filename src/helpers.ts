import type { Filter, FilterFields } from './types';

type Query = Record<string, unknown>;

/**
 * Reduce filter state into an API query object.
 *
 * Each active filter is applied through its field's `filter` function,
 * accumulating the result starting from `initialQuery`.
 */
export const reduceFilters = (
	fields: FilterFields,
	filters: Filter[],
	initialQuery: Query = {},
): Query =>
	filters.reduce((query, { field, operator, value }) => {
		const fieldDef = fields[field];
		if (fieldDef?.filter && value != null) {
			return fieldDef.filter(query, value, operator);
		}
		return query;
	}, initialQuery);

/** Append to `queryFilters` array in the query. */
export const appendQueryFilter =
	(fieldName: string, condition: string) => (query: Query, value: unknown) => ({
		...query,
		queryFilters: [
			...((query.queryFilters as unknown[]) ?? []),
			{ fieldName, condition, values: [value] },
		],
	});

/** Append to `enumFilters` array in the query, mapping operator to condition. */
export const appendEnumFilter =
	(fieldName: string) => (query: Query, value: unknown, op: string) => ({
		...query,
		enumFilters: [
			...((query.enumFilters as unknown[]) ?? []),
			{
				fieldName,
				condition: op === 'is' ? 'Equals' : 'NotEquals',
				values: value,
			},
		],
	});

/** Set a top-level parameter on the query. */
export const setParam =
	(paramName: string) => (query: Query, value: unknown) => ({
		...query,
		[paramName]: value,
	});
