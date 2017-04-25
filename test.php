<head>
	<script src="/fileadmin/Resources/Public/Js/compressed.js?1469428850" type="text/javascript"></script>
</head>
<?php
//$text = date('a') == 'am' ? 'Morgen/Vormittag' : 'Nachmittag/Abend';
//echo '<span class="text">' . $text . '</span>'
?>
<div id="testMenu">
	<ul>
		<li><a href="#">Link1</a></li>
		<li><a href="#">Link2</a></li>
		<li><a href="#">Link3</a></li>
	</ul>
</div>

<style>
	.red {
		color: red;
		font-size: 200%;
	}

	.blue {
		color: blue;
	}

	#testMenu {
		width: 50px;
		height: 50px;
		position: relative;
		background-color: gray;
		color: white;
		cursor: pointer;
	}

	#testMenu:before {
		content: "Click";
		font-size: 20px;
	}

	 #testMenu ul {
		 display: none;
		 position: absolute;
		 z-index: 100;
		 background-color: gray;
		 padding: 0;
		 width: 100%;
	 }

	#testMenu ul li {
		text-decoration: none;
		list-style: none;
		text-underline: none;
		color: white;
	}

	#testMenu ul li:hover {
		background-color: #1b6d85;
	}

</style>
<script>
	doIT();
	function doIT() {
		setTimeout(function () {
			var text = $('.text');
			if (text.hasClass('blue')) {
				text.removeClass('blue');
				text.addClass('red');
			}
			else {
				text.removeClass('red');
				text.addClass('blue');
			}
			doIT();
		}, 1000)
	}

	$('#testMenu').click(function() {
		var menu = $('div#testMenu  ul');
		if(menu.is(":visible"))
		{
			menu.css('display', 'none');
		}
		else
		{
			menu.css('display', 'block');
		}
	});

</script>
