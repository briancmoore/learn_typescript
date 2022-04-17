"use strict";
// number   - integers or floats
// string   - all text values
// boolean  - just true or false, no truthy or falsy
// object   - any object. specific types of objects are possible
// Array    - any array, type can be flexible (any) or strict
// Tuple    - added by typescript: fixed length array
// Enum     - added by typescript: automatically enumerated global constant identifiers
// Any      - obviously its any type
// void     - used for a function that has no return statement
// undefined - undefined
// function  - a variable can be equal to any function
// unknown   - not known what will be assigned and throws errors if another *KNOWN* variable is assigned to it
// never     - never returns anything... like 'throw' to throw an error
// Date      - based on js date object
// Interfaces - describes what a variable or function should look like
//              helpful for forcing your classes (multiple) to have the same structure
//              can also be used on variables and its like making your own types
// T or U, etc - Generic Types. <T> used to used to give flexibility.
//               <T extends string | number | boolean>
// Partial      - used like Partial<InterfaceName> where you set up an interface and tell it that the
//                variables and types in the interface are optional. good for when you want to add those types in steps
//                return interfaceVariable as InterfaceName
