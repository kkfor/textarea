class Editor {
  el: HTMLDivElement;
  constructor(parentEl: any) {
    this.el = document.createElement("div");
    parentEl.appendChild(this.el);
  }
}

export default Editor;
