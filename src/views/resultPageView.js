import { RESULT_CONTAINER_ID ,SCROLLABLE_CLASS} from "../constants.js";

/**
 * Create results page
 * @returns {Element}
 */
export const CreateResultPage = ()=>{
    const element = document.createElement('div');
    element.id = RESULT_CONTAINER_ID;
    
    const resultList = document.createElement('ul');
    resultList.className = SCROLLABLE_CLASS;

    element.appendChild.resultList;

    return element;
}
