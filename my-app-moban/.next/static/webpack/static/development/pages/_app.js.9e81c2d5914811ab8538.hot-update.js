webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./node_modules/_css-loader@3.5.3@css-loader/dist/cjs.js?!./node_modules/_next@9.4.1@next/dist/compiled/postcss-loader/index.js?!./node_modules/_highlight.js@10.0.3@highlight.js/styles/atom-one-dark.css":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@3.5.3@css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/_next@9.4.1@next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/_highlight.js@10.0.3@highlight.js/styles/atom-one-dark.css ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../_css-loader@3.5.3@css-loader/dist/runtime/api.js */ \"./node_modules/_css-loader@3.5.3@css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \"/*\\n\\nAtom One Dark by Daniel Gamage\\nOriginal One Dark Syntax theme from https://github.com/atom/one-dark-syntax\\n\\nbase:    #282c34\\nmono-1:  #abb2bf\\nmono-2:  #818896\\nmono-3:  #5c6370\\nhue-1:   #56b6c2\\nhue-2:   #61aeee\\nhue-3:   #c678dd\\nhue-4:   #98c379\\nhue-5:   #e06c75\\nhue-5-2: #be5046\\nhue-6:   #d19a66\\nhue-6-2: #e6c07b\\n\\n*/\\n\\n.hljs {\\n  display: block;\\n  overflow-x: auto;\\n  padding: 0.5em;\\n  color: #abb2bf;\\n  background: #282c34;\\n}\\n\\n.hljs-comment,\\n.hljs-quote {\\n  color: #5c6370;\\n  font-style: italic;\\n}\\n\\n.hljs-doctag,\\n.hljs-keyword,\\n.hljs-formula {\\n  color: #c678dd;\\n}\\n\\n.hljs-section,\\n.hljs-name,\\n.hljs-selector-tag,\\n.hljs-deletion,\\n.hljs-subst {\\n  color: #e06c75;\\n}\\n\\n.hljs-literal {\\n  color: #56b6c2;\\n}\\n\\n.hljs-string,\\n.hljs-regexp,\\n.hljs-addition,\\n.hljs-attribute,\\n.hljs-meta-string {\\n  color: #98c379;\\n}\\n\\n.hljs-built_in,\\n.hljs-class .hljs-title {\\n  color: #e6c07b;\\n}\\n\\n.hljs-attr,\\n.hljs-variable,\\n.hljs-template-variable,\\n.hljs-type,\\n.hljs-selector-class,\\n.hljs-selector-attr,\\n.hljs-selector-pseudo,\\n.hljs-number {\\n  color: #d19a66;\\n}\\n\\n.hljs-symbol,\\n.hljs-bullet,\\n.hljs-link,\\n.hljs-meta,\\n.hljs-selector-id,\\n.hljs-title {\\n  color: #61aeee;\\n}\\n\\n.hljs-emphasis {\\n  font-style: italic;\\n}\\n\\n.hljs-strong {\\n  font-weight: bold;\\n}\\n\\n.hljs-link {\\n  text-decoration: underline;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"/Users/ssojust/gitproject/Algorithms-and-Data-Structures/my-app-moban/node_modules/_highlight.js@10.0.3@highlight.js/styles/atom-one-dark.css\"],\"names\":[],\"mappings\":\"AAAA;;;;;;;;;;;;;;;;;;CAkBC;;AAED;EACE,cAAc;EACd,gBAAgB;EAChB,cAAc;EACd,cAAc;EACd,mBAAmB;AACrB;;AAEA;;EAEE,cAAc;EACd,kBAAkB;AACpB;;AAEA;;;EAGE,cAAc;AAChB;;AAEA;;;;;EAKE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;;;;;EAKE,cAAc;AAChB;;AAEA;;EAEE,cAAc;AAChB;;AAEA;;;;;;;;EAQE,cAAc;AAChB;;AAEA;;;;;;EAME,cAAc;AAChB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,0BAA0B;AAC5B\",\"file\":\"atom-one-dark.css\",\"sourcesContent\":[\"/*\\n\\nAtom One Dark by Daniel Gamage\\nOriginal One Dark Syntax theme from https://github.com/atom/one-dark-syntax\\n\\nbase:    #282c34\\nmono-1:  #abb2bf\\nmono-2:  #818896\\nmono-3:  #5c6370\\nhue-1:   #56b6c2\\nhue-2:   #61aeee\\nhue-3:   #c678dd\\nhue-4:   #98c379\\nhue-5:   #e06c75\\nhue-5-2: #be5046\\nhue-6:   #d19a66\\nhue-6-2: #e6c07b\\n\\n*/\\n\\n.hljs {\\n  display: block;\\n  overflow-x: auto;\\n  padding: 0.5em;\\n  color: #abb2bf;\\n  background: #282c34;\\n}\\n\\n.hljs-comment,\\n.hljs-quote {\\n  color: #5c6370;\\n  font-style: italic;\\n}\\n\\n.hljs-doctag,\\n.hljs-keyword,\\n.hljs-formula {\\n  color: #c678dd;\\n}\\n\\n.hljs-section,\\n.hljs-name,\\n.hljs-selector-tag,\\n.hljs-deletion,\\n.hljs-subst {\\n  color: #e06c75;\\n}\\n\\n.hljs-literal {\\n  color: #56b6c2;\\n}\\n\\n.hljs-string,\\n.hljs-regexp,\\n.hljs-addition,\\n.hljs-attribute,\\n.hljs-meta-string {\\n  color: #98c379;\\n}\\n\\n.hljs-built_in,\\n.hljs-class .hljs-title {\\n  color: #e6c07b;\\n}\\n\\n.hljs-attr,\\n.hljs-variable,\\n.hljs-template-variable,\\n.hljs-type,\\n.hljs-selector-class,\\n.hljs-selector-attr,\\n.hljs-selector-pseudo,\\n.hljs-number {\\n  color: #d19a66;\\n}\\n\\n.hljs-symbol,\\n.hljs-bullet,\\n.hljs-link,\\n.hljs-meta,\\n.hljs-selector-id,\\n.hljs-title {\\n  color: #61aeee;\\n}\\n\\n.hljs-emphasis {\\n  font-style: italic;\\n}\\n\\n.hljs-strong {\\n  font-weight: bold;\\n}\\n\\n.hljs-link {\\n  text-decoration: underline;\\n}\\n\"]}]);\n// Exports\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2hpZ2hsaWdodC5qc0AxMC4wLjNAaGlnaGxpZ2h0LmpzL3N0eWxlcy9hdG9tLW9uZS1kYXJrLmNzcz8wMWI0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsK0hBQXdEO0FBQ2xHO0FBQ0E7QUFDQSxjQUFjLFFBQVMsK1ZBQStWLG1CQUFtQixxQkFBcUIsbUJBQW1CLG1CQUFtQix3QkFBd0IsR0FBRyxpQ0FBaUMsbUJBQW1CLHVCQUF1QixHQUFHLGtEQUFrRCxtQkFBbUIsR0FBRyxvRkFBb0YsbUJBQW1CLEdBQUcsbUJBQW1CLG1CQUFtQixHQUFHLHdGQUF3RixtQkFBbUIsR0FBRyw4Q0FBOEMsbUJBQW1CLEdBQUcsNEpBQTRKLG1CQUFtQixHQUFHLDZGQUE2RixtQkFBbUIsR0FBRyxvQkFBb0IsdUJBQXVCLEdBQUcsa0JBQWtCLHNCQUFzQixHQUFHLGdCQUFnQiwrQkFBK0IsR0FBRyxTQUFTLHFOQUFxTixPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxPQUFPLFVBQVUsT0FBTyxTQUFTLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxTQUFTLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxZQUFZLFVBQVUsT0FBTyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksaVpBQWlaLG1CQUFtQixxQkFBcUIsbUJBQW1CLG1CQUFtQix3QkFBd0IsR0FBRyxpQ0FBaUMsbUJBQW1CLHVCQUF1QixHQUFHLGtEQUFrRCxtQkFBbUIsR0FBRyxvRkFBb0YsbUJBQW1CLEdBQUcsbUJBQW1CLG1CQUFtQixHQUFHLHdGQUF3RixtQkFBbUIsR0FBRyw4Q0FBOEMsbUJBQW1CLEdBQUcsNEpBQTRKLG1CQUFtQixHQUFHLDZGQUE2RixtQkFBbUIsR0FBRyxvQkFBb0IsdUJBQXVCLEdBQUcsa0JBQWtCLHNCQUFzQixHQUFHLGdCQUFnQiwrQkFBK0IsR0FBRyxLQUFLO0FBQ2p6RztBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDMuNS4zQGNzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL19uZXh0QDkuNC4xQG5leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvX2hpZ2hsaWdodC5qc0AxMC4wLjNAaGlnaGxpZ2h0LmpzL3N0eWxlcy9hdG9tLW9uZS1kYXJrLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vX2Nzcy1sb2FkZXJAMy41LjNAY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLypcXG5cXG5BdG9tIE9uZSBEYXJrIGJ5IERhbmllbCBHYW1hZ2VcXG5PcmlnaW5hbCBPbmUgRGFyayBTeW50YXggdGhlbWUgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vYXRvbS9vbmUtZGFyay1zeW50YXhcXG5cXG5iYXNlOiAgICAjMjgyYzM0XFxubW9uby0xOiAgI2FiYjJiZlxcbm1vbm8tMjogICM4MTg4OTZcXG5tb25vLTM6ICAjNWM2MzcwXFxuaHVlLTE6ICAgIzU2YjZjMlxcbmh1ZS0yOiAgICM2MWFlZWVcXG5odWUtMzogICAjYzY3OGRkXFxuaHVlLTQ6ICAgIzk4YzM3OVxcbmh1ZS01OiAgICNlMDZjNzVcXG5odWUtNS0yOiAjYmU1MDQ2XFxuaHVlLTY6ICAgI2QxOWE2Nlxcbmh1ZS02LTI6ICNlNmMwN2JcXG5cXG4qL1xcblxcbi5obGpzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgb3ZlcmZsb3cteDogYXV0bztcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgY29sb3I6ICNhYmIyYmY7XFxuICBiYWNrZ3JvdW5kOiAjMjgyYzM0O1xcbn1cXG5cXG4uaGxqcy1jb21tZW50LFxcbi5obGpzLXF1b3RlIHtcXG4gIGNvbG9yOiAjNWM2MzcwO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4uaGxqcy1kb2N0YWcsXFxuLmhsanMta2V5d29yZCxcXG4uaGxqcy1mb3JtdWxhIHtcXG4gIGNvbG9yOiAjYzY3OGRkO1xcbn1cXG5cXG4uaGxqcy1zZWN0aW9uLFxcbi5obGpzLW5hbWUsXFxuLmhsanMtc2VsZWN0b3ItdGFnLFxcbi5obGpzLWRlbGV0aW9uLFxcbi5obGpzLXN1YnN0IHtcXG4gIGNvbG9yOiAjZTA2Yzc1O1xcbn1cXG5cXG4uaGxqcy1saXRlcmFsIHtcXG4gIGNvbG9yOiAjNTZiNmMyO1xcbn1cXG5cXG4uaGxqcy1zdHJpbmcsXFxuLmhsanMtcmVnZXhwLFxcbi5obGpzLWFkZGl0aW9uLFxcbi5obGpzLWF0dHJpYnV0ZSxcXG4uaGxqcy1tZXRhLXN0cmluZyB7XFxuICBjb2xvcjogIzk4YzM3OTtcXG59XFxuXFxuLmhsanMtYnVpbHRfaW4sXFxuLmhsanMtY2xhc3MgLmhsanMtdGl0bGUge1xcbiAgY29sb3I6ICNlNmMwN2I7XFxufVxcblxcbi5obGpzLWF0dHIsXFxuLmhsanMtdmFyaWFibGUsXFxuLmhsanMtdGVtcGxhdGUtdmFyaWFibGUsXFxuLmhsanMtdHlwZSxcXG4uaGxqcy1zZWxlY3Rvci1jbGFzcyxcXG4uaGxqcy1zZWxlY3Rvci1hdHRyLFxcbi5obGpzLXNlbGVjdG9yLXBzZXVkbyxcXG4uaGxqcy1udW1iZXIge1xcbiAgY29sb3I6ICNkMTlhNjY7XFxufVxcblxcbi5obGpzLXN5bWJvbCxcXG4uaGxqcy1idWxsZXQsXFxuLmhsanMtbGluayxcXG4uaGxqcy1tZXRhLFxcbi5obGpzLXNlbGVjdG9yLWlkLFxcbi5obGpzLXRpdGxlIHtcXG4gIGNvbG9yOiAjNjFhZWVlO1xcbn1cXG5cXG4uaGxqcy1lbXBoYXNpcyB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5obGpzLXN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmhsanMtbGluayB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL3Nzb2p1c3QvZ2l0cHJvamVjdC9BbGdvcml0aG1zLWFuZC1EYXRhLVN0cnVjdHVyZXMvbXktYXBwLW1vYmFuL25vZGVfbW9kdWxlcy9faGlnaGxpZ2h0LmpzQDEwLjAuM0BoaWdobGlnaHQuanMvc3R5bGVzL2F0b20tb25lLWRhcmsuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FrQkM7O0FBRUQ7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7OztFQUdFLGNBQWM7QUFDaEI7O0FBRUE7Ozs7O0VBS0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7Ozs7O0VBS0UsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxjQUFjO0FBQ2hCOztBQUVBOzs7Ozs7OztFQVFFLGNBQWM7QUFDaEI7O0FBRUE7Ozs7OztFQU1FLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUJcIixcImZpbGVcIjpcImF0b20tb25lLWRhcmsuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qXFxuXFxuQXRvbSBPbmUgRGFyayBieSBEYW5pZWwgR2FtYWdlXFxuT3JpZ2luYWwgT25lIERhcmsgU3ludGF4IHRoZW1lIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2F0b20vb25lLWRhcmstc3ludGF4XFxuXFxuYmFzZTogICAgIzI4MmMzNFxcbm1vbm8tMTogICNhYmIyYmZcXG5tb25vLTI6ICAjODE4ODk2XFxubW9uby0zOiAgIzVjNjM3MFxcbmh1ZS0xOiAgICM1NmI2YzJcXG5odWUtMjogICAjNjFhZWVlXFxuaHVlLTM6ICAgI2M2NzhkZFxcbmh1ZS00OiAgICM5OGMzNzlcXG5odWUtNTogICAjZTA2Yzc1XFxuaHVlLTUtMjogI2JlNTA0Nlxcbmh1ZS02OiAgICNkMTlhNjZcXG5odWUtNi0yOiAjZTZjMDdiXFxuXFxuKi9cXG5cXG4uaGxqcyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG92ZXJmbG93LXg6IGF1dG87XFxuICBwYWRkaW5nOiAwLjVlbTtcXG4gIGNvbG9yOiAjYWJiMmJmO1xcbiAgYmFja2dyb3VuZDogIzI4MmMzNDtcXG59XFxuXFxuLmhsanMtY29tbWVudCxcXG4uaGxqcy1xdW90ZSB7XFxuICBjb2xvcjogIzVjNjM3MDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmhsanMtZG9jdGFnLFxcbi5obGpzLWtleXdvcmQsXFxuLmhsanMtZm9ybXVsYSB7XFxuICBjb2xvcjogI2M2NzhkZDtcXG59XFxuXFxuLmhsanMtc2VjdGlvbixcXG4uaGxqcy1uYW1lLFxcbi5obGpzLXNlbGVjdG9yLXRhZyxcXG4uaGxqcy1kZWxldGlvbixcXG4uaGxqcy1zdWJzdCB7XFxuICBjb2xvcjogI2UwNmM3NTtcXG59XFxuXFxuLmhsanMtbGl0ZXJhbCB7XFxuICBjb2xvcjogIzU2YjZjMjtcXG59XFxuXFxuLmhsanMtc3RyaW5nLFxcbi5obGpzLXJlZ2V4cCxcXG4uaGxqcy1hZGRpdGlvbixcXG4uaGxqcy1hdHRyaWJ1dGUsXFxuLmhsanMtbWV0YS1zdHJpbmcge1xcbiAgY29sb3I6ICM5OGMzNzk7XFxufVxcblxcbi5obGpzLWJ1aWx0X2luLFxcbi5obGpzLWNsYXNzIC5obGpzLXRpdGxlIHtcXG4gIGNvbG9yOiAjZTZjMDdiO1xcbn1cXG5cXG4uaGxqcy1hdHRyLFxcbi5obGpzLXZhcmlhYmxlLFxcbi5obGpzLXRlbXBsYXRlLXZhcmlhYmxlLFxcbi5obGpzLXR5cGUsXFxuLmhsanMtc2VsZWN0b3ItY2xhc3MsXFxuLmhsanMtc2VsZWN0b3ItYXR0cixcXG4uaGxqcy1zZWxlY3Rvci1wc2V1ZG8sXFxuLmhsanMtbnVtYmVyIHtcXG4gIGNvbG9yOiAjZDE5YTY2O1xcbn1cXG5cXG4uaGxqcy1zeW1ib2wsXFxuLmhsanMtYnVsbGV0LFxcbi5obGpzLWxpbmssXFxuLmhsanMtbWV0YSxcXG4uaGxqcy1zZWxlY3Rvci1pZCxcXG4uaGxqcy10aXRsZSB7XFxuICBjb2xvcjogIzYxYWVlZTtcXG59XFxuXFxuLmhsanMtZW1waGFzaXMge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4uaGxqcy1zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5obGpzLWxpbmsge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblwiXX1dKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/_css-loader@3.5.3@css-loader/dist/cjs.js?!./node_modules/_next@9.4.1@next/dist/compiled/postcss-loader/index.js?!./node_modules/_highlight.js@10.0.3@highlight.js/styles/atom-one-dark.css\n");

/***/ }),

/***/ "./node_modules/_css-loader@3.5.3@css-loader/dist/cjs.js?!./node_modules/_next@9.4.1@next/dist/compiled/postcss-loader/index.js?!./node_modules/_highlight.js@10.0.3@highlight.js/styles/atom-one-light.css":
false,

/***/ "./node_modules/_highlight.js@10.0.3@highlight.js/styles/atom-one-dark.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/_highlight.js@10.0.3@highlight.js/styles/atom-one-dark.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../_style-loader@1.2.1@style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/_style-loader@1.2.1@style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../_css-loader@3.5.3@css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../_next@9.4.1@next/dist/compiled/postcss-loader??__nextjs_postcss!./atom-one-dark.css */ \"./node_modules/_css-loader@3.5.3@css-loader/dist/cjs.js?!./node_modules/_next@9.4.1@next/dist/compiled/postcss-loader/index.js?!./node_modules/_highlight.js@10.0.3@highlight.js/styles/atom-one-dark.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = function(element){// These elements should always exist. If they do not,\n// this code should fail.\nvar anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>\n// Each style tag should be placed right before our\n// anchor. By inserting before and not after, we do not\n// need to track the last inserted element.\nparentNode.insertBefore(element,anchorElement)// Remember: this is development only code.\n//\n// After styles are injected, we need to remove the\n// <style> tags that set `body { display: none; }`.\n//\n// We use `requestAnimationFrame` as a way to defer\n// this operation since there may be multiple style\n// tags.\n;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\nif (true) {\n  if (!content.locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var oldLocals = content.locals;\n\n    module.hot.accept(\n      /*! !../../_css-loader@3.5.3@css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../_next@9.4.1@next/dist/compiled/postcss-loader??__nextjs_postcss!./atom-one-dark.css */ \"./node_modules/_css-loader@3.5.3@css-loader/dist/cjs.js?!./node_modules/_next@9.4.1@next/dist/compiled/postcss-loader/index.js?!./node_modules/_highlight.js@10.0.3@highlight.js/styles/atom-one-dark.css\",\n      function () {\n        content = __webpack_require__(/*! !../../_css-loader@3.5.3@css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../_next@9.4.1@next/dist/compiled/postcss-loader??__nextjs_postcss!./atom-one-dark.css */ \"./node_modules/_css-loader@3.5.3@css-loader/dist/cjs.js?!./node_modules/_next@9.4.1@next/dist/compiled/postcss-loader/index.js?!./node_modules/_highlight.js@10.0.3@highlight.js/styles/atom-one-dark.css\");\n\n              content = content.__esModule ? content.default : content;\n\n              if (typeof content === 'string') {\n                content = [[module.i, content, '']];\n              }\n\n              if (!isEqualLocals(oldLocals, content.locals)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = content.locals;\n\n              update(content);\n      }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\nmodule.exports = content.locals || {};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2hpZ2hsaWdodC5qc0AxMC4wLjNAaGlnaGxpZ2h0LmpzL3N0eWxlcy9hdG9tLW9uZS1kYXJrLmNzcz80ZmU0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFVBQVUsbUJBQU8sQ0FBQyxpTEFBa0Y7QUFDcEcsMEJBQTBCLG1CQUFPLENBQUMsOFdBQXVLOztBQUV6TTs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBLG1DQUFtQztBQUNuQztBQUNBLHNFQUFzRSx3Q0FBd0M7QUFDOUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGVBQWUsRUFBRTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsb0RBQW9ELHdFQUF3RSxJQUFJLEVBQUUsb0NBQW9DO0FBQ3ZLOztBQUVBOzs7QUFHQSxJQUFJLElBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLDhXQUF1SztBQUM3SztBQUNBLGtCQUFrQixtQkFBTyxDQUFDLDhXQUF1Szs7QUFFak07O0FBRUE7QUFDQSw0QkFBNEIsUUFBUztBQUNyQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9faGlnaGxpZ2h0LmpzQDEwLjAuM0BoaWdobGlnaHQuanMvc3R5bGVzL2F0b20tb25lLWRhcmsuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vX3N0eWxlLWxvYWRlckAxLjIuMUBzdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vX2Nzcy1sb2FkZXJAMy41LjNAY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTUtMSEuLi8uLi9fbmV4dEA5LjQuMUBuZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/P19fbmV4dGpzX3Bvc3Rjc3MhLi9hdG9tLW9uZS1kYXJrLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KS8vIFJlbWVtYmVyOiB0aGlzIGlzIGRldmVsb3BtZW50IG9ubHkgY29kZS5cbi8vXG4vLyBBZnRlciBzdHlsZXMgYXJlIGluamVjdGVkLCB3ZSBuZWVkIHRvIHJlbW92ZSB0aGVcbi8vIDxzdHlsZT4gdGFncyB0aGF0IHNldCBgYm9keSB7IGRpc3BsYXk6IG5vbmU7IH1gLlxuLy9cbi8vIFdlIHVzZSBgcmVxdWVzdEFuaW1hdGlvbkZyYW1lYCBhcyBhIHdheSB0byBkZWZlclxuLy8gdGhpcyBvcGVyYXRpb24gc2luY2UgdGhlcmUgbWF5IGJlIG11bHRpcGxlIHN0eWxlXG4vLyB0YWdzLlxuOyhzZWxmLnJlcXVlc3RBbmltYXRpb25GcmFtZXx8c2V0VGltZW91dCkoZnVuY3Rpb24oKXtmb3IodmFyIHg9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbmV4dC1oaWRlLWZvdWNdJyksaT14Lmxlbmd0aDtpLS07KXt4W2ldLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoeFtpXSk7fX0pO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi9fY3NzLWxvYWRlckAzLjUuM0Bjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtNS0xIS4uLy4uL19uZXh0QDkuNC4xQG5leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8/X19uZXh0anNfcG9zdGNzcyEuL2F0b20tb25lLWRhcmsuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9fY3NzLWxvYWRlckAzLjUuM0Bjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtNS0xIS4uLy4uL19uZXh0QDkuNC4xQG5leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8/X19uZXh0anNfcG9zdGNzcyEuL2F0b20tb25lLWRhcmsuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/_highlight.js@10.0.3@highlight.js/styles/atom-one-dark.css\n");

/***/ }),

/***/ "./node_modules/_highlight.js@10.0.3@highlight.js/styles/atom-one-light.css":
false,

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MyApp; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/_@babel_runtime@7.9.6@@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/_react@16.13.1@react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/index.css */ \"./styles/index.css\");\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var highlight_js_styles_atom_one_dark_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highlight.js/styles/atom-one-dark.css */ \"./node_modules/_highlight.js@10.0.3@highlight.js/styles/atom-one-dark.css\");\n/* harmony import */ var highlight_js_styles_atom_one_dark_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highlight_js_styles_atom_one_dark_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/ssojust/gitproject/Algorithms-and-Data-Structures/my-app-moban/pages/_app.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\nfunction MyApp(_ref) {\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n  return __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 10\n    }\n  }));\n}\n_c = MyApp;\n\nvar _c;\n\n$RefreshReg$(_c, \"MyApp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/_webpack@4.43.0@webpack/buildin/harmony-module.js */ \"./node_modules/_webpack@4.43.0@webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ2UsU0FBU0EsS0FBVCxPQUF5QztBQUFBLE1BQXhCQyxTQUF3QixRQUF4QkEsU0FBd0I7QUFBQSxNQUFiQyxTQUFhLFFBQWJBLFNBQWE7QUFDdEQsU0FBTyxNQUFDLFNBQUQseUZBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFQO0FBQ0Q7S0FGdUJGLEsiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvaW5kZXguY3NzJ1xuaW1wb3J0ICdoaWdobGlnaHQuanMvc3R5bGVzL2F0b20tb25lLWRhcmsuY3NzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

})