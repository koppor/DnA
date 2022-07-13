declare module 'storage-mfe/Bucket' {
  const Bucket: React.ComponentType;
  export default Bucket;
}

declare module 'vue-mfe/VueApp' {
  const mount: any;
  export type mount = ()=>any;
}
