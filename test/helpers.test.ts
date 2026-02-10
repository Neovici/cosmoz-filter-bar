import { describe, expect, it } from 'vitest';
import {
	appendEnumFilter,
	appendQueryFilter,
	reduceFilters,
	setParam,
} from '../src/helpers';
import type { FilterFields } from '../src/types';

describe('reduceFilters', () => {
	const fields: FilterFields = {
		supplier: {
			label: 'Supplier',
			input: () => null as never,
			operators: ['is', 'is not'],
			filter: appendEnumFilter('supplier'),
		},
		name: {
			label: 'Name',
			input: () => null as never,
			operators: ['contains'],
			filter: appendQueryFilter('name', 'Contains'),
		},
		active: {
			label: 'Active',
			input: () => null as never,
			filter: setParam('isActive'),
		},
	};

	it('returns initial query when no filters', () => {
		expect(reduceFilters(fields, [])).toEqual({});
	});

	it('returns initial query when filters have null values', () => {
		const filters = [
			{ field: 'supplier', operator: 'is', value: null },
			{ field: 'name', operator: 'contains', value: undefined },
		];
		expect(reduceFilters(fields, filters)).toEqual({});
	});

	it('applies a single enum filter', () => {
		const filters = [
			{ field: 'supplier', operator: 'is', value: ['Ericsson'] },
		];
		expect(reduceFilters(fields, filters)).toEqual({
			enumFilters: [
				{
					fieldName: 'supplier',
					condition: 'Equals',
					values: ['Ericsson'],
				},
			],
		});
	});

	it('maps "is not" operator to NotEquals', () => {
		const filters = [
			{ field: 'supplier', operator: 'is not', value: ['Ericsson'] },
		];
		expect(reduceFilters(fields, filters)).toEqual({
			enumFilters: [
				{
					fieldName: 'supplier',
					condition: 'NotEquals',
					values: ['Ericsson'],
				},
			],
		});
	});

	it('applies a query filter', () => {
		const filters = [{ field: 'name', operator: 'contains', value: 'test' }];
		expect(reduceFilters(fields, filters)).toEqual({
			queryFilters: [
				{ fieldName: 'name', condition: 'Contains', values: ['test'] },
			],
		});
	});

	it('applies setParam filter', () => {
		const filters = [{ field: 'active', operator: 'is', value: true }];
		expect(reduceFilters(fields, filters)).toEqual({ isActive: true });
	});

	it('accumulates multiple filters', () => {
		const filters = [
			{ field: 'supplier', operator: 'is', value: ['Ericsson'] },
			{ field: 'name', operator: 'contains', value: 'cable' },
			{ field: 'active', operator: 'is', value: true },
		];
		expect(reduceFilters(fields, filters)).toEqual({
			enumFilters: [
				{
					fieldName: 'supplier',
					condition: 'Equals',
					values: ['Ericsson'],
				},
			],
			queryFilters: [
				{
					fieldName: 'name',
					condition: 'Contains',
					values: ['cable'],
				},
			],
			isActive: true,
		});
	});

	it('uses custom initial query', () => {
		const filters = [{ field: 'active', operator: 'is', value: true }];
		expect(reduceFilters(fields, filters, { page: 1 })).toEqual({
			page: 1,
			isActive: true,
		});
	});

	it('skips filters for unknown fields', () => {
		const filters = [{ field: 'unknown', operator: 'is', value: 'something' }];
		expect(reduceFilters(fields, filters)).toEqual({});
	});

	it('skips fields without a filter function', () => {
		const fieldsNoFilter: FilterFields = {
			name: {
				label: 'Name',
				input: () => null as never,
			},
		};
		const filters = [{ field: 'name', operator: 'contains', value: 'test' }];
		expect(reduceFilters(fieldsNoFilter, filters)).toEqual({});
	});
});

describe('appendQueryFilter', () => {
	it('creates a filter function that appends to queryFilters', () => {
		const filter = appendQueryFilter('name', 'Contains');
		const result = filter({}, 'test');
		expect(result).toEqual({
			queryFilters: [
				{ fieldName: 'name', condition: 'Contains', values: ['test'] },
			],
		});
	});

	it('appends to existing queryFilters', () => {
		const filter = appendQueryFilter('name', 'Contains');
		const query = {
			queryFilters: [
				{
					fieldName: 'other',
					condition: 'Equals',
					values: ['existing'],
				},
			],
		};
		const result = filter(query, 'test');
		expect(result.queryFilters).toHaveLength(2);
	});
});

describe('appendEnumFilter', () => {
	it('maps "is" to Equals', () => {
		const filter = appendEnumFilter('status');
		const result = filter({}, ['Active'], 'is');
		expect(result).toEqual({
			enumFilters: [
				{
					fieldName: 'status',
					condition: 'Equals',
					values: ['Active'],
				},
			],
		});
	});

	it('maps other operators to NotEquals', () => {
		const filter = appendEnumFilter('status');
		const result = filter({}, ['Active'], 'is not');
		expect(result).toEqual({
			enumFilters: [
				{
					fieldName: 'status',
					condition: 'NotEquals',
					values: ['Active'],
				},
			],
		});
	});
});

describe('setParam', () => {
	it('sets a top-level parameter', () => {
		const filter = setParam('isActive');
		expect(filter({}, true)).toEqual({ isActive: true });
	});

	it('preserves existing query properties', () => {
		const filter = setParam('isActive');
		expect(filter({ page: 1 }, true)).toEqual({
			page: 1,
			isActive: true,
		});
	});
});
