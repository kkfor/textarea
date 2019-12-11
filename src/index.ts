import Editor from "./editor";

const edit = function(el: any, options?: any) {
  const _id = el;
  el = document.getElementById(_id);

  const editor = new Editor(el);
  el.appendChild(editor)

  return editor
};


export default {
  edit
}
