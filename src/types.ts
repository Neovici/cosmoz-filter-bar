import type { TemplateResult } from 'lit-html';

export interface InputProps<V = unknown> {
	value: V;
	onChange: (value: V) => void;
}

export interface FilterField<V = unknown> {
	label: string;
	icon?: TemplateResult;
	input: (opts: InputProps<V>) => TemplateResult;
	operators?: string[];
	filter?: (
		query: Record<string, unknown>,
		value: V,
		operator: string,
	) => Record<string, unknown>;
}

export type FilterFields = Record<string, FilterField>;

export interface Filter {
	field: string;
	operator: string;
	value: unknown;
}

export type FilterState = Filter[];
