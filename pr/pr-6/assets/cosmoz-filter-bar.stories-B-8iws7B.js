import{u as S,r as j,a as H,K as V,b as Y,c as x,A as v,w as R,d as h,s as W,e as z,f as U,g as p,h as y,i as k,M as q,j as K,k as X,l as Q,m as Z,n as J}from"./iframe--6seqHWa.js";import"./preload-helper-PPVm8Dsz.js";function F(e){return S(()=>({current:e}),[])}const ee={CHILD:2},te=e=>(...t)=>({_$litDirective$:e,values:t});class oe{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,o,r){this._$Ct=t,this._$AM=o,this._$Ci=r}_$AS(t,o){return this.update(t,o)}update(t,o){return this.render(...o)}}const A=(e,t)=>{const o=e._$AN;if(o===void 0)return!1;for(const r of o)r._$AO?.(t,!1),A(r,t);return!0},N=e=>{let t,o;do{if((t=e._$AM)===void 0)break;o=t._$AN,o.delete(e),e=t}while(o?.size===0)},P=e=>{for(let t;t=e._$AM;e=t){let o=t._$AN;if(o===void 0)t._$AN=o=new Set;else if(o.has(e))break;o.add(e),se(t)}};function re(e){this._$AN!==void 0?(N(this),this._$AM=e,P(this)):this._$AM=e}function ne(e,t=!1,o=0){const r=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(t)if(Array.isArray(r))for(let n=o;n<r.length;n++)A(r[n],!1),N(r[n]);else r!=null&&(A(r,!1),N(r));else A(this,e)}const se=e=>{e.type==ee.CHILD&&(e._$AP??=ne,e._$AQ??=re)};class ae extends oe{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,o,r){super._$AT(t,o,r),P(this),this.isConnected=t._$AU}_$AO(t,o=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),o&&(A(this,t),N(this))}setValue(t){if(j(this._$Ct))this._$Ct._$AI(t,this);else{const o=[...this._$Ct._$AH];o[this._$Ci]=t,this._$Ct._$AI(o,this,0)}}disconnected(){}reconnected(){}}const w=(e,t)=>{const o=H(V),r=Y(e);x(()=>o(r),t)};const b=e=>e??v;function L(e,t,o){return e?t(e):o?.(e)}const ie=({slot:e,title:t,className:o,width:r="24",height:s="24",styles:n}={})=>h`
  <svg
    slot=${b(e)}
    class=${`chevron-down-icon ${o??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${r}
    height=${s}
    style=${b(n)}
  >
    ${L(t,()=>R`<title>${t}</title>`)}
    <path d="m6 9 6 6 6-6" />
  </svg>
`,ce=({slot:e,title:t,className:o,width:r="24",height:s="24",styles:n}={})=>h`
  <svg
    slot=${b(e)}
    class=${`filter-lines-icon ${o??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${r}
    height=${s}
    style=${b(n)}
  >
    ${L(t,()=>R`<title>${t}</title>`)}
    <path d="M6 12h12M3 6h18M9 18h6" />
  </svg>
`,le=({slot:e,title:t,className:o,width:r="24",height:s="24",styles:n}={})=>h`
  <svg
    slot=${b(e)}
    class=${`search-sm-icon ${o??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${r}
    height=${s}
    style=${b(n)}
  >
    ${L(t,()=>R`<title>${t}</title>`)}
    <path d="m21 21-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
  </svg>
`,de=({slot:e,title:t,className:o,width:r="24",height:s="24",styles:n}={})=>h`
  <svg
    slot=${b(e)}
    class=${`x-close-icon ${o??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${r}
    height=${s}
    style=${b(n)}
  >
    ${L(t,()=>R`<title>${t}</title>`)}
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
`,E=W(z`
	/*
	 * Use border-box sizing for all elements.
	 * This is safe and doesn't conflict with child component styles.
	 */
	*,
	::before,
	::after,
	::backdrop,
	::file-selector-button {
		box-sizing: border-box;
	}

	/*
	 * Reset margins and padding on elements that typically have browser defaults.
	 * This is more targeted than using * to avoid affecting custom elements.
	 */
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	blockquote,
	pre,
	ul,
	ol,
	li,
	dl,
	dt,
	dd,
	figure,
	figcaption,
	fieldset,
	legend,
	form,
	hr,
	table,
	th,
	td {
		margin: 0;
		padding: 0;
	}

	/*
	 * Reset borders on elements that typically have them.
	 */
	fieldset,
	hr,
	iframe {
		border: 0 solid;
	}

	/*
	 * 1. Use a consistent sensible line-height in all browsers.
	 * 2. Prevent adjustments of font size after orientation changes in iOS.
	 * 3. Use a more readable tab size.
	 * 4. Use the configured font-family.
	 * 5. Disable tap highlights on iOS.
	 */
	:host {
		line-height: 1.5;
		-webkit-text-size-adjust: 100%;
		tab-size: 4;
		font-family: var(--cz-font-body);
		-webkit-tap-highlight-color: transparent;
	}

	/*
	 * Reset links to optimize for opt-in styling.
	 */
	a {
		color: inherit;
		text-decoration: inherit;
	}

	/*
	 * Add the correct font weight in Edge and Safari.
	 */
	b,
	strong {
		font-weight: bolder;
	}

	/*
	 * 1. Use the configured mono font-family.
	 * 2. Correct the odd em font sizing in all browsers.
	 */
	code,
	kbd,
	samp,
	pre {
		font-family: var(--cz-font-mono);
		font-size: 1em;
	}

	/*
	 * Add the correct font size in all browsers.
	 */
	small {
		font-size: 80%;
	}

	/*
	 * Prevent sub and sup from affecting line height.
	 */
	sub,
	sup {
		font-size: 75%;
		line-height: 0;
		position: relative;
		vertical-align: baseline;
	}

	sub {
		bottom: -0.25em;
	}

	sup {
		top: -0.5em;
	}

	/*
	 * 1. Make replaced elements display: block by default.
	 * 2. Add vertical-align: middle for better alignment.
	 */
	img,
	svg,
	video,
	canvas,
	audio,
	iframe,
	embed,
	object {
		display: block;
		vertical-align: middle;
	}

	/*
	 * Constrain images and videos to parent width.
	 */
	img,
	video {
		max-width: 100%;
		height: auto;
	}

	/*
	 * Reset form controls:
	 * 1. Inherit font styles in all browsers.
	 * 2. Remove default margins, padding, and borders.
	 * 3. Remove border radius.
	 * 4. Remove background color.
	 */
	button,
	input,
	select,
	optgroup,
	textarea,
	::file-selector-button {
		margin: 0;
		padding: 0;
		border: 0 solid;
		font: inherit;
		font-feature-settings: inherit;
		font-variation-settings: inherit;
		letter-spacing: inherit;
		color: inherit;
		border-radius: 0;
		background-color: transparent;
	}

	/*
	 * Reset placeholder opacity in Firefox.
	 */
	::placeholder {
		opacity: 1;
		color: var(--cz-color-text-placeholder, currentcolor);
	}

	/*
	 * Prevent horizontal textarea resize.
	 */
	textarea {
		resize: vertical;
	}

	/*
	 * Remove the inner padding in Chrome and Safari on macOS.
	 */
	::-webkit-search-decoration {
		-webkit-appearance: none;
	}

	/*
	 * Correct the inability to style the border radius in iOS Safari.
	 */
	button,
	input:where([type='button'], [type='reset'], [type='submit']),
	::file-selector-button {
		appearance: button;
	}

	/*
	 * Make elements with hidden attribute stay hidden.
	 */
	[hidden]:where(:not([hidden='until-found'])) {
		display: none !important;
	}
`),ue=z`
	:host {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: calc(var(--cz-spacing, 0.25rem) * 2);
	}

	.clear-all {
		white-space: nowrap;
	}
`,he=z`
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
`,pe=()=>{const[e,t]=U("filters",()=>[]),[o]=U("fields"),r=p(a=>t(d=>[...d,{field:a,operator:o?.[a]?.operators?.[0]??"is",value:void 0}]),[o]),s=p(a=>t(d=>d.filter((i,c)=>c!==a)),[]),n=p((a,d)=>t(i=>i.map((c,m)=>m===a?{...c,...d}:c)),[]),l=p(()=>t([]),[]);return{filters:e,fields:o,add:r,remove:s,update:n,clear:l}},me=z`
	position: relative;

	&::before {
		content: '';
		position: absolute;
		inset: 1px;
		border: 1px solid var(--skeumorphic-color, rgba(255, 255, 255, 0.12));
		border-radius: var(--skeumorphic-radius, calc(var(--cz-radius-md) - 1px));
		pointer-events: none;
		mask-image: linear-gradient(to bottom, black 0%, transparent 100%);
		-webkit-mask-image: linear-gradient(to bottom, black 0%, transparent 100%);
	}
`,ve=z`
	:host {
		display: inline-flex;
	}

	:host([full-width]) {
		display: flex;
		width: 100%;
	}

	:host([hidden]) {
		display: none;
	}

	/* ========================================
	 * SIZE VARIANTS
	 * ======================================== */

	:host([size='sm']) .button {
		height: 36px;
		padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 3.5);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		border-radius: var(--cz-radius-md);
	}

	:host([size='sm']) ::slotted(svg) {
		width: 16px;
		height: 16px;
	}

	:host([size='lg']) .button {
		height: 44px;
		padding: calc(var(--cz-spacing) * 2.5) calc(var(--cz-spacing) * 4.5);
		font-size: var(--cz-text-base);
		line-height: var(--cz-text-base-line-height);
		border-radius: var(--cz-radius-md);
	}

	:host([size='xl']) .button {
		height: 48px;
		padding: calc(var(--cz-spacing) * 3) calc(var(--cz-spacing) * 5);
		font-size: var(--cz-text-base);
		line-height: var(--cz-text-base-line-height);
		border-radius: var(--cz-radius-md);
	}

	/* ========================================
	 * BUTTON BASE STYLES (Primary - default)
	 * ======================================== */

	.button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		cursor: pointer;
		font-family: var(--cz-font-body);
		font-weight: var(--cz-font-weight-semibold);
		text-decoration: none;
		transition:
			background-color 0.15s ease,
			box-shadow 0.15s ease;
		width: 100%;

		/* Medium (md) - default size */
		height: 40px;
		padding: calc(var(--cz-spacing) * 2.5) calc(var(--cz-spacing) * 4);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		border-radius: var(--cz-radius-md);

		/* Primary - default variant */
		${me}
		background-color: var(--cz-color-bg-brand-solid);
		color: var(--cz-color-text-on-brand);
		box-shadow: var(--cz-shadow-xs-skeumorphic);

		&:hover {
			background-color: var(--cz-color-bg-brand-solid-hover);
		}

		&:active {
			background-color: var(--cz-color-brand-800);
		}

		&:focus-visible {
			outline: none;
			box-shadow: var(--cz-shadow-xs-skeumorphic), var(--cz-focus-ring);
		}
	}

	/* ========================================
	 * STYLE VARIANTS
	 * ======================================== */

	:host([variant='secondary']) .button {
		background-color: var(--cz-color-bg-primary);
		color: var(--cz-color-text-secondary);

		&:hover {
			background-color: var(--cz-color-bg-primary-hover);
			color: var(--cz-color-text-secondary-hover);
		}

		&:active {
			background-color: var(--cz-color-bg-tertiary);
		}

		&:focus-visible {
			box-shadow: var(--cz-shadow-xs-skeumorphic), var(--cz-focus-ring);
		}
	}

	:host([variant='tertiary']) .button {
		background-color: transparent;
		color: var(--cz-color-text-secondary);
		box-shadow: none;

		&::before {
			display: none;
		}

		&:hover {
			background-color: var(--cz-color-bg-primary-hover);
			color: var(--cz-color-text-secondary-hover);
		}

		&:active {
			background-color: var(--cz-color-bg-secondary);
		}

		&:focus-visible {
			box-shadow: var(--cz-focus-ring);
		}
	}

	:host([variant='destructive']) .button {
		background-color: var(--cz-color-bg-error-solid);

		&:hover {
			background-color: var(--cz-color-bg-error-solid-hover);
		}

		&:active {
			background-color: var(--cz-color-error-800);
		}

		&:focus-visible {
			box-shadow: var(--cz-shadow-xs-skeumorphic), var(--cz-focus-ring-error);
		}
	}

	:host([variant='link']) .button {
		background-color: transparent;
		color: var(--cz-color-text-brand);
		box-shadow: none;
		padding: 0;
		height: auto;

		&::before {
			display: none;
		}

		&:hover {
			text-decoration: underline;
			color: var(--cz-color-text-brand-hover);
		}

		&:active {
			color: var(--cz-color-brand-800);
		}

		&:focus-visible {
			text-decoration: underline;
			box-shadow: var(--cz-focus-ring);
			border-radius: var(--cz-radius-xs);
		}
	}

	/* ========================================
	 * DISABLED STATE
	 * ======================================== */

	:host([disabled]) .button {
		cursor: not-allowed;
		pointer-events: none;

		&::before {
			display: none;
		}
	}

	:host([disabled]) .button,
	:host([disabled][variant='primary']) .button {
		background-color: var(--cz-color-bg-disabled);
		color: var(--cz-color-text-disabled);
		box-shadow: none;
	}

	:host([disabled][variant='secondary']) .button {
		background-color: var(--cz-color-bg-primary);
		color: var(--cz-color-text-disabled);
		box-shadow: none;
	}

	:host([disabled][variant='tertiary']) .button {
		background-color: transparent;
		color: var(--cz-color-text-disabled);
		box-shadow: none;
	}

	:host([disabled][variant='destructive']) .button {
		background-color: var(--cz-color-bg-disabled);
		color: var(--cz-color-text-disabled);
		box-shadow: none;
	}

	:host([disabled][variant='link']) .button {
		background-color: transparent;
		color: var(--cz-color-text-disabled);
	}

	/* ========================================
	 * ICON SLOTS
	 * ======================================== */

	::slotted(svg) {
		width: 20px;
		height: 20px;
		flex-shrink: 0;
	}
`,fe=["variant","size","disabled","full-width","type"],ge=e=>{const t=e.hasAttribute("disabled"),o=e.getAttribute("type")||"button";return h`
		<button type=${o} class="button" ?disabled=${t} part="button">
			<slot name="prefix"></slot>
			<slot></slot>
			<slot name="suffix"></slot>
		</button>
	`};customElements.define("cosmoz-button",y(ge,{observedAttributes:fe,styleSheets:[E,ve],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const G=new WeakMap,B=te(class extends ae{render(e){return v}update(e,[t]){const o=t!==this.G;return o&&this.G!==void 0&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),v}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let o=G.get(t);o===void 0&&(o=new WeakMap,G.set(t,o)),o.get(this.G)!==void 0&&this.G.call(this.ht,void 0),o.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?G.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),be=({host:e,popoverRef:t,openOnHover:o,openOnFocus:r,open:s,close:n})=>{const l=F(),a=()=>clearTimeout(l.current),d=()=>{clearTimeout(l.current),l.current=setTimeout(()=>{const c=t.current;o&&(e.matches(":hover")||c?.matches(":hover"))||r&&(e.matches(":focus-within")||c?.matches(":focus-within"))||n()},100)},i=()=>{a(),s()};x(()=>{if(o)return e.addEventListener("pointerenter",i),e.addEventListener("pointerleave",d),()=>{a(),e.removeEventListener("pointerenter",i),e.removeEventListener("pointerleave",d)}},[o,e]),x(()=>{if(r)return e.addEventListener("focusin",i),e.addEventListener("focusout",d),()=>{a(),e.removeEventListener("focusin",i),e.removeEventListener("focusout",d)}},[r,e])},ze=e=>{if(e.newState!=="open")return;const r=e.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const s of r){const n=s.matches("[autofocus]")?s:s.querySelector("[autofocus]");if(n instanceof HTMLElement){n.focus();break}}},xe=z`
	:host {
		display: inline-block;
		anchor-name: --dropdown-anchor;
	}

	[popover] {
		position: fixed;
		position-anchor: --dropdown-anchor;
		inset: unset;
		margin: var(--cz-spacing, 0.25rem);
		position-try-fallbacks:
			flip-block,
			flip-inline,
			flip-block flip-inline;

		border: none;
		padding: 0;
		background: transparent;
		overflow: visible;
		min-width: anchor-size(width);

		/* Animation - open state */
		opacity: 1;
		transform: translateY(0) scale(1);

		/* Transitions for smooth open/close animation */
		transition:
			opacity 150ms ease-out,
			transform 150ms ease-out,
			overlay 150ms ease-out allow-discrete,
			display 150ms ease-out allow-discrete;
	}

	/* Starting state when popover opens */
	@starting-style {
		[popover]:popover-open {
			opacity: 0;
			transform: translateY(-4px) scale(0.96);
		}
	}

	/* Closing state */
	[popover]:not(:popover-open) {
		opacity: 0;
		transform: translateY(-4px) scale(0.96);
	}

	@media (prefers-reduced-motion: reduce) {
		[popover] {
			transition: none;
		}
	}
`,$e=e=>{const{placement:t="bottom span-right",openOnHover:o,openOnFocus:r}=e,s=F(),n=()=>s.current?.showPopover(),l=()=>s.current?.hidePopover(),a=()=>s.current?.togglePopover();return be({host:e,popoverRef:s,openOnHover:o,openOnFocus:r,open:n,close:l}),h`
		<slot name="button" @click=${r?n:a}></slot>
		<div
			popover
			style="position-area: ${t}"
			@toggle=${c=>{ze(c),e.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:c.newState,oldState:c.oldState,composed:!0}))}}
			@select=${l}
			${B(c=>c&&(s.current=c))}
		>
			<slot></slot>
		</div>
	`};customElements.define("cosmoz-dropdown-next",y($e,{styleSheets:[xe],observedAttributes:["placement","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const ye=({items:e,onSelect:t,host:o,itemsContainerRef:r})=>{const s=p(()=>{const u=document.activeElement;return u!=null&&(o.contains(u)||u.contains(o))},[o]),[n,l]=k(-1);x(()=>{l(-1)},[e]),x(()=>{if(n<0)return;r.current?.querySelector(`[data-index="${n}"]`)?.scrollIntoView({block:"nearest"})},[n,r]);const a=p((u,g)=>{const f=e.length;if(f===0)return-1;let $=u;$<0&&($=g===1?-1:f);for(let O=0;O<f;O++)if($=($+g+f)%f,!e[$]?.disabled)return $;return-1},[e]),d=p(()=>{l(u=>a(u,1))},[a]),i=p(()=>{l(u=>a(u,-1))},[a]),c=p(()=>{const u=e.findIndex(g=>!g.disabled);l(u)},[e]),m=p(()=>{for(let u=e.length-1;u>=0;u--)if(!e[u].disabled){l(u);return}},[e]),C=p(()=>{if(n>=0&&n<e.length){const u=e[n];u&&!u.disabled&&t(u)}},[e,n,t]);return w({activity:q,callback:d,element:()=>o,check:s},[d,o,s]),w({activity:K,callback:i,element:()=>o,check:s},[i,o,s]),w({activity:X,callback:c,element:()=>o,check:s},[c,o,s]),w({activity:Q,callback:m,element:()=>o,check:s},[m,o,s]),w({activity:Z,callback:C,element:()=>o,check:s},[C,o,s]),{index:n,highlight:p(u=>l(u),[])}},we=(e,t)=>{if(!e)return Promise.resolve([]);const o=typeof e=="function"?e(t):e;return Promise.resolve(o).then(r=>r??[])},ke=(e,t)=>{const[o,r]=k([]),[s,n]=k(!1),[l,a]=k(null);return x(()=>{let i=!1;return n(!0),a(null),we(e,t).then(c=>{i||r(c)}).catch(c=>{i||a(c?.message??"Failed to load items")}).finally(()=>{i||n(!1)}),()=>{i=!0}},[e,t]),{items:S(()=>{if(!t.trim())return o;const i=t.toLowerCase();return o.filter(c=>c.label.toLowerCase().includes(i))},[o,t]),loading:s,error:l}},Ae=z`
	:host {
		display: flex;
		flex-direction: column;
		min-width: 240px;
		max-width: 320px;
		max-height: var(--cosmoz-command-menu-max-height, 400px);
		background: var(--cz-color-bg-primary, #fff);
		border-radius: var(--cz-radius-xl, 0.75rem);
		box-shadow: var(
			--cz-shadow-lg,
			0px 12px 16px -4px rgba(10, 13, 18, 0.08),
			0px 4px 6px -2px rgba(10, 13, 18, 0.03)
		);
		overflow: hidden;
		border: 1px solid var(--cz-color-border-secondary, #eaecf0);
	}

	.search {
		display: flex;
		align-items: center;
		gap: calc(var(--cz-spacing, 0.25rem) * 2);
		padding: calc(var(--cz-spacing, 0.25rem) * 3);
		border-bottom: 1px solid var(--cz-color-border-secondary, #eaecf0);
		position: relative;
		overflow: hidden;
	}

	.search::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 1px;
		background: linear-gradient(
			90deg,
			transparent,
			var(--cz-color-brand-500, #7c3aed),
			transparent
		);
		opacity: 0;
		transform: translateX(-100%);
	}

	.search.loading::after {
		opacity: 1;
		animation: shimmer 2s infinite linear;
	}

	@keyframes shimmer {
		0% {
			transform: translateX(-100%);
		}
		100% {
			transform: translateX(100%);
		}
	}

	.search-icon {
		flex-shrink: 0;
		width: 20px;
		height: 20px;
		color: var(--cz-color-fg-quaternary, #98a2b3);
	}

	.search-input {
		flex: 1;
		min-width: 0;
		border: none;
		outline: none;
		font-size: var(--cz-text-sm, 0.875rem);
		line-height: var(--cz-text-sm-line-height, 1.5);
		color: var(--cz-color-text-primary, #101828);
		background: transparent;
	}

	.search-input::placeholder {
		color: var(--cz-color-text-placeholder, #667085);
	}

	.items {
		display: flex;
		flex-direction: column;
		overflow-y: auto;
	}

	.no-results {
		padding: calc(var(--cz-spacing, 0.25rem) * 4);
		text-align: center;
		color: var(--cz-color-text-tertiary, #475467);
		font-size: var(--cz-text-sm, 0.875rem);
	}

	.loading-text {
		padding: calc(var(--cz-spacing, 0.25rem) * 4);
		text-align: center;
		color: var(--cz-color-text-tertiary, #475467);
	}

	.label {
		display: inline-flex;
		flex: 1;
		text-align: left;
		min-width: 0;
	}

	.error {
		padding: calc(var(--cz-spacing, 0.25rem) * 4);
		text-align: center;
		color: var(--cz-color-text-error, #dc2626);
		font-size: var(--cz-text-sm, 0.875rem);
	}

	.group-label {
		padding: calc(var(--cz-spacing, 0.25rem) * 1)
			calc(var(--cz-spacing, 0.25rem) * 3);
		font-size: var(--cz-text-xs, 0.75rem);
		font-weight: var(--cz-font-weight-semibold, 600);
		color: var(--cz-color-text-tertiary, #475467);
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.group:not(:first-child) {
		border-top: 1px solid var(--cz-color-border-secondary, #eaecf0);
		margin-top: calc(var(--cz-spacing, 0.25rem) * 2);
		padding-top: calc(var(--cz-spacing, 0.25rem) * 2);
	}

	cosmoz-button[data-highlighted] {
		background: var(--cz-color-bg-primary-hover, #f9fafb);
	}

	/* Hide built-in focus ring, use fake highlighting instead */
	cosmoz-button::part(button):focus-visible {
		box-shadow: none;
		outline: none;
	}
`,Se=le({className:"search-icon"}),Ee=({item:e,index:t,highlightedIndex:o,highlight:r,select:s})=>h`
	<cosmoz-button
		variant="tertiary"
		full-width
		role="menuitem"
		?disabled=${e.disabled}
		?data-highlighted=${t===o}
		data-index=${t}
		@mouseenter=${()=>r(t)}
		@click=${()=>!e.disabled&&s(e)}
		@mousedown=${n=>n.preventDefault()}
	>
		${e.icon??v}
		<span class="label">${e.label}</span>
		${e.suffix??v}
	</cosmoz-button>
`,Ce=({grouped:e,items:t,highlightedIndex:o,highlight:r,select:s})=>{const n=new Map;return t.forEach((l,a)=>n.set(l,a)),Array.from(e.entries()).map(([l,a])=>{const d=a.map(i=>Ee({item:i,index:n.get(i)??-1,highlightedIndex:o,highlight:r,select:s}));return l?h`
				<div class="group" role="group" aria-label=${l}>
					<div class="group-label">${l}</div>
					${d}
				</div>
			`:d})},_e=e=>{const t=new Map;for(const o of e){const r=o.group||"";t.has(r)||t.set(r,[]),t.get(r).push(o)}return t},Ie=({source:e,searchable:t=!1,placeholder:o="Search..."})=>{const r=J(),s=F(),[n,l]=k(""),{items:a,loading:d,error:i}=ke(e,n),c=S(()=>_e(a),[a]),m=p(f=>{r.dispatchEvent(new CustomEvent("select",{bubbles:!0,composed:!0,detail:{item:f}}))},[r]),{index:C,highlight:u}=ye({items:a,onSelect:m,host:r,itemsContainerRef:s});x(()=>{r.setAttribute("role","menu")},[r]);const g=a.length>0;return h`
		${t?h`
					<div class="search${d?" loading":""}">
						${Se}
						<input
							class="search-input"
							.value=${n}
							@input=${f=>l(f.target.value)}
							placeholder=${o}
							autofocus
						/>
					</div>
				`:v}

		<div
			class="items"
			${B(f=>{s.current=f})}
		>
			${i?h`<div class="error">${i}</div>`:v}
			${d&&a.length===0?h`<div class="loading-text">Loading...</div>`:v}
			${!d&&!g&&n.trim().length>0?h`
						<slot name="no-results">
							<div class="no-results">No results found</div>
						</slot>
					`:v}
			${g?Ce({grouped:c,items:a,highlightedIndex:C,highlight:u,select:m}):v}
		</div>
	`};customElements.define("cosmoz-command-menu",y(Ie,{styleSheets:[E,Ae],observedAttributes:["searchable","placeholder"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const Me=z`
	:host {
		display: inline-flex;
		align-items: center;
		font-size: var(--cz-text-xs, 0.75rem);
		color: var(--cz-color-text-tertiary, #475467);
		font-weight: var(--cz-font-weight-medium, 500);
		background: var(--cz-color-bg-tertiary, #f2f4f7);
		padding: calc(var(--cz-spacing, 0.25rem) / 2)
			calc(var(--cz-spacing, 0.25rem) * 1.5);
		border-radius: var(--cz-radius-sm, 0.375rem);
	}
`,Te=()=>h`<slot></slot>`;customElements.define("cosmoz-keybinding-badge",y(Te,{styleSheets:[E,Me]}));const Ne=de({width:"16",height:"16"}),Re=ie({width:"14",height:"14"}),Le=({filter:e,field:t,index:o,onUpdate:r,onRemove:s})=>{const n=t?.operators,l=n!=null&&n.length>1,a=S(()=>(n??[]).map(m=>({label:m,value:m})),[n]),d=p(m=>{r(o,{operator:m.detail.item.value})},[r,o]),i=p(m=>{r(o,{value:m})},[r,o]),c=p(()=>{s(o)},[s,o]);return h`
		<div class="segment field-label">${t?.label??e.field}</div>

		<div class="segment operator">
			${l?h`
						<cosmoz-dropdown-next>
							<button class="operator-button" slot="button">
								${e.operator} ${Re}
							</button>
							<cosmoz-command-menu
								.source=${a}
								@select=${d}
							></cosmoz-command-menu>
						</cosmoz-dropdown-next>
					`:h`<span>${e.operator}</span>`}
		</div>

		<div class="segment value">
			${t?.input?t.input({value:e.value,onChange:i}):v}
		</div>

		<div class="remove" @click=${c} role="button" tabindex="0">
			${Ne}
		</div>
	`};customElements.define("cosmoz-filter-chip",y(Le,{styleSheets:[E,he]}));const Ge=ce({slot:"prefix",width:"20",height:"20"}),Fe=()=>{const{filters:e,fields:t,add:o,remove:r,update:s,clear:n}=pe(),l=S(()=>Object.entries(t??{}).map(([i,c])=>({label:c.label,value:i,icon:c.icon})),[t]),a=p(i=>{o(i.detail.item.value)},[o]),d=e.length>0;return h`
		<cosmoz-dropdown-next>
			<cosmoz-button slot="button" variant="secondary">
				${Ge} ${d?v:"Filters"}
			</cosmoz-button>
			<cosmoz-command-menu
				searchable
				.source=${l}
				@select=${a}
			></cosmoz-command-menu>
		</cosmoz-dropdown-next>

		${e.map((i,c)=>h`
				<cosmoz-filter-chip
					.filter=${i}
					.field=${t?.[i.field]}
					.index=${c}
					.onUpdate=${s}
					.onRemove=${r}
				></cosmoz-filter-chip>
			`)}
		${e.length>1?h`
					<cosmoz-button class="clear-all" variant="tertiary" @click=${n}>
						Clear all
					</cosmoz-button>
				`:v}
	`};customElements.define("cosmoz-filter-bar",y(Fe,{styleSheets:[E,ue]}));const _=({value:e,onChange:t})=>h`<input
        type="text"
        .value=${e??""}
        @input=${o=>t(o.target.value)}
        placeholder="Enter value..."
    />`,D={supplier:{label:"Supplier",operators:["is","is not"],input:_},status:{label:"Status",operators:["is","is not"],input:_},name:{label:"Name",operators:["contains"],input:_},description:{label:"Description",operators:["contains"],input:_}},Ue={title:"CosmozFilterBar",component:"cosmoz-filter-bar",tags:["autodocs"]},I={render:()=>h`<cosmoz-filter-bar .fields=${D}></cosmoz-filter-bar>`},M={render:()=>h`
        <cosmoz-filter-bar
            .fields=${D}
            .filters=${[{field:"supplier",operator:"is",value:"Ericsson"},{field:"name",operator:"contains",value:"cable"}]}
        ></cosmoz-filter-bar>
    `},T={render:()=>h`
        <cosmoz-filter-bar
            .fields=${D}
            .filters=${[{field:"status",operator:"is",value:"Active"}]}
        ></cosmoz-filter-bar>
    `};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:"{\n  render: () => html`<cosmoz-filter-bar .fields=${fields}></cosmoz-filter-bar>`\n}",...I.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <cosmoz-filter-bar
            .fields=\${fields}
            .filters=\${[{
    field: 'supplier',
    operator: 'is',
    value: 'Ericsson'
  }, {
    field: 'name',
    operator: 'contains',
    value: 'cable'
  }]}
        ></cosmoz-filter-bar>
    \`
}`,...M.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <cosmoz-filter-bar
            .fields=\${fields}
            .filters=\${[{
    field: 'status',
    operator: 'is',
    value: 'Active'
  }]}
        ></cosmoz-filter-bar>
    \`
}`,...T.parameters?.docs?.source}}};const Pe=["Default","WithActiveFilters","SingleFilter"];export{I as Default,T as SingleFilter,M as WithActiveFilters,Pe as __namedExportsOrder,Ue as default};
