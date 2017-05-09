/***************************************************************************
Purpose: This class is being used to get errors from an input parser and
            a model. It takes all the errors and put them in an array in
            order to be sent to a view to display them.
***************************************************************************/
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // shows the errors in the control container rather than the control.
    class ErrorView {
        constructor(error) {
            // container div
            var errorContainer = $(".errorContainer");
            var rdiv = $("<div/>").addClass("rightDiv");
            var ldiv = $("<div/>");
            var icon = $("<span class='bowtie-icon bowtie-status-error'></span>");
            rdiv.append(icon);
            var warning = $("<span></span>").text(error).attr("title", error);
            var help = $("<span></span>").text("For more information click ");
            var a = $("<a> </a>");
            a.attr("href", "https://www.visualstudio.com/en-us/docs/work/customize/customize-work");
            a.attr("target", "_blank");
            a.text("here.");
            help.append(a);
            ldiv.append(warning);
            ldiv.append($("<br/>"));
            ldiv.append(help);
            errorContainer.append(rdiv);
            errorContainer.append(ldiv);
        }
    }
    exports.ErrorView = ErrorView;
});
