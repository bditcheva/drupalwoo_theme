/* Author: Boriana Ditcheva */
/* Date: May 2013 */

/*CKEDITOR.stylesSet.add( 'drupal', */
CKEDITOR.addStylesSet( 'drupal',
[
	/* Block Styles */
	{ name : 'Heading 2'		, element : 'h2' },
	{ name : 'Heading 3'		, element : 'h3' },
	{ name : 'Heading 4'		, element : 'h4' },
	{ name : 'Paragraph'		, element : 'p' },
	{ 
		name : 'Blue Button',
		element : 'div',
		attributes : 
		{	
			'class' : 'bd-blue-button'
		}
	},
	/*	{
		name : 'New',
		element : 'div',
		attributes : 
		{	
			'class' : 'ncbc-new-content'
		}	
	},	
	{
		name : 'Updated',
		element : 'div',
		attributes : 
		{	
			'class' : 'ncbc-updated-content'
		}	
	},	
*/	
	/* Inline Styles */
	{ name : 'Inline Quotation'	, element : 'q' },	


	/* Object Styles */
	{
		name : 'Highlighted Row',
		element : 'tr',
		attributes : 
		{	
			'class' : 'bd-highlighted-row'
		}
	}
	
]);

