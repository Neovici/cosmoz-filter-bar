import { filterLinesIcon } from '@neovici/cosmoz-icons/untitled';
import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { component, useCallback, useMemo } from '@pionjs/pion';
import { html, nothing } from 'lit-html';
import { filterBarStyles } from './styles';
import { useFilters } from './use-filters';

import '@neovici/cosmoz-button';
import '@neovici/cosmoz-dropdown/cosmoz-dropdown-next';
import './filter-chip';

// re-import the command-menu component module for the side-effect (element registration)
// and use its MenuItem type via inline import in useMemo below
import '@neovici/cosmoz-command-menu';

const filterIcon = filterLinesIcon({
	slot: 'prefix',
	width: '20',
	height: '20',
});

const CosmozFilterBar = () => {
	const { filters, fields, add, remove, update, clear } = useFilters();

	const fieldItems = useMemo(
		() =>
			Object.entries(fields ?? {}).map(([key, field]) => ({
				label: field.label,
				value: key,
				icon: field.icon,
			})),
		[fields],
	);

	const onFieldSelected = useCallback(
		(e: CustomEvent<{ item: { value: unknown } }>) => {
			add(e.detail.item.value as string);
		},
		[add],
	);

	const hasFilters = filters.length > 0;

	return html`
		<cosmoz-dropdown-next>
			<cosmoz-button slot="button" variant="secondary">
				${filterIcon} ${!hasFilters ? 'Filters' : nothing}
			</cosmoz-button>
			<cosmoz-command-menu
				searchable
				.source=${fieldItems}
				@select=${onFieldSelected}
			></cosmoz-command-menu>
		</cosmoz-dropdown-next>

		${filters.map(
			(filter, index) => html`
				<cosmoz-filter-chip
					.filter=${filter}
					.field=${fields?.[filter.field]}
					.index=${index}
					.onUpdate=${update}
					.onRemove=${remove}
				></cosmoz-filter-chip>
			`,
		)}
		${filters.length > 1
			? html`
					<cosmoz-button class="clear-all" variant="tertiary" @click=${clear}>
						Clear all
					</cosmoz-button>
				`
			: nothing}
	`;
};

customElements.define(
	'cosmoz-filter-bar',
	component(CosmozFilterBar, {
		styleSheets: [normalize, filterBarStyles],
	}),
);

export { CosmozFilterBar };
