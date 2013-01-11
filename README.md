jquery.formable
===============

Formable is jQuery plugin to transform (non-form) elements into form elements (input, textarea) back and forth.

To use, first include jquery and the plugin script:

	<script type="text/javascript" src="jquery.formable.js"></script>

Add a form (i.e. an example of a form using bootstrap):

	<form action="/" method="post">
		<div class="controls controls-row">
			<p type="text" name="title" placeholder="Title" class="formable"></p>
		</div>
		<div class="controls controls-row">
			<p type="text" name="description" placeholder="Description" data-formable-form-class="textarea" class="formable"></p>
		</div>
	</form>

The form contains two elements of class _.formable_. To change the _.formable_ elements to form elements (input and textarea), just call:

	$(".formable").formable('form');

And the form becomes:

	<form action="/" method="post">
		<div class="controls controls-row">
			<input type="text" name="title" placeholder="Title" class="formable"></input>
		</div>
		<div class="controls controls-row">
			<textarea type="text" name="description" placeholder="Description" data-formable-form-class="textarea" class="formable"></textarea>
		</div>
	</form>

Formable uses the _data-formable-form-class_ custom attribute to transform the element in a form element. If _data-formable-form-class_ is not set, it defaults to _input_. Note that for the moment, only _input_ and _textarea_ have been tested.

To go back to non-form elements, just call:

	$(".formable").formable('unform');
