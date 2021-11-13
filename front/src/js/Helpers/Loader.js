

export const Loader = (function() {
    'use strict';

    const RELOADING_TIME = 700;

    // Private
    let loading = true;
    const loaderWrapperSelector = '#loader_wrapper';

    function showLoader( cb = null ) {
        if(cb)
            $(loaderWrapperSelector).fadeIn('slow', cb);
        else
            $(loaderWrapperSelector).fadeIn('slow');
    }

    function hideLoader( cb = null ) {
        if(cb)
            $(loaderWrapperSelector).fadeOut('slow', cb);
        else
            $(loaderWrapperSelector).fadeOut('slow');
    }
    // Public
    function simulateReloading(callback, callbackObject, args) {
        showLoader();

        setTimeout(() => {
            if (typeof callback === 'function' 
                && typeof args !== 'undefined' 
                && typeof callbackObject !== undefined) {
                  // Get all arguments in an array
                  const argsArr = Array.prototype.slice.call(arguments, 2);
                  // Execute function with the given array of arguments
                  callback.apply(callbackObject, argsArr);
            } else if (typeof callback === 'function' 
                    && typeof callbackObject !== undefined) {
                callback.call(callbackObject);
            }

            hideLoader();
        }, RELOADING_TIME);

        
    }

    function toggleReload() {
        const isPageLoading = getPageLoadingStatus();
        if (isPageLoading === true) {
            hideLoader();
        } else {
            showLoader();
        }
        // flip the page loading status
        setPageLoadingStatus(!isPageLoading);
    }

    function getPageLoadingStatus() {
        return loading;
    }

    function setPageLoadingStatus(status) {
        loading = status;
    }


    hideLoader();

    // Interface
    return {
        getPageLoadingStatus,
        setPageLoadingStatus,
        toggleReload,
        simulateReloading,
        showLoader,
        hideLoader
    }

})();
