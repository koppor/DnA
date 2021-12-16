declare const __CONFIG__: string;

declare module '*.css' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames | any;
  export = classNames;
}

declare module '*.png' {
  const value: any;
  export default value;
}
declare module '*.jpg' {
  const value: any;
  export default value;
}
declare module '*.scss' {
  const classes: { [key: string]: string };
  export default classes;
}
