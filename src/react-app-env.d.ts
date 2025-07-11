//in javascript the language does not care what happens

//natively it can only do .ts .tsx .js and .jsx. 
declare module '*.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
} 

declare module "*.jpg";
declare module "*.png";
