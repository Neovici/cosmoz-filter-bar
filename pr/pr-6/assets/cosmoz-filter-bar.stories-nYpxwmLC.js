import{r as ue,D as he,A as g,w as B,b as h}from"./iframe-CZqdhbe3.js";import"./preload-helper-PPVm8Dsz.js";let G,oe=0;function X(e){G=e}function Z(){G=null,oe=0}function pe(){return oe++}const Y=Symbol("haunted.phase"),D=Symbol("haunted.hook"),K=Symbol("haunted.update"),J=Symbol("haunted.commit"),S=Symbol("haunted.effects"),P=Symbol("haunted.layoutEffects"),V="haunted.context";class fe{update;host;virtual;[D];[S];[P];constructor(t,o){this.update=t,this.host=o,this[D]=new Map,this[S]=[],this[P]=[]}run(t){X(this);let o=t();return Z(),o}_runEffects(t){let o=this[t];X(this);for(let r of o)r.call(this);Z()}runEffects(){this._runEffects(S)}runLayoutEffects(){this._runEffects(P)}teardown(){this[D].forEach(o=>{typeof o.teardown=="function"&&o.teardown(!0)})}}const me=Promise.resolve().then.bind(Promise.resolve());function re(){let e=[],t;function o(){t=null;let r=e;e=[];for(var s=0,n=r.length;s<n;s++)r[s]()}return function(r){e.push(r),t==null&&(t=me(o))}}const be=re(),ee=re();class ve{renderer;host;state;[Y];_updateQueued;_active;constructor(t,o){this.renderer=t,this.host=o,this.state=new fe(this.update.bind(this),o),this[Y]=null,this._updateQueued=!1,this._active=!1}update(){this._active&&(this._updateQueued||(be(()=>{let t=this.handlePhase(K);ee(()=>{this.handlePhase(J,t),ee(()=>{this.handlePhase(S)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(t,o){switch(this[Y]=t,t){case J:this.commit(o),this.runEffects(P);return;case K:return this.render();case S:return this.runEffects(S)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(t){this.state._runEffects(t)}teardown(){this.state.teardown()}pause(){this._active=!1}resume(){this._active=!0}}const se=(...e)=>{const t=new CSSStyleSheet;return t.replaceSync(e.join("")),t},ge=e=>e?.map(t=>typeof t=="string"?se(t):t),ze=(e,...t)=>e.flatMap((o,r)=>[o,t[r]||""]).join(""),k=ze,xe=(e="")=>e.replace(/-+([a-z])?/g,(t,o)=>o?o.toUpperCase():"");function ye(e){class t extends ve{frag;renderResult;constructor(s,n,c){super(s,c||n),this.frag=n}commit(s){this.renderResult=e(s,this.frag)}}function o(r,s,n){const c=(n||s||{}).baseElement||HTMLElement,{observedAttributes:i=[],useShadowDOM:d=!0,shadowRootInit:a={},styleSheets:l}=n||s||{},m=ge(r.styleSheets||l);class _ extends c{_scheduler;static get observedAttributes(){return r.observedAttributes||i||[]}constructor(){if(super(),d===!1)this._scheduler=new t(r,this);else{const p=this.attachShadow({mode:"open",...a});m&&(p.adoptedStyleSheets=m),this._scheduler=new t(r,p,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(p,v,z){if(v===z)return;let x=z===""?!0:z;Reflect.set(this,xe(p),x)}}function u(f){let p=f,v=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return p},set(z){v&&p===z||(v=!0,p=z,this._scheduler&&this._scheduler.update())}})}const y=new Proxy(c.prototype,{getPrototypeOf(f){return f},set(f,p,v,z){let x;return p in f?(x=Object.getOwnPropertyDescriptor(f,p),x&&x.set?(x.set.call(z,v),!0):(Reflect.set(f,p,v,z),!0)):(typeof p=="symbol"||p[0]==="_"?x={enumerable:!0,configurable:!0,writable:!0,value:v}:x=u(v),Object.defineProperty(z,p,x),x.set&&x.set.call(z,v),!0)}});return Object.setPrototypeOf(_.prototype,y),_}return o}class C{id;state;constructor(t,o){this.id=t,this.state=o}}function we(e,...t){let o=pe(),r=G[D],s=r.get(o);return s||(s=new e(o,G,...t),r.set(o,s)),s.update(...t)}function A(e){return we.bind(null,e)}function ne(e){return A(class extends C{callback;lastValues;values;_teardown;constructor(t,o,r,s){super(t,o),e(o,this)}update(t,o){this.callback=t,this.values=o}call(){const t=!this.values||this.hasChanged();this.lastValues=this.values,t&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(t){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),t&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((t,o)=>this.lastValues[o]!==t)}})}function ie(e,t){e[S].push(t)}const E=ne(ie),$e=e=>e instanceof Element?e:e.startNode||e.endNode||e.parentNode,ae=A(class extends C{Context;value;_ranEffect;_unsubscribe;constructor(e,t,o){super(e,t),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,ie(t,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){const t={Context:e,callback:this._updater};$e(this.state.host).dispatchEvent(new CustomEvent(V,{detail:t,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:r=null,value:s}=t;this.value=r?s:e.defaultValue,this._unsubscribe=r}teardown(){this._unsubscribe&&this._unsubscribe()}});function ke(e){return t=>{const o={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(V,this)}disconnectedCallback(){this.removeEventListener(V,this)}handleEvent(r){const{detail:s}=r;s.Context===o&&(s.value=this.value,s.unsubscribe=this.unsubscribe.bind(this,s.callback),this.listeners.add(s.callback),r.stopPropagation())}unsubscribe(r){this.listeners.delete(r)}set value(r){this._value=r;for(let s of this.listeners)s(r)}get value(){return this._value}},Consumer:e(function({render:r}){const s=ae(o);return r(s)},{useShadowDOM:!1}),defaultValue:t};return o}}const w=A(class extends C{value;values;constructor(e,t,o,r){super(e,t),this.value=o(),this.values=r}update(e,t){return this.hasChanged(t)&&(this.values=t,this.value=e()),this.value}hasChanged(e=[]){return e.some((t,o)=>this.values[o]!==t)}}),b=(e,t)=>w(()=>e,t);function _e(e,t){e[P].push(t)}ne(_e);const T=A(class extends C{args;constructor(e,t,o){super(e,t),this.updater=this.updater.bind(this),typeof o=="function"&&(o=o()),this.makeArgs(o)}update(){return this.args}updater(e){const[t]=this.args;typeof e=="function"&&(e=e(t)),!Object.is(t,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}});A(class extends C{reducer;currentState;constructor(e,t,o,r,s){super(e,t),this.dispatch=this.dispatch.bind(this),this.currentState=s!==void 0?s(r):r}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}});const Se=/([A-Z])/gu,te=A(class extends C{property;eventName;constructor(e,t,o,r){if(super(e,t),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=o,this.eventName=o.replace(Se,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof r=="function"&&(r=r()),r!=null&&this.updateProp(r))}update(e,t){return[this.state.host[this.property],this.updater]}updater(e){const t=this.state.host[this.property];typeof e=="function"&&(e=e(t)),!Object.is(t,e)&&this.updateProp(e)}updateProp(e){this.notify(e).defaultPrevented||(this.state.host[this.property]=e)}notify(e){const t=new CustomEvent(this.eventName,{detail:{value:e,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(t),t}});function W(e){return w(()=>({current:e}),[])}const Ee=A(class extends C{update(){return this.state.host}});function Ce({render:e}){const t=ye(e),o=ke(t);return{component:t,createContext:o}}const Ae={CHILD:2},Ie=e=>(...t)=>({_$litDirective$:e,values:t});class Me{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,o,r){this._$Ct=t,this._$AM=o,this._$Ci=r}_$AS(t,o){return this.update(t,o)}update(t,o){return this.render(...o)}}const N=(e,t)=>{const o=e._$AN;if(o===void 0)return!1;for(const r of o)r._$AO?.(t,!1),N(r,t);return!0},U=e=>{let t,o;do{if((t=e._$AM)===void 0)break;o=t._$AN,o.delete(e),e=t}while(o?.size===0)},ce=e=>{for(let t;t=e._$AM;e=t){let o=t._$AN;if(o===void 0)t._$AN=o=new Set;else if(o.has(e))break;o.add(e),Ne(t)}};function Pe(e){this._$AN!==void 0?(U(this),this._$AM=e,ce(this)):this._$AM=e}function Te(e,t=!1,o=0){const r=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(t)if(Array.isArray(r))for(let n=o;n<r.length;n++)N(r[n],!1),U(r[n]);else r!=null&&(N(r,!1),U(r));else N(this,e)}const Ne=e=>{e.type==Ae.CHILD&&(e._$AP??=Te,e._$AQ??=Pe)};class Re extends Me{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,o,r){super._$AT(t,o,r),ce(this),this.isConnected=t._$AU}_$AO(t,o=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),o&&(N(this,t),U(this))}setValue(t){if(ue(this._$Ct))this._$Ct._$AI(t,this);else{const o=[...this._$Ct._$AH];o[this._$Ci]=t,this._$Ct._$AI(o,this,0)}}disconnected(){}reconnected(){}}const{component:I,createContext:Le}=Ce({render:he});const $=e=>e??g;function H(e,t,o){return e?t(e):o?.(e)}const Oe=({slot:e,title:t,className:o,width:r="24",height:s="24",styles:n}={})=>h`
  <svg
    slot=${$(e)}
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
    style=${$(n)}
  >
    ${H(t,()=>B`<title>${t}</title>`)}
    <path d="m6 9 6 6 6-6" />
  </svg>
`,Fe=({slot:e,title:t,className:o,width:r="24",height:s="24",styles:n}={})=>h`
  <svg
    slot=${$(e)}
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
    style=${$(n)}
  >
    ${H(t,()=>B`<title>${t}</title>`)}
    <path d="M6 12h12M3 6h18M9 18h6" />
  </svg>
`,je=({slot:e,title:t,className:o,width:r="24",height:s="24",styles:n}={})=>h`
  <svg
    slot=${$(e)}
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
    style=${$(n)}
  >
    ${H(t,()=>B`<title>${t}</title>`)}
    <path d="m21 21-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
  </svg>
`,De=({slot:e,title:t,className:o,width:r="24",height:s="24",styles:n}={})=>h`
  <svg
    slot=${$(e)}
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
    style=${$(n)}
  >
    ${H(t,()=>B`<title>${t}</title>`)}
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
`,R=se(k`
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
`),Ge=k`
	:host {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: calc(var(--cz-spacing, 0.25rem) * 2);
	}

	.clear-all {
		white-space: nowrap;
	}
`,Ue=k`
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
`,Be=()=>{const[e,t]=te("filters",()=>[]),[o]=te("fields"),r=b(i=>t(d=>[...d,{field:i,operator:o?.[i]?.operators?.[0]??"is",value:void 0}]),[o]),s=b(i=>t(d=>d.filter((a,l)=>l!==i)),[]),n=b((i,d)=>t(a=>a.map((l,m)=>m===i?{...l,...d}:l)),[]),c=b(()=>t([]),[]);return{filters:e,fields:o,add:r,remove:s,update:n,clear:c}},He=k`
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
`,Ye=k`
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
		${He}
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
`,Qe=["variant","size","disabled","full-width","type"],Ve=e=>{const t=e.hasAttribute("disabled"),o=e.getAttribute("type")||"button";return h`
		<button type=${o} class="button" ?disabled=${t} part="button">
			<slot name="prefix"></slot>
			<slot></slot>
			<slot name="suffix"></slot>
		</button>
	`};customElements.define("cosmoz-button",I(Ve,{observedAttributes:Qe,styleSheets:[R,Ye],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const Q=new WeakMap,le=Ie(class extends Re{render(e){return g}update(e,[t]){const o=t!==this.G;return o&&this.G!==void 0&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),g}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let o=Q.get(t);o===void 0&&(o=new WeakMap,Q.set(t,o)),o.get(this.G)!==void 0&&this.G.call(this.ht,void 0),o.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?Q.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),We=({host:e,popoverRef:t,openOnHover:o,openOnFocus:r,open:s,close:n})=>{const c=W(),i=()=>clearTimeout(c.current),d=()=>{clearTimeout(c.current),c.current=setTimeout(()=>{const l=t.current;o&&(e.matches(":hover")||l?.matches(":hover"))||r&&(e.matches(":focus-within")||l?.matches(":focus-within"))||n()},100)},a=()=>{i(),s()};E(()=>{if(o)return e.addEventListener("pointerenter",a),e.addEventListener("pointerleave",d),()=>{i(),e.removeEventListener("pointerenter",a),e.removeEventListener("pointerleave",d)}},[o,e]),E(()=>{if(r)return e.addEventListener("focusin",a),e.addEventListener("focusout",d),()=>{i(),e.removeEventListener("focusin",a),e.removeEventListener("focusout",d)}},[r,e])},qe=e=>{if(e.newState!=="open")return;const r=e.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const s of r){const n=s.matches("[autofocus]")?s:s.querySelector("[autofocus]");if(n instanceof HTMLElement){n.focus();break}}},Xe=k`
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
`,Ze=e=>{const{placement:t="bottom span-right",openOnHover:o,openOnFocus:r}=e,s=W(),n=()=>s.current?.showPopover(),c=()=>s.current?.hidePopover(),i=()=>s.current?.togglePopover();return We({host:e,popoverRef:s,openOnHover:o,openOnFocus:r,open:n,close:c}),h`
		<slot name="button" @click=${r?n:i}></slot>
		<div
			popover
			style="position-area: ${t}"
			@toggle=${l=>{qe(l),e.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:l.newState,oldState:l.oldState,composed:!0}))}}
			@select=${c}
			${le(l=>l&&(s.current=l))}
		>
			<slot></slot>
		</div>
	`};customElements.define("cosmoz-dropdown-next",I(Ze,{styleSheets:[Xe],observedAttributes:["placement","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));function Ke(e){return()=>e}const Je=Ke(),et=Je,de=Le(()=>et);customElements.define("cosmoz-keybinding-provider",de.Provider);const tt=e=>{const t=w(()=>({}),[]);return w(()=>Object.assign(t,e),[t,...Object.values(e)])},M=(e,t)=>{const o=ae(de),r=tt(e);E(()=>o(r),t)},ot=Symbol("menu-navigate-up"),rt=Symbol("menu-navigate-down"),st=Symbol("menu-navigate-home"),nt=Symbol("menu-navigate-end"),it=Symbol("menu-select"),at=({items:e,onSelect:t,host:o,itemsContainerRef:r})=>{const s=b(()=>{const u=document.activeElement;return u!=null&&(o.contains(u)||u.contains(o))},[o]),[n,c]=T(-1);E(()=>{c(-1)},[e]),E(()=>{if(n<0)return;r.current?.querySelector(`[data-index="${n}"]`)?.scrollIntoView({block:"nearest"})},[n,r]);const i=b((u,y)=>{const f=e.length;if(f===0)return-1;let p=u;p<0&&(p=y===1?-1:f);for(let v=0;v<f;v++)if(p=(p+y+f)%f,!e[p]?.disabled)return p;return-1},[e]),d=b(()=>{c(u=>i(u,1))},[i]),a=b(()=>{c(u=>i(u,-1))},[i]),l=b(()=>{const u=e.findIndex(y=>!y.disabled);c(u)},[e]),m=b(()=>{for(let u=e.length-1;u>=0;u--)if(!e[u].disabled){c(u);return}},[e]),_=b(()=>{if(n>=0&&n<e.length){const u=e[n];u&&!u.disabled&&t(u)}},[e,n,t]);return M({activity:rt,callback:d,element:()=>o,check:s},[d,o,s]),M({activity:ot,callback:a,element:()=>o,check:s},[a,o,s]),M({activity:st,callback:l,element:()=>o,check:s},[l,o,s]),M({activity:nt,callback:m,element:()=>o,check:s},[m,o,s]),M({activity:it,callback:_,element:()=>o,check:s},[_,o,s]),{index:n,highlight:b(u=>c(u),[])}},ct=(e,t)=>{if(!e)return Promise.resolve([]);const o=typeof e=="function"?e(t):e;return Promise.resolve(o).then(r=>r??[])},lt=(e,t)=>{const[o,r]=T([]),[s,n]=T(!1),[c,i]=T(null);return E(()=>{let a=!1;return n(!0),i(null),ct(e,t).then(l=>{a||r(l)}).catch(l=>{a||i(l?.message??"Failed to load items")}).finally(()=>{a||n(!1)}),()=>{a=!0}},[e,t]),{items:w(()=>{if(!t.trim())return o;const a=t.toLowerCase();return o.filter(l=>l.label.toLowerCase().includes(a))},[o,t]),loading:s,error:c}},dt=k`
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
`,ut=je({className:"search-icon"}),ht=({item:e,index:t,highlightedIndex:o,highlight:r,select:s})=>h`
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
		${e.icon??g}
		<span class="label">${e.label}</span>
		${e.suffix??g}
	</cosmoz-button>
`,pt=({grouped:e,items:t,highlightedIndex:o,highlight:r,select:s})=>{const n=new Map;return t.forEach((c,i)=>n.set(c,i)),Array.from(e.entries()).map(([c,i])=>{const d=i.map(a=>ht({item:a,index:n.get(a)??-1,highlightedIndex:o,highlight:r,select:s}));return c?h`
				<div class="group" role="group" aria-label=${c}>
					<div class="group-label">${c}</div>
					${d}
				</div>
			`:d})},ft=e=>{const t=new Map;for(const o of e){const r=o.group||"";t.has(r)||t.set(r,[]),t.get(r).push(o)}return t},mt=({source:e,searchable:t=!1,placeholder:o="Search..."})=>{const r=Ee(),s=W(),[n,c]=T(""),{items:i,loading:d,error:a}=lt(e,n),l=w(()=>ft(i),[i]),m=b(f=>{r.dispatchEvent(new CustomEvent("select",{bubbles:!0,composed:!0,detail:{item:f}}))},[r]),{index:_,highlight:u}=at({items:i,onSelect:m,host:r,itemsContainerRef:s});E(()=>{r.setAttribute("role","menu")},[r]);const y=i.length>0;return h`
		${t?h`
					<div class="search${d?" loading":""}">
						${ut}
						<input
							class="search-input"
							.value=${n}
							@input=${f=>c(f.target.value)}
							placeholder=${o}
							autofocus
						/>
					</div>
				`:g}

		<div
			class="items"
			${le(f=>{s.current=f})}
		>
			${a?h`<div class="error">${a}</div>`:g}
			${d&&i.length===0?h`<div class="loading-text">Loading...</div>`:g}
			${!d&&!y&&n.trim().length>0?h`
						<slot name="no-results">
							<div class="no-results">No results found</div>
						</slot>
					`:g}
			${y?pt({grouped:l,items:i,highlightedIndex:_,highlight:u,select:m}):g}
		</div>
	`};customElements.define("cosmoz-command-menu",I(mt,{styleSheets:[R,dt],observedAttributes:["searchable","placeholder"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const bt=k`
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
`,vt=()=>h`<slot></slot>`;customElements.define("cosmoz-keybinding-badge",I(vt,{styleSheets:[R,bt]}));const gt=De({width:"16",height:"16"}),zt=Oe({width:"14",height:"14"}),xt=({filter:e,field:t,index:o,onUpdate:r,onRemove:s})=>{const n=t?.operators,c=n!=null&&n.length>1,i=w(()=>(n??[]).map(m=>({label:m,value:m})),[n]),d=b(m=>{r(o,{operator:m.detail.item.value})},[r,o]),a=b(m=>{r(o,{value:m})},[r,o]),l=b(()=>{s(o)},[s,o]);return h`
		<div class="segment field-label">${t?.label??e.field}</div>

		<div class="segment operator">
			${c?h`
						<cosmoz-dropdown-next>
							<button class="operator-button" slot="button">
								${e.operator} ${zt}
							</button>
							<cosmoz-command-menu
								.source=${i}
								@select=${d}
							></cosmoz-command-menu>
						</cosmoz-dropdown-next>
					`:h`<span>${e.operator}</span>`}
		</div>

		<div class="segment value">
			${t?.input?t.input({value:e.value,onChange:a}):g}
		</div>

		<div class="remove" @click=${l} role="button" tabindex="0">
			${gt}
		</div>
	`};customElements.define("cosmoz-filter-chip",I(xt,{styleSheets:[R,Ue]}));const yt=Fe({slot:"prefix",width:"20",height:"20"}),wt=()=>{const{filters:e,fields:t,add:o,remove:r,update:s,clear:n}=Be(),c=w(()=>Object.entries(t??{}).map(([a,l])=>({label:l.label,value:a,icon:l.icon})),[t]),i=b(a=>{o(a.detail.item.value)},[o]),d=e.length>0;return h`
		<cosmoz-dropdown-next>
			<cosmoz-button slot="button" variant="secondary">
				${yt} ${d?g:"Filters"}
			</cosmoz-button>
			<cosmoz-command-menu
				searchable
				.source=${c}
				@select=${i}
			></cosmoz-command-menu>
		</cosmoz-dropdown-next>

		${e.map((a,l)=>h`
				<cosmoz-filter-chip
					.filter=${a}
					.field=${t?.[a.field]}
					.index=${l}
					.onUpdate=${s}
					.onRemove=${r}
				></cosmoz-filter-chip>
			`)}
		${e.length>1?h`
					<cosmoz-button class="clear-all" variant="tertiary" @click=${n}>
						Clear all
					</cosmoz-button>
				`:g}
	`};customElements.define("cosmoz-filter-bar",I(wt,{styleSheets:[R,Ge]}));const L=({value:e,onChange:t})=>h`<input
        type="text"
        .value=${e??""}
        @input=${o=>t(o.target.value)}
        placeholder="Enter value..."
    />`,q={supplier:{label:"Supplier",operators:["is","is not"],input:L},status:{label:"Status",operators:["is","is not"],input:L},name:{label:"Name",operators:["contains"],input:L},description:{label:"Description",operators:["contains"],input:L}},_t={title:"CosmozFilterBar",component:"cosmoz-filter-bar",tags:["autodocs"]},O={render:()=>h`<cosmoz-filter-bar .fields=${q}></cosmoz-filter-bar>`},F={render:()=>h`
        <cosmoz-filter-bar
            .fields=${q}
            .filters=${[{field:"supplier",operator:"is",value:"Ericsson"},{field:"name",operator:"contains",value:"cable"}]}
        ></cosmoz-filter-bar>
    `},j={render:()=>h`
        <cosmoz-filter-bar
            .fields=${q}
            .filters=${[{field:"status",operator:"is",value:"Active"}]}
        ></cosmoz-filter-bar>
    `};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:"{\n  render: () => html`<cosmoz-filter-bar .fields=${fields}></cosmoz-filter-bar>`\n}",...O.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};const St=["Default","WithActiveFilters","SingleFilter"];export{O as Default,j as SingleFilter,F as WithActiveFilters,St as __namedExportsOrder,_t as default};
