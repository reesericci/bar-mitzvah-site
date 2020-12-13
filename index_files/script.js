class NextButton extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   version="1.1"
   inkscape:version="1.0.1 (3bc2e813f5, 2020-09-07)"
   sodipodi:docname="next-button.svg">
      <ellipse
	      class="nextbutton" style="stroke:#fff;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="path10"
         cx="34.44215"
         cy="34.53706"
         rx="33.912987"
         ry="34.007896" />
      <text class="nextbutton"
         xml:space="preserve"
         id="text835"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:10.5833px;line-height:1.25;font-family:'Inconsolata Nerd Font Mono';-inkscape-font-specification:'Inconsolata Nerd Font Mono, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;white-space:pre;shape-inside:url(#rect837);fill:#fff;fill-opacity:1;stroke:none;"
         transform="matrix(1.6859857,0,0,1.706447,-41.605007,-96.454928)"><tspan
           x="40.863281"
           y="79.256891"><tspan
             style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:10.5833px;font-family:'Inconsolata Nerd Font Mono';-inkscape-font-specification:'Inconsolata Nerd Font Mono, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal">NEXT</tspan></tspan></text>
</svg>
`;
  }
}
    
customElements.define('next-button', NextButton);
