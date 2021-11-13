

export const Modal = (function() {

    const ModalStatus = {
        isOpened: false
    };

    const Selectors = {
        ModalContent: '#ModalContent',
        ModalContainer: '.modal_container',
        CloseModalBtn: '.closeModalBtn',
        ModalTitle: '#modalTitle',
        ModalBtns: "#ModalBtns",
        Modal: "#modal"
    };

    function _setIsOpened(bool) {
         if(typeof bool === "boolean")
            ModalStatus.isOpened = !ModalStatus.isOpened;
         else
             throw new Error("Invalid type was passed to _setIsOpened function!!!");
    }
    // Public
    function populateModal(title, contentHtml, btnsHtml) {
        // Change Modal Title
        $(Selectors.ModalTitle).html(title);
        // populate ModalContent with html content
        $(Selectors.ModalContent).html(contentHtml);
        $(Selectors.ModalBtns).html(btnsHtml);
    }

    function clearModal() {
        $(Selectors.ModalTitle).html('');
        $(Selectors.ModalContent).html('');
        $(Selectors.ModalBtns).html('');
        // apply default modal style
        applyStyle("default");
    }

    function hideAndClear() {
      $(Selectors.ModalContainer).fadeOut( 700, function() {
          // change modalOpened status
              _setIsOpened(false);
          // clear the modal
              clearModal();
      });
    }

    function show(callback = null) {
        $(Selectors.ModalContainer).fadeIn( 700, function() {
            // change modalOpened status
                _setIsOpened(true);
            // check for callback func
                if(typeof callback === 'function')
                    callback();
        });
    }

    function hide(callback = null, callbackObj = null, ...args) {
        $(Selectors.ModalContainer).fadeOut( 700, function() {
            // change modalOpened status
                _setIsOpened(false);
            // check for callback func
            if(callback || callbackObj) {
              if(typeof callback === 'function' && !callbackObj)
                  callback();
              else 
                callback.apply(callbackObj, Array.prototype.slice.apply(arguments, [2, arguments.length - 1]));
            }
        });
    }

    function addAlert(alertType = 'warning', boldText = '', stillText = '') {
      const HTML = `
      <div class="alert alert-${alertType} alert-dismissible fade show" role="alert">
        <strong>${boldText}</strong> ${stillText}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      `;

      $(Selectors.ModalContent).prepend(HTML);
    }

    // TODO: Do thing thing differently!!!!
    function applyStyle(styleStr = null) {

        switch(styleStr) {
            default:
                // go back to default modal css classes
                $(Selectors.Modal).hasClass("d-flex flex-column justify-content-center") && $(Selectors.Modal).removeClass("d-flex flex-column justify-content-center");
                $(Selectors.ModalContent).hasClass("d-flex flex-column justify-content-center align-items-center") && $(Selectors.ModalContent).removeClass("d-flex flex-column justify-content-center align-items-center");
                $(Selectors.ModalBtns).hasClass("d-flex justify-content-center flex-row") && $(Selectors.ModalBtns).removeClass("d-flex justify-content-center flex-row");
            break;
        }
        
    }

    function getSelectors() {
        return Selectors;
    }

    // Module self-initialization
    $(Selectors.ModalContainer).hide();

    // set up close btn event listener
    $('body').on('click', Selectors.CloseModalBtn, function() {
        hide(clearModal);   
    });
    // set the def class on modal if not present
    !( $(Selectors.Modal).hasClass("p-4") ) && $(Selectors.Modal).addClass("p-4");

    // Interface
    return {
        hide,
        show,
        clearModal,
        populateModal,
        getSelectors,
        hideAndClear,
        addAlert,
        applyStyle
    }
})()
