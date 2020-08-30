<ul class="projects container">



<?php foreach(page('projects')->children()->visible() as $child):?> 


  <?php $featuredImages = $child->files()->filterBy("featured", "==", "1"); ?>



  <?php foreach($featuredImages as $file):?>
    <!-- do stuff with the image -->

      <?php if($file->type() == "image"): ?>
        <li class="unit <?php echo $file->frontclass() ?>">
            <a href="<?= $child->url() ?>" class="showcase-link">
                <!-- this makes a link to the project page -->
                <img src="<?= $file->url() ?>" alt="Thumbnail for <?= $child->title()->html() ?>" class="showcase-image  " />
                  <div class="showcase-caption">
                      <h3 class="showcase-title"><?= $child->title()->html() ?></h3>
                  </div>
            </a>
        </li>

      <?php elseif($file->type() == "video"): ?>
        <li class="unit <?php echo $file->class() ?>">
         <a href="<?= $child->url() ?>" class="showcase-link">
            <div class="videoWrapper">
              <video autoplay loop muted class="showcase-image">
                  <source src="<?= $file->url() ?>" type="video/mp4" />
              </video>
              <div class="showcase-caption">
                  <h3 class="showcase-title"></h3>
              </div>
            </div>
          </a>
        </li>

      <?php endif ?>

  <?php endforeach ?>
<?php endforeach ?>




  <div class="grid-sizer"></div>
</ul>

<div class="cf"></div>

