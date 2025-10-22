Typescript
    - Union of things does means a object can become these things, 
    but if you try to access something before the 
    thing is confirmed. issues come up. you can check types before
    - React-Componets expect a single probs object.
    - Importing Types: import types as blueprints for componets
    -Extends: new type/interface has all of the properties of the extension type
    -> you cannot print types because they do not exist at runtime

React Props:
    -> Function Parameters: Props Are the Parameters
    1. function MyButton({ label }: { label: string })
    2. <MyButton label="Click me" />
    3. MyButton({ label: "Click me" });
        -> "{label}" will destructured. not needed but need to manually
        destructure later down the line.
        -> right side "{label:string}". typescript 
            observes the destrcutred object has a label property
            with type string. Right side is forgotten after compilation
