import Quill from "quill";

const Parchment = Quill.import('parchment');

const TableStyle = new Parchment.Attributor.Style('style', 'width', {
  scope: Parchment.Scope.BLOCK_BLOT
});

export { TableStyle };
