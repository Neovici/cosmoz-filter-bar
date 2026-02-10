import { html } from '@pionjs/pion';
import type { Meta, StoryObj } from '@storybook/web-components';
import '../src/index';
import type { FilterFields } from '../src/types';

const textInput = ({
	value,
	onChange,
}: {
	value: unknown;
	onChange: (v: unknown) => void;
}) =>
	html`<input
		type="text"
		.value=${(value as string) ?? ''}
		@input=${(e: InputEvent) => onChange((e.target as HTMLInputElement).value)}
		placeholder="Enter value..."
	/>`;

const fields: FilterFields = {
	supplier: {
		label: 'Supplier',
		operators: ['is', 'is not'],
		input: textInput,
	},
	status: {
		label: 'Status',
		operators: ['is', 'is not'],
		input: textInput,
	},
	name: {
		label: 'Name',
		operators: ['contains'],
		input: textInput,
	},
	description: {
		label: 'Description',
		operators: ['contains'],
		input: textInput,
	},
};

const meta: Meta = {
	title: 'CosmozFilterBar',
	component: 'cosmoz-filter-bar',
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
	render: () => html`<cosmoz-filter-bar .fields=${fields}></cosmoz-filter-bar>`,
};

export const WithActiveFilters: Story = {
	render: () => html`
		<cosmoz-filter-bar
			.fields=${fields}
			.filters=${[
				{ field: 'supplier', operator: 'is', value: 'Ericsson' },
				{ field: 'name', operator: 'contains', value: 'cable' },
			]}
		></cosmoz-filter-bar>
	`,
};

export const SingleFilter: Story = {
	render: () => html`
		<cosmoz-filter-bar
			.fields=${fields}
			.filters=${[{ field: 'status', operator: 'is', value: 'Active' }]}
		></cosmoz-filter-bar>
	`,
};
