/*!
 * Formable
 * jQuery Plugin for form transformation
 * https://github.com/acoomans/jquery.formable
 *
 * Copyright 2012 Arnaud Coomans
 * Released under the MIT license
 * http://opensource.org/licenses/BSD-3-Clause
 */

(function($){

    var s = {
        'data_form': "data-formable-form-class",
        'data_unform': "data-formable-unform-class",
        'form': "input",
        'unform': 'p'
    };

    var methods = {
        form : function(options) {
            var settings = $.extend(s , options);
            return this.each(function() {
                $(this).replaceWith(function() {

                    $(this).filter("["+settings.data_form+"!=textarea]")
                        .attr("value", $(this)
                        .html()).html("");

                    var form_tag = ( $(this).attr(settings.data_form) || settings.form);
                    var unform_tag = ( $(this).attr(settings.data_unform) || settings.unform);

                    return $(this).prop('outerHTML')
                        .replace("<"+unform_tag+" ", '<'+form_tag+' ')
                        .replace("</"+unform_tag+">", '</'+form_tag+'>')
                });
            });
        },
        unform : function(options) {
            var settings = $.extend(s , options);
            return this.each(function() {
                $(this).replaceWith(function() {

                    var form_tag = ( $(this).attr(settings.data_form) || settings.form);
                    var unform_tag = ( $(this).attr(settings.data_unform) || settings.unform);

                    return $($(this).prop('outerHTML')
                        .replace('<'+form_tag+' ', "<"+unform_tag+" ")
                        .replace('</'+form_tag+'>', "</"+unform_tag+">"))
                        .html($(this).attr("value"))
                });
            });
        }
    };

    $.fn.formable = function( method ) {

        // Method calling logic
        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  method + ' does not exist on jQuery.formable' );
        }

    };

})(jQuery);