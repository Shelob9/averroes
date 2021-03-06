import { registerBlockType } from "../api/registration";
import paragraph from "./paragraph";
import heading from "./heading";
import image from "./image";
import separator from "./separator";
import quote from "./quote";
import list from "./list";
import code from "./code";

registerBlockType(quote);
registerBlockType(list);
registerBlockType(image);
registerBlockType(heading);
registerBlockType(code);
registerBlockType(separator);

// Paragraph must be last
registerBlockType(paragraph);
