<!DOCTYPE html>
<html lang="en">
<head>

  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0">

  <title><?php echo $site->title()->html() ?> | <?php echo $page->title()->html() ?></title>
  <meta name="description" content="<?php echo $site->description()->html() ?>">
  <meta name="keywords" content="<?php echo $site->keywords()->html() ?>">

  <!-- <link href="https://fonts.googleapis.com/css?family=Vollkorn:400,400i,700" rel="stylesheet"> -->
  <!-- <link href="https://fonts.googleapis.com/css?family=Poppins:300,500" rel="stylesheet"> -->
  <link href="https://fonts.googleapis.com/css?family=Rubik:400,500" rel="stylesheet">

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>


  <?php echo css('assets/css/main.css') ?>
  <?php echo js('assets/js/jquery.mousewheel.min.js') ?>

  <!-- ^this doesn't exist yet, need to make a js folder in assets -->

  

</head>


<body>
<div class="scroller">
	<div id="scroll-hold">
	<div class="background activeHeaderBackground"></div>

		<header id="home" class="activeHeader">

			<div id="hidableNav">
				<h1 id="caroline"> <?php echo $pages->find(info)->title()->html() ?></h1>

				<div id="categories">
	 				<?php echo $pages->find(info)->tags()->kirbytext() ?>
	 			</div>
				
				<?php snippet('menu') ?>
			</div>

			<div id="images">
				<?php foreach(page('projects')->children()->visible() as $project): ?>
	 			      <img src="<?php echo $project->images()->first()->thumb(['width' => 300, 'crop' => true])->url() ?>" id="<?php echo $project->uid() ?>_thumb" > 
				<?php endforeach ?>

					<img src="<?php echo url('content/info/about.jpg') ?>" alt="<?php echo $site->title()->html() ?>" id="about_image" />
			</div>

		    <!-- floating section to go on top -->
		    <div id="about">
		    	<?php echo $pages->find(info)->text()->kirbytext() ?>
		    </div>

		</header>

		<?php
		// for each section in content, which for this is just projects
		foreach($pages->visible() as $section) {
		  snippet($section->uid(), array('data' => $section));
		}
		?>

	</div>

</div>

<div class="menusvg menuActive">
	<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 19 17.6" enable-background="new 0 0 18 16.6" xml:space="preserve">
	    <g id="Layer_1">
	        <line fill="none" stroke="#231F20" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="16.9" y1="1.1" x2="1.4" y2="1.1" />
	        <line fill="none" stroke="#231F20" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="13.4" y1="4.7" x2="1.4" y2="4.7" />
	        <line fill="none" stroke="#231F20" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="10.9" y1="8.4" x2="1.4" y2="8.4" />
	        <line fill="none" stroke="#231F20" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="13.4" y1="12" x2="1.4" y2="12" />
	        <line fill="none" stroke="#231F20" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="10.9" y1="15.6" x2="1.4" y2="15.6" />
	    </g>
	</svg>
</div>

<nav id="arrows">
    <div id="left-arrow" class="hide">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 23.3 28.3" enable-background="new 0 0 23.3 28.3" xml:space="preserve">
            <g id="Layer_1">
                <path fill="none" stroke="#231F20" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M13.5,4.4
		c-1.8,4.3-5.2,7.9-9.8,9.8c4.6,1.9,8,5.5,9.8,9.8" />
                <line fill="none" stroke="#231F20" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="3.7" y1="14.2" x2="20.1" y2="14.2" />
            </g>

        </svg>
    </div>
    <div id="right-arrow">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 23.3 28.3" enable-background="new 0 0 23.3 28.3" xml:space="preserve">

            <g id="Layer_1">
                <path fill="none" stroke="#231F20" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M10.4,24
		c1.8-4.3,5.2-7.9,9.8-9.8c-4.6-1.9-8-5.5-9.8-9.8" />
                <line fill="none" stroke="#231F20" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="20.1" y1="14.2" x2="3.7" y2="14.2" />
            </g>

        </svg>
    </div>
</nav>



<?php echo js('assets/js/script.js') ?>
</body>
</html>