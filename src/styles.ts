import { css } from '@pionjs/pion';

export const filterBarStyles = css`
	:host {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: calc(var(--cz-spacing, 0.25rem) * 2);
	}

	.clear-all {
		white-space: nowrap;
	}
`;

export const filterChipStyles = css`
	:host {
		display: inline-flex;
		align-items: center;
		border: 1px solid var(--cz-color-border-primary, #d0d5dd);
		border-radius: var(--cz-radius-lg, 0.5rem);
		background: var(--cz-color-bg-primary, #fff);
		overflow: hidden;
		height: calc(var(--cz-spacing, 0.25rem) * 9);
	}

	.segment {
		display: flex;
		align-items: center;
		padding: 0 calc(var(--cz-spacing, 0.25rem) * 2);
		height: 100%;
		font-size: var(--cz-text-sm, 0.875rem);
		line-height: var(--cz-text-sm-line-height, 1.5);
		color: var(--cz-color-text-primary, #101828);
	}

	.segment + .segment {
		border-left: 1px solid var(--cz-color-border-primary, #d0d5dd);
	}

	.field-label {
		font-weight: var(--cz-font-weight-medium, 500);
		white-space: nowrap;
	}

	.operator {
		cursor: pointer;
		position: relative;
	}

	.operator-button {
		display: flex;
		align-items: center;
		gap: calc(var(--cz-spacing, 0.25rem) / 2);
		background: none;
		border: none;
		padding: 0;
		font: inherit;
		color: var(--cz-color-text-secondary, #344054);
		cursor: pointer;
		white-space: nowrap;
	}

	.operator-button:hover {
		color: var(--cz-color-text-primary, #101828);
	}

	.value {
		min-width: 80px;
	}

	.value ::slotted(*),
	.value > * {
		border: none;
		outline: none;
		background: transparent;
		font: inherit;
		color: inherit;
		padding: 0;
		min-width: 0;
		width: 100%;
	}

	.remove {
		cursor: pointer;
		padding: 0 calc(var(--cz-spacing, 0.25rem) * 1.5);
		height: 100%;
		display: flex;
		align-items: center;
		color: var(--cz-color-fg-quaternary, #98a2b3);
		border-left: 1px solid var(--cz-color-border-primary, #d0d5dd);
	}

	.remove:hover {
		color: var(--cz-color-text-primary, #101828);
		background: var(--cz-color-bg-primary-hover, #f9fafb);
	}

	.remove svg {
		width: 16px;
		height: 16px;
	}
`;
