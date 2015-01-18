(function ($) {
  Drupal.behaviors.blockByDateSettings = {
    attach: function (context) {
     // alert('Test');
       $('fieldset#edit-dates-between', context).drupalSetSummary(function (context) {
      var vals = [];
      
	  $('input[type="checkbox"]:checked', context).each(function () {
        //vals.push($.trim($(this).next('label').text()));
		vals.push(Drupal.t('Restricted by certain from and to dates.'));
      });
//alert($('#edit-from-date-datepicker-popup-0', context).val());
      if (!vals.length) {
		 // alert($('text[id="edit-from-date-datepicker-popup-0"]', context).val());
		 if ($("#edit-from-date-datepicker-popup-0" ).hasClass('hasDatepicker')) {
		if (!$('#edit-from-date-datepicker-popup-0', context).val()) {
		  vals.push(Drupal.t('Not restricted'));
		}
		else {
		  vals.push(Drupal.t('Restricted by From Date.'));          
		}
		 }
      }
      return vals;
    });
       
	}
	
  }
})(jQuery);