import { menuBindings } from '@neovici/cosmoz-command-menu/menu-keybindings';
import '@neovici/cosmoz-tokens';
import { useKeybindings } from '@neovici/cosmoz-utils/keybindings';
import { component, html } from '@pionjs/pion';
import { within as withinShadow } from 'shadow-dom-testing-library';

/**
 * Component that provides keybindings context for all stories.
 * Registers cosmoz-command-menu keyboard navigation (Arrow keys, Enter, etc.).
 */
customElements.define(
	'storybook-keybindings',
	component(
		(props) => {
			const register = useKeybindings(menuBindings);
			return html`<cosmoz-keybinding-provider .value=${register}>
				${props.content}
			</cosmoz-keybinding-provider>`;
		},
		{ useShadowDOM: false },
	),
);

export default {
	parameters: {
		docs: {
			source: {
				excludeDecorators: true,
				type: 'code',
				transform: (source) => {
					const match = source.match(/html`([\s\S]*?)`/u);
					return match?.[1]?.trim() ?? source;
				},
			},
		},
	},
	// Augment the canvas with shadow-dom-testing-library queries
	beforeEach({ canvasElement, canvas }) {
		Object.assign(canvas, { ...withinShadow(canvasElement) });
	},
	decorators: [
		(story) => html`
			<style>
				@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

				.story-root {
					font-family: var(--cz-font-body, 'Inter', sans-serif);
					color: var(--cz-color-text-primary);
					background: var(--cz-color-bg-primary);
					padding: calc(var(--cz-spacing, 0.25rem) * 4);
					min-height: 100%;
				}
			</style>
			<storybook-keybindings
				.content=${html`<div class="story-root">${story()}</div>`}
			></storybook-keybindings>
		`,
	],
};
