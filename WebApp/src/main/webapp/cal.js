/**
 * 
 */

function _(x)
  {
	  return document.getElementsbyId(x);
  }
  function calc(val)
  {
	  _('display').value+=val;
  }
  
  function c(val)
  {
	  _('display').value='';
  }
  function e()
  {
	  _('display').value=eval(_('display').value);
  }