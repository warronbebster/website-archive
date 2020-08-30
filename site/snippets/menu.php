<nav>
<span id="homenav"> <a href="<?php echo $site->url() ?>"> <?php echo $site->title() ?> </a></span>
<span id="question">?</span>
</nav>

<div class="hidden">
	<div id="hiddenLeft" class="hiddenModule">
		<?php echo $site->description()->kirbytext() ?>
	</div>

	<div id="hiddenMiddle" class="hiddenModule">
		<?php echo $site->previously()->kirbytext() ?>
	</div>

	<div id="hiddenRight" class="hiddenModule">
		<?php echo $site->friends()->kirbytext() ?>
	</div>
</div>