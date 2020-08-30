
    <section id="firstSpace"></section>

    <?php foreach($data->children()->visible() as $project): ?>
      <!-- for each project -->

      <section id="<?php echo $project->uid() ?>" class="project">
      <!-- ^makes a section item with class projects-->


          <?php if($project->images()->count() == 1): ?>
                        <!-- if there's only one image -->
              <div class="image-hold ">
                <img src="<?php echo $project->images()->first()->url() ?>" alt="<?php echo $project->title()->html() ?>">
              </div>

          <?php else: ?>
                        <!-- if there's more images -->
            <?php foreach($project->images() as $image): ?>
              <!-- for every image in a project -->
                  <div class="image-hold image-set">
                  <img src="<?php echo $image->url() ?>" alt="<?php echo $project->title()->html() ?>">
                  </div>

                <!-- make an image  -->
            <?php endforeach ?>

          <?php endif ?>


          <!-- here is where project info should go -->
          <div class="project-text">
              <h2><?php echo $project->title()->html() ?> </h2>
              <h3><?php echo $project->year()->html() ?> </h3>
              <!-- <br/> -->
              <?php echo $project->text()->kirbytext() ?>
          </div>



      </section>

    <?php endforeach ?>
