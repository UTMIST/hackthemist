const defaultImportError = () => {
    console.error('Section imported as default instead of using destructuring. Import with this import { X } from ...');
};

export default defaultImportError;
