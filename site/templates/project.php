<?php snippet('header') ?>

    
    <ul class="project container">

      
      <li class="unit description">
        <h1><?= $page->title()->html() ?></h1>
        <?= $page->text()->kirbytext() ?>
      </li>

      <?php foreach($page->files()->sortBy('sort', 'asc') as $projectFile): ?>

        <!-- if it's an image -->
        <?php if($projectFile->type() == "image"): ?>
          <li class="unit <?php echo $projectFile->class() ?>" >
            <img src="<?= $projectFile->url() ?>" alt="<?= $page->title()->html() ?>"  />
            <p class="caption"><?= $projectFile->caption() ?></p>
          </li>

        <!-- if it's "code"(video) -->
        <?php elseif($projectFile->type() == "video"): ?>
          <li class="unit <?php echo $projectFile->class() ?>">
              <div class="videoWrapper">
                  <!-- Copy & Pasted from YouTube -->
                  <!-- <iframe width="640" height="360" src="<?php echo $projectFile->what() ?>" frameborder="0" allowfullscreen></iframe> -->
                  <video controls autoplay loop muted>
                      <source src="<?= $projectFile->url() ?>" type="video/mp4" />
                  </video>
              </div>
              <p class="caption">
                  <?php echo $projectFile->caption() ?>
              </p>
          </li>


        <?php elseif($projectFile->type() == "document"): ?>
         <li class="unit <?php echo $projectFile->class() ?>">
              <div class="videoWrapper">
                  <iframe width="640" height="360" src="<?php echo $projectFile->what() ?>" frameborder="0" allowfullscreen></iframe>
              </div>
              <p class="caption">
                  <?php echo $projectFile->caption() ?>
              </p>
          </li>


        <!-- I should make one just for text/links/callouts -->


        <?php endif ?>

        



      <?php endforeach ?>


    <div class="grid-sizer"></div>
    </ul>
    <div id="breaker"></div>
    
    <!-- <?php snippet('prevnext') ?> -->


<?php snippet('showcase') ?>

<!-- <?php snippet('footer') ?> -->

<?php echo js('assets/js/masonry.js') ?>
  <!-- <script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"></script> -->
<?php echo js('assets/js/site.js') ?>