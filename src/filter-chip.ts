import { chevronDownIcon, xCloseIcon } from '@neovici/cosmoz-icons/untitled';
import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { component, useCallback, useMemo } from '@pionjs/pion';
import { html, nothing } from 'lit-html';
import { filterChipStyles } from './styles';
import type { Filter, FilterField } from './types';

import '@neovici/cosmoz-command-menu';
import '@neovici/cosmoz-dropdown/cosmoz-dropdown-next';

const removeIcon = xCloseIcon({ width: '16', height: '16' });
const chevron = chevronDownIcon({ width: '14', height: '14' });

interface ChipProps {
	filter: Filter;
	field: FilterField;
	index: number;
	onUpdate: (index: number, patch: Partial<Filter>) => void;
	onRemove: (index: number) => void;
}

const CosmozFilterChip = ({
	filter,
	field,
	index,
	onUpdate,
	onRemove,
}: ChipProps) => {
	const operators = field?.operators;
	const hasOperators = operators != null && operators.length > 1;

	const operatorItems = useMemo(
		() =>
			(operators ?? []).map((op) => ({
				label: op,
				value: op,
			})),
		[operators],
	);

	const onOperatorSelect = useCallback(
		(e: CustomEvent<{ item: { value: unknown } }>) => {
			onUpdate(index, { operator: e.detail.item.value as string });
		},
		[onUpdate, index],
	);

	const onValueChange = useCallback(
		(value: unknown) => {
			onUpdate(index, { value });
		},
		[onUpdate, index],
	);

	const handleRemove = useCallback(() => {
		onRemove(index);
	}, [onRemove, index]);

	return html`
		<div class="segment field-label">${field?.label ?? filter.field}</div>

		<div class="segment operator">
			${hasOperators
				? html`
						<cosmoz-dropdown-next>
							<button class="operator-button" slot="button">
								${filter.operator} ${chevron}
							</button>
							<cosmoz-command-menu
								.source=${operatorItems}
								@select=${onOperatorSelect}
							></cosmoz-command-menu>
						</cosmoz-dropdown-next>
					`
				: html`<span>${filter.operator}</span>`}
		</div>

		<div class="segment value">
			${field?.input
				? field.input({ value: filter.value, onChange: onValueChange })
				: nothing}
		</div>

		<div class="remove" @click=${handleRemove} role="button" tabindex="0">
			${removeIcon}
		</div>
	`;
};

customElements.define(
	'cosmoz-filter-chip',
	component<ChipProps>(CosmozFilterChip, {
		styleSheets: [normalize, filterChipStyles],
	}),
);

export { CosmozFilterChip };
