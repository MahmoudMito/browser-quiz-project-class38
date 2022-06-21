import { RESULT_CONTAINER_ID ,SCROLLABLE_CLASS} from "../constants.js";

/**
 * Create results page
 * @returns {Element}
 */
export const CreateResultPage = ()=>{
    const element = document.createElement('div');
    element.id = RESULT_CONTAINER_ID;
    element.className = SCROLLABLE_CLASS;

    return element;
}
