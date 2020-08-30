

<nav role="navigation">

    <!-- for each visible page -->
    <?php foreach($pages->visible() as $p): ?>
      <!-- makes p the variable for pages in this loop -->

      <ul class="menu">

        <?php foreach($p->children()->visible() as $p): ?>
        <li id="<?php echo $p->uid() ?>_link" class="<?php echo $p->tags()->html() ?>">
            <?php echo $p->title()->html() ?>
        </li>
        <?php endforeach?>

      </ul>


    <?php endforeach ?>


</nav>





