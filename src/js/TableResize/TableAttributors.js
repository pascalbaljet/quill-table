import Quill from "quill";

const Parchment = Quill.import('parchment');

// const StyleClass = new Parchment.Attributor.Class('style', 'ql-style', {
//   scope: Parchment.Scope.INLINE,
//   whitelist: ['small', 'large', 'huge', 'instruction'],
// });
const TableStyle = new Parchment.Attributor.Style('style', 'width', {
  scope: Parchment.Scope.BLOCK_BLOT
});

export { TableStyle };
