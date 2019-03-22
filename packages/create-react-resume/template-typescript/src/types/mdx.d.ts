declare module 'import-all.macro' {
  const importAll: any
  export default importAll
}

declare module '*.mdx' {
  let MDXComponent: (props) => JSX.Element
  export default MDXComponent
}

declare module 'mdx.macro' {
  const importMDX: any
  export { importMDX }
}

declare module '@mdx-js/tag' {
  export const MDXTag: any
  export const MDXProvider: any
}
